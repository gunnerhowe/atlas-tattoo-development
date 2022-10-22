import axios from "axios";

export default async function handler(req, res) {

  const url = req.body.url;

  const response = await axios.get(url, {
    responseType: "arraybuffer",
  },
     {headers: {
          Authorization: "Bearer sess-yGcqdrc8VaZTJyUnz2L2JHlrW0067vnkBDSWocE0"}
      });

  const base64 = Buffer.from(response.data, "binary").toString("base64");

  res.status(200).json({ result: base64 });

}