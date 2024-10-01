import { useState } from "react";

import Header from "./layouts/Header/Header";
import CategorySection from "./layouts/Sections/CategorySection/CategorySection";
import QuestionSection from "./layouts/Sections/QuestionSection/QuestionSection";
import CongratulationSection from "./layouts/Sections/CongratulationSection/CongratulationSection";

const App = () => {
   const [selectedCategory, setSelectedCategory] = useState({});
   const [countCorrectAnswers, setCountCorrectAnswers] = useState(0);
   const [countQuestionOfCategory, setCountQuestionOfCategory] = useState(0);

   const [visibleSectionsState, setVisibleSectionsState] = useState({
      isVisibleCategorySection: true,
      isVisibleQuestionSection: false,
      isVisibleCongratulationSection: false,
   });

   const handleGetSelectedCategory = (category) => {
      setSelectedCategory(category);
   };

   const handleGetCountQuestionOfCategory = (countQuestionOfCategory) => {
      setCountQuestionOfCategory(countQuestionOfCategory);
   };

   const handleGetCountCorrectAnswers = (countCorrectAnswers) => {
      setCountCorrectAnswers(countCorrectAnswers);
   };

   const handleResetAppState = () => {
      setSelectedCategory({});
      setCountCorrectAnswers(0);
      setCountQuestionOfCategory(0);

      setVisibleSectionsState({
         isVisibleCategorySection: true,
         isVisibleQuestionSection: false,
         isVisibleCongratulationSection: false,
      });
   };

   const handleHideCategorySection = () => {
      setVisibleSectionsState((prevState) => {
         return {
            ...prevState,
            isVisibleCategorySection: false,
            isVisibleQuestionSection: true,
         };
      });
   };

   const handleCompleteQuiz = (countCorrectAnswers) => {
      setVisibleSectionsState((prevState) => {
         return {
            ...prevState,
            isVisibleQuestionSection: false,
            isVisibleCongratulationSection: true,
         };
      });
   };

   const handlePlayAgain = () => {
      setCountCorrectAnswers(0);

      setVisibleSectionsState((prevState) => {
         return {
            ...prevState,
            isVisibleCongratulationSection: false,
            isVisibleQuestionSection: true,
         };
      });
   };

   const handleBackToHome = () => {
      setCountCorrectAnswers(0);
      setSelectedCategory({});

      setVisibleSectionsState((prevState) => {
         return {
            ...prevState,
            isVisibleCongratulationSection: false,
            isVisibleCategorySection: true,
         };
      });
   };

   return (
      <>
         <Header onResetAppState={handleResetAppState} />
         {visibleSectionsState.isVisibleCategorySection && (
            <CategorySection
               selectedCategory={selectedCategory}
               onGetSelectedCategory={handleGetSelectedCategory}
               onHideCategorySection={handleHideCategorySection}
            />
         )}
         {visibleSectionsState.isVisibleQuestionSection && (
            <QuestionSection
               categoryTitle={selectedCategory?.categoryTitle}
               categoryCardBackground={selectedCategory?.categoryBackground}
               selectedCategoryID={selectedCategory?.categoryID}
               onGetCountCorrectAnswers={handleGetCountCorrectAnswers}
               onGetCountQuestionsOfCategory={handleGetCountQuestionOfCategory}
               onCompleteQuiz={handleCompleteQuiz}
            />
         )}
         {visibleSectionsState.isVisibleCongratulationSection && (
            <CongratulationSection
               categoryTitle={selectedCategory?.categoryTitle}
               categoryCardBackground={selectedCategory?.categoryBackground}
               countQuestions={countQuestionOfCategory}
               countCorrectAnswers={countCorrectAnswers}
               onPlayAgain={handlePlayAgain}
               onBackToHome={handleBackToHome}
            />
         )}
      </>
   );
};

export default App;
