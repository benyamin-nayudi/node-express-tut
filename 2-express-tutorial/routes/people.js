const express = require('express')

const router = express.Router();

const { deletePerson , updatePerson , createPerson , getPeople, createPersonPostman} = require('../controllers/people')


// get
router.get('' , getPeople)
router.post('' , createPerson )
router.post('/postman' , createPersonPostman)
// put
router.put('/:id' , updatePerson )
// delete
router.delete('/:id' , deletePerson )



// there is another approach
// router.route('/').get(getPeople).post(createPerson)
// router.route('/postman').post(createPersonPostman)
// router.route('/:id').put(updatePerson).delete(deletePerson)


module.exports = router





