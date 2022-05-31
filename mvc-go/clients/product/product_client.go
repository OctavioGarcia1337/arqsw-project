package product

import (
	"mvc-go/model"

	"github.com/jinzhu/gorm"
	log "github.com/sirupsen/logrus"
)

var Db *gorm.DB

func GetProductById(id int) model.Product {
	var product model.Product

	Db.Where("id = ?", id).First(&product)
	log.Debug("product: ", product)

	return product
}

func GetProducts() model.Products {
	var products model.products
	Db.Find(&products)

	log.Debug("Products: ", products)

	return products
}

func InsertProduct(product model.Product) model.Product {
	result := Db.Create(&product)

	if result.Error != nil {
		//TODO Manage Errors
		log.Error("")
	}
	log.Debug("Product Created: ", product.ID)
	return product
}
