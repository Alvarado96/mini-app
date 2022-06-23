var express = require('express');
const cors = require('cors');
var app = express();
const PORT = process.env.PORT || 8080;
const knex = require('knex')(require('./knexfile.js')[process.env.NODE_ENV||'development']);

app.use(cors());
app.options('*', cors());

app.use(express.json());

app.get('/movies', function(req, res) {
    knex
      .select('*')
      .from('movies')
      .then(data => res.status(200).json(data))
      .catch(err =>
        res.status(404).json({
          message:
            'The data you are looking for could not be found. Please try again'
        })
      );
  });

app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);
});