import React from "react";

const Categories = ({ tree }) => {
  console.log(tree);
  return <li className="btn">{tree.category_name}</li>;
};

export default Categories;
