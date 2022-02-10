// music.js

import AppHeader from '../components/AppHeader'
import AppContent from '../components/AppContent'
import AppFooter from '../components/AppFooter'

import ReactAudioPlayer from 'react-audio-player';

const BACH = "";
const PURCELL = "";

const MusicPage = props => {

    return (
        <div className="music-page">
            <AppHeader />

            <AppContent>
                <h3>Music Page</h3>

                <div className="audio-player">
                    <ReactAudioPlayer
                        src="/media/Alchemy_70.mp3"
                        controls
                    />
                    <p>East West</p>
                    <p className={"italic"}>Alchemy_70</p>
                </div>

                <div className="audio-player">
                    <ReactAudioPlayer
                        src="/media/Cannibal_130.mp3"
                        controls
                    />
                    <p>East West</p>
                    <p className={"italic"}>Cannibal_130</p>
                </div>

                <div className="audio-player">
                    <ReactAudioPlayer
                        src="http://andyknoll.com/mp3s/sd2/Death_Hunt_120.mp3"
                        controls
                    />
                    <p>East West</p>
                    <p className={"italic"}>Death_Hunt_120.mp3</p>
                </div>

                <div className="audio-player">
                    <ReactAudioPlayer
                        src="http://andyknoll.com/mp3s/sd2/Eastern_Visions_120.mp3"
                        controls
                    />
                    <p>East West</p>
                    <p className={"italic"}>Eastern_Visions_120.mp3</p>
                </div>

                <div className="horiz-spacer"></div>

            </AppContent>

            <AppFooter />

            <style jsx>
            {`
                .audio-player {
                    margin: 20px 0px 5px 0px;
                }
                react-audio-player {
                    width: 500px;
                }
                p {
                    margin: 5px;
                }
                .italic {
                    font-style: italic;
                }
                .horiz-spacer {
                    width: 100%;
                    height: 50px;
                }
            `}
            </style>
        </div>
    )
}

export default MusicPage;
