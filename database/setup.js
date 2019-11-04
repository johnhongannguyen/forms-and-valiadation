const {connectionPool} = require('./connection.js');

connectionPool.query('DROP TABLE IF EXITS dogs', (error,results)=>{
   // call back 
   if(error){
       console.log(error);
   }
   else {
       connectionPool.query('CREATE TABLE dogs (name varchar(255) NOT NULL, type varchar(255) NOT NULL, dog_id int AUTO_INCREMENT, PRIMARY KEY (dog_id));', (error,results)=>{
    
    if(error){
        console.log(error);
    }
    else {
        console.log(results);
    }
    
    process.exit();
});
   }
});



