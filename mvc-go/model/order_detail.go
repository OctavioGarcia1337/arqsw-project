package models

type OrderDetail struct {
	Id             int     `gorm:"primaryKey"`
	PrecioUnitario float32 `gorm:"type:float(150);not null"`
	Cantidad       int     `gorm:"type:int(150);not null"`
	Total          float32 `gorm:"type:float(150);not null"`
	Detalle        string  `gorm:"type:varchar(550);not null"`
	IdProduct      int     `gorm:"type:integer;not null"`
	IdOrder        int     `gorm:"type:integer;not null"`
}

type OrderDetails []OrderDetail