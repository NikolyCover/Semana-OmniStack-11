const express = require('express');

const OngCotroller = require('./controlers/OngController');
const IncidentCotroller = require('./controlers/IncidentController');
const ProfileCotroller = require('./controlers/ProfileController');
const SessionCotroller = require('./controlers/SessionController');


const routes = express.Router();

routes.post('/sessions', SessionCotroller.create);

routes.get('/ongs', OngCotroller.index);
routes.post('/ongs', OngCotroller.create);

routes.get('/profile', ProfileCotroller.index);

routes.post('/incidents', IncidentCotroller.create);
routes.get('/incidents', IncidentCotroller.index);
routes.delete('/incidents/:id', IncidentCotroller.delete);

module.exports = routes;