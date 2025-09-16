import { useState } from "react";
import Window from "../../Window/Window.jsx";
import MenuBar from "../../Window/MenuBar.jsx";
import Toolbar from "../../Window/Toolbar.jsx";
import StatusBar from "../../Window/StatusBar.jsx";
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";
import Resume from "./pages/Resume.jsx";
import "./styles.css";
export default function InternetExplorer(props) {
  const [currentPage, setCurrentPage] = useState("projects");
  const [url, setUrl] = useState("http://www.tatedonnelly.com/projects");
  const [status, setStatus] = useState("Done");
  const menus = [
    { title: "File", options: ["New", "Open", "Save", "Save As", "Page Setup", "Print", "Exit"] },
    { title: "Edit", options: ["Cut", "Copy", "Paste", "Select All"] },
    { title: "View", options: ["Toolbars", "Status Bar", "Explorer Bar", "Go To", "Stop", "Refresh"] },
    { title: "Favorites", options: ["Add to Favorites", "Organize Favorites"] },
    { title: "Tools", options: ["Internet Options"] },
    { title: "Help", options: ["Contents and Index", "Tip of the Day", "For Netscape Users", "Online Support", "About Internet Explorer"] }
  ];
  const buttons = [
    { label: "Back" },
    { label: "Forward" },
    { label: "Stop" },
    { label: "Refresh" },
    { label: "Home" },
    { label: "Search" },
    { label: "Favorites" },
    { label: "History" },
    { label: "Mail" },
    { label: "Print" }
  ];
  const loadPage = (page) => {
    setStatus(`Connecting to http://www.tatedonnelly.com/${page}...`);
    setTimeout(() => {
      setCurrentPage(page);
      setUrl(`http://www.tatedonnelly.com/${page}`);
      setStatus("Done");
    }, 400);
  };
  const navigateToUrl = () => {
    const u = url.toLowerCase();
    if (u.includes("about")) loadPage("about");
    else if (u.includes("resume")) loadPage("resume");
    else loadPage("projects");
  };
  const onToolbar = (label) => {
    if (label === "Home") loadPage("projects");
    if (label === "Refresh") navigateToUrl();
    if (label === "Stop") setStatus("Stopped.");
  };
  let page;
  if (currentPage === "about") page = <About onNavigate={loadPage} />;
  else if (currentPage === "resume") page = <Resume onNavigate={loadPage} />;
  else page = <Projects onNavigate={loadPage} />;
  return (
    <Window {...props}>
      <MenuBar menus={menus} />
      <Toolbar buttons={buttons} onClick={onToolbar} />
      <div className="ie-url-bar-container">
        <span className="ie-address-label">Address:</span>
        <input
          type="text"
          className="ie-url-bar"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && navigateToUrl()}
        />
        <button className="ie-go-button" onClick={navigateToUrl}>Go</button>
      </div>
      <div className="ie-content">{page}</div>
      <StatusBar items={[status, "Internet"]} />
    </Window>
  );
}
