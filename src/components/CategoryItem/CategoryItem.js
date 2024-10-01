import "./CategoryItem.css";

const CategoryItem = ({
   id,
   title,
   text,
   iconURL,
   background,
   decorBackground,
   boxShadow,
   selectedCategoryID,
   onFindSelectedCategory,
}) => {
   const isActive = selectedCategoryID === id ? "category-card--active" : "";

   return (
      <li className="categories-list__item">
         <button
            className={`category-card ${isActive}`}
            style={{ backgroundColor: background, boxShadow: boxShadow }}
            type="button"
            onClick={() => onFindSelectedCategory(id)}
         >
            <div className="category-card__content">
               <img className="category-card__icon" src={iconURL} alt={`${title} icon`} />
               <h3 className="category-card__title">{title}</h3>
               <p className="category-card__text">{text}</p>
            </div>
            <svg className="category-card__decor" width="280" height="130" viewBox="0 0 280 130">
               <path
                  d="M217.138 19.3924C182.151 44.1621 146.612 47.3286 117.1 37.8502C63.5801 12.4084 -71.7688 -45.3996 -147 65.7863L-23.9532 191H321.178C321.178 191 355.717 -65.5869 217.138 19.3924Z"
                  fill={decorBackground}
               />
            </svg>
         </button>
      </li>
   );
};

export default CategoryItem;
