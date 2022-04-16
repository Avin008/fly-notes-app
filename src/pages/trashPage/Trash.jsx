import "./trash.css";
import { useNoteContext } from "../../context/notes-context";
import { ViewNote } from "../../components";

const Trash = () => {
  const { notes } = useNoteContext();
  const trashedNotes = notes.filter((x) => x.isTrashed && !x.isArchived);
  return (
    <div className="main-container">
      <h3 style={{ color: "white" }}>TRASHED NOTES</h3>
      {trashedNotes.map((x) => (
        <ViewNote data={x} />
      ))}
    </div>
  );
};

export default Trash;
