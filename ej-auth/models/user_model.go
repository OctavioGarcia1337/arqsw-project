package models

type User struct{
	ID				int 	`gorm:"primaryKey"`
	Nombre			string `gorm:"type:varchar(250);not null"`
	Apellido		string `gorm:"type:varchar(250);not null"`
	Password		string `gorm:"type:varchar(250);not null"`
	Email			string `gorm:"type:varchar(250);not null"`
	Token			string `gorm:"type:varchar(250);not null"`
	Refresh_Token	string `gorm:"type:varchar(250);not null"`
	User_ID			string `gorm:"type:varchar(250);not null"`
	UserCart		[]ProductUser
	Address_Details	Address //podemos poner []Address si queremos mas de 1
	User_Status		[]Order	
}

type Users []User