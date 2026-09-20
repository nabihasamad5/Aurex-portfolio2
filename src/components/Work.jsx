import { projects } from "../data";
import "./Work.css";

export default function Work() {
  return (
    <section id="work" className="section work">
      <div className="container">
        <h2 className="section-title">Things I've built.</h2>
        <p className="work-lead">
          Each project builds on the one before it, from a plain HTML page to a full React app.
        </p>

        <ul className="work-grid">
          {projects.map((p) => (
            <li className="project" key={p.title}>
              <p className="project-stage">{p.stage}</p>
              <h3>{p.title}</h3>
              <p className="project-text">{p.text}</p>
              <ul className="project-tags" aria-label="Technologies">
                {p.tags.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
              {p.href ? (
                <a className="project-link" href={p.href} target="_blank" rel="noopener noreferrer">
                  View source on GitHub
                </a>
              ) : (
                <p className="project-here">You're looking at it.</p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
