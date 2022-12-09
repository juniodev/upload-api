require('dotenv').config()
const character = 'QqWwEeRrTtYyUuIiOoPpAaSsDdFfGgHhJjKkLlZzXxCcVvBbNnMm'

const fileName = (max) => {

  if (typeof max !== 'number') {
    throw new Error('max must be a number')
  }

  let charGenerate = ''
  for (let i = 0; i < max; i++) {
    charGenerate += character.charAt(Math.floor(Math.random() * max))
  }
  return charGenerate
}

const fileSize = (size) => {

  if (size) {
    if (typeof size !== 'number') {
      throw new Error('size must be a number')
    }
  }

  const defaultSize = !process.env.LIMIT_FILE ? 50 : process.env.LIMIT_FILE
  const fileSize = 1000 * 1000 * defaultSize
  return fileSize
}

module.exports = { fileName, fileSize }
