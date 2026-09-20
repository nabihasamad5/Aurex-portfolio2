import { profile } from "../data";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <p>Built with React, Vite and CSS.</p>
      </div>
    </footer>
  );
}
