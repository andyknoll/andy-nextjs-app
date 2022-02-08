// music.js

import AppHeader from '../components/AppHeader'
import AppContent from '../components/AppContent'
import AppFooter from '../components/AppFooter'

const MusicPage = props => {

    return (
        <div className="music-page">
            <AppHeader />

            <AppContent>
                <h3>Music Page</h3>
            </AppContent>

            <AppFooter />

            <style jsx>
            {`
            `}
            </style>
        </div>
    )
}

export default MusicPage;
