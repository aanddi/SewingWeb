const { Sequelize } = require("sequelize") // ORM


// КОНФИГУРАЦИЯ

module.exports = new Sequelize (
     process.env.DB_NAME,          // Название ДБ
     process.env.DB_USER,          // Пользователь
     process.env.DB_PASSWORD,      // ПАРОЛЬ
     {
          dialect: 'postgres',
          host: process.env.DB_HOST,          
          port: process.env.DB_PORT,
     }
)