import "./navigation-sidebar.css";
import { NavLink } from "react-router-dom";
import { NoteIcon, ArchiveIcon, DeleteIcon } from "../../Icons/Icons";
import Filter from "../Filter/Filter";

const NavigationSidebar = () => {
  return (
    <ul className="spaced-list">
      <NavLink to="/" className="list-items">
        <NoteIcon /> Notes
      </NavLink>
      <NavLink to="/archives" className="list-items">
        <ArchiveIcon /> Archives
      </NavLink>
      <NavLink to="/trash" className="list-items">
        <DeleteIcon /> Trash
      </NavLink>
      <Filter />
    </ul>
  );
};

export default NavigationSidebar;
