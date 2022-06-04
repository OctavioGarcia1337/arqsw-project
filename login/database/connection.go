package database

import (
	"github.com/OctavioGarcia1337/login/models"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

var DB *gorm.DB

func Connect() {
	//Coneccion con la BD Usuario,Contraseña,BD("root:root@/arqsw")
	connection, err := gorm.Open(mysql.Open("root:root@/arqsw"), &gorm.Config{})

	if err != nil {
		panic("could not connect to the database")
	}

	DB = connection

	connection.AutoMigrate(&models.User{})
}
