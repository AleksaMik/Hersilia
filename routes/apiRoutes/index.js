const router = require('expres').Router();
const notesRouter = require('./noteRoutes');

router.use(notesRoutes);

module.exports = router;
