import json
import boto3

# Create Bedrock Runtime client
bedrock = boto3.client(
    "bedrock-runtime",
    region_name="ap-south-1"
)

MODEL_ID = "global.amazon.nova-2-lite-v1:0"


def lambda_handler(event, context):

    body = json.loads(event["body"])

    question = body.get("message", "")
    profile = body.get("profile", {})

    # Print received profile for debugging
    print("===== RECEIVED PROFILE =====")
    print(json.dumps(profile, indent=2))
    print("============================")

    financial_context = ""

    if profile:

        goals = ""

        for goal in profile.get("goals", []):
            goals += f"- {goal['goal']}: {goal['progress']}% completed\n"

        financial_context = f"""
Name: {profile.get('user')}

Financial Health Score: {profile.get('healthScore')}

Savings: ₹{profile.get('savings')}

Investments: ₹{profile.get('investments')}

Monthly Income: ₹{profile.get('monthlyIncome')}

Monthly Spending: ₹{profile.get('monthlySpending')}

Goals:
{goals}
"""

    system_prompt = """
You are WealthWise AI.

You are a professional financial advisor for Indian users.

Provide practical, concise and personalized financial advice.

Rules:

- Never guarantee returns.
- Never recommend illegal or risky investments.
- Keep responses between 3 and 5 sentences.
- Recommend consulting a certified financial advisor before major financial decisions.
"""

    try:

        response = bedrock.converse(
            modelId=MODEL_ID,
            system=[
                {
                    "text": system_prompt
                }
            ],
            messages=[
                {
                    "role": "user",
                    "content": [
                        {
                            "text": f"""
Customer Financial Profile

{financial_context}

User Question:

{question}

IMPORTANT INSTRUCTIONS:

1. Use ONLY the customer profile above.

2. NEVER change any financial numbers.

3. NEVER invent income, savings, investments, spending or goals.

4. If information is missing, clearly say that more information is needed.

5. Mention the customer's real financial numbers whenever they are relevant.

Answer now.
"""
                        }
                    ]
                }
            ]
        )

        reply = response["output"]["message"]["content"][0]["text"]

        return {
            "statusCode": 200,
            "headers": {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json"
            },
            "body": json.dumps({
                "reply": reply
            })
        }

    except Exception as e:

        import traceback

        print(traceback.format_exc())

        return {
            "statusCode": 500,
            "headers": {
                "Access-Control-Allow-Origin": "*"
            },
            "body": json.dumps({
                "reply": str(e),
                "trace": traceback.format_exc()
            })
        }