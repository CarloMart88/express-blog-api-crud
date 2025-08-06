const express = require('express')


const app = express()


const port = 3000


const postsRouter = require('./routers/postsRouter')

// importo i due middleware

const errorsHandler = require("./middleware/errorsHandler")

const notFound = require("./middleware/notFound")


app.use(express.static('public'))

// Impostiamo il body-parser per far sì che la nostra app riesca a decifrare il request body.

app.use(express.json())


app.use('/posts' , postsRouter)



app.get("/" , (req , res) =>{
  res.send('Server per i miei post')
})









app.listen(port, () => {
  console.log(`Server in ascolto sulla porta ${port}`)
})