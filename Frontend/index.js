import express from 'express'

const app = express()
const path = import('path')

app.use('/', express.static(''))
app.use('/watch', express.static('watch.html'))

app.listen(80, () => {
  console.log('Server is running on http://0.0.0.0')
})