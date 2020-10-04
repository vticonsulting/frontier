interface User {
  name: {
    first: string
    middle: string
    last: string
  }
}

function getFullName(user: User): string {
  const {
    name: {first, middle, last},
  } = user
  return [first, middle, last].filter(Boolean).join('')
}

getFullName({name: {first: 'Joe', middle: 'Bud', last: 'Matthews'}})
