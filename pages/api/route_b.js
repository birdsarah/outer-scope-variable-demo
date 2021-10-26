import { route_b } from "../../utils";

export default async function handler(req, res) {
  const access_token_in = req.query.access_token;
  const access_token_out = await route_b(req);
  res.status(200).json({ 
    route: 'b',
    access_token_in: access_token_in,
    access_token_out: access_token_out, 
  })
}