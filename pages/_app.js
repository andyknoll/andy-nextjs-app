// _app.js - if this page exists then NextJS will use it instead of default App()

// if getInitialProps() is placed here is will force Server Side rendering (maybe...)

import '../styles/globals.css'

// HOW CAN I PASS APP ????
import React from 'react';

const app = {
  author: "Andy Knoll",
  visitCount: 0
}


function MyApp({ Component, pageProps }) {
  // Component prop is the active page
  // pageProps is an object with the initial props that were preloaded for your page

  React.useEffect(() => {
    app.visitCount++;
    console.log("MyApp component in _app.js");
    // console.log("app: ");
    // console.log(app);
    pageProps.app = app;
    console.log("returning pageProps: ");
    console.log(pageProps);  
  })

  return <Component {...pageProps} />
}

export default MyApp
