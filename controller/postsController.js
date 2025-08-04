const posts = require('../dataposts.js')



// Milestone 2
// Per iniziare, creiamo una cartella data in cui creare un file che contenga ed esporti l’array di posts che trovate in allegato. Importiamo questo file in cima al controller. ok 

// Ora passiamo ad implementare le logiche delle nostre CRUD: ok 

// Index dovrà restituire la lista dei post in formato JSON ok 

// Show dovrà restituire un singolo post in formato JSON


// Destroy dovrà eliminare un singolo post dalla lista, stampare nel terminale (console.log) la lista aggiornata, e rispondere con uno stato 204 e nessun contenuto.


// index // per vedere tutti gli elementi 

const index = (req , res) => {
  //facendo così già restituisco l'array
  res.json(posts)
}

// show // per vedere tutti gli elementi 

const show = (req , res) => {
  const id = parseInt(req.params.id)

  //uso id per trovare il singolo elemento
  
  const post = posts.find(elem => elem.id === id)
 
  // effettuiamo un controllo su post per vedere se esiste
  if(!post){
    return res.status(404).res.json({ error: '404 not found '
      ,messagge:'Post non presente'})
  }

  res.json(post)
}

// store // per creare un elemento nuovo

const store = (req , res) => {
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
  let id = req.params.id
  res.json(`per eliminare un elemento con id ${id}`)
}

module.exports = {
  index,show,store,modify,update,destroy
}



