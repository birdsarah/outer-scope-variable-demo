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
      <p>The API endpoints are set-up with a randomized 0-10ms timeout to help simulate a race condition.</p>
      <p>When we make 10 calls to each API in quick succession. We see the following output:</p>
      <ul id="output"></ul>
      <p>
        Setting <code>access_token</code> outside of the scope of the <code>route_a</code> and <code>route_b</code> functions causes a collision and
        <code>route_a</code> and <code>route_b</code> now overwrite each other randomly.
      </p>
      <p>The code for this repo is at <a href="https://github.com/birdsarah/outer-scope-variable-demo">https://github.com/birdsarah/outer-scope-variable-demo</a></p>
     </main>
    </div>
  )
}
