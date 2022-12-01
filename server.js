import express from 'express';
import * as userController from './controllers/userController.js';
import sequelize from './models/db_conn.js';

async function lanchServer(){
    const app = express()
    await sequelize.sync();
    app.get('/',(req,res)=>{
        res.send('hello world!');
    });

    app.get('/users',userController.getAll);
    app.get('/users/create',userController.createOne);

    app.listen(3000,()=>{
        console.log(`ok , i am going to node js mvc .ahah~~~~~~`);
    })
}

lanchServer();