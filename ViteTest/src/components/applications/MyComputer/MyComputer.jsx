import Window from "../../Window/Window.jsx";
import MenuBar from "../../Window/MenuBar.jsx";
import Toolbar from "../../Window/Toolbar.jsx";
import StatusBar from "../../Window/StatusBar.jsx";
import IconView from "../../Window/IconView.jsx";
import "./styles.css";
export default function MyComputer(props) {
  const menus = [
    { title: 'File', options: ['New', 'Open', 'Close', 'Exit'] },
    { title: 'Edit', options: ['Cut', 'Copy', 'Paste', 'Select All'] },
    { title: 'View', options: ['Icons', 'List', 'Details', 'Arrange Icons'] },
    { title: 'Tools', options: ['Map Network Drive', 'Disconnect Network Drive'] },
    { title: 'Help', options: ['Help Topics', 'About My Computer'] }
  ];
  const toolbarButtons = [
    { label: 'Back' },
    { label: 'Forward' },
    { label: 'Search' },
    { label: 'Folders' }
  ];
  const drives = [
    { icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDQ4IDQ4Ij4KICA8cGF0aCBmaWxsPSIjMDA4MEZGIiBkPSJNMzYgMTBIMTJjLTIuMjEgMC00IDEuNzktNCA0djIwYzAgMi4yMSAxLjc5IDQgNCA0aDI0YzIuMjEgMCA0LTEuNzkgNC00VjE0YzAtMi4yMS0xLjc5LTQtNC00eiIvPgogIDxwYXRoIGZpbGw9IiNGRkYiIGQ9Ik0xNCAxOGgyMHY0SDE0em0wIDhoMTB2NEgxNHoiLz4KPC9zdmc+', label: 'Local Disk (C:)' },
    { icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDQ4IDQ4Ij48cGF0aCBmaWxsPSIjMDA4MEZGIiBkPSJNMzYgMTBIMTJjLTIuMjEgMC00IDEuNzktNCA0djIwYzAgMi4yMSAxLjc5IDQgNCA0aDI0YzIuMjEgMCA0LTEuNzkgNC00VjE0YzAtMi4yMS0xLjc5LTQtNC00eiIvPjxwYXRoIGZpbGw9IiNGRkYiIGQ9Ik0xNCAxOGgyMHY0SDE0em0wIDhoMTB2NEgxNHoiLz48L3N2Zz4=', label: 'DVD-RW Drive (D:)' }
  ];
  return (
    <Window {...props}>
      <MenuBar menus={menus} />
      <Toolbar buttons={toolbarButtons} />
      <div className="mc-address-bar">
        <span className="mc-address-label">Address:</span>
        <input type="text" className="mc-address-input" value="My Computer" readOnly />
      </div>
      <div className="mc-main-content">
        <div className="mc-tasks-pane">
          <div className="mc-tasks-section">
            <div className="mc-tasks-title">System Tasks</div>
            <ul className="mc-tasks-list">
              <li className="mc-task-item">View system information</li>
              <li className="mc-task-item">Add or remove programs</li>
              <li className="mc-task-item">Change a setting</li>
            </ul>
          </div>
        </div>
        <div className="mc-devices-pane">
          <div className="mc-folder-header">Hard Disk Drives</div>
          <IconView items={drives} />
        </div>
      </div>
      <StatusBar items={['2 objects', '12.5 GB free of 40 GB']} />
    </Window>
  );
}
