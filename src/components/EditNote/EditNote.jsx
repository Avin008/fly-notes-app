import "./edit-note.css";
import {
  PushPinIcon,
  PushPinOutlinedIcon,
  AddIcon,
  CloseIcon,
} from "../../Icons/Icons";
import { useState } from "react";
import { useNoteContext } from "../../context/notes-context";

const EditNote = ({ data }) => {
  const { setNotes } = useNoteContext();
  const [editedData, setEditedData] = useState({ ...data });

  function updateNote() {
    setNotes((prev) => {
      return prev.map((x) => {
        if (x.id === editedData.id) {
          return { ...x, ...editedData };
        } else {
          return x;
        }
      });
    });
    closeNote();
  }

  function closeNote() {
    setNotes((prev) => {
      return prev.map((x) => {
        if (x.id === editedData.id) {
          return { ...x, noteEdit: !x.noteEdit };
        } else {
          return x;
        }
      });
    });
  }

  return (
    <div className="edit-note" style={{ background: editedData.color }}>
      <div className="note-head">
        <input
          className="note-input"
          type="text"
          placeholder="Title"
          onChange={(e) =>
            setEditedData((prev) => ({ ...prev, title: e.target.value }))
          }
          value={editedData.title}
        />
        {editedData.isPinned ? (
          <PushPinIcon
            sx={{ color: "white" }}
            onClick={() =>
              setEditedData((prev) => ({ ...prev, isPinned: !prev.isPinned }))
            }
          />
        ) : (
          <PushPinOutlinedIcon
            sx={{ color: "white" }}
            onClick={() =>
              setEditedData((prev) => ({ ...prev, isPinned: !prev.isPinned }))
            }
          />
        )}
      </div>
      <div className="note-body">
        <textarea
          className="note-text-area"
          placeholder="Take Note"
          onChange={(e) =>
            setEditedData((prev) => ({ ...prev, note: e.target.value }))
          }
          value={editedData.note}
        />
      </div>
      <div className="note-footer">
        <select
          name="label"
          id="select-label"
          onChange={(e) =>
            setEditedData((prev) => ({ ...prev, label: e.target.value }))
          }
          value={editedData.label}
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
            setEditedData((prev) => ({ ...prev, color: e.target.value }))
          }
          value={editedData.color}
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
            setEditedData((prev) => ({ ...prev, priority: e.target.value }))
          }
          value={editedData.priority}
        >
          <option value="">choose priority</option>
          <option value="HIGH">HIGH</option>
          <option value="MEDIUM">MEDIUM</option>
          <option value="LOW">LOW</option>
        </select>

        <div className="note-actions">
          <button className="note-btn" onClick={() => updateNote(data)}>
            <AddIcon /> Update Note
          </button>
          <button className="note-btn" onClick={closeNote}>
            <CloseIcon /> Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditNote;
