// _app.js - if this page exists then NextJS will use it instead of default App()

// if getInitialProps() is placed here is will force Server Side rendering (maybe...)

import '../styles/globals.css'

// HOW CAN I PASS app TO OTHER COMPONENTS ????
import React from 'react';
import andyApp from '../app/AndyApp';

const app = {
  author: "Andy Knoll",
  visitCount: 0,
  version: "1.0.0"
}

console.log("_app.js file executing");

function MyApp({ Component, pageProps }) {
  console.log("======================== MyApp component entered ==================");
  // console.log("Component: ");
  // console.log(Component);
  // console.log("pageProps: ");
  // console.log(pageProps);

  // const [state, setState] = React.useState(0);
  // andyApp.refreshUI = setState(Math.random());

  console.log("andyApp: ");
  console.log(andyApp);

  // console.log("incrementing app.visitCount");
  // app.visitCount++;
  // if (!pageProps.app) {
  //   //console.log("assigning pageProps.app!");
  //   pageProps.app = app;
  // } else {
    //console.log("pageProps.app already assigned");
  // }

  // console.log("pageProps.app.visitCount: ");
  // console.log(pageProps.app.visitCount);

  // Component prop is the active page
  // pageProps is an object with the initial props that were preloaded for your page

  React.useEffect(() => {
  })

  return <Component {...pageProps} />
}

export default MyApp
