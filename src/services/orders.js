export const fetchOrderById = id => {
  console.log(id)
  return new Promise(resolve => {
    resolve({
      ad_id: '43242314',
      buyer: 'lorenamc.qweryty@gmail.com',
      carrier: 'ups (1ZA9T9200480374)',
      conekta_id: '653465346345634',
      created: '9 Noviembre 2018 12:40',
      id: '181124400005405',
      last_update: '9 noviembre 2018 12:40',
      phone: '5554968900',
      seller: 'mascalso_3@hotmail.com',
      name: 'Secadora Conair'
    })
  })
}

export const fetchOrderHistoryById = id => {
  console.log(id)
  return new Promise(resolve => {
    resolve([
      {
        label: 'New',
        date: '9 noviembre 2018 12:40'
      },
      {
        label: 'Preauthorized',
        date: '10 noviembre 2018 12:40'
      },
      {
        label: 'Pending PickUp',
        date: '11 noviembre 2018 12:40'
      }
    ])
  })
}

export const fetchOrdersBySearch = (search = '') => {
  console.log(search)
  return new Promise(resolve => {
    resolve({
      all: [
        {
          ad_id: '43242314',
          buyer: 'lorenamc.qweryty@gmail.com',
          carrier: 'ups (1ZA9T9200480374)',
          conekta_id: '653465346345634',
          created: '9 Noviembre 2018 12:40',
          id: '181124400005405',
          last_update: '9 noviembre 2018 12:40',
          phone: '5554968900',
          seller: 'mascalso_3@hotmail.com',
          name: 'Secadora Conair'
        },
        {
          ad_id: '54325243',
          buyer: 'juanito.banana@gmail.com',
          carrier: 'ups (6543b6k45jh6j34k)',
          conekta_id: '6743295674389575834',
          created: '11 Noviembre 2018 13:23',
          id: '54654365436543654',
          last_update: '12 noviembre 2018 10:45',
          phone: '553675727',
          seller: 'luis_perez@gmail.com',
          name: 'Xbox One'
        }
      ],
      new: [
        {
          ad_id: '65436453',
          buyer: 'lorenamc.qweryty@gmail.com',
          carrier: 'ups (1ZA9T9200480374)',
          conekta_id: '653465346345634',
          created: '9 Noviembre 2018 12:40',
          id: '76547654756474',
          last_update: '9 noviembre 2018 12:40',
          phone: '5554968900',
          seller: 'mascalso_3@hotmail.com',
          name: 'Secadora Conair'
        }
      ],
      pending: [],
      exception: [
        {
          ad_id: '678787658675',
          buyer: 'lorenamc.qweryty@gmail.com',
          carrier: 'ups (1ZA9T9200480374)',
          conekta_id: '653465346345634',
          created: '9 Noviembre 2018 12:40',
          id: '76547654756474',
          last_update: '9 noviembre 2018 12:40',
          phone: '5554968900',
          seller: 'mascalso_3@hotmail.com',
          name: 'Play 4'
        }
      ],
      return: []
    })
  })
}
