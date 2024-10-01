import CategoryItem from "./../CategoryItem/CategoryItem";
import "./CategoriesList.css";

const CategoriesList = ({ categories, onFindSelectedCategory, selectedCategoryID }) => {
   return (
      <ul className="categories-list">
         {categories.map((category) => {
            return (
               <CategoryItem
                  key={category.categoryID}
                  id={category.categoryID}
                  title={category.categoryTitle}
                  text={category.categoryText}
                  iconURL={category.categoryIconURL}
                  background={category.categoryBackground}
                  decorBackground={category.categoryDecorationBackground}
                  boxShadow={category.categoryBoxShadow}
                  selectedCategoryID={selectedCategoryID}
                  onFindSelectedCategory={onFindSelectedCategory}
               />
            );
         })}
      </ul>
   );
};

export default CategoriesList;
