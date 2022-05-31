package dto

type ProductDto struct {
	Name          string  `json:"name"`
	UniversalCode string  `json:"universal_code"`
	Price         float32 `json:"base_price"`
}

type ProductsDto []ProductDto
