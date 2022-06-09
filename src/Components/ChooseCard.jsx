import React from "react";
import { allRoles } from "../Statics/roles";





const ChooseCard = () => {
  var chosenRoles = JSON.parse(localStorage.getItem("myData"));
  var selectedRolesId = Object.keys(chosenRoles);
  return (
    <div>
      {selectedRolesId.map((elem, index) => {
        var choseRoles = allRoles[elem - 1].title;
        return <p key={index}>{choseRoles}</p>;
      })}
    </div>
  );
};

export default ChooseCard;
