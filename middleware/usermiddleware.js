const User = require('../model/loginmodel');

async function finduser(req, res, next) {
    let player;
    try {
        player = await User.findById(req.params._id);
        if (!player) {
            return res.status(404).json({ message: 'User not found' });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }

    req.player = player;
    next();
}
module.exports = finduser;