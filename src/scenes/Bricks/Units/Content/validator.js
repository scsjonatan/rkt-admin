export const rules = {
  title: 'required|string|min:5',
  model: 'required|string|min:3',
  price: 'required|numeric|min:1',
  build_surface: 'required',
  field_surface: 'required',
  description: 'required|string|min:5',
  unit_type: 'required',
  status: 'required',
  rooms: 'required|numeric',
  baths: 'required|numeric',
  parkings: 'required|numeric'
}
export const messages = {
  required: 'Olvidaste llenar este campo',
  min: {
    numeric: 'Este campo debe ser minimo :min',
    string: 'Este campo debe tener al menos :min caracteres'
  }
}
