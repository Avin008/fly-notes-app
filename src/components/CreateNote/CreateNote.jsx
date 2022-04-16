import "./create-note.css";
import {
  PushPinIcon,
  PushPinOutlinedIcon,
  AddIcon,
  CloseIcon,
} from "../../Icons/Icons";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import { useNoteContext } from "../../context/notes-context";

const CreateNote = () => {
  const { notes, setNotes, setShowNote } = useNoteContext();
  const [notesData, setNotesData] = useState({
    id: uuid(),
    title: "",
    note: "",
    isPinned: false,
    noteEdit: false,
    color: "",
    priority: "",
    label: "",
    isTrashed: false,
    isArchived: false,
    deletedFromTrash: false,
    createdAt: new Date(),
  });

  console.log(notes);

  return (
    <div className="create-note" style={{ background: notesData.color }}>
      <div className="note-head">
        <input
          className="note-input"
          type="text"
          placeholder="Title"
          onChange={(e) =>
            setNotesData((prev) => ({ ...prev, title: e.target.value }))
          }
        />
        {notesData.isPinned ? (
          <PushPinIcon
            sx={{ color: "white" }}
            onClick={() =>
              setNotesData((prev) => ({ ...prev, isPinned: !prev.isPinned }))
            }
          />
        ) : (
          <PushPinOutlinedIcon
            sx={{ color: "white" }}
            onClick={() =>
              setNotesData((prev) => ({ ...prev, isPinned: !prev.isPinned }))
            }
          />
        )}
      </div>
      <div className="note-body">
        <textarea
          className="note-text-area"
          placeholder="Take Note"
          onChange={(e) =>
            setNotesData((prev) => ({ ...prev, note: e.target.value }))
          }
        />
      </div>
      <div className="note-footer">
        <select
          name="label"
          id="select-label"
          onChange={(e) =>
            setNotesData((prev) => ({ ...prev, label: e.target.value }))
          }
        >
          <option value="">choose label</option>
          <option value="HOME">HOME</option>
          <option value="WORK">WORK</option>
          <option value="PERSONAL">PERSONAL</option>
        </select>

        <select
          name="color"
          id="select-color"
          onChange={(e) =>
            setNotesData((prev) => ({ ...prev, color: e.target.value }))
          }
        >
          <option value="">choose color</option>
          <option value="red">RED</option>
          <option value="green">GREEN</option>
          <option value="purple">PURPLE</option>
        </select>
        <select
          name="priority"
          id="select-priority"
          onChange={(e) =>
            setNotesData((prev) => ({ ...prev, priority: e.target.value }))
          }
        >
          <option value="">choose priority</option>
          <option value="HIGH">HIGH</option>
          <option value="MEDIUM">MEDIUM</option>
          <option value="LOW">LOW</option>
        </select>

        <div className="note-actions">
          <button
            className="note-btn"
            onClick={() => {
              setNotes((prev) => [...prev, { ...notesData }]);
              setShowNote((prev) => !prev);
            }}
          >
            <AddIcon /> Add Note
          </button>
          <button
            className="note-btn"
            onClick={() => setShowNote((prev) => !prev)}
          >
            <CloseIcon /> Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateNote;
