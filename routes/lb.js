const express = require('express');
const User = require('../model/loginmodel');
const router = express.Router();
const player = require('../model/model');
const findPlayer = require('../middleware/middleware'); 
const finduser = require('../middleware/usermiddleware');

router.get('/', async(req, res)=>{
    try{
        const allPlayer = await player.find();
        res.json(allPlayer)

    }catch(err){
        res.status(500).json({message: err.message})
    }
})


router.get('/:_id', findPlayer,async(req, res)=>{
    res.json(req.player);
})


router.post('/', async(req, res)=>{
    const addplayer = new player({
        name: req.body.name,
        Points: req.body.Points,
    })

    try{
        const NewPlayer = await addplayer.save();
        res.status(201).json(NewPlayer)
    }catch(err){
        res.status(500).json({message: err.message})
    }
})
//------------- User -------------------
router.post('/signup', async(req, res)=>{
    const addplayer = new User({
        Username: req.body.username,
        Password: req.body.Password,
        Points: req.body.Points,
    })

    try{
        const NewPlayer = await addplayer.save();
        res.status(201).json(NewPlayer)
    }catch(err){
        res.status(500).json({message: err.message})
    }
})


router.post('/login', async (req, res) => {

    try {

        const user = await User.findOne({
            Username: req.body.username
        });

        if (!user)
            return res.status(404).json({ message: "User not found" });

        if (user.Password !== req.body.password)
            return res.status(401).json({ message: "Wrong password" });

        res.json(user);

    } catch (err) {
        res.status(500).json({ message: err.message });
    }

});

router.get('/user/:_id', finduser,async(req, res)=>{
    res.json(req.player);
})
router.get('user/', async(req, res)=>{
    try{
        const allPlayer = await User.find();
        res.json(allPlayer)

    }catch(err){
        res.status(500).json({message: err.message})
    }
})

router.patch('/:_id', finduser, async(req, res)=>{
    if (req.body.Points != null) {
        req.player.Points = req.body.Points;
    }

    try {
        const updatedPlayer = await User.save();
        res.json(updatedPlayer);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})

// --------------------------------
router.delete('/:_id', findPlayer, async (req, res) => {
    try {
        await req.player.deleteOne();
        res.json({ message: 'Deleted Player' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


router.patch('/:_id', findPlayer, async(req, res)=>{
    if (req.body.Points != null) {
        req.player.Points = req.body.Points;
    }

    try {
        const updatedPlayer = await req.player.save();
        res.json(updatedPlayer);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})

module.exports = router;
