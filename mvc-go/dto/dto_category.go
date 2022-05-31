package dto

type CategoryDto struct {
	ID_category  int    `json:"id_category"`
	Nombre      string `json:"nombre"`
	Descripcion string `json:"descripcion"`
}

type CategoriesDto []CategoryDto