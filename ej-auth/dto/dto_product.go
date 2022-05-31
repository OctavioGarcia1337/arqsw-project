package dto

type ProductDto struct {
	ID     int    `json:"id"`
	Nombre string `json:"nombre"`
	Precio int    `json:"precio"`
}

type ProductsDto []ProductDto
