import * as questions from '../../../data/questions';
import QuizQuestion from '../QuizQuestion/QuizQuestion';

const QuizList = () => {
  return (
    <div className='flex flex-col w-full items-center h-auto'>
      <QuizQuestion />
    </div>
  );
};

export default QuizList;
