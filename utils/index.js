let access_token

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