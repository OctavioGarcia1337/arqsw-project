package main

import (
	"github.com/MatiasLessio/arqsw-project/ej-auth/controllers"
	"github.com/MatiasLessio/arqsw-project/ej-auth/database"
	"github.com/MatiasLessio/arqsw-project/ej-auth/middleware"
	"github.com/gin-gonic/gin"
)

func main() {
	app := controllers.NewApplication(database.ProductData(database.Client, "Products"), database.UserData(database.Client, "Users"))
	engine := gin.New()
	engine.Use(gin.Logger())
	engine.UserRoutes(engine)
	engine.Use(middleware.Authentication())
	engine.Run(":8090")
}
