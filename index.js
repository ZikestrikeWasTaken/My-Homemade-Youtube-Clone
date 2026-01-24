import express from 'express'

const app = express()
const path = import('path')

app.use('/', express.static('Frontend/'))
app.use('/watch', express.static('Frontend/watch.html'))

app.listen(80, () => {
  console.log('Server is running on http://localhost')
})