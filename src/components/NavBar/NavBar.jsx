const NavBar = () => {
  return (
    <header className='flex items-center justify-between px-4 max-w-xl w-full bg-white rounded-t-2xl shadow-md z-10 h-14'>
      <span className='font-bold text-slate-900 text-xl'>Quiz App</span>
      <div className='font-normal text-slate-700 text-base bg-blue-300 rounded-md px-4 flex items-center justify-between py-1'>
        <span>Time Left </span>
        <div className='bg-slate-600 text-white rounded-md px-2 ml-4 w-12 text-center py-1'>
          16
        </div>
      </div>
    </header>
  );
};

export default NavBar;
