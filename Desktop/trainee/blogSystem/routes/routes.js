const express = require('express')
const router = express.Router();

router.get('/ho',function(req,res)
{
  res.send('get routes')
});

module.exports = router;
