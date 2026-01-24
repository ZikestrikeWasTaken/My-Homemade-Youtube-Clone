const express = require('express')
const app = express()

// Main page invalid
app.get('/', (req, res) => {
  res.send('Invalid Page')
})
// Needs to go to a python script since that's easier
app.get('/watch', (req, res) => {
  res.send('Dummy Code Right Now')
})

app.listen(8090, () => {
  console.log('Server is running on http://localhost:8090')
})