    const express = require('express');

    const mysql = require('mysql2');

    const router = express.Router();

    const connectionPool = require('../database/connection-pool');

    
   
    /* GET users listing. */
    router.get('/', function(req, res, next) {

    

            const book = {
              'author' : 'Charles Dickens',
              'title' : 'Great Expecations',
              'published' : '1861-01-01'
            }

            connectionPool.getPool().query('insert into books set ?', book, (err, result) => {
              if(err) throw err;
            

            console.log(result);
            
            
        
});
      res.send('Books here!');
    });





    
    module.exports = router;
    