export const searchUserByEmail = email => {
  return new Promise(resolve => {
    resolve({
      id: '24343214321',
      email: email,
      coins: 180
    })
  })
}

export const searchBricksDataById = id => {
  return new Promise(resolve => {
    resolve({
      id,
      owner: {
        company_id: 'PD_123',
        email: 'j@ihk.io',
        name: 'Jonatan Santa Cruz',
        phone: '5554968900'
      },
      contact: {
        email: 'j@ihk.io',
        phone: '5534543345'
      },
      growth: {
        description:
          'Definido por un lujo incomparable, es un proyecto extraordinario que...',
        external_key: '123',
        internal_key: '321',
        name: 'Vertiz 234'
      },
      location: {
        cp: '09360',
        address: 'Dr Vertiz 234',
        latitude: '40.43243',
        longitude: '-23.432'
      },
      general: {
        alberca: {
          checked: true,
          label: 'Alberca'
        },
        escuelas_cercanas: {
          checked: false,
          label: 'Escuelas Cercanas'
        },
        jacuzzi: {
          checked: true,
          label: 'Jacuzzi'
        }
      }
    })
  })
}

export const fetchBricksBySearch = search => {
  console.log(search)
  return new Promise(resolve => {
    resolve({
      all: [
        {
          ad_id: '364382747983',
          category: 'Desarrollos inmobiliarios',
          created: '04 Abr 2018 13:45',
          email: 'hola@puntodestino.com',
          name: 'Guillermo Prieto 40',
          phone: '55 54968900',
          price: '$3,000,000 MXN',
          units: 24,
          status: 'public'
        },
        {
          ad_id: '856787658',
          category: 'Desarrollos',
          created: '10 Abr 2019 13:45',
          email: 'adios@puntodestino.com',
          name: 'Juan Romero 20',
          phone: '55 88857473',
          price: '$2,300,000 MXN',
          units: 10,
          status: 'deleted'
        }
      ],
      public: [
        {
          ad_id: '364382747983',
          category: 'Desarrollos inmobiliarios',
          created: '04 Abr 2018 13:45',
          email: 'hola@puntodestino.com',
          name: 'Guillermo Prieto 40',
          phone: '55 54968900',
          price: '$3,000,000 MXN',
          units: 24,
          status: 'public'
        }
      ],
      deleted: [
        {
          ad_id: '856787658',
          category: 'Desarrollos',
          created: '10 Abr 2019 13:45',
          email: 'adios@puntodestino.com',
          name: 'Juan Romero 20',
          phone: '55 88857473',
          price: '$2,300,000 MXN',
          units: 10,
          status: 'deleted'
        }
      ]
    })
  })
}
