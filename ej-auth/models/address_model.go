package models

type Address struct {
	ID     int    `gorm:"primaryKey"`
	Calle  string `gorm:"type:varchar(250);not null"`
	Barrio string `gorm:"type:varchar(250);not null"`
	Numero int    `gorm:"type:varchar(4);not null"`
	Ciudad string `gorm:"type:varchar(250);not null"`
}
