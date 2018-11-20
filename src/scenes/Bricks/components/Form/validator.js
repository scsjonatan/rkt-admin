export const rules = {
  owner: {
    email: 'required|email',
    name: 'required|string|min:2',
    phone: 'required|numeric|min:5'
  },
  contact: {
    email: 'required|email',
    phone: 'required|numeric|min:5'
  },
  development: {
    description: 'required|string|min:5',
    external_key: 'required|string',
    internal_key: 'required|string',
    name: 'required|string|min:2'
  },
  location: {
    cp: 'required|size:5',
    address: 'required|string|min:5',
    latitude: 'required|numeric',
    longitude: 'required|numeric'
  }
}

export const messages = {
  required: 'Olvidaste llenar este campo',
  numeric: 'Este campo debe ser un número',
  min: {
    numeric: 'Este campo debe tener al menos :min números',
    string: 'Este campo debe tener al menos :min caracteres'
  },
  email: 'Formato de email invalido',
  size: {
    numeric: 'Este campo debe tener :size números',
    string: 'Este campo debe tener :size caracteres'
  }
}
