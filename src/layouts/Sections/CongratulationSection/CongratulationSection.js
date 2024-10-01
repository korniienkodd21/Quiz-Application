import Button from "../../../ui/Button/Button";
import "./CongratulationSection.css";

const CongratulationSection = ({
   categoryTitle,
   categoryCardBackground,
   countCorrectAnswers,
   countQuestions,
   onPlayAgain,
   onBackToHome,
}) => {
   const congratulationRanges = [
      { max: 3, title: "Very Bad..." },
      { max: 6, title: "Not Bad." },
      { max: 9, title: "Almost Perfect!" },
      { max: countQuestions, title: "Congratulation!" },
   ];

   const congratulationTitle = congratulationRanges.find(
      (range) => countCorrectAnswers <= range.max
   ).title;

   return (
      <section className="congratulation">
         <h4 className="congratulation__title" style={{ color: categoryCardBackground }}>
            {congratulationTitle}
         </h4>
         <p className="congratulation__category">
            Category:{" "}
            <span
               className="congratulation__category-span"
               style={{ color: categoryCardBackground }}
            >
               {categoryTitle}
            </span>
         </p>
         <div className="congratulation__box">
            <p className="congratulation__first-text">You answered</p>
            <span
               className="congratulation__count-correct"
               style={{ color: categoryCardBackground }}
            >
               {countCorrectAnswers} / {countQuestions}
            </span>
            <p className="congratulation__second-text">question(s) correct</p>
         </div>
         <div className="congratulation__buttons">
            <Button text="Play again" onClick={onPlayAgain} />
            <Button text="Back To Home" onClick={onBackToHome} />
         </div>
      </section>
   );
};

export default CongratulationSection;
