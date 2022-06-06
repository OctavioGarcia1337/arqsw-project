package product

import (
	"mvc-go/model"

	"github.com/jinzhu/gorm"
	log "github.com/sirupsen/logrus"
)

var Db *gorm.DB

func GetOrderById(id int) model.Order {
	var order model.Order

	Db.Where("id = ?", id).First(&order) 
	log.Debug("Order: ", order)

	return order
}

func GetOrdersByIdUser(idUser int) model.Orders {
	var orders model.Orders

	log.Debug("idUser: ", idUser)
	Db.Where("id_user = ?", idUser).Find(&orders)
	log.Debug("Order: ", orders)

	return orders
}

func GetOrders() model.Orders {
	var orders model.Orders
	Db.Find(&orders)

	log.Debug("Orders: ", orders)

	return orders
}

func InsertOrder(order model.Order) model.Order {
	result := Db.Create(&order)

	if result.Error != nil {
		log.Error("")
	}
	log.Debug("Order Created: ", order.Id)
	return order
}
