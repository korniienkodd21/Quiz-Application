import "./VariantItem.css";

const VariantItem = ({ index, id, variantText, onFindSelectedVariant, selectedVariantIndex }) => {
   return (
      <li className="variants-list__item">
         <label
            className={`variant-card ${
               selectedVariantIndex === index ? "variant-card--active" : ""
            }`}
            htmlFor={id}
            onClick={() => onFindSelectedVariant(index)}
         >
            <input className="variant-card__input" type="radio" id={id} name="variant" />
            <span className="variant-card__text">{variantText}</span>
         </label>
      </li>
   );
};

export default VariantItem;
