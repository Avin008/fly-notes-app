import { createContext, useContext, useReducer } from "react";

const FilterContext = createContext();

const FilterContextProvider = ({ children }) => {
  function filterReducerFunc(filteredNotes, action) {
    switch (action.type) {
      case "SORT_BY":
        return { ...filteredNotes, sortBy: action.payload };
      case "LABELS":
        return {
          ...filteredNotes,
          labels: filteredNotes.labels.includes(action.payload)
            ? filteredNotes.labels.filter((value) => value !== action.payload)
            : [...filteredNotes.labels, action.payload],
        };
      case "PRIORITY":
        return { ...filteredNotes, priority: action.payload };
      default:
        return {
          sortBy: "",
          labels: [],
          priority: "",
        };
    }
  }

  const [filteredNotes, filteredNotesDispatch] = useReducer(filterReducerFunc, {
    sortBy: "",
    labels: [],
    priority: "",
  });

  return (
    <FilterContext.Provider value={{ filteredNotes, filteredNotesDispatch }}>
      {children}
    </FilterContext.Provider>
  );
};

const useFilterContext = () => useContext(FilterContext);

export { FilterContextProvider, useFilterContext };
