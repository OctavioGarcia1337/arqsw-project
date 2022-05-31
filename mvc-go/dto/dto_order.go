package dto

type OrderDto struct {
	ID      int    `json:"id_order"`
	Total   uint   `json:"total"`
	Fecha   string `json:"date"`
	ID_user int    `json:"id_user;not null"`
	//Order_detail OrderDetailDto `json:"order_detail"`
	//Address    AddressDto   `json:"adress"`
}

type OrdersDto []OrderDto
