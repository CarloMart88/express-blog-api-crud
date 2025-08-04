const express = require('express')

const app = express()

const port = 3000


app.use(express.static ('public'))


app.get("/" , (req , res) =>{
  res.send('Server per i miei post')
})









app.listen(port, () => {
  console.log(`Server in ascolto sulla porta ${port}`)
})