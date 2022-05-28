 package controllers

import (
	"github.com/OctavioGarcia1337/arq-software/ej-auth/domain"
	"github.com/OctavioGarcia1337/arq-software/ej-auth/services"
	"github.com/gin-gonic/gin"
	"net/http"
)

var (
	service = services.NewServiceImpl()
)

func Login(c *gin.Context) {
	var cred domain.Credentials

	if err := c.BindJSON(&cred); err != nil {
		c.AbortWithError(http.StatusBadRequest, err)
		return
	}

	token, err := service.Login(cred)
	if err != nil {
		c.AbortWithError(http.StatusUnauthorized, err)
		return
	}

	c.JSON(http.StatusOK, token)
}
