import "./filter.css";
import { useFilterContext } from "../../context/filter-context";
import { useNoteContext } from "../../context/notes-context";
const Filter = () => {
  const { filteredNotes, filteredNotesDispatch } = useFilterContext();
  const { notes } = useNoteContext();
  const labels = notes.map((note) => note.label).filter((label) => label);
  const removeduplicateLabels = [...new Set(labels)];

  return (
    <div className="App">
      <div className="filter">
        <div className="filter-body">
          <h5>Sort By Time</h5>
          <select
            name="sort-by"
            id="sort-by"
            onChange={(e) =>
              filteredNotesDispatch({
                type: "SORT_BY",
                payload: e.target.value,
              })
            }
            value={filteredNotes.sortBy}
          >
            <option value="">Choose Time</option>

            <option value="NEW">Newest First</option>
            <option value="OLD">Oldest First</option>
          </select>
          <h5>Filter By Priority</h5>
          <select
            name="filter-by"
            id="filter-by"
            onChange={(e) =>
              filteredNotesDispatch({
                type: "PRIORITY",
                payload: e.target.value,
              })
            }
            value={filteredNotes.priority}
          >
            <option value="">choose priority</option>
            <option value="HIGH">HIGH</option>
            <option value="MEDIUM">MEDIUM</option>
            <option value="LOW">LOW</option>
          </select>
          <h5>Select Labels</h5>
          {removeduplicateLabels.map((x) => {
            return (
              <>
                <label>
                  <input
                    type="checkbox"
                    checked={filteredNotes.labels.includes(x)}
                    onChange={() =>
                      filteredNotesDispatch({
                        type: "LABELS",
                        payload: x,
                      })
                    }
                  />
                  {x}
                </label>
              </>
            );
          })}
        </div>
        <div className="filter-footer">
          <button
            className="filter-clear-btn"
            onClick={() => filteredNotesDispatch({ type: "" })}
          >
            CLEAR ALL
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
