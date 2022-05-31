package routes

import (
	"github.com/MatiasLessio/arqsw-project/ej-auth/controllers"

	"github.com/gin-gonic/gin"
)

func UserRoutes(incomingRoutes *gin.Engine) {
	incomingRoutes.POST("/users/signup", controllers.Signup())
	incomingRoutes.POST("/users/login", controllers.Login())
	//incomingRoutes.POST("/admin/addproduct", controllers.ProductViewerAdmin())
	incomingRoutes.GET("/users/productview", controllers.SearchProduct())
	incomingRoutes.GET("/users/search", controllers.SearchProductByQuery())
}

func ProductRoutes(incomingRoutes *gin.Engine) {
	incomingRoutes.GET("/addtocart", app.AddToCart())
	incomingRoutes.GET("removeitem", app.RemoveItem())
	incomingRoutes.GET("/cartcheckout", app.BuyFromCart())
}
