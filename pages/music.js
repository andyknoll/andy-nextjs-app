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
                        src={BACH}
                        controls
                    />
                    <p>J.S. Bach 1</p>
                    <p className={"italic"}>Chorus from Cantata 43</p>
                </div>

                <div className="audio-player">
                    <ReactAudioPlayer
                        src={PURCELL}
                        controls
                    />
                    <p>Henry Purcell 2</p>
                    <p className={"italic"}>Sonata for Three Horns</p>
                </div>

                <div className="audio-player">
                    <ReactAudioPlayer
                        src={BACH}
                        controls
                    />
                    <p>J.S. Bach 3</p>
                    <p className={"italic"}>Chorus from Cantata 43</p>
                </div>

                <div className="audio-player">
                    <ReactAudioPlayer
                        src={PURCELL}
                        controls
                    />
                    <p>Henry Purcell 4</p>
                    <p className={"italic"}>Sonata for Three Horns</p>
                </div>

                <div className="audio-player">
                    <ReactAudioPlayer
                        src={BACH}
                        controls
                    />
                    <p>J.S. Bach 5</p>
                    <p className={"italic"}>Chorus from Cantata 43</p>
                </div>

                {/*
                <div className="audio-player">
                    <ReactAudioPlayer
                        src={PURCELL}
                        controls
                    />
                    <p>Henry Purcell 6</p>
                    <p className={"italic"}>Sonata for Three Horns</p>
                </div>
                */}

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
