import React from "react";
import { categoryInfos } from "./categoryFullInfos";
import CategoryCard from "./CategoryCard";
import classes from "./category.module.css";

function Category() {
  return (
    <div>
      <section className={classes.category__container}>
        {categoryInfos.map((infos) => (
          <CategoryCard data={infos} />
        ))}
      </section>
    </div>
  );
}

export default Category;
