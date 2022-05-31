package models

type User struct{
	ID       int    `gorm:"primaryKey"`
	Name     string `gorm:"type:varchar(350);not null"`
	LastName string `gorm:"type:varchar(250);not null"`
	UserName string `gorm:"type:varchar(150);not null;unique"`
	Password string `gorm:"type:varchar(150);not null"`
	Token			string `gorm:"type:varchar(250);not null"`
	Refresh_Token	string `gorm:"type:varchar(250);not null"`
	//User_ID			string `gorm:"type:varchar(250);not null"`
	UserCart		[]ProductUser
	Address_Details	Address //podemos poner []Address si queremos mas de 1
	User_Status		[]Order	
}

type Users []User