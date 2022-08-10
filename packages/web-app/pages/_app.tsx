import "../public/styles.css"
import Head from "next/head"
import { StrictMode } from "react"
import { AppProps } from "next/app"

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <StrictMode>
            <Head>
                <title>Alphabet Explorer</title>
                <link rel="shortcut icon" href="/favicon.ico" />
                <meta name="description" content="Alphabet Mainnet Explorer" />
            </Head>
            <Component {...pageProps} />
        </StrictMode>
    )
}
