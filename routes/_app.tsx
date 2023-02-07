import { AppProps } from '$fresh/server.ts';
import { Head } from '$fresh/runtime.ts';

export default function App({ Component }: AppProps) {
  return (
    <>
      <Head>
        <title>Phil's Portfolio v2</title>
        <link rel="stylesheet" href="/app.css" />
      </Head>
      <Component />
    </>
  )
}