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
        direction: 'Dr Vertiz 234',
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
