import "./create-note.css";
import {
  PushPinIcon,
  PushPinOutlinedIcon,
  AddIcon,
  CloseIcon,
  LabelIcon,
} from "../../Icons/Icons";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import { useNoteContext } from "../../context/notes-context";
import { AddTag } from "../../components";
const CreateNote = () => {
  const { setNotes, setShowNote } = useNoteContext();
  const [showLabel, setShowLabel] = useState(false);
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

  function labelHandler(e) {
    setNotesData((prev) => ({ ...prev, label: e }));
    setShowLabel((prev) => !prev);
  }

  function closeHandler() {
    setShowLabel((prev) => !prev);
  }

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
      <div className="label-container">
        {notesData.label ? (
          <span className="label">
            {notesData.label}
            <CloseIcon
              onClick={() => setNotesData((prev) => ({ ...prev, label: "" }))}
            />
          </span>
        ) : (
          ""
        )}
      </div>

      <div className="note-footer">
        <LabelIcon
          sx={{ color: "white" }}
          onClick={() => setShowLabel((prev) => !prev)}
        />
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
        {showLabel ? (
          <AddTag
            handler={labelHandler}
            close={closeHandler}
            color={notesData.color}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default CreateNote;
