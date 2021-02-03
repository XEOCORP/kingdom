import Head from 'next/head';
import GoogleFonts from 'next-google-fonts';
import Introduction from '../components/Introduction';

export default function Home() {
  return (
    <>
      <Head>
        <title>XEOLUX</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta property="og:title" content="XEOLUX" key="meta-title" />
        <meta
          property="og:description"
          content="mantap gays"
          key="meta-description"
        />
        <meta property="og:image" content="logo.png" />
        <meta property="og:locale" content="id_ID" key="meta-locale" />
        <meta
          property="og:locale:alternate"
          content="en_US"
          key="meta-locale-alt"
        />
      </Head>
      <GoogleFonts
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800&display=swap"
        rel="stylesheet"
      />
      <Introduction />
    </>
  );
}
