package dto

type OrderDetailDto struct {
	ID              int     `json:"id"`
	Precio_unitario float32 `json:"precio_unitario"`
	Cantidad        uint    `json:"cantidad"`
	Total           uint    `json:"total"`
	Detalle         string  `json:"detalle"`
	ID_producto     int     `json:"id_product"`
	ID_order        int     `json:"id_order"`
}

type OrderDetailsDto []OrderDetailDto
