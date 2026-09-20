import { profile, now } from "../data";
import "./Hero.css";

export default function Hero() {
  const [first, ...rest] = profile.name.split(" ");

  return (
    <section id="top" className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <h1 className="hero-name">
            <span className="line line-1">{first}</span>
            <span className="line line-2">{rest.join(" ")}</span>
          </h1>
          <p className="hero-role">{profile.role}</p>
          <p className="hero-intro">{profile.intro}</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#work">See what I've built</a>
            <a className="btn btn-quiet" href="#contact">Get in touch</a>
          </div>
        </div>

        <aside className="note" aria-label="What I'm working on">
          <span className="note-pin" aria-hidden="true" />
          <h2 className="note-title">Right now</h2>
          <ul className="note-list">
            {now.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}
