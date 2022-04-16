import "./create-note.css";
import {
  PushPinIcon,
  PushPinOutlinedIcon,
  AddIcon,
  CloseIcon,
  LabelIcon,
  ColorLensIcon,
} from "../../Icons/Icons";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import { useNoteContext } from "../../context/notes-context";
import { AddTag } from "../../components";
import { AddColor } from "../../components";

const CreateNote = () => {
  const { setNotes, setShowNote } = useNoteContext();
  const [showLabel, setShowLabel] = useState(false);
  const [showColor, setShowColor] = useState(false);
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

  function showColorHandler() {
    setShowColor((prev) => !prev);
  }

  function colorHandler(e) {
    setNotesData((prev) => ({ ...prev, color: e }));
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
        <ColorLensIcon sx={{ color: "white" }} onClick={showColorHandler} />
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
        {showColor ? (
          <AddColor
            showColorHandler={showColorHandler}
            colorHandler={colorHandler}
            bgColor={notesData.color}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default CreateNote;
