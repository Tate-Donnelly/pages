export default function Projects({ onNavigate }) {
  const portfolioData = {
    projects: [
      {
        title: "Give As We Grow",
        videoUrl: "https://www.youtube.com/embed/n3CZYVWYZyI?si=HpMj8OojYjR2TYTF",
        publisher: "GivingTuesday, Inc",
        role: "Software Engineer",
        tools: "Unity, C#, Trello",
        description: "A digital platform educating the next generation about giving and philanthropic action.",
        contributions: "Frontend Development, Server Communication"
      },
      {
        title: "Mythic Realms",
        videoUrl: "https://www.youtube.com/embed/iTAuscirfAA?si=wNWen-fQmY8dZZw6",
        publisher: "Petricore Games",
        role: "Software Engineer",
        tools: "Unity, C#, OculusVR",
        description: "An Action RPG where Mixed Reality transforms your home into a fantasy world to battle monsters and gather resources for your growing Virtual Reality Kingdom.",
        contributions: "Combat System, Audio System, Mixed Reality System"
      }
    ]
  };
  return (
    <div className="ie-classic-page">
      <div className="xp-navbar">Tate Donnelly - Projects</div>
      <ul className="xp-nav-links">
        <li className="active"><a onClick={() => onNavigate("projects")}>Projects</a></li>
        <li><a onClick={() => onNavigate("about")}>About</a></li>
        <li><a onClick={() => onNavigate("resume")}>Resume</a></li>
        <li><a>GitHub↗</a></li>
        <li><a>LinkedIn↗</a></li>
      </ul>
      <h1>My Projects</h1>
      <p>Here are some of my recent game development projects:</p>
      {portfolioData.projects.map((project, index) => (
        <div key={index} className="xp-card">
          <div className="xp-card-title">{project.title}</div>
          <div className="xp-card-content">
            {project.videoUrl && (
              <div style={{ textAlign: 'center', margin: '10px 0' }}>
                <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
                  <iframe 
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                    src={project.videoUrl} 
                    frameBorder="0" 
                    allowFullScreen
                    title={project.title}
                  ></iframe>
                </div>
              </div>
            )}
            <table className="xp-table">
              {project.publisher && (
                <tr>
                  <td width="120"><strong>Publisher:</strong></td>
                  <td>{project.publisher}</td>
                </tr>
              )}
              <tr>
                <td><strong>Role:</strong></td>
                <td>{project.role}</td>
              </tr>
              <tr>
                <td><strong>Tools:</strong></td>
                <td>{project.tools}</td>
              </tr>
              <tr>
                <td><strong>Description:</strong></td>
                <td>{project.description}</td>
              </tr>
              <tr>
                <td><strong>Contributions:</strong></td>
                <td>{project.contributions}</td>
              </tr>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
}
