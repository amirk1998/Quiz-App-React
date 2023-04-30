import { useState } from 'react';
import { useSnackbar } from 'notistack';
import * as data from '../../../data/questions';

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
    shuffledQuestions[currentQuestion].answerOptions
  );

  const nextQuestion = () => {
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
      setIsShowScore(true);
    }
  };

  const answerClickHandler = (isCorrect) => {
    if (isCorrect) {
      enqueueSnackbar('Correct Answer 👍🏻👏🏻', {
        variant: 'success',
        autoHideDuration: 2000,
        // preventDuplicate: true,
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'center',
        },
      });
      setScoreValue(scoreValue + 1);
      nextQuestion();
    } else {
      enqueueSnackbar('Oh Wrong Answer! ❌☹️', {
        variant: 'error',
        autoHideDuration: 2000,
        // preventDuplicate: true,
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'center',
        },
      });
      nextQuestion();
    }
  };

  return (
    <>
      {!isShowScore && (
        <header className='flex items-center justify-between px-4 max-w-xl w-full bg-white rounded-t-2xl shadow-md z-10 h-14'>
          <span className='font-bold text-slate-900 text-xl'>Quiz App</span>
          {/* TIMER */}
          {/* <div className='font-normal text-slate-700 text-base bg-blue-300 rounded-md px-4 flex items-center justify-between py-1'>
            <span>Time Left </span>
            <div className='bg-slate-600 text-white rounded-md px-2 ml-4 w-12 text-center py-1'></div>
          </div> */}
        </header>
      )}
      <div
        className={
          isShowScore
            ? 'flex flex-col bg-white max-w-xl w-full rounded-2xl shadow-xl px-10 py-6'
            : 'flex flex-col bg-white max-w-xl w-full rounded-b-2xl shadow-xl px-10 py-6'
        }
      >
        {isShowScore ? (
          <div className='flex flex-col items-center gap-y-4'>
            <div className='text-center font-bold text-xl'>
              You scored {scoreValue} of {questions.length} (
              {(scoreValue / questions.length) * 100} %)
            </div>
            <button
              onClick={() => window.location.reload()}
              className='bg-blue-400 px-4 py-2 rounded-md text-white text-base hover:bg-blue-600'
            >
              Start Again
            </button>
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
                    onClick={() => answerClickHandler(answerOption.isCorrect)}
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
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default QuizQuestion;
