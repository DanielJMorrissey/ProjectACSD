//Anything we need to import...
import axios from "axios";
import { useState, useEffect } from 'react';
import VideosList from './VideosList';
function Videos(){
    //business logic JS goes here if needed...
    const [video, setVideo] = useState([])
    const [select, setSelect] = useState("")
    const api = "AIzaSyB1ZCG1I4vtJBOdzzlYzND542ojc1ALMx4"  
    
    function handleSearch(e){
        e.preventDefault()
        var selectValue = document.getElementById("select").value
        setSelect(selectValue)
    }

    // need to handle event when nothing is sent and first load
    useEffect(async function(){
        var data = await axios.get("https://youtube.googleapis.com/youtube/v3/search?maxResults=10&q=" + select + "&videoCaption=any&key=" + api)
        setVideo(data.data.items)
    }, [video])
   
    //RETURN the JSX below to the UI   
       return (
           <div>
               <form>
                    <label htmlFor="select">Select a band</label>
                    <select id="select" name="selectBand">
                        <option value=""></option>
                        <option value="rise against">Rise Against</option> 
                        <option value="green day">Green Day</option>  
                    </select>
                    <button onChange={handleSearch}>Search For Videos</button>
               </form>
                <VideosList vidslist={video} />
           </div>
       )
   }
   export default Videos