import { Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import Avatar from "./pages/Avatar/Avatar";
import GoalPlanner from "./pages/GoalPlanner/GoalPlanner";
import Recommendation from "./pages/Recommendation/Recommendation";
import Privacy from "./pages/Privacy/Privacy";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />

      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/avatar" element={<Avatar />} />
      <Route path="/goal-planner" element={<GoalPlanner />} />
      <Route path="/recommendation" element={<Recommendation />} />
      <Route path="/privacy" element={<Privacy />} />
    </Routes>
  );
}

export default App;