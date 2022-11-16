import type { AppProps } from 'next/app';
import Head from "next/head";
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../src/styles/global-style';
import { theme } from '../src/styles/theme';
import '../src/styles/globals.css';
import Navigation from '../components/navigation';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>넷플릭스</title>
      </Head>
      <GlobalStyle/>
      <ThemeProvider theme={theme}>
        <Navigation/>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
