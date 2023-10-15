// файлы хелперы - это вспомогательные функции которые используются в других частях кода и облегчают чтение кода.
// https://barkmanoil.com/react-helper-functions-trust-the-answer/

// почитать про это тут => https://reqbin.com/Article/ContentType
export const getContentType = () => ({
  'Content-Type' : 'application/json'
})

// обработка ошибки
export const errorCatch = (error: any): string => {
  const message = error?.response?.data?.message

  return message
  ? typeof error.response.data.message === 'object'
    ? message[0]
    : message
  : error.message
}
