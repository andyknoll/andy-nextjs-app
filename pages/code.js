// code.js

import { motion } from "framer-motion";

import AppHeader from '../components/AppHeader'
import AppContent from '../components/AppContent'
import AppFooter from '../components/AppFooter'

const CodePage = props => {

    return (
        <div className="code-page">
            <AppHeader />

            <AppContent>
                <h3>Code Page</h3>

                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }} style={{width: "100%"}}>
                    <div className="content-card">
                        Code Example 1
                    </div>
                </motion.div>

                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.50 }} style={{width: "100%"}}>
                    <div className="content-card">
                        Code Example 2
                    </div>
                </motion.div>

                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.75 }} style={{width: "100%"}}>
                    <div className="content-card">
                        Code Example 3
                    </div>
                </motion.div>

                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.0 }} style={{width: "100%"}}>
                    <div className="content-card">
                        Code Example 4
                    </div>
                </motion.div>

            </AppContent>

            <AppFooter />

            <style jsx>
            {`
                .content-card {
                    height: 100px;
                    margin: auto;
                    margin-bottom: 10px;
                    padding: 10px;
                    background-color: #fafafa;
                    border-radius: 10px;
                    box-shadow: 1px 1px 1px gray;
                    // border: 1px solid gray;
                }

                @media screen and (min-width: 1200px) {
                    .content-card {
                        height: 150px;
                        width: 1000px;
                    }    
                }
            `}
            </style>
        </div>
    )
}

export default CodePage;
