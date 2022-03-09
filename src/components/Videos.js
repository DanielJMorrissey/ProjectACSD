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

    async function handleSearch(e){
        e.preventDefault()
        var data = await axios.get("https://youtube.googleapis.com/youtube/v3/search?maxResults=10&q=" + select + "&videoCaption=any&key=" + api)
        setVideo(data.data.items)
    }
   
    //RETURN the JSX below to the UI   
       return (
           <div>
               <form className="videoListForm">
                    <label className="videoListLabel" htmlFor="select">Select a band</label>
                    <input className="videoListInput" onChange={handleInput} value={select}/>
                    <button className="videoListBtn" onClick={handleSearch}>Search For Videos</button>
               </form>
                <VideosList vidslist={video} />
           </div>
       )
   }
   export default Videos