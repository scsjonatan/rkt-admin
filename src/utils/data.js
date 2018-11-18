/**
 * setBackgroundImage
 * set image from url to background style
 * @param {string} url of image
 * @returns {object} styles for background
 */

export const setBackgroundImage = url => {
  return {
    backgroundImage: `url(${url})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  }
}

/**
 * setSelectOptionsFromList
 * @param {array} list of items
 * @returns {array} of objects with valid values to `react-select`
 */
export const setSelectOptionsFromList = list => {
  let _list = []
  list.forEach(item => {
    _list = [
      {
        value: item,
        label: item
      },
      ..._list
    ]
  })
  return _list
}
