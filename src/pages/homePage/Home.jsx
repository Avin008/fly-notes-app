import "./home.css";
import { CreateNote, ViewNote } from "../../components";
import { useNoteContext } from "../../context/notes-context";
import { useFilterContext } from "../../context/filter-context";
import { useEffect } from "react";
const Home = () => {
  const { showNote, setShowNote, notes } = useNoteContext();
  const { filteredNotes } = useFilterContext();

  const filterByLabels = (notes, filteredNotes) => {
    if (filteredNotes.labels.length !== 0) {
      return notes.filter((item) => filteredNotes.labels.includes(item.label));
    }
    return notes;
  };

  const filteredByPriority = (notes, filteredNotes) => {
    if (filteredNotes.priority === "HIGH")
      return notes.filter((x) => x.priority === "HIGH");
    else if (filteredNotes.priority === "LOW")
      return notes.filter((x) => x.priority === "LOW");
    else if (filteredNotes.priority === "MEDIUM")
      return notes.filter((x) => x.priority === "MEDIUM");
    else return notes;
  };

  const filteredByDate = (notes, filteredNotes) => {
    if (filteredNotes.sortBy === "OLD") {
      return [...notes].sort(
        (a, b) => Date.parse(a.createdAt) - Date.parse(b.createdAt)
      );
    } else if (filteredNotes.sortBy === "NEW") {
      return [...notes].sort(
        (a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt)
      );
    }
    return notes;
  };

  const filteredNotesByPriority = filteredByPriority(notes, filteredNotes);
  const filteredNotesByLabel = filterByLabels(
    filteredNotesByPriority,
    filteredNotes
  );
  const filteredNotesByDate = filteredByDate(
    filteredNotesByLabel,
    filteredNotes
  );

  const pinnedNotes = filteredNotesByDate.filter(
    (x) => x.isPinned && !x.isArchived && !x.isTrashed
  );
  const notPinnedNotes = filteredNotesByDate.filter(
    (x) => !x.isPinned && !x.isArchived && !x.isTrashed
  );

  useEffect(() => {
    document.title = "Home | Fly Notes";
  }, []);

  return (
    <div className="main-container">
      <div className="take-note-card">
        <input
          className="take-note-input"
          type="text"
          placeholder="Take Note"
          readOnly
          onClick={() => setShowNote((prev) => !prev)}
        />
      </div>
      {showNote ? <CreateNote /> : ""}
      <div>
        {pinnedNotes.length >= 1 ? (
          <h4 style={{ color: "white", textAlign: "center" }}>PINNED NOTES</h4>
        ) : (
          []
        )}
        {pinnedNotes.map((x) => (
          <ViewNote data={x} />
        ))}

        <h4 style={{ color: "white", textAlign: "center" }}>NOTES</h4>
        {notPinnedNotes.map((x) => (
          <ViewNote data={x} />
        ))}
      </div>
    </div>
  );
};

export default Home;
