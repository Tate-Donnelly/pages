export default function About({onNavigate}) {
    return (
        <div className="ie-classic-page">
            <div className="xp-navbar">About Tate Donnelly</div>
            <ul className="xp-nav-links">
                <li><a onClick={() => onNavigate("projects")}>Projects</a></li>
                <li className="active"><a onClick={() => onNavigate("about")}>About</a></li>
                <li><a onClick={() => onNavigate("resume")}>Resume</a></li>
                <li><a>GitHub↗</a></li>
                <li><a>LinkedIn➚</a></li>
            </ul>
            <h1>About Me</h1>
            <div className="xp-card">
                <div className="xp-card-title">Hi, I'm Tate Donnelly!</div>
                <div className="xp-card-content">
                    <p>I've been working in the games industry for 2 years now, developing games with Unity, Unreal, and
                        proprietary engines. I love video games as a medium, and have shipped games on computer, mobile,
                        virtual reality (VR), and mixed reality (MR) platforms.</p>
                    <p>I'm currently looking for work, so feel free to reach out if you're interested in working
                        together. I'm always on the lookout for a good challenge, programming projects, and freelance
                        work.</p>
                    <h2>Skills</h2>
                    <table className="xp-table">
                        <tr>
                            <td width="50%">
                                <ul>
                                    <li>Java</li>
                                    <li>C/C++/C#</li>
                                    <li>Unity</li>
                                    <li>GIT</li>
                                    <li>Unreal</li>
                                    <li>JavaScript</li>
                                </ul>
                            </td>
                            <td width="50%">
                                <ul>
                                    <li>HTML/CSS</li>
                                    <li>Blueprints</li>
                                    <li>SQL</li>
                                    <li>JIRA</li>
                                    <li>Agile</li>
                                    <li>Linux</li>
                                    <li>OBS</li>
                                    <li>Reaper</li>
                                </ul>
                            </td>
                        </tr>
                    </table>
                    <h2>Awards</h2>
                    <ul>
                        <li>2024 Gold Winner for GDC's Narrative Review Contest</li>
                        <li>1st Place, Hack@WPI (2021)</li>
                        <li>Dean's List (2020 - 2023)</li>
                        <li>National Honors, NCWIT (2019, 2020)</li>
                        <li>MA Affiliate Award, NCWIT (2018, 2019, 2020)</li>
                    </ul>
                </div>
            </div>
            <div style={{textAlign: 'center', marginTop: '20px'}}>
                <a className="xp-button" onClick={() => onNavigate("resume")}>View Full Resume</a>
            </div>
        </div>
    );
}
