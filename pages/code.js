// code.js

import React from "react";
import { motion } from "framer-motion";

import AppHeader from '../components/AppHeader'
import AppContent from '../components/AppContent'
import AppFooter from '../components/AppFooter'

import andyApp from '../app/AndyApp';

const CodePage = (props) => {
    //const app = props.app;
    console.log("");
    console.log("=== CodePage ===");

    console.log("andyApp: ");
    console.log(andyApp);

    const [localCounter, setLocalCounter] = React.useState(andyApp.counter);
  
    // console.log("props.app.visitCount BEFORE incr: " +   props.app.visitCount);
    // props.app.visitCount += 1;
    // console.log("props.app.visitCount AFTER incr: " +   props.app.visitCount);
    // console.log("props:");
    // console.log(props);
    // console.log("");
      
    return (
        <div className="code-page">
            <AppHeader />

            <AppContent>
                <h3>Code Page</h3>

                <p>app.counter: {andyApp.counter}</p>
                <div>
                    <button onClick={() => {andyApp.decrCounter(); setLocalCounter(andyApp.counter)}}>decr counter</button>
                    <button onClick={() => {andyApp.incrCounter(); setLocalCounter(andyApp.counter)}}>incr counter</button>
                </div>
                <br/>

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

                {/*
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.0 }} style={{width: "100%"}}>
                    <div className="content-card">
                        Code Example 4
                    </div>
                </motion.div>
                */}

                <div className="horiz-spacer"></div>

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

                button {
                    margin: 5px;
                    width: 150px;
                    height: 40px;
                    color: #000000;
                    border: none;
                    border-radius: 5px;
                }

                .horiz-spacer {
                    width: 100%;
                    height: 50px;
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
