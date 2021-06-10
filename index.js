const express = require('express');
const app = express()

const sleep = (min, max) => {
  const offset = max - min
  const seconds = Math.round(Math.random() * offset + min)
  return new Promise(resolve => {
    setTimeout(resolve, seconds * 1000)
  })
}


app.get("/health", (req, res) => {
  res.status(204).end()
})

const min = parseInt(process.env.MIN) || 2
const max = parseInt(process.env.MAX) || 10

app.all("*", async (req, res) => {
  await sleep(min,max)
  res.send("hey there, have you been waiting long?")
})

app.listen(process.env.PORT || 3456)
