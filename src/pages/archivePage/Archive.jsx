import "./archive.css";
import { useNoteContext } from "../../context/notes-context";
import { ViewNote } from "../../components";

const Archive = () => {
  const { notes } = useNoteContext();
  const isArchivedNotes = notes.filter((x) => x.isArchived && !x.isTrashed);
  return (
    <div className="main-container">
      <h3 className="heading">ARCHIVED NOTES</h3>
      {isArchivedNotes.map((x) => (
        <ViewNote data={x} />
      ))}
    </div>
  );
};

export default Archive;
