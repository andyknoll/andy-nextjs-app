// AppHeader.js

const AppHeader = props => {

    return (
        <div className="app-header">
            <style jsx>
            {`
                .app-header {
                    top: 0px;
                    height: 50px;
                    padding: 10px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    background-color: #eeeeee;
                } 
                .app-title {
                    font-size: 1.5em;
                } 
                .app-author {
                    font-size: 0.9em;
                } 
            `}
            </style>
            
            <div className="app-title">NextJS Demo App</div>
            <div className="app-author">by Andy Knoll</div>
        </div>
    )
}

export default AppHeader;
