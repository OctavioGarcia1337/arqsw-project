package models


type Product struct{
	ID			int 	`gorm:"primaryKey"`
	Nombre		string  `gorm:"type:varchar(250);not null"`
	Precio		int 	`gorm:"type:varchar(250);not null"` //la u es para que el valor sea si o si positivo
}

type Products []Product