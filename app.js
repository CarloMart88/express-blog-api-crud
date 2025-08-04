const express = require('express')


const app = express()


const port = 3000

const postsRouter = require('./routers/postsRouter')




app.use(express.static ('public'))

app.use('/posts' , postsRouter)



app.get("/" , (req , res) =>{
  res.send('Server per i miei post')
})









app.listen(port, () => {
  console.log(`Server in ascolto sulla porta ${port}`)
})