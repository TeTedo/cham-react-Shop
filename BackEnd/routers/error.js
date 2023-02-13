const express = require("express");
const router = express.Router();
const { Octokit } = require("@octokit/core");
require("dotenv").config();
router.post("/error", async (req, res) => {
  const { title, body, labels } = req.body;
  const octokit = new Octokit({ auth: process.env.GIT_TOKEN });

  await octokit
    .request(`POST /repos/TeTedo/cham-react-Shop/issues`, {
      owner: "TeTedo",
      repo: "cham-react-Shop",
      title: title,
      body: body,
      labels: labels,
    })
    .then(() => {
      res.send(true);
    })
    .catch(() => {
      res.send(false);
    });
});

module.exports = router;
