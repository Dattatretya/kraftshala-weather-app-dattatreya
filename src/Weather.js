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

    
    // Taking date and time from the local machine

    const currDate = new Date().toLocaleDateString();
    const currTime = new Date().toLocaleTimeString();
 
   
    // Object with descriptive messages used for description rendering on the application. The data is received from APi as main.

    const weatherdescription = {
        "Clear":"The sky is clear. You can go ahead and take a walk.",
        "Drizzle":"It's drizzling. Carry an umbrella with you.",
        "Few clouds": "There are a few cloud. It's safe to go outside and take a walk. ",
        "Scattered cloud":"The sky is clear with scattered clouds.",
        "Broken clouds":"It might rain as there are broken clouds. Carry an umbrella along.",
        "Shower rain":"It is raining. Wear a raincoat. But if you are already outside, enjoy the rain.",
        "Rain":"It is raining. Enjoy the rain.",
        "Thunderstorm": "It might rain as there are thunderstorms. Stay safe inside.",
        "Snow":"Yippee!! It snowing outside",
        "Mist":"It's misty outside. Drive safely.",
        "Haze":"It's hazy outside. Drive safely.",
        "Smoke":"There smoke all around. Wear a mask and carry an inhaler if you have one.",
        "Dust":"It's a dusty weather. Wear a mask.",
        "Fog":"It's foggy outside. Drive safe and do't step outside without a torch.",
        "Sand":"It's a sandy weather. Wear a mask",
        "Ash":"There's ashes everywhere. Wear a mask",
        "Squall":"It's a squally weather. Take shelter.",
        "Tornado":"There's a tornado. Please stay safe.",
        "Clear":"The sky is clear. Enjoy the day.",
        "Clouds":"It's a cloudy day."

        }

        // Object with image links for the images to be rendered as background images for the weather app depending on the weaher description, thus stores as key value pairs, the keys being the description receibed from the API as "Main"

        const weatherimage = {
            "Clear sky": "https://png.pngtree.com/background/20211216/original/pngtree-weather-blue-sky-daytime-white-clouds-clear-sky-picture-image_1507468.jpg",
            "Drizzle":"https://w0.peakpx.com/wallpaper/129/941/HD-wallpaper-rainy-sunset-city-drops-lights-nature-rain-raindrops-weather-wet.jpg",
            "Few clouds": "https://media.istockphoto.com/id/512218646/photo/storm-sky-rain.jpg?s=612x612&w=0&k=20&c=RoUDM9BMwqW8NkPXjzAzlDKCHPOmdZhmmeT3jGA2EaM=",
            "Scattered cloud":"https://media.istockphoto.com/id/512218646/photo/storm-sky-rain.jpg?s=612x612&w=0&k=20&c=RoUDM9BMwqW8NkPXjzAzlDKCHPOmdZhmmeT3jGA2EaM=",
            "Broken clouds":"https://media.istockphoto.com/id/512218646/photo/storm-sky-rain.jpg?s=612x612&w=0&k=20&c=RoUDM9BMwqW8NkPXjzAzlDKCHPOmdZhmmeT3jGA2EaM=",
            "Shower rain":"https://w0.peakpx.com/wallpaper/129/941/HD-wallpaper-rainy-sunset-city-drops-lights-nature-rain-raindrops-weather-wet.jpg",
            "Rain":"https://w0.peakpx.com/wallpaper/129/941/HD-wallpaper-rainy-sunset-city-drops-lights-nature-rain-raindrops-weather-wet.jpg",
            "Thunderstorm": "https://media.istockphoto.com/id/1413876271/photo/lightning-strike-in-a-thunderstorm.jpg?s=612x612&w=0&k=20&c=TZhuf1H_qbJbiY14YwGvnMEMjF8cw0CQ1TJjGQ-tBGE=",
            "Snow":"https://images.ctfassets.net/4ivszygz9914/d293fdad-9515-4346-ae29-39e4a0aad121/f28eef802087b1d200390e47060195f0/a397976e-586e-46d3-8a61-f6fb6322bd9b.jpg?fm=webp",
            "Mist":"https://cdn.pixabay.com/photo/2016/11/22/19/10/clouds-1850093_640.jpg",
            "Haze":"https://cdn.pixabay.com/photo/2016/11/22/19/10/clouds-1850093_640.jpg",
            "Smoke":"https://c0.wallpaperflare.com/preview/992/147/619/weather-smoke-smog-pollution.jpg",
            "Dust":"https://media.istockphoto.com/id/1183248853/photo/australian-drought-dust-storm-in-western-new-south-wales.jpg?s=612x612&w=0&k=20&c=_CpuH4TymEukHZvvD0NtC-5960AZNJDQSl44bk_ZB1w=",
            "Fog":"https://cdn.pixabay.com/photo/2016/11/22/19/10/clouds-1850093_640.jpg",
            "Sand":"https://www.shutterstock.com/image-photo/large-storm-formed-powdered-dust-260nw-1079422415.jpg",
            "Ash":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpNjOwe--UIce37ejNxnxY8p9N3wkQ7Y3sMA&s",
            "Squall":"https://c02.purpledshub.com/uploads/sites/41/2022/07/AlamyDB66PW-c-54bf9ae.jpg?w=1029&webp=1",
            "Tornado":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2jZB8rEp2oXUJk3UW6fOo5aViILAl_0j7Og&s",
            "Clear":"https://png.pngtree.com/background/20211216/original/pngtree-weather-blue-sky-daytime-white-clouds-clear-sky-picture-image_1507468.jpg",
            "Clouds":"https://media.istockphoto.com/id/512218646/photo/storm-sky-rain.jpg?s=612x612&w=0&k=20&c=RoUDM9BMwqW8NkPXjzAzlDKCHPOmdZhmmeT3jGA2EaM="
    
            }

            // function that is called to reset the data on the weather call app
        const reset = ()=>{
            setFinalLoc("")
            setLocation("")
        }


    //useEffect hook for making the api call once the final location changes
    
    useEffect(()=>{
        weatherCall()
    },[finalLoc])
   

    //an async function to get te api data
    
    const weatherCall =async ()=>{
        const data =await fetch(URL)
        const json = await data.json()
        setWeatherData(json)
    }
    

    const API_KEY= "70b1a04435e3173a3d8a2cb2d841a049"
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${finalLoc}&appid=${API_KEY}&units=metric`
    

    

  return (

    //Main container for the Weather data
    <div 
    style={{backgroundImage: `url(${weatherimage[weatherData?.weather?.[0]?.main]})`}}
    className="rounded-lg m-2 p-2 shadow-xl"> 

    {/* form is used to received user input and on click or on pressing enter, the data is used to make an API call */}
        <form className='flex justify-center' onSubmit={(e)=>e.preventDefault()}>
        <input type='text' placeholder='📍 location' className='border border-black shadow-lg px-2 py-1 m-1 rounded-lg capitalize dark:bg-black dark:text-white' value={location} 
        onChange={(e)=>setLocation(e.target.value)}
        />
        <button type='submit' className='dark:bg-black dark:text-white rounded-lg m-1 px-2 py-1 bg-white text-black'
        onClick={()=>{setFinalLoc(location)}}
        onSubmit={()=>{setFinalLoc(location)}}
        >Search</button>
        </form>

        {/* Conditional rendering of the weather data so that data is only rendered when available. The error is handled on this step and it returns an appropriate message on the screen */}
        {weatherData.main? 
        (
        <div 
        className='m-4 p-2 bg-gray-200 opacity-55 rounded-md dark:bg-black dark:text-white'>
            <div className='text-3xl'>
            <p className='flex justify-center'> {weatherData?.name}, {weatherData?.sys?.country} </p>

            {/* used optional chaining on the object render dot notation to prevent errors */}

            </div>
            <div className='m-2 -2'>
            <div className='flex justify-center items-center'>
            <img id='image' src={`https://openweathermap.org/img/wn/${weatherData?.weather?.[0]?.icon}@2x.png`} alt='weather'></img>
            <p className='text-2xl'> {weatherData?.main?.temp}°C</p>
            </div>
            <p className='text-md flex justify-center'>as on {currDate}, {currTime}</p>
            <p className='flex justify-center text-xl mt-6'>Feels like {weatherData?.main?.feels_like} °C</p>
            <div className='flex justify-between text-xl m-2'>
                {/* if temperature is same for both minimum and maximum, do not show range, else give the range as min to maximum */}
               {weatherData?.main?.temp_min!==weatherData?.main?.temp_max?
               (<p>Range: {weatherData?.main?.temp_min} °C to {weatherData?.main?.temp_max} °C</p>)
               :
            (<p></p>)
                }
            </div>
            
            </div>
            <div className='m-2 p-2'>
            <div className='flex justify-between items-center'>
            <p className='font-bold flex justify-center m-1 p-1'>{weatherdescription[weatherData?.weather?.[0]?.main]}</p>
            </div>

            <p className='m-1 p-1 text-xl flex justify-center'>Humidity is {weatherData?.main?.humidity}%</p>
            <p className='m-1 p-1 text-xl flex justify-center'>Wind is blowing at {weatherData?.wind?.speed} km/h</p>
            <p className='m-1 p-1 text-xl flex justify-center'>Visibility is upto {weatherData?.visibility/1000} km</p>
            </div>

                {/* Reset Button to reset the data back to null */}

            <div className='flex justify-center'>
            <button className='dark:bg-yellow-500 border-white dark:text-black p-2 rounded-lg text-white bg-black' onClick={()=>reset()}>Reset</button>
            </div>
        </div>
        )
        //Display message when data is not there
        :
        <div className='m-2 p-2 rounded-lg text-white dark:bg-black dark:text-white'>Please enter a valid location</div>
        }
    </div>
    
  )
}

export default Weather