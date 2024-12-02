import React from "react";
import { MdOutlineAddBox } from "react-icons/md";

export const Node = (props) => {
  const isDummy = true;
  return (
    <div
      className={`h-[20rem] w-[18rem] ${
        props.color ? `bg-${props.color}-200` : "bg-green-200"
      } rounded-3xl border-2 border-black`}
    >
      {isDummy ? (
        <div className="flex flex-col items-center justify-center h-full gap-8">
          <button className="w-4/5 h-3/5 bg-gray-200 rounded-lg flex items-center justify-center border-2 border-black hover:border-gray-400">
            <MdOutlineAddBox size={25} />
          </button>
          <h1>Add a Member</h1>
        </div>
      ) : (
        <div className="h-full flex flex-col items-center justify-center">
          <div className="imageHolder w-4/5 h-3/5 border-2 border-black rounded-lg m-4">
            <img
              src={props.imageSrc}
              alt="Image of the member"
              className="w-full"
            />
          </div>
          <h1>{props.role || "Member Role"}</h1>
          <h2>{props.memberName || "Member Name"}</h2>
        </div>
      )}
    </div>
  );
};
