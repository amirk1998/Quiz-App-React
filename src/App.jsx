import NavBar from './components/NavBar/NavBar';
import QuizList from './components/QuizList/QuizList';
import QuizQuestion from './components/QuizQuestion/QuizQuestion';

function App() {
  return (
    <div className='App w-full h-screen flex flex-col items-center justify-center bg-blue-300'>
      <NavBar />
      <QuizList />
    </div>
  );
}

export default App;
