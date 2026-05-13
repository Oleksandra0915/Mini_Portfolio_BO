import React from 'react';
import './AboutMe.css';
import photo from './photo.jpg';

const projects = {
  html: [
    { title: 'Проєкт 1', url: 'https://github.com/Oleksandra0915/css-Lab2' },
    { title: 'Проєкт 2', url: 'https://github.com/Oleksandra0915/lb3.git' },
  ],
  js: [
    { title: 'JS Проєкт 1', url: 'https://github.com/Oleksandra0915/js-easy.git' },
    { title: 'JS Проєкт 2', url: 'https://github.com/Oleksandra0915/js-DOM2.git' },
  ],
  react: [
    { title: 'React Проєкт 1', url: 'https://github.com/Oleksandra0915/API-lb17.git' },
    { title: 'Це портфоліо', url: 'https://github.com/Oleksandra0915/Mini_Portfolio_BO.git' },
  ],
};

function ProjectGroup({ label, items }) {
  return (
    <div className="proj-group">
      <div className="cat-title">{label}</div>
      <div className="proj-row">
        {items.map((p) => (
          <div className="proj-card" key={p.title}>
            <h4>{p.title}</h4>
            <a href={p.url} target="_blank" rel="noreferrer" className="proj-link">
              GitHub →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

function AboutMe() {
  return (
    <div className="page">
      <img src={photo} alt="Фото" className="avatar" />
      <h1>Привіт, я Entry-level Developer</h1>
      <p className="subtitle">Початківець · Веб-розробка · Україна</p>

      <div className="desc">
        Відповідальна, комунікабельна та цілеспрямована. 
      </div>

      <div className="chips">
        {['Відповідальна', 'Уважна до деталей', 'Швидко навчаюсь', 'Цілеспрямована', 'Комунікабельна'].map((c) => (
          <span className="chip" key={c}>{c}</span>
        ))}
      </div>

      <h2>Мої проєкти</h2>
      <ProjectGroup label="HTML + CSS" items={projects.html} />
      <ProjectGroup label="JavaScript" items={projects.js} />
      <ProjectGroup label="React" items={projects.react} />
    </div>
  );
}

export default AboutMe;