import json


def lambda_handler(event, context):

    dashboard = {
        "user": "Niharika",
        "healthScore": 82,
        "savings": 235000,
        "investments": 180000,
        "monthlyIncome": 65000,
        "monthlySpending": 28000,
        "goals": [
            {
                "goal": "Home",
                "progress": 70
            },
            {
                "goal": "Emergency Fund",
                "progress": 85
            },
            {
                "goal": "Retirement",
                "progress": 35
            }
        ],
        "recentInsight": "You spent 12% less this month."
    }

    return {
        "statusCode": 200,
        "headers": {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
        },
        "body": json.dumps(dashboard)
    }