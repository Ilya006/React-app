const fakeData = {
  firstName: 'Ilya',
  lastName: 'Putin',
  age: 56,
  sity: 'Russia'
}

export function getProfile() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(fakeData), 5000)
  })
}