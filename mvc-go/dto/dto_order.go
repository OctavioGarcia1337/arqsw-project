package dto

import (
	"time"
)

type OrderDto struct {
	Id         int       `json:"id_order"`
	Monto_Final float32   `json:"monto_final"`
	Fecha      time.Time `json:"fecha"`
	Id_Usuario int `json:"id_user"`
}

type OrdersDto []OrderDto
