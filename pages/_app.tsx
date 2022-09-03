import '../styles/globals.css';
import Head from 'next/head';

import type { AppProps } from 'next/app';
import { Container, SSRProvider } from 'react-bootstrap';
import Layout from '../components/Layout';
import { SessionProvider } from 'next-auth/react';

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SSRProvider>
      <SessionProvider session={session}>
        <Layout>
          <Head>
            <title>Kentobean Live | Moderator Controls</title>
            <meta
              name='viewport'
              content='width=device-width, initial-scale=1'
            />
            <meta name='description' content='Generated by create next app' />
            <link rel='icon' href='/favicon.ico' />
            <link
              rel='stylesheet'
              href='https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css'
              integrity='sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor'
              crossOrigin='anonymous'
            />
            <link
              href='https://fonts.googleapis.com/css2?family=MavenPro&display=optional'
              rel='stylesheet'
            />
          </Head>
          <Container>
            <Component {...pageProps} />
          </Container>
        </Layout>
      </SessionProvider>
    </SSRProvider>
  );
}

export default MyApp;
