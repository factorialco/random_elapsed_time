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
let concurrentRequests = 0
const maxConcurrentRequests = 50

app.all("*", async (req, res) => {
  if (concurrentRequests > maxConcurrentRequests) {
    res.send("too many concurrent requests").status(429).end()
    return
  }
  concurrentRequests++
  await sleep(min,max)
  res.send("hey there, have you been waiting long?")
  concurrentRequests--
})

app.listen(process.env.PORT || 3456)
