const { sequelize, Comentario } = require('../models');

Comentario.findAll().then(
    data => {
        console.log(data.map( u => u.toJSON()));
        sequelize.close();
    }
)