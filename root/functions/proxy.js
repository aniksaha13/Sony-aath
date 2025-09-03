import fetch from "node-fetch";

export async function handler(event, context) {
  const url = "https://tataplay.slivcdn.com/hls/live/2011641/SonyAathSD/master_2000.m3u8";
  const response = await fetch(url);
  const text = await response.text();

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/vnd.apple.mpegurl",
      "Access-Control-Allow-Origin": "*",
    },
    body: text
  };
}
