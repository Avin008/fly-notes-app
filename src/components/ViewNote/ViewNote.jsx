import "./view-note.css";
import {
  PushPinIcon,
  PushPinOutlinedIcon,
  ArchiveIcon,
  DeleteIcon,
  EditIcon,
  DeleteForeverIcon,
  UnarchiveIcon,
  RestoreFromTrashIcon,
} from "../../Icons/Icons";
import { useNoteContext } from "../../context/notes-context";
import { EditNote } from "../../components";
import Moment from "react-moment";

const ViewNote = ({ data }) => {
  const { setNotes } = useNoteContext();

  function deleteHandler(e) {
    setNotes((prev) => {
      return prev.map((x) => {
        if (x.id === e.id) {
          return {
            ...x,
            isTrashed: !x.isTrashed,
            isArchived: x.isArchived ? !x.isArchived : x.isArchived,
          };
        } else {
          return x;
        }
      });
    });
  }

  function editHandler(e) {
    setNotes((prev) => {
      return prev.map((x) => {
        if (x.id === e.id) {
          return { ...x, noteEdit: !x.noteEdit };
        } else {
          return x;
        }
      });
    });
  }

  function pinNote(e) {
    setNotes((prev) => {
      return prev.map((x) => {
        if (x.id === e.id) {
          return { ...x, isPinned: !x.isPinned };
        } else {
          return x;
        }
      });
    });
  }

  function archiveHandler(e) {
    setNotes((prev) => {
      return prev.map((x) => {
        if (x.id === e.id) {
          return {
            ...x,
            isArchived: !x.isArchived,
            isTrashed: x.isTrashed ? !x.isTrashed : x.isTrashed,
          };
        } else {
          return x;
        }
      });
    });
  }

  function deletedfromTrashHandler(e) {
    setNotes((prev) => prev.filter((x) => x.id !== e.id));
  }

  return (
    <>
      <div className="view-note" style={{ background: data.color }}>
        <div className="note-head">
          <h4 className="note-heading">
            {data.title ? data.title : "Untitled"}
          </h4>
          {data.isPinned ? (
            <PushPinIcon
              sx={{ color: "white" }}
              onClick={() => pinNote(data)}
            />
          ) : (
            <PushPinOutlinedIcon
              sx={{ color: "white" }}
              onClick={() => pinNote(data)}
            />
          )}
        </div>
        <div className="note-body">
          <p className="note-text">{data.note ? data.note : "Empty Note"}</p>
        </div>
        <div className="note-footer">
          <div className="tag-container">
            {data.label ? <span className="label">{data.label}</span> : []}

            {data.priority ? (
              <span className="priority">{data.priority}</span>
            ) : (
              []
            )}
            <span className="priority">
              {" "}
              <Moment fromNow>{data.createdAt}</Moment>
            </span>
          </div>
          <div className="note-icons">
            <EditIcon
              sx={{ color: "white" }}
              onClick={() => editHandler(data)}
            />
            {data.isArchived ? (
              <UnarchiveIcon
                sx={{ color: "white" }}
                onClick={() => archiveHandler(data)}
              />
            ) : (
              <ArchiveIcon
                sx={{ color: "white" }}
                onClick={() => archiveHandler(data)}
              />
            )}
            {data.isTrashed ? (
              <RestoreFromTrashIcon
                sx={{ color: "white" }}
                onClick={() => deleteHandler(data)}
              />
            ) : (
              <DeleteIcon
                sx={{ color: "white" }}
                onClick={() => deleteHandler(data)}
              />
            )}
            {data.isTrashed ? (
              <DeleteForeverIcon
                sx={{ color: "white" }}
                onClick={() => deletedfromTrashHandler(data)}
              />
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      {data.noteEdit ? <EditNote data={data} /> : ""}
    </>
  );
};

export default ViewNote;
