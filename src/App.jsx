import NavBar from './components/NavBar/NavBar';
import QuizQuestion from './components/QuizQuestion/QuizQuestion';

function App() {
  return (
    <div className='App w-full h-screen flex flex-col items-center justify-center bg-blue-300'>
      <NavBar />
      <QuizQuestion />
    </div>
  );
}

export default App;
