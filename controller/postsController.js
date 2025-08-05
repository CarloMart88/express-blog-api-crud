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

// Milestone 3

// Implementiamo quindi la logica per aggiungere un nuovo post al nostro blog, e prepariamo la risposta adeguata.
// Testiamolo con postman.

const store = (req , res) => {

  console.log(req.body)

  const newID = posts[posts.length -1].id + 1

  //destrutturo il body.req 

  const { id , title , content , image ,tags } = req.body
  
  const newPost = {

    id: newID,
    title,
    content,
    image,
    tags

  }

  posts.push(newPost)

  res.status(201).json(newPost)
  
}

// update // per modificare totalmente un elemento con id 

// Milestone 4

// Ripetiamo il procedimento per la rotta di Update, in modo da avere la possibilità di modificare le nostre risorse.


const update = (req , res) => {

  const id = parseInt(req.params.id)

  const post = posts.find(elem => elem.id === id )

  if(!post){
    return res.status(404).json({ error: '404 not found '
      ,messagge:'Post non presente'})
  }

  //destrutturo il body request 
  const { title , content , image ,tags } = req.body

  //modifico tutti i parametri 
  post.title = title;
  post.content = content;
  post.image = image;
  post.tags = tags;

  console.log(posts)
  res.json(post)
  
}

// modify // per modificare parzialmente un elemento con id 

const modify = (req , res) => {
  const id = parseInt(req.params.id)
  //stesso discorso sarà modify e quindi patch importo la stessa logica di update facendo riferimento questa volta solo ad un valore 

  post =  posts.find(elem => elem.id === id)
  //anche se non necessario destrutturo req.body
  const { title , content , image ,tags } = req.body

  post.content = content

  if(!post){
    return res.status(404).json({ error: '404 not found '
      ,messagge:'Post non presente'})
  }

  console.log(posts)

  res.json(post)









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



 