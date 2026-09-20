import { path } from "../data";
import "./Path.css";

export default function Path() {
  return (
    <section id="path" className="section path">
      <div className="container">
        <h2 className="section-title">Where I've been, and where I'm heading.</h2>

        <ol className="timeline">
          {path.map((step) => (
            <li className={`step step-${step.status}`} key={step.title}>
              <span className="step-dot" aria-hidden="true" />
              <p className="step-when">{step.when}</p>
              <div className="step-body">
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
