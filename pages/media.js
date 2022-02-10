// media.js

/*
Visual Overload
https://www.youtube.com/watch?v=90x2xX3rjuo

RIT Sports
https://youtu.be/nw_FYcd8xSw

Midnight Blue
https://youtu.be/_1ztLjGIHDM

Feels Like
https://www.youtube.com/watch?v=qEWVwynKK3M

Best of Beatclub
https://www.youtube.com/watch?v=InQ44lgY1gw

HO Walkthrough
https://www.youtube.com/watch?v=wfN8z4LCP4Q
*/

import React from 'react'
import andyApp from '../app/AndyApp';

import AppHeader from '../components/AppHeader'
import AppContent from '../components/AppContent'
import AppFooter from '../components/AppFooter'

import ReactPlayer from 'react-player'

// now using andyApp.videos!  :-)
// const videos = [
//     {name: "Hollywood Orchestra", url: "https://www.youtube.com/watch?v=wfN8z4LCP4Q", author: "East West"},
//     {name: "Visual Overload", url: "https://www.youtube.com/watch?v=90x2xX3rjuo", author: "Andy Knoll"},
//     {name: "Best of Beatclub", url: "https://www.youtube.com/watch?v=InQ44lgY1gw", author: "Beatclub"},
//     {name: "RIT Sports Zone", url: "https://youtu.be/nw_FYcd8xSw", author: "Andy Knoll"}
// ]

const MediaPage = props => {

    const videos = andyApp.videos;
    const [videoIndex, setVideoIndex] = React.useState(0);

    const playVideo = (index) => {
        setVideoIndex(index);
    }

    return (
        <div className="media-page">
            <AppHeader />

            <AppContent>
                <h3>Media Page</h3>
                <p>app.counter: {andyApp.counter}</p>

                <div className="video-player">
                    <ReactPlayer 
                        url={videos[videoIndex].url}
                        controls={true}
                        width="100%"
                        height="100%"
                    />
                </div>

                <div className="flex-row">
                    <button className="button-a" onClick={() => playVideo(0)}>{videos[0].name}</button>
                    <button className="button-a" onClick={() => playVideo(1)}>{videos[1].name}</button>
                    <button className="button-a" onClick={() => playVideo(2)}>{videos[2].name}</button>
                    <button className="button-a" onClick={() => playVideo(3)}>{videos[3].name}</button>
                </div>

                <h3>{videos[videoIndex].name}</h3>
                {videos[videoIndex].author}

            </AppContent>

            <AppFooter />

            <style jsx>
            {`
                .video-player {
                    width: 340px;
                    height: 180px;
                    margin-bottom: 20px;
                    // border: 1px solid red;
                }
                .flex-row {
                    width: 350px;
                    display: flex;
                    justify-content: space-between;
                    // border: 1px solid gray;
                }
                .button-a {
                    margin: 5px;
                    width: 150px;
                    height: 40px;
                    color: #eeeeee;
                    background: #333333;
                    border: none;
                    border-radius: 5px;
                }

                @media screen and (min-width: 1200px) {
                    .video-player {
                        width: 680px;
                        height: 360px;
                    }
                    .flex-row {
                        width: 690px;
                    }    
                }

            `}
            </style>
        </div>
    )
}

export default MediaPage;
