import VariantItem from "../VariantItem/VariantItem";
import "./VariantsList.css";

const VariantsList = ({ variants = [], onFindSelectedVariant, selectedVariantIndex }) => {
   return (
      <ul className="variants-list">
         {variants.map((variant, index) => {
            return (
               <VariantItem
                  key={variant.variantID}
                  id={variant.variantID}
                  index={index}
                  variantText={variant.variantText}
                  selectedVariantIndex={selectedVariantIndex}
                  onFindSelectedVariant={onFindSelectedVariant}
               />
            );
         })}
      </ul>
   );
};

export default VariantsList;
