import "./Button.css";

const Button = ({ text, disabled = false, onClick }) => {
   return (
      <button className="button" type="button" disabled={disabled} onClick={onClick}>
         {text}
      </button>
   );
};

export default Button;
