const {Router} = require('express');
const {getTasks, saveTask, updateTask} = require('../controllers/taskController');
const router = Router();

router.get('/task', getTasks);
router.post('/task', saveTask);
router.put('/task', updateTask);

module.exports = router;