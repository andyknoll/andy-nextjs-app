// media.js

import AppHeader from '../components/AppHeader'
import AppContent from '../components/AppContent'
import AppFooter from '../components/AppFooter'

const MediaPage = props => {

    return (
        <div className="media-page">
            <AppHeader />

            <AppContent>
                <h3>Media Page</h3>
            </AppContent>

            <AppFooter />

            <style jsx>
            {`
            `}
            </style>
        </div>
    )
}

export default MediaPage;
