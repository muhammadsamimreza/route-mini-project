import React from "react";
import { NavLink } from "react-router";

const Categories = ({ tree }) => {
  return <NavLink to={`/category/${tree.id}`} className="p-1 rounded-[5px] font-semibold hover:bg-gray-50 cursor-pointer">{tree.category_name}</NavLink>;
};

export default Categories;
