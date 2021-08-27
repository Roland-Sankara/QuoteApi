const express = require('express');
const router = express.Router();
const User = require('../Models/User');
const createToken = require('../helpers/validation');

router.get('/',(req,res)=>{
    User.find()
        .then((result)=>{
            res.json(result);
        })
        .catch((error)=>{
            res.json({error})
        })
});

router.post('/signup',(req,res)=>{
    const NewUser = new User(req.body);
    const token = createToken(req.body);

    NewUser.save()
        .then((result)=>{
            res.json({message:"Added new User successfully",token})
        })
        .catch((error)=>{
            res.json({error})
        })

});

router.post('/login',(req,res)=>{
    User.find({name:req.body.name})
        .then((result)=>{
            res.json({result})
        })
        .catch((error)=>{
            res.json({message:"User not found - please signup"})
        })
});


// router.post('/:id',(req,res)=>{

// });
// router.delete('/:id',(req,res)=>{

// });
// router.patch('/:id',(req,res)=>{

// });

module.exports = router

