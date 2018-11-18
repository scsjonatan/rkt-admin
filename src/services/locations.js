// Utils
import { setSelectOptionsFromList } from 'utils/data'

export const fetchStateList = () => {
  return new Promise(resolve => {
    // Fake response { states }
    const states = ['Campeche', 'Hidalgo', 'Sonora', 'Nuevo León']
    resolve(setSelectOptionsFromList(states))
  })
}

export const fetchMunicipalitiesListByState = () => {
  return new Promise(resolve => {
    // Fake response { municipalities }
    const municipalities = ['San Martin', 'Cordoba', 'Toluca', 'Monterrey']
    resolve(setSelectOptionsFromList(municipalities))
  })
}

export const fetchAreasListByMunicipability = () => {
  return new Promise(resolve => {
    // Fake response { areas }
    const areas = ['Santa Barbara', 'Polanco', 'Roma', 'San Miguel']
    resolve(setSelectOptionsFromList(areas))
  })
}
