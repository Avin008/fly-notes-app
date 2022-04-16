import "./filter.css";
import { useFilterContext } from "../../context/filter-context";
const Filter = () => {
  const { filteredNotes, filteredNotesDispatch } = useFilterContext();
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
            <option value="">choose time</option>
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
          <label>
            <input
              type="checkbox"
              checked={filteredNotes.labels.includes("HOME")}
              onChange={() =>
                filteredNotesDispatch({
                  type: "LABELS",
                  payload: "HOME",
                })
              }
            />
            Home
          </label>
          <label>
            <input
              type="checkbox"
              checked={filteredNotes.labels.includes("WORK")}
              onChange={() =>
                filteredNotesDispatch({
                  type: "LABELS",
                  payload: "WORK",
                })
              }
            />
            Work
          </label>
          <label>
            <input
              type="checkbox"
              checked={filteredNotes.labels.includes("PERSONAL")}
              onChange={() =>
                filteredNotesDispatch({
                  type: "LABELS",
                  payload: "PERSONAL",
                })
              }
            />{" "}
            Personal
          </label>
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
