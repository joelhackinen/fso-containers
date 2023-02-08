const express = require('express');
const { getAsync } = require('../redis');
const router = express.Router();

router.get("/", async (_, res) => {
  const todoCount = await getAsync("added_todos")
  res.json({ "added_todos": Number(todoCount) });
})

module.exports = router;