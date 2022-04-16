import "./navigation-sidebar.css";
import { Link } from "react-router-dom";
import { NoteIcon, ArchiveIcon, DeleteIcon } from "../../Icons/Icons";
import Filter from "../Filter/Filter";

const NavigationSidebar = () => {
  return (
    <ul className="spaced-list">
      <Link to="/" className="list-items">
        <NoteIcon /> Notes
      </Link>
      <Link to="/archives" className="list-items">
        <ArchiveIcon /> Archives
      </Link>
      <Link to="/trash" className="list-items">
        <DeleteIcon /> Trash
      </Link>
      <Filter />
    </ul>
  );
};

export default NavigationSidebar;
