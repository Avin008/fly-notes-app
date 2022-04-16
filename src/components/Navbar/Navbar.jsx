import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <span className="brand-name">
        <img
          src="https://img.icons8.com/doodle/48/000000/apple-notes.png"
          width="30px"
          alt="fly notes logo"
        />
        <i class="fa-solid fa-notes"></i>FlyNotes
      </span>
    </nav>
  );
};

export default Navbar;
