package dto

type OrderDto struct {
	ID             int `json:"id"`
	Order_cart     []ProductUserDto
	Precio         int `json:"precio"`
	Metodo_De_Pago PaymentDto
}

type OrdersDto []OrderDto
