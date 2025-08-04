const posts = require('../dataposts.js')


// index // per vedere tutti gli elementi 

const index = (req , res) => {
  res.json('Per visualizzare tutti gli elementi')
}

// show // per vedere tutti gli elementi 

const show = (req , res) => {
  let id = req.params.id
  res.json(`Per visualizzare tutti gli elementi con ${id}`)
}

// store // per creare un elemento nuovo

const store = (req , res) => {
  res.json('per creare un elemento nuovo')
}

// update // per modificare totalmente un elemento con id 

const update = (req , res) => {
  let id = req.params.id
  res.json(`per modificare totalmente un elemento con ${id}`)
}

// modify // per modificare parzialmente un elemento con id 

const modify = (req , res) => {
  let id = req.params.id
  res.json(`per modificare parzialmente un elemento con ${id}`)
}

// remove  // per eliminare un elemento con id 

const destroy = (req , res) => {
  let id = req.params.id
  res.json(`per eliminare un elemento con ${id}`)
}

module.exports = {
  index,show,store,modify,update,destroy
}