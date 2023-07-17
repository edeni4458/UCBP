// Controller needs to be able to access our model...so import your model
const Episode = require('../models/podweb.model')

// Create

module.exports.addEpisode = (req, res) => {
    const newEpisode = req.body
    Episode.create(newEpisode)
    .then(episode => res.json(episode))
    .catch(error => res.status(400).json(error))


}

//Read all
module.exports.allEpisodes = (req, res) => {
    Episode.find()
    .then(episodes=> res.json(episodes))
    .catch(error => res.json(error));
}

//Read one
module.exports.oneEpisode = (req, res) => {
    const idFromParams = req.params.id
    Episode.findOne({_id: idFromParams})
    .then((oneepisode) => res.json(oneepisode))
    .catch((error) => res.json(error));
}

// Update
module.exports.updateEpisode = (req, res) => {
    const idFromParams = req.params.id
    const updatedValue = req.body
    // UpdateL criteria, updatedValue, options
    Episode.findOneAndUpdate({_id: idFromParams}, updatedValue, {new:true, runValidators: true})
    .then((updatedEpisode) => res.json(updatedEpisode))
    .catch((error) => res.status(400).json(error));
}

// Delete
module.exports.deleteEpisode = (req, res) => {
    const idFromParams = req.params.id
    Episode.deleteOne({_id: idFromParams})
    .then((message) => res.json(message))
    .catch((error) => res.json(error));
}