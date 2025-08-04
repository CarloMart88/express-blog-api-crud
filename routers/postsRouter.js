const express = require('express')

const router = express.Router() 

// destructure mi permette d'importare direttamente la logica delle operazioni 
const { index,show,store,update,modify,destroy } = require('../controller/postsController')

// ora creo i relativi path rest

//index 

router.get('/' , index)

//show 

router.get('/:id' , show)

//create 

router.post('/' , store)

// update

router.put('/:id' , update )

// modify

router.patch('/:id' , modify )

// delete

router.delete('/:id' , destroy )


module.exports = router