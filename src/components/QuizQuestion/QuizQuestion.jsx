const QuizQuestion = () => {
  return (
    <div className='flex flex-col bg-white max-w-xl w-full  rounded-b-2xl shadow-xl px-10 py-6'>
      <div className='flex gap-x-1 font-semibold text-xl text-slate-800 mb-4 '>
        <span>1 .</span>
        <p>Question</p>
      </div>
      <div className='flex flex-col py-2 gap-y-4'>
        <button className='bg-blue-100 hover:bg-blue-200 hover:border-blue-300 border-2 border-blue-200 rounded-md w-full px-4 py-2 text-lg font-medium text-slate-800 text-left'>
          Choice 1
        </button>
        <button className='bg-blue-100 hover:bg-blue-200 hover:border-blue-300 border-2 border-blue-200 rounded-md w-full px-4 py-2 text-lg font-medium text-slate-800 text-left'>
          Choice 2
        </button>
        <button className='bg-blue-100 hover:bg-blue-200 hover:border-blue-300 border-2 border-blue-200 rounded-md w-full px-4 py-2 text-lg font-medium text-slate-800 text-left'>
          Choice 3
        </button>
        <button className='bg-blue-100 hover:bg-blue-200 hover:border-blue-300 border-2 border-blue-200 rounded-md w-full px-4 py-2 text-lg font-medium text-slate-800 text-left'>
          Choice 4
        </button>
      </div>
      <hr className='border-slate-800 mt-2' />
      <div className='flex items-center justify-between mt-4'>
        <span className='font-semibold text-lg text-slate-800'>
          2 of 5 Questions
        </span>
        <button className='bg-blue-400 px-4 py-2 rounded-md text-white text-base hover:bg-blue-600'>
          Next Question
        </button>
      </div>
    </div>
  );
};

export default QuizQuestion;
