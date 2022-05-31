package dto

type AddressDto struct {
	ID     int    `json:"id"`
	Calle  string `json:"calle"`
	Barrio string `json:"barrio"`
	Numero int    `json:"numero"`
	Ciudad string `json:"ciudad"`
}
