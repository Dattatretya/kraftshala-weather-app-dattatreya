# kraftshala-weather-app-dattatreya

Weather-app using OpenWeatherMap API:

1. Created an account in https://openweathermap.org/ and was provided with an API to make 1000 calls per day

Brief summary of the application:

1. Created a basic structure using create react app
2. Used Tailwind CSS for styling the app
3. Used a custom hook to show online and offline status
4. Used tailwind dark class to implement dark mode
5. Made efficient API calls and used appropriate messages for errors
6. Made a weater component which is the main component where the API calls have been made and the logic for the app is written
7. Did not make use of a constants file as the app is small and fit below 180 lines of code. used the constants in the same Weather.js file
8. Re-used the Weather component for giving the app ability to query multiple applications
9. Used Objects with approprite description for the weather descriptions to be displayed on the screen. Each description has been aptly mapped to the description provided by the API
10. Used objects with Approprita images to load as the background image for the descriptions of the weather received from the API. Used the "style" attribute in the div to render the image on the screen from the object.
11. The information shown in the App is :

    -Location
    -Temperature along with the icon
    -Date and time when the temperature is retrieved
    -Feels-like temperature
    -Description of the weather wit a short message
    -Humidity
    -Wind speed
    -Visibility
    *all the units are in metric (temperature in degress celcius)
12. Functionalities/ Features:
    -Light and Dark mode






How to get the app to your local repository and run:

1. Clone the repo to you local folder using the terminal command (please make sure to be the corect directory and then run the command)

git clone "https://github.com/Dattatretya/kraftshala-weather-app-dattatreya"

2. Open the folder by the name "kraftshala-weather-app-dattatreya" that has been cloned, in vs code/preferred IDE by right-clicking and selecting VS Code. Please check if you are in the correct folder before opening.

3. To run the app, write the below command in the terminal of the IDE:

"npm start" 
or 
"npm run start"


Known Issues/Limitations:

1. The network error has not been resolved and if it is run in offline mode, it gives a "Failed to fetch error". Did not use a try and catch block for that.
2. The dark mode background image could have been different.


The app has been deployed in netlify. Here is the link:

https://dattatreya-weather.netlify.app/