const { home, contact, portfolio, about } = require('../controllers/controllers.js');

const bp = require('body-parser');
const api = require('../controllers/controllers.js');

module.exports = function(app) {
app.use(bp.json());
     
app.get('/api/home', api.home);
app.get('/api/contact', api.contact);
app.get('/api/portfolio', api.portfolio);
app.get('/api/about', api.about);

}