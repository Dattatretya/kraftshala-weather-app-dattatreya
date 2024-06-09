
import Weather from './Weather';
import useOnlineStatus from './Hooks/useOnlineStatus';
import { useState } from 'react';



function App() {

  const [dark, setDark]= useState(false)

  const darkMode=()=>{
    setDark(!dark)
    document.body.classList.toggle("dark")
  }

  const online = useOnlineStatus()

  return (
    <div className=''>
    <div className='flex justify-between'>
    <p className='text-white font-bold text-lg m-2 p-2 dark:text-black'>©️ Dattatreya</p>
    <button className='text-white bg-black m-2 p-2 rounded-lg dark:text-black dark:bg-yellow-200' onClick={()=>darkMode()}>{dark?"Light Mode":"Dark Mode"}</button>
    <p className='text-white  dark:text-black font-bold text-lg m-2 p-2'>{online?"You are Online":"Please connect to the internet"}</p>
    </div>
    
    <p className='flex justify-center p-2 m-2 rounded-lg font-bold text-black shadow-md text-4xl dark:bg-black dark:text-white '>Weather App</p>
    
    <div className="flex justify-evenly p-2 m-2">
     <Weather/>
     <Weather/>
    </div>
    </div>
  );
}

export default App;
