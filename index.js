// �ޤJ sequelize �M��
const { Sequelize } = require('sequelize');

// �z�L new �إ� Sequelize �o�� class�A�� sequelize �N�O���� instance
const sequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql'
});