import "./add-color.css";
import { CloseIcon } from "../../Icons/Icons";
const colors = [
  "#363062",
  "#424642",
  "#222831",
  "#2B2B2B",
  "#801336",
  "#2C272E",
];

const AddColor = (props) => {
  return (
    <div className="color-box" style={{ background: props.bgColor }}>
      <div className="color-box-head">
        {
          <CloseIcon
            sx={{ color: "white", fontSize: "1.3rem" }}
            onClick={props.showColorHandler}
          />
        }
      </div>
      <div className="color-box-body">
        {colors.map((x) => (
          <span
            className="color-block"
            style={{ background: x }}
            onClick={() => props.colorHandler(x)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default AddColor;
