package db

import (
	addressClient "mvc-go/clients/address"
	categoryClient "mvc-go/clients/category"
	orderClient "mvc-go/clients/order"
	orderDetailClient "mvc-go/clients/order_detail"
	productClient "mvc-go/clients/product"
	userClient "mvc-go/clients/user"
	"mvc-go/model"

	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/mysql"
	log "github.com/sirupsen/logrus"
)

var (
	db  *gorm.DB
	err error
)

func init() {
	// DB Connections Paramters
	DBName := "mvc_go"
	DBUser := "root"
	DBPass := "root"
	DBHost := "127.0.0.1"
	// ------------------------

	db, err = gorm.Open("mysql", DBUser+":"+DBPass+"@tcp("+DBHost+":3306)/"+DBName+"?charset=utf8&parseTime=True")

	if err != nil {
		log.Info("Connection Failed to Open")
		log.Fatal(err)
	} else {
		log.Info("Connection Established")
	}

	// We need to add all CLients that we build
	userClient.Db = db
	productClient.Db = db
	addressClient.Db = db
	categoryClient.Db = db
	orderDetailClient.Db = db
	orderClient.Db = db
}

func StartDbEngine() {
	db.AutoMigrate(&model.User{})
	db.AutoMigrate(&model.Product{})
	db.AutoMigrate(&model.Address{})
	db.AutoMigrate(&model.Category{})
	db.AutoMigrate(&model.OrderDetail{})
	db.AutoMigrate(&model.Order{})

	log.Info("Finishing Migration Database Tables")
}
