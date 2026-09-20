import { profile } from "../data";
import "./Contact.css";

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2 className="section-title">Want to work together?</h2>
        <p className="contact-text">
          I'm open to internships and junior web roles, and I'm happy to talk through any of my projects.
          The quickest way to reach me is below.
        </p>

        <div className="contact-actions">
          {profile.email && (
            <a className="btn btn-sun" href={`mailto:${profile.email}`}>
              Email me
            </a>
          )}
          <a className="btn btn-outline" href={profile.github} target="_blank" rel="noopener noreferrer">
            GitHub profile
          </a>
          {profile.linkedin && (
            <a className="btn btn-outline" href={profile.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          )}
        </div>

        {profile.email && <p className="contact-mail">{profile.email}</p>}
      </div>
    </section>
  );
}
