const Player = require('../model/model');  // Adjust the path as necessary

async function findPlayer(req, res, next) {
    let player;
    try {
        player = await Player.findById(req.params.id);
        if (!player) {
            return res.status(404).json({ message: 'Player not found' });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }

    req.player = player;
    next();
}

module.exports = findPlayer;