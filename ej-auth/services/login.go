package services

import (
	"errors"
	"github.com/OctavioGarcia1337/arq-software/ej-auth/domain"
	"github.com/OctavioGarcia1337/arq-software/ej-auth/utils"
	"strings"
)

const (
	credentialsPath = "credentials.txt"
	tokenPath       = "token.txt"
)

type Service interface {
	Login(cred domain.Credentials) (domain.Token, error)
}

type ServiceImpl struct{}

func NewServiceImpl() ServiceImpl {
	return ServiceImpl{}
}

func (impl ServiceImpl) Login(cred domain.Credentials) (domain.Token, error) {
	bytes, err := utils.ReadFile(credentialsPath)
	if err != nil {
		return domain.Token{}, err
	}

	loggedIn := false
	for _, line := range strings.Split(string(bytes), "\n") {
		components := strings.Split(line, "@")
		user, password := components[0], components[1]
		if user == cred.User && password == cred.Password {
			loggedIn = true
			break
		}
	}

	if !loggedIn {
		return domain.Token{}, errors.New("invalid credentials")
	}

	tokenBytes, err := utils.ReadFile(tokenPath)
	if err != nil {
		return domain.Token{}, err
	}

	return domain.Token{
		Token: string(tokenBytes),
	}, nil
}
