// music.js

import AppHeader from '../components/AppHeader'
import AppContent from '../components/AppContent'
import AppFooter from '../components/AppFooter'

import ReactAudioPlayer from 'react-audio-player';

const MusicPage = props => {

    return (
        <div className="music-page">
            <AppHeader />

            <AppContent>
                <h3>Music Page</h3>

                <div className="audio-player">
                    <ReactAudioPlayer
                        src="media/JSBach.wav"
                        controls
                    />
                    <p>J.S. Bach</p>
                    <p className="italic">"Chorus from Cantata 43"</p>
                </div>

                <div className="audio-player">
                    <ReactAudioPlayer
                        src="media/Purcell.wav"
                        controls
                    />
                    <p>Henry Purcell</p>
                    <p className="italic">"Sonata for Three Horns"</p>
                </div>

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
            `}
            </style>
        </div>
    )
}

export default MusicPage;
