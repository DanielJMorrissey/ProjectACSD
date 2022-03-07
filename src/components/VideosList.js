function VideosList(props){
    return (
        <div>
            <ul>
                {
                    props.vidslist.map(function(i, index){
                        var iframeLink = "https://www.youtube.com/embed/" + i.id.videoId
                        if(props.vidslist.length == 0){
                            return (
                                <div>
                                    No data was found, try again later
                                </div>
                            )
                            
                        } else {
                            return (
                                <li key={index}>
                                    <iframe src={iframeLink} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                </li>
                            )
                        }
                        
                    })
                }
            </ul>
        </div>
    )
}

export default VideosList