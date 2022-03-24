import { ReactElement } from 'react';
import { NextPage } from 'next';
import { AppProps } from 'next/app';

import '../styles/globals.css'


type NextPageWithLayout = NextPage & {
  getLayout?: ( page:ReactElement ) => JSX.Element;
}

// ReactNode === JSX.Element === ReactElement
// import { ReactNode, ReactElement } from 'react';
// JSX.Element -> No se importa

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
}

function MyApp({ Component, pageProps }:AppPropsWithLayout) {
  
  const getLayout = Component.getLayout || (page => page);
  // return <Component {...pageProps} />
  return getLayout(<Component {...pageProps} />)
}

export default MyApp
