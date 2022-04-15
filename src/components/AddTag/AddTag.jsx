import "./add-tag.css";
import { AddCircleIcon, CloseIcon } from "../../Icons/Icons";
import { useState } from "react";

const AddTag = (props) => {
  const [tag, setTag] = useState("");
  return (
    <>
      <div className="tag-box">
        <div className="tag-box-head">
          <input
            className="tag-input"
            type="text"
            placeholder="tag here"
            onChange={(e) => setTag(e.target.value)}
            value={tag}
          />
          <AddCircleIcon
            sx={{ color: "white" }}
            onClick={() => {
              props.handler(tag);
              setTag("");
            }}
          />
          <CloseIcon onClick={props.close} />
        </div>
        <div className="tag-box-body">
          {/* <label>
            <input type="checkbox" />
            Work
          </label>
          <label>
            <input type="checkbox" />
            Personal
          </label>
          <label>
            <input type="checkbox" />
            Home
          </label> */}
        </div>
      </div>
    </>
  );
};

export default AddTag;
