export const load = (key) => {
  try {
    const serializedValue = localStorage.getItem(key)
    if (serializedValue === null) {
      return undefined
    }
    return JSON.parse(serializedValue)
  } catch (err) {
    return undefined
  }
}

export const set = (key, value) => {
  try {
    const serializedValue = JSON.stringify(value)
    localStorage.setItem(key, serializedValue)
  } catch {
    // ignore write errors
  }
}

export const remove = (key) => {
  localStorage.removeItem(key)
}
