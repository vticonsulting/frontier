function checkPassword(password) {
  const valid = password.length > 6

  let message = ''

  if (valid) {
    message = 'Your password is valid'
  } else {
    message = 'Your password is invalid'
  }

  return message
}

function getFormattedValue(value, language = 'en-US') {
  let formattedValue = parseFloat(value).toLocaleString(language, {
    useGrouping: true,
    maximumFractionDigits: 6,
  })

  // Add back missing .0 in e.g. 12.0
  const match = value.match(/\.\d*?(0*)$/)

  if (match) {
    formattedValue += /[1-9]/.test(match[0]) ? match[1] : match[0]
  }
  return formattedValue
}

function getDate() {
  const date = new Date()
  const formattedDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
  const formattedTime = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`

  return `${formattedDate} ${formattedTime}`
}

function logMessage(message, prefix = getDate()) {
  console.log(`${prefix} - ${message}`)
}

export const strip = html => html.replace(/<[^>]*>/g, '')

export {getFormattedValue, checkPassword, logMessage}
