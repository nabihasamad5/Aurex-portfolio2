import { about, facts } from "../data";
import "./About.css";

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container about-grid">
        <div>
          <h2 className="section-title">Still learning, already building.</h2>
          <div className="about-text">
            {about.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>

        <dl className="facts">
          {facts.map((f) => (
            <div className="fact" key={f.label}>
              <dt>{f.label}</dt>
              <dd>{f.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
