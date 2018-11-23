export const rules = {
  coins: 'required|integer|min:0',
  action: 'required|string'
}

export const messages = {
  required: 'Olvidaste agregar el monto',
  integer: 'Debe ser un número entero',
  min: {
    numeric: 'Debe ser mayor a 0'
  }
}
