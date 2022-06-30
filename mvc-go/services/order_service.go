package services

import (
	orderClient "mvc-go/clients/order"
	orderDetailClient "mvc-go/clients/order_detail"
	productClient "mvc-go/clients/product"
	"mvc-go/dto"
	"mvc-go/model"
	e "mvc-go/utils/errors"
	"time"
)

type orderService struct{}

type orderServiceInterface interface {
	InsertOrder(orderDto dto.OrderDto) (dto.OrderDto, e.ApiError)
	GetOrdersByIdUser(id_User int) (dto.OrdersDto, e.ApiError)
}

var (
	OrderService orderServiceInterface
)

func init() {
	OrderService = &orderService{}
}

func (s *orderService) InsertOrder(orderDto dto.OrderDto) (dto.OrderDto, e.ApiError) {

	var order model.Order
	order.Monto_Final = orderDto.Monto_Final
	order.Fecha = time.Now()
	order.Id_User = orderDto.Id_Usuario

	order = orderClient.InsertOrder(order)
	orderDto.Id = order.Id

	var orderDetails model.OrderDetails
	var total float32

	for _, orderDetailDto := range orderDto.Order_Details {
		var orderDetail model.OrderDetail

		orderDetail.Id_Product = orderDetailDto.Id_Producto

		var product model.Product = productClient.GetProductById(orderDetail.Id_Product)
		orderDetail.Precio_Unitario = product.Price
		orderDetail.Cantidad = orderDetailDto.Cantidad
		orderDetail.Total = orderDetail.Precio_Unitario * orderDetail.Cantidad
		orderDetail.Nombre = product.Name

		orderDetail.Id_Order = order.Id

		total = total + orderDetail.Total

		orderDetails = append(orderDetails, orderDetail)
	}

	orderClient.UpdateMontoFinal(total, order.Id)

	orderDetailClient.InsertOrdersDetail(orderDetails)

	return orderDto, nil
}

//get de orders por el id del cliente
func (s *orderService) GetOrdersByIdUser(id_User int) (dto.OrdersDto, e.ApiError) {

	var orders model.Orders = orderClient.GetOrdersByIdUser(id_User)
	var ordersDto dto.OrdersDto
	if len(orders) == 0 {
		return ordersDto, e.NewBadRequestApiError("order not found")
	}

	for _, order := range orders {
		var orderDto dto.OrderDto

		orderDto.Id = order.Id
		orderDto.Fecha = order.Fecha
		orderDto.Monto_Final = order.Monto_Final
		orderDto.Id_Usuario = order.Id_User
		var ordersDetail model.OrderDetails = orderDetailClient.GetOrderDetailByIdOrder(order.Id)
		for _, orderDetail := range ordersDetail {
			var orderDetailDto dto.OrderDetailDto
			orderDetailDto.Id = orderDetail.Id
			orderDetailDto.Cantidad = orderDetail.Cantidad
			orderDetailDto.Id_Producto = orderDetail.Id_Order
			orderDetailDto.Precio_Unitario = orderDetail.Precio_Unitario
			orderDetailDto.Total = orderDetail.Total
			orderDetailDto.Nombre = orderDetail.Nombre
			orderDetailDto.Id_Order = orderDetail.Id_Order

			orderDto.Order_Details = append(orderDto.Order_Details, orderDetailDto)
		}
		ordersDto = append(ordersDto, orderDto)
	}

	return ordersDto, nil
}
