package product

import (
	"mvc-go/model"

	"github.com/jinzhu/gorm"
	log "github.com/sirupsen/logrus"
)

var Db *gorm.DB

func GetUserById(id int) model.User {
	var user model.User

	Db.Where("id = ?", id).First(&user)
	log.Debug("User: ", user)

	return user
}

func GetUsers() model.Users { // SELECT * FROM USERS;
	var users model.Users
	Db.Find(&users)

	log.Debug("Users: ", users)

	return users
}

func GetUserByUserName(userName string, password string) model.User {
	var user model.User

	Db.Where("user_name = ? AND password = ?", userName, password).First(&user)
	log.Debug("User: ", user)

	return user
}
