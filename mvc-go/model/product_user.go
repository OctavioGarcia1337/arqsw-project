package models

type ProductUser struct {
	ID     int `gorm:"primaryKey"`
	Nombre *string
	Precio *uint
}
