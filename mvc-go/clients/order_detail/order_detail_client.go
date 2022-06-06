package orderDetail

import (
	"mvc-go/model"

	"github.com/jinzhu/gorm"
	log "github.com/sirupsen/logrus"
)

var Db *gorm.DB

func GetOrderDetailById(id int) model.OrderDetail {
	var orderDetail model.OrderDetail

	Db.Where("id = ?", id).First(&orderDetail)
	log.Debug("OrderDetail: ", orderDetail)

	return orderDetail
}

func GetOrderDetails() model.OrderDetails {
	var orderDetails model.OrderDetails
	Db.Find(&orderDetails)

	log.Debug("OrderDetails: ", orderDetails)

	return orderDetails
}

func InsertOrderDetail(orderDetail model.OrderDetail) model.OrderDetail {
	result := Db.Create(&orderDetail)

	if result.Error != nil {
		log.Error("")
	}
	log.Debug("OrderDetail Created: ", orderDetail.Id)
	return orderDetail
}

func GetOrderDetailByIdOrder(idOrder int) model.OrderDetails {
	var ordersDetail model.OrderDetails

	Db.Where("id_order = ?", idOrder).Find(&ordersDetail) 
	log.Debug("OrderDetail: ", ordersDetail)

	return ordersDetail
}