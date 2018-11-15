/**
  * setBackgroundImage
  * set image from url to background style
  * @params {string} url of image
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
