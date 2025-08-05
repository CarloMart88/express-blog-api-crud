const posts = require('../dataposts.js')


// index // per vedere tutti gli elementi 

const index = (req , res) => {
  //facendo così già restituisco l'array
  const tag = req.query.tags

  let filterPost = posts
  
  if(tag){
    filterPost = posts.filter(item => item.tags.includes(tag))
  }

  res.json(filterPost)
  
}

// show // per vedere tutti gli elementi 

const show = (req , res) => {
  const id = parseInt(req.params.id)

  //uso id per trovare il singolo elemento
 
  const post = posts.find(elem => elem.id === id)
 
  // effettuiamo un controllo su post per vedere se esiste
  if(!post){
    return res.status(404).json({ error: '404 not found '
      ,messagge:'Post non presente'})
  }

  res.json(post)
}

// store // per creare un elemento nuovo

const store = (req , res) => {
  console.log(req.body)
  res.json('per creare un elemento nuovo')
}

// update // per modificare totalmente un elemento con id 

const update = (req , res) => {
  let id = req.params.id
  res.json(`per modificare totalmente un elemento con id ${id}`)
}

// modify // per modificare parzialmente un elemento con id 

const modify = (req , res) => {
  let id = req.params.id
  res.json(`per modificare parzialmente un elemento con id ${id}`)
}

// remove  // per eliminare un elemento con id 

const destroy = (req , res) => {
  const id = parseInt(req.params.id)

  // ricopio la logica di show per trovare un elemento con id per poi rimuoverlo con slice
  //uso id per trovare il singolo elemento
  
  const post = posts.find(elem => elem.id === id)
 
  // effettuiamo un controllo su post per vedere se esiste
  if(!post){
    return res.status(404).json({ error: '404 not found '
      ,messagge:'Post non presente'})
  }

  posts.splice(posts.indexOf(post) , 1);

  res.sendStatus(204)

}

module.exports = {
  index,show,store,modify,update,destroy
}



 