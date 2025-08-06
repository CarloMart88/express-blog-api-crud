// definizione di middleware 

const errorsHandler = (err , req , res , next) => {


  res.status(500).json({
    errore : err.message
  })
}

module.exports = errorsHandler