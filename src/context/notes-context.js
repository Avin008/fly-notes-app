import { createContext, useContext, useState } from "react";
import { v4 as uuid } from "uuid";

const NotesContext = createContext();

const NotesContextProvider = ({ children }) => {
  const [notes, setNotes] = useState([
    {
      id: uuid(),
      title: "Note One",
      note: "Hi I'm Note 1",
      isPinned: false,
      noteEdit: false,
      color: "#2C272E",
      priority: "HIGH",
      label: "HOME",
      isTrashed: false,
      isArchived: false,
      deletedFromTrash: false,
      createdAt: new Date("Apr 14 2022 15:00"),
    },
    {
      id: uuid(),
      title: "Note Two",
      note: "Hello I'm Note 2",
      isPinned: false,
      noteEdit: false,
      color: "#2B2B2B",
      priority: "MEDIUM",
      label: "WORK",
      isTrashed: false,
      isArchived: false,
      deletedFromTrash: false,
      createdAt: new Date("Apr 14 2022 14:00"),
    },
  ]);

  const [showNote, setShowNote] = useState(false);

  return (
    <NotesContext.Provider value={{ notes, setNotes, showNote, setShowNote }}>
      {children}
    </NotesContext.Provider>
  );
};

const useNoteContext = () => useContext(NotesContext);

export { NotesContextProvider, useNoteContext };
