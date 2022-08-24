const path = require ('path');
const router = require('express').Router();

router.get('/notes', (req, res) => {
    res.sendFile(path.join(_dirname, '../../public/index.html'))
});

module.export = router;