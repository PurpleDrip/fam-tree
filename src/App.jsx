import React from "react";
import { Node } from "./components/Node";
import AddMember from "./modals/AddMember";
AddMember;

const App = () => {
  return (
    <div>
      <Node />
      <Node isDummy={true} />
    </div>
  );
};

export default App;
