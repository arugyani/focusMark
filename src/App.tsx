import PomodoroTimer from "./components/custom/PomodoroTimer";

const App = () => {
  return (
    <div className='container mx-auto p-4'>
      <h2 className='scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0'>
        focusMark
      </h2>
      <div className='pt-2 flex flex-row justify-between'>
        <PomodoroTimer />
        <p>World</p>
      </div>
    </div>
  );
};

export default App;
