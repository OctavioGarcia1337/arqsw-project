package dto

type ProductUserDto struct {
	ID     int    `json:"id"`
	Nombre string `json:"nombre"`
	Precio uint   `json:"precio"`
}
type ProductsUserDto []ProductUserDto