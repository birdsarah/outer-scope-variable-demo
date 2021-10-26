import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="stylesheet" href="/main.css" />
        <script type="text/javascript" src="/main.js" />

      </Head>

      <main>
        <h1 className="title">
          Outer scope variable demo
        </h1>
        <p>Api routes a and b share the following code:</p>
        <code><pre>{`
let access_token;

const timer = ms => new Promise( res => setTimeout(res, ms));
const randomWait = () => Math.random() * 1000

export async function route_a(req) {
  access_token = req.query.access_token;
  await timer(randomWait());
  return access_token;
}

export async function route_b(req) {
  access_token = req.query.access_token;
  await timer(randomWait());
  return access_token;
}
      `}</pre></code>
      <p>The API endpoints are set-up to simulate a race condition when we hit them at the same time in quick successtion.</p>
      <p>First we hit endpoints a and b seperately and slowly to avoid the race condition. We see the following expected output:</p>
      <ul id="slow-output"></ul>
      <p>Now we hit them repeatedly in quick succession to simulate a higher-load server. We see the following output:</p>
      <ul id="fast-output"></ul>
      <p>
        Setting <code>access_token</code> outside of the scope of the <code>route_a</code> and <code>route_b</code> functions causes a collision and
        <code>route_a</code> and <code>route_b</code> now overwrite each other randomly.
      </p>
     </main>
    </div>
  )
}
