package models

type Order struct {
	ID      int    `gorm:"primaryKey"`
	Total   uint   `gorm:"type:float(150);not null"`
	Fecha   string `gorm:"type:varchar(350);not null"`
	ID_user int    `gorm:"type:integer;not null"`
}

type Orders []Order
