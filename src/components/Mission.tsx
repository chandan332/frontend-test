import { propsData } from "@/interfaces/props";
import React from "react";

const Mission = (props: propsData) => {
  return (
    <div className="mt-4 text-left" id={`${props.id}`}>
      <h1 className="lg:text-2xl text-blue-950">
        <span className="text-2xl lg:text-4xl font-bold text-blue-500">
          {props.heading}
        </span>{" "}
        {props.desc}
      </h1>
    </div>
  );
};

export default Mission;
