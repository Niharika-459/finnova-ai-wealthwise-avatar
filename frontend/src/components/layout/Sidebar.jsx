import { Link } from "react-router-dom";
import {
  LayoutDashboard,
  Bot,
  Target,
  Lightbulb,
  ShieldCheck,
} from "lucide-react";

import "./Sidebar.css";

export default function Sidebar() {
  return (
    <aside className="sidebar">

      <h1 className="logo">
        WealthWise
      </h1>

      <nav>

        <Link to="/dashboard">
          <LayoutDashboard size={20} />
          Dashboard
        </Link>

        <Link to="/avatar">
          <Bot size={20} />
          AI Avatar
        </Link>

        <Link to="/goal-planner">
          <Target size={20} />
          Goal Planner
        </Link>

        <Link to="/recommendation">
          <Lightbulb size={20} />
          Recommendations
        </Link>

        <Link to="/privacy">
          <ShieldCheck size={20} />
          Privacy
        </Link>

      </nav>

    </aside>
  );
}