import { useEffect, useState } from "react";

//making a custom hook for status of internet
function useOnlineStatus(){

    const [status, setStatus] = useState(true)


    //using the eventlistener from the browser to know the status of connectivity and return a boolean value depending on it
    useEffect(()=>{

        window.addEventListener("offline", ()=>{
            setStatus(false)
        })

        window.addEventListener("online", ()=>{
            setStatus(true)
        })

    }, [])
    return status

}

export default useOnlineStatus