export const validPhone = /\+7\d{10}/

export const validMail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/

export const validNumber = (count: number) => {
  return new RegExp(`^\\d{${count}}$`)
}
