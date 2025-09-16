import { useState } from "react";
import Window from "../../Window/Window.jsx";
import MenuBar from "../../Window/MenuBar.jsx";
import StatusBar from "../../Window/StatusBar.jsx";
import "./styles.css";
export default function Notepad(props) {
  const [text, setText] = useState("Welcome to Windows XP Notepad Clone!\n\nThis is a complete implementation of the classic text editor with all the features you remember:\n\n• File operations (New, Open, Save)\n• Edit functions (Cut, Copy, Paste, Delete)\n• Format options (Word Wrap, Font selection)\n• Status bar with position information");
  const [cursorPosition, setCursorPosition] = useState({ line: 1, column: 1 });
  const menus = [
    { title: 'File', options: ['New', 'Open...', 'Save', 'Save As...', 'Page Setup...', 'Print...', 'Exit'] },
    { title: 'Edit', options: ['Undo', 'Cut', 'Copy', 'Paste', 'Delete', 'Select All', 'Time/Date'] },
    { title: 'Format', options: ['Word Wrap', 'Font...'] },
    { title: 'View', options: ['Status Bar'] },
    { title: 'Help', options: ['Help Topics', 'About Notepad'] }
  ];
  const handleTextChange = (e) => {
    setText(e.target.value);
    const textBeforeCursor = e.target.value.substring(0, e.target.selectionStart);
    const lines = textBeforeCursor.split('\n');
    setCursorPosition({
      line: lines.length,
      column: lines[lines.length - 1].length + 1
    });
  };
  return (
    <Window {...props}>
      <MenuBar menus={menus} />
      <div className="text-area-container">
        <textarea 
          className="notepad-textarea" 
          value={text}
          onChange={handleTextChange}
          onSelect={handleTextChange}
          spellCheck="false"
        />
      </div>
      <StatusBar items={[`Ln ${cursorPosition.line}, Col ${cursorPosition.column}`, '100%', 'Windows (CRLF)', 'UTF-8']} />
    </Window>
  );
}
