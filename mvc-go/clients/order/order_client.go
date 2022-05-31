package product

import (
	"mvc-go/model"

	"github.com/jinzhu/gorm"
	log "github.com/sirupsen/logrus"
)

var Db *gorm.DB

func GetorderById(id int) model.Order {
	var order model.Order

	Db.Where("id = ?", id).First(&order)
	log.Debug("Order: ", order)

	return order
}

func Getorders() model.Orders {
	var orders model.orders
	Db.Find(&orders)

	log.Debug("Orders: ", orders)

	return orders
}

func Insertorder(order model.Order) model.Order {
	result := Db.Create(&order)

	if result.Error != nil {
		//TODO Manage Errors
		log.Error("")
	}
	log.Debug("Order Created: ", order.ID)
	return order
}
