import { useState } from "react";

import CategoriesList from "../../../components/CategoriesList/CategoriesList";
import Button from "../../../ui/Button/Button";

import { categoriesCards } from "../../../data/categoriesCards";
import "./CategorySection.css";

const CategorySection = ({ selectedCategory, onGetSelectedCategory, onHideCategorySection }) => {
   const [selectedCategoryID, setSelectedCategoryID] = useState(undefined);

   const handleFindSelectedCategory = (categoryID) => {
      const foundCategory = categoriesCards.find((category) => category.categoryID === categoryID);

      setSelectedCategoryID(categoryID);
      onGetSelectedCategory(foundCategory);
   };

   return (
      <section className="category">
         <h1 className="category__title">
            Select one of the categories below and see how many of the 10 you can guess correctly!
         </h1>
         <CategoriesList
            categories={categoriesCards}
            selectedCategoryID={selectedCategoryID}
            onFindSelectedCategory={handleFindSelectedCategory}
         />
         <Button
            text="Let's begin!"
            disabled={!Object.keys(selectedCategory).length}
            onClick={onHideCategorySection}
         />
      </section>
   );
};

export default CategorySection;
