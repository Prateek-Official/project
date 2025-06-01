import { Link } from "react-router";
import { linksList } from "../../utils/constants";
import React from "react";

const Homepage = () => {
  return (
    <div className="py-10">
      <h1 className="text-3xl font-semibold text-center">Homepage</h1>
      <div className=" flex mt-10 justify-around">
        {linksList.map(({ name, link, status }) => {
          return (
            <Link
              key={name}
              to={"/" + link}
              className="border p-4 w-xs text-center hover:bg-black hover:text-white rounded-3xl"
            >
              {name}
              <div className="font-semibold text-[14px]">
                {"(" + status + ")"}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Homepage;
