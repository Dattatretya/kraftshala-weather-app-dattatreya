import React, { useEffect, useState } from 'react'

const Weather = () => {

    /*3 useState hooks- 
    
    -location for getting the user input 
    -finalLoc for setting the user input to make jut one api call and optimize the calls 
    -wetherData to set the values received by the API call and render them on the screen
    
    */
    const [location, setLocation] = useState("")
    const [finalLoc, setFinalLoc] = useState("")
    const [weatherData, setWeatherData] = useState([])

    const weatherdescription = {
        "clear sky":"The sky is clear. You can go ahead and take a walk.",
        "few clouds": "The sky is clear with few cloud. It's safe to go outside take a walk. ",
        "scattered cloud":"The sky is clear with scattered clouds.",
        "broken clouds":"It might rain as there are broken clouds. Carry an umbrella along.",
        "shower rain":"It is raining. Wear a raincoat. But if you are already outside, enjoy the rain.",
        "rain":"It is raining. Enjoy the rain.",
        "thunderstorm": "It might rain as there are thunderstorms. Stay safe inside.",
        "snow":"Yippee!! It snowing outside",
        "mist":"It's misty outside. Drive safely."

        }


    //useEffect hook for making the api call once the final location changes

    useEffect(()=>{
        weathercall()
    },[finalLoc])


    //an async function to get te api data

    const weathercall =async ()=>{
        const data =await fetch(URL)
        const json = await data.json()
        console.log(json)
        setWeatherData(json)
    }

    const API_KEY= "70b1a04435e3173a3d8a2cb2d841a049"
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${finalLoc}&appid=${API_KEY}&units=metric`
    

    

    console.log(location)
  return (
    <div>
        <div className='flex justify-center'>
        <input type='text' placeholder='📍 location' className='border border-black shadow-lg px-2 py-1 m-1 rounded-lg' value={location} 
        onChange={(e)=>setLocation(e.target.value)}
        />
        <button type='submit' className='bg-black text-white rounded-lg px-2 py-1'
        onClick={()=>setFinalLoc(location)}
        >Search</button>
        </div>

        {weatherData.main? 
        (
        <div className='m-2 p-2'>
            <div className='text-3xl'>
            <p className='flex justify-center'> {weatherData?.name}, {weatherData?.sys?.country} </p>

            </div>
            <div className='m-2 -2'>
            <div className='flex justify-center items-center'>
            <img id='image' src={`https://openweathermap.org/img/wn/${weatherData?.weather?.[0]?.icon}@2x.png`} alt='weather'></img>
            <p className='text-2xl'> {weatherData?.main?.temp}°C</p>
            </div>
            <p className='flex justify-center text-xl'>Feels like {weatherData?.main?.feels_like} °C</p>
            <div className='flex justify-between text-xl m-2'>
                {/* if temperature is same for both minimum and maximum, do not show range but show the temparture is sme throughout */}
               {weatherData?.main?.temp_min!==weatherData?.main?.temp_max?
               (<p>Range: {weatherData?.main?.temp_min} °C to {weatherData?.main?.temp_max} °C</p>)
               :
            (<p></p>)
                }
            </div>
            
            </div>
            <div className='m-2 p-2'>
            <div className='flex justify-between items-center'>
            <p className='font-bold flex justify-center m-1 p-1'>{weatherdescription[weatherData?.weather?.[0]?.description]}</p>
            </div>

            <p className='m-1 p-1 text-xl flex justify-center'>Humidity is {weatherData?.main?.humidity}%</p>
            <p className='m-1 p-1 text-xl flex justify-center'>Visibility is upto {weatherData?.visibility/1000} km</p>
            </div>

        </div>
        )
        :
        <div className='m-2 p-2'>Please enter valid location</div>
        }
    </div>
  )
}

export default Weather