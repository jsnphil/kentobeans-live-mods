import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Get data submitted in request's body.
  const body = req.body;

  // Optional logging to see the responses
  // in the command line where next.js app is running.
  console.log(`body: ${JSON.stringify(body, null, 2)}`);

  const kentobotApiHost = process.env.KENTOBOT_API_HOST;
  const endpoint = `https://${kentobotApiHost}/dev/song-requests/request/${body.youtubeId}?date=${body.date}&requester=${body.username}`;

  console.log(`Endpoint: ${endpoint}`);

  const options = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'X-Api-Key': process.env.KENTOBOT_API_KEY!
    },
    body: JSON.stringify({
      sotnWinner: true,
      artist: body.artist,
      title: body.title,
      featuredArtist: body.featuredArtist?.value,
      songYear: body.songYear.value
    })
  };

  const response = await fetch(endpoint, options);

  if (response.status == 204) {
    res.status(200).json({ result: 'saved' });
  } else {
    res.status(response.status).json(await response.json());
  }
}
