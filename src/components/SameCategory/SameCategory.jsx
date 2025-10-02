import React, { Suspense } from "react";
import { useLoaderData } from "react-router";
import CategoryCart from "../CategoryCart/CategoryCart";


const SameCategory = () => {
  const treeData = useLoaderData();
  const categories = treeData.plants;
  return (
    <Suspense fallback={<h1 className="text-red-500">Loading...............</h1>}>
      <div className="grid grid-cols-3 gap-5">
        {categories.map((tree) => (
          <CategoryCart key={tree.id} tree={tree} />
        ))}
      </div>
    </Suspense>
  );
};

export default SameCategory;
