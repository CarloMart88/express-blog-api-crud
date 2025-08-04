
// index // per vedere tutti gli elementi 

(req , res) => {
  res.json('Per visualizzare tutti gli elementi')
}

// show // per vedere tutti gli elementi 

(req , res) => {
  let id = req.params.id
  res.json(`Per visualizzare tutti gli elementi con ${id}`)
}

// post // per creare un elemento nuovo

(req , res) => {
  res.json('per creare un elemento nuovo')
}

// modify // per modificare totalmente un elemento con id 

(req , res) => {
  let id = req.params.id
  res.json(`per modificare totalmente un elemento con ${id}`)
}

// patch // per modificare parzialmente un elemento con id 

(req , res) => {
  let id = req.params.id
  res.json(`per modificare parzialmente un elemento con ${id}`)
}

// remove  // per eliminare un elemento con id 

(req , res) => {
  let id = req.params.id
  res.json(`per eliminare un elemento con ${id}`)
}