import { useState } from 'react';
import { useSnackbar } from 'notistack';
import * as data from '../../../data/questions';
import NavBar from '../NavBar/NavBar';

const QuizQuestion = () => {
  const questions = data.questions;
  const { enqueueSnackbar } = useSnackbar();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isShowScore, setIsShowScore] = useState(false);
  const [scoreValue, setScoreValue] = useState(0);

  const getRandomized = (array) => {
    const randomizedOptions = [...array];
    for (let i = randomizedOptions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [randomizedOptions[i], randomizedOptions[j]] = [
        randomizedOptions[j],
        randomizedOptions[i],
      ];
    }
    return randomizedOptions;
  };

  const shuffledQuestions = getRandomized(questions);

  const shuffledAnswerOptions = getRandomized(
    questions[currentQuestion].answerOptions
  );

  const answerButtonHandler = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      enqueueSnackbar('End of the quiz !', {
        variant: 'default',
        autoHideDuration: 3000,
        preventDuplicate: true,
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'center',
        },
      });
    }
  };

  return (
    <>
      {!isShowScore && <NavBar />}
      <div
        className={
          isShowScore
            ? 'flex flex-col bg-white max-w-xl w-full rounded-2xl shadow-xl px-10 py-6 h-20'
            : 'flex flex-col bg-white max-w-xl w-full rounded-b-2xl shadow-xl px-10 py-6'
        }
      >
        {isShowScore ? (
          <div className='text-center font-bold text-xl'>
            You scored {scoreValue} of {questions.length} (
            {(scoreValue / questions.length) * 100} %)
          </div>
        ) : (
          <>
            <div className='flex justify-start gap-x-1 font-semibold text-lg text-slate-800 mb-4 '>
              <span>{currentQuestion + 1}.</span>
              <p>{shuffledQuestions[currentQuestion].questionText}</p>
            </div>
            <div className='flex flex-col py-2 gap-y-4'>
              {shuffledAnswerOptions.map((answerOption) => {
                return (
                  <button
                    key={crypto.randomUUID()}
                    className='bg-blue-100 hover:bg-blue-200 hover:border-blue-300 border-2 border-blue-200 rounded-md w-full px-4 py-2 text-lg font-medium text-slate-800 text-left'
                  >
                    {answerOption.answerText}
                  </button>
                );
              })}
            </div>
            <hr className='border-slate-800 mt-2' />
            <div className='flex items-center justify-between mt-4'>
              <span className='font-semibold text-lg text-slate-800'>
                {currentQuestion + 1} of {questions.length} Questions
              </span>
              <button
                onClick={answerButtonHandler}
                className='bg-blue-400 px-4 py-2 rounded-md text-white text-base hover:bg-blue-600'
              >
                {currentQuestion + 1 === questions.length
                  ? 'Finish'
                  : 'Next Question'}
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default QuizQuestion;
