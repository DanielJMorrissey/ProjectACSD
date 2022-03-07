//Anything we need to import...
import axios from "axios";
import { useState, useEffect } from 'react';
import VideosList from './VideosList';
function Videos(){
    //business logic JS goes here if needed...
    const [video, setVideo] = useState([])
    const [select, setSelect] = useState("")
    const api = "AIzaSyB1ZCG1I4vtJBOdzzlYzND542ojc1ALMx4"  
    
    function handleInput(e){
        e.preventDefault()
        setSelect(e.target.value)
    }

    // need to handle event when nothing is sent and first load
    /*useEffect(async function(){
        console.log(select)
        var data = await axios.get("https://youtube.googleapis.com/youtube/v3/search?maxResults=10&q=" + select + "&videoCaption=any&key=" + api)
        setVideo(data.data.items)
    }, [select])*/

    async function handleSearch(e){
        e.preventDefault()
        var data = await axios.get("https://youtube.googleapis.com/youtube/v3/search?maxResults=10&q=" + select + "&videoCaption=any&key=" + api)
        setVideo(data.data.items)
    }
   
    //RETURN the JSX below to the UI   
       return (
           <div>
               <form>
                    <label htmlFor="select">Select a band</label>
                    <input onChange={handleInput} value={select}/>
                    <button onClick={handleSearch}>Search For Videos</button>
               </form>
                <VideosList vidslist={video} />
           </div>
       )
   }
   export default Videos