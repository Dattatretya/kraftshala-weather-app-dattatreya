
import Weather from './Weather';
import useOnlineStatus from './Hooks/useOnlineStatus';
import { useState } from 'react';



function App() {

  //state variable for dark mode button

  const [dark, setDark]= useState(false)

  //function that is executed when the dark mode button is clicked. Used the classList toggle feture to toggle classes for tailwind to render accordingly.

  const darkMode=()=>{
    setDark(!dark)
    document.body.classList.toggle("dark")
  }

  // data received from the custom hook as boolean value
  
  const online = useOnlineStatus()

  return (
    <div className=''>
    <div className='flex justify-between'>
    <p className='text-white font-bold rounded-md text-lg m-2 p-2 dark:bg-black'>©️ Dattatreya</p>
    <button className='text-white bg-black m-2 p-2 rounded-lg dark:text-black dark:bg-yellow-200' onClick={()=>darkMode()}>{dark?"Light Mode":"Dark Mode"}</button>
    <p className='text-white rounded-md dark:bg-black font-bold text-lg m-2 p-2'>{online?"You are Online":"Please connect to the internet"}</p>
    </div>
    
    <div className='flex justify-center '>
      <span className='p-2 m-2 rounded-lg font-bold text-black shadow-md text-4xl dark:bg-black dark:text-white '>Weather App</span>
    </div>
    {/* Making use of the components in react to make the app take multiple locations and display that on the screen*/}
    <div className="flex justify-evenly p-2 m-2">
     <Weather/>
     <Weather/>
    </div>
    </div>
  );
}

export default App;
