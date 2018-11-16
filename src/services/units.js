export const fetchUnitsByBricksId = id => {
  console.log(id)
  return new Promise(resolve => {
    resolve([
      {
        id: '432432',
        baths: 1,
        field: 120,
        image: 'https://picsum.photos/200/300',
        name: 'Modelo A',
        parking: 1,
        price: '3,000,00',
        rooms: 2,
        surface: 98,
        type: 'Departamento'
      },
      {
        id: '5432534',
        baths: 2,
        field: 0,
        image: 'https://picsum.photos/200/300',
        name: 'Modelo B',
        parking: 1,
        price: '2,200,00',
        rooms: 1,
        surface: 76,
        type: 'Departamento'
      }
    ])
  })
}
