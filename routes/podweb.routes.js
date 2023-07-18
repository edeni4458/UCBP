const PodController = require('../controllers/podweb.controller')

module.exports = (app) => {
    // Create  
    app.post('/api/episodes/new', PodController.addEpisode)
    
    // Read all
    app.get('/api/episodes', PodController.allEpisodes)
    
    // Read one
    app.get('/api/episode/:id', PodController.oneEpisode)

    // Update one
    app.put('/api/episode/:id', PodController.updateEpisode)

    // Delete one
    app.delete('/api/episode/:id', PodController.deleteEpisode)
    
}