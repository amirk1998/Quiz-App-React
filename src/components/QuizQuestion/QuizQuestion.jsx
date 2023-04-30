import { useState } from 'react';
import * as data from '../../../data/questions';

const QuizQuestion = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const questions = data.questions;

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
  console.log(shuffledQuestions);

  const shuffledAnswerOptions = getRandomized(
    questions[currentQuestion].answerOptions
  );

  const answerButtonHandler = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      alert('End of Quiz');
    }
  };

  // console.log(shuffledAnswerOptions);

  return (
    <div className='flex flex-col bg-white max-w-xl w-full  rounded-b-2xl shadow-xl px-10 py-6'>
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
    </div>
  );
};

export default QuizQuestion;
