import React, { useEffect, useRef, useState } from "react";
import { Node } from "./Node";
import members from "../../data";

const Tree = () => {
  const mainText = useRef(null);
  const [refs, setRefs] = useState([]);

  useEffect(() => {
    mainText.current.scrollIntoView();
  }, []);

  useEffect(() => {
    const refsArray = members.flatMap((row) =>
      row.map(() => React.createRef())
    );
    setRefs(refsArray);
  }, []);

  const getLineCoordinates = (parentRef, childRef) => {
    if (!parentRef?.current || !childRef?.current) return null;

    const parentRect = parentRef.current.getBoundingClientRect();
    const childRect = childRef.current.getBoundingClientRect();
    const startX = parentRect.x + parentRect.width / 2;
    const startY = parentRect.y + parentRect.height;
    const endX = childRect.x + childRect.width / 2;
    const endY = childRect.y;

    return { startX, startY, endX, endY };
  };

  return (
    <div className="min-h-screen min-w-min flex flex-col gap-12 items-center p-12 pt-8 md:p-20 md:pt-8">
      <h1 className="text-2xl text-base-content md:text-5xl" ref={mainText}>
        Family Tree
      </h1>
      {members.map((arr, index) => (
        <div key={index} className="flex gap-8 items-center relative">
          {arr.map((item, subIndex) => (
            <Node
              key={subIndex}
              data={item}
              isDummy={false}
              ref={refs[index * arr.length + subIndex]}
            />
          ))}

          <Node key={"dummy-" + index} data={{}} isDummy={true} />

          {index > 0 &&
            arr.map((child, childIndex) => {
              const parentRow = members[index - 1];
              const parent = parentRow[Math.floor(childIndex / 2)];

              if (!parent?.ref || !child?.ref) return null;

              const lineCoords = getLineCoordinates(parent.ref, child.ref);

              return (
                lineCoords && (
                  <svg
                    key={`line-${index}-${childIndex}`}
                    className="absolute"
                    style={{ zIndex: 0 }}
                    width="100%"
                    height="100%"
                  >
                    <line
                      x1={lineCoords.startX}
                      y1={lineCoords.startY}
                      x2={lineCoords.endX}
                      y2={lineCoords.endY}
                      stroke="black"
                      strokeWidth="2"
                      markerEnd="url(#arrowhead)"
                    />
                  </svg>
                )
              );
            })}
        </div>
      ))}
      <div className="flex gap-8">
        <Node data={{}} isDummy={true} />
      </div>
    </div>
  );
};

export default Tree;
