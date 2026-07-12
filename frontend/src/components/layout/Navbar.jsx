import { Bell, UserCircle } from "lucide-react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <header className="navbar">
      <div>
        <h2>WealthWise Avatar</h2>
        <p>AI Powered Digital Wealth Management</p>
      </div>

      <div className="nav-icons">
        <Bell size={22} />
        <UserCircle size={30} />
      </div>
    </header>
  );
}