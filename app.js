const express = require('express')


const app = express()


const port = 3000


const postsRouter = require('./routers/postsRouter')


app.use(express.static ('public'))


app.use('/posts' , postsRouter)

// Impostiamo il body-parser per far sì che la nostra app riesca a decifrare il request body.

app.use(express.json())

app.get("/" , (req , res) =>{
  res.send('Server per i miei post')
})









app.listen(port, () => {
  console.log(`Server in ascolto sulla porta ${port}`)
})