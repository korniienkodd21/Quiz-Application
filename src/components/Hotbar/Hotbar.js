import "./Hotbar.css";

const Hotbar = ({ currentQuestionID }) => {
   return (
      <div className="hotbar">
         <div className="hotbar__line" style={{ width: `${currentQuestionID * 10}%` }}></div>
      </div>
   );
};

export default Hotbar;
