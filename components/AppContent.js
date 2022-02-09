// AppContent.js

import { motion } from "framer-motion";

const AppContent = props => {

    <motion.h3
    initial={{ opacity: 0, top: "100px" }}
    animate={{ opacity: 1, top: "0px" }}
    transition={{ duration: 0.5 }}
>
    Code Page
</motion.h3>


    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="app-content">
                {props.children}
            </div>

            <style jsx>
            {`
                .app-content {
                    position: relative;
                    bottom: 0px;
                    height: calc(100vh - 100px);
                    padding: 10px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: flex-start;
                    min-height: 600px;
                    overflow: scrollY;
                    // background-color: #dddddd;
                    // border: 1px solid green;
                }  
            `}
            </style>

        </motion.div>
    )
}

export default AppContent;
