import { useState, useEffect, useMemo } from "react";
import { v4 as uuidv4 } from "uuid";

import Hotbar from "../../../components/Hotbar/Hotbar";
import VariantsList from "../../../components/VariantsList/VariantsList";
import Button from "../../../ui/Button/Button";

import { questions } from "../../../data/questions";
import "./QuestionSection.css";

const QuestionSection = ({
   categoryTitle,
   categoryCardBackground,
   selectedCategoryID,
   onGetCountCorrectAnswers,
   onGetCountQuestionsOfCategory,
   onCompleteQuiz,
}) => {
   const [currentQuestionID, setCurrentQuestionID] = useState(1);
   const [selectedVariantIndex, setSelectedVariantIndex] = useState(undefined);
   const [isSelectedVariant, setIsSelectedVariant] = useState(false);

   const questionsOfCategory = useMemo(() => {
      return questions.filter((question) => question.categoryID === selectedCategoryID);
   }, [selectedCategoryID]);

   const currentQuestion = questionsOfCategory.find(
      (question) => question.questionID === currentQuestionID
   );

   const varianstsOfQuestion = useMemo(() => {
      return currentQuestion.variants.map((variant) => ({
         variantID: uuidv4(),
         variantText: variant,
      }));
   }, [currentQuestion]);

   const countQuestionsOfCategory = questionsOfCategory.length;

   useEffect(() => {
      onGetCountQuestionsOfCategory(countQuestionsOfCategory);
   }, [onGetCountQuestionsOfCategory, countQuestionsOfCategory]);

   const handleFindSelectedVariant = (variantIndex) => {
      setSelectedVariantIndex(variantIndex);
      setIsSelectedVariant(true);
   };

   const handleNextQuestion = () => {
      const isCorrect = selectedVariantIndex === currentQuestion.correct;

      if (currentQuestionID === countQuestionsOfCategory) {
         if (isCorrect) {
            onGetCountCorrectAnswers((prevCount) => prevCount + 1);
         }

         onCompleteQuiz();
         return;
      }

      if (isCorrect) {
         onGetCountCorrectAnswers((prevCount) => prevCount + 1);
      }

      setCurrentQuestionID((prevQuestion) => prevQuestion + 1);
      setSelectedVariantIndex(undefined);
      setIsSelectedVariant(false);
   };

   return (
      <section className="question">
         <h4 className="question__category">
            Category:{" "}
            <span className="question__category-title" style={{ color: categoryCardBackground }}>
               {categoryTitle}
            </span>
         </h4>
         <p className="question__current" style={{ color: categoryCardBackground }}>
            {currentQuestionID} / {questionsOfCategory.length}
         </p>
         <h3 className="question__title">{currentQuestion?.question}</h3>
         <Hotbar currentQuestionID={currentQuestionID} />
         <VariantsList
            variants={varianstsOfQuestion}
            onFindSelectedVariant={handleFindSelectedVariant}
            selectedVariantIndex={selectedVariantIndex}
         />
         <Button
            text="Next Question -->"
            disabled={!isSelectedVariant}
            onClick={handleNextQuestion}
         />
      </section>
   );
};

export default QuestionSection;
