package models

type Order struct {
	ID             int `gorm:"primaryKey"`
	Order_cart     []ProductUser
	Precio         int `gorm:"type:varchar(250);not null"`
	Metodo_De_Pago Payment
}
