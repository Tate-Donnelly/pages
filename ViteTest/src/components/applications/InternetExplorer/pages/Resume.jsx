export default function Resume({ onNavigate }) {
  return (
    <div className="ie-classic-page">
      <div className="xp-navbar">Tate Donnelly - Resume</div>
      <ul className="xp-nav-links">
        <li><a onClick={() => onNavigate("projects")}>Projects</a></li>
        <li><a onClick={() => onNavigate("about")}>About</a></li>
        <li className="active"><a onClick={() => onNavigate("resume")}>Resume</a></li>
        <li><a>GitHub↗</a></li>
        <li><a>LinkedIn↗</a></li>
      </ul>
      <h1>Professional Experience</h1>
      <div className="xp-card">
        <div className="xp-card-title">Worcester Polytechnic Institute - Adjunct Professor (Aug 2024 - Present)</div>
        <div className="xp-card-content">
          <ul>
            <li>Taught the college course The Game Development Process.</li>
            <li>Instructed 26 students on major roles and production processes in the games industry.</li>
            <li>Supervised and helped with the creation of student-made games in Unity.</li>
          </ul>
        </div>
      </div>
      <div className="xp-card">
        <div className="xp-card-title">MassDigi - Technical Director (May 2024 - Present)</div>
        <div className="xp-card-content">
          <ul>
            <li>Maintained Unity build pipelines for 8 mobile applications under simultaneous active development across Android and iOS platforms.</li>
            <li>Organized software workshops and training documentation for a team of 30+ developers working together for the first time as part of the 2024 Summer Innovation Program.</li>
          </ul>
        </div>
      </div>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <a className="xp-button">Download Resume</a>
      </div>
    </div>
  );
}
