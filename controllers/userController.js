import User from "../models/user.js";

async function getAll(req,res){
    const users = await User.findAll();
    res.status(200).json(users);
}

async function createOne(req,res){
    const user = await User.create({
        username: 'illKim',
        birthday: new Date(1980,2,1),
    });
    res.status(200).json(user);
}

export {
    getAll,
    createOne
}