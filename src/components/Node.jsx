import React, { useRef, useState } from "react";
import { MdOutlineAddBox } from "react-icons/md";
import AddMember from "../modals/AddMember";
import { LuAsterisk } from "react-icons/lu";

export const Node = (props) => {
  const node = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const clickHandler = () => {
    setIsVisible(!isVisible);
  };

  const focusNode = () => {
    if (node.current && !props.isDummy) {
      node.current.scrollIntoView({ behavior: "smooth", block: "center" });
      node.current.classList.add("border", "border-2", "border-secondary");
      setTimeout(() => node.current.classList.remove("border-secondary"), 1000);
    }
  };

  // Check for dummy node
  if (props.isDummy) {
    return (
      <div className="h-[10rem] w-[12rem] p-4 bg-black rounded-3xl border-2 flex flex-col items-center justify-center gap-4">
        <button
          className="w-4/5 h-3/5 bg-gray-300 rounded-lg flex items-center justify-center border-2 border-black hover:border-gray-400"
          onClick={clickHandler}
        >
          <MdOutlineAddBox size={25} color="black" />
        </button>
        <h1 className="text-xs md:text-lg">Add a Member</h1>
        {isVisible && <AddMember clickHandler={clickHandler} />}
      </div>
    );
  }

  return (
    <div
      className={`h-[10rem] w-[12rem] p-4 ${
        props.data.gender === "Male"
          ? "border-blue-500"
          : props.data.gender === "Female"
          ? "border-pink-400"
          : "border-yellow-600"
      } rounded-3xl border-2 md:h-[16rem] md:w-[16rem] bg-neutral`}
      ref={node}
      onClick={focusNode}
      tabIndex={0}
      role="button"
      aria-label={`Node for ${props.data.firstName || "unknown member"}`}
      onKeyDown={(e) => {
        if (e.key === "Enter") focusNode();
      }}
    >
      <div className="h-full flex flex-col items-center font-mono">
        <div className="imageHolder w-4/5 h-3/5 border-2 border-black rounded-lg mb-2">
          <img
            src=""
            alt={`${props.data.firstName || "unknown"}'s profile`}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex gap-4 text-[0.7rem] md:text-lg justify-between items-center w-full px-4">
          <div className="flex flex-col">
            <h1 className="flex">
              {props.data.role || "Member Role"}
              {props.data.isAdmin && <LuAsterisk size={13} />}
            </h1>
            <h1>{props.data.age || "null"} y/o</h1>
          </div>
          <div>
            <h2 className="flex text-right">
              {props.data.firstName || "Member Name"}
            </h2>
            <h2 className="text-right">
              {props.data.lastName || "Member Name"}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};
