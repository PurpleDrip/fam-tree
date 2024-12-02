import React, { useEffect, useRef, useState } from "react";
import { MdOutlineAddBox } from "react-icons/md";
import { CgGenderMale, CgGenderFemale } from "react-icons/cg";
import { TbGenderBigender } from "react-icons/tb";
import AddMember from "../modals/AddMember";

export const Node = (props) => {
  const node = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const clickHandler = () => {
    setIsVisible(!isVisible);
  };

  const focusNode = () => {
    if (node.current && !props.isDummy) {
      node.current.scrollIntoView();
    }
  };
  return (
    <>
      <div
        className={`h-[10rem] w-[10rem] ${
          props.color ? `bg-blue-300` : "bg-neutral"
        } rounded-3xl border-2 md:h-[16rem] md:w-[14rem] focus:border-2 focus:border-secondary`}
        ref={node}
        onClick={focusNode}
        tabIndex={0}
      >
        {props.isDummy ? (
          <div className="flex flex-col items-center justify-center h-full gap-8">
            <button
              className="w-4/5 h-3/5 bg-gray-200 rounded-lg flex items-center justify-center border-2 border-black hover:border-gray-400"
              onClick={clickHandler}
            >
              <MdOutlineAddBox size={25} />
            </button>
            <h1>Add a Member</h1>
          </div>
        ) : (
          <div className="h-full flex flex-col items-center justify-center font-mono">
            <div className="imageHolder w-4/5 h-3/5 border-2 border-black rounded-lg m-4">
              <img
                src={props.imageSrc}
                alt="Image of the member"
                className="w-full"
              />
            </div>
            <div className="flex gap-4 text-[0.7rem] md:text-lg">
              <div className="">
                <h1>{props.role || "Member Role"}</h1>
                <h2>{props.memberName || "Member Name"}</h2>
              </div>
              <div>
                {/* <CgGenderMale  /> */}
                {/* <CgGenderFemale  /> */}
                <TbGenderBigender />
                <h1>Age:{props.age || "null"}</h1>
              </div>
            </div>
          </div>
        )}
      </div>
      {isVisible && <AddMember clickHandler={clickHandler} />}
    </>
  );
};
