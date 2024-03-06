const express = require("express");
const api = require("alpha-ssweb-api");

const app = express();
const port = 3500;

app.get("/desktop", async (req, res) => {
  try {
    const { url } = req.query;
    if (!url) {
      return res.status(400).json({ error: "Missing 'url' parameter" });
    }

    const result = await api.desktop({
      url: decodeURIComponent(url),
      fullpage: true
    });
    console.log(result);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/handphone", async (req, res) => {
  try {
    const { url } = req.query;
    if (!url) {
      return res.status(400).json({ error: "Missing 'url' parameter" });
    }

    const result = await api.handphone({
      url: decodeURIComponent(url),
    });
    console.log(result);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/handphone-fullpage", async (req, res) => {
  try {
    const { url } = req.query;
    if (!url) {
      return res.status(400).json({ error: "Missing 'url' parameter" });
    }

    const result = await api.handphone({
      url: decodeURIComponent(url),
      fullpage: true,
    });
    console.log(result);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/desktop-fullpage", async (req, res) => {
  try {
    const { url } = req.query;
    if (!url) {
      return res.status(400).json({ error: "Missing 'url' parameter" });
    }

    const result = await api.desktop({
      url: decodeURIComponent(url),
    });
    console.log(result);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
