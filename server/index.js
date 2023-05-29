require('dotenv').config()
const express = require('express') // импортирование express
const sequelize = require('./db')
const PORT = process.env.PORT || 5000 // получение порта из переменных окружения

const app = express()


const start = async () => {
     try {

          await sequelize.authenticate()    // подключение к бд
          await sequelize.sync()            // сверять состояние базой данных со схемой             
          app.listen (PORT, () => console.log(`Server started on port ${PORT}`))

     } catch (e) {

          console.log(e)

     }
}


start()




