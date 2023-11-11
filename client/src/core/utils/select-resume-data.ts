type OptionType = {
  value: string
  label: string
}

export const mouth: OptionType[] = [
  { value: '01', label: 'Январь' },
  { value: '02', label: 'Февраль' },
  { value: '03', label: 'Март' },
  { value: '04', label: 'Апрель' },
  { value: '05', label: 'Май' },
  { value: '06', label: 'Июнь' },
  { value: '07', label: 'Июль' },
  { value: '08', label: 'Август' },
  { value: '09', label: 'Сентябрь' },
  { value: '10', label: 'Октябрь' },
  { value: '11', label: 'Ноябрь' },
  { value: '12', label: 'Декабрь' }
]

export const citizenship: OptionType[] = [
  { value: 'Россия', label: 'Россия' },
  { value: 'Беларусь', label: 'Беларусь' },
  { value: 'Украина', label: 'Украина' },
  { value: 'Азербайджан', label: 'Азербайджан' },
  { value: 'Армения', label: 'Армения' },
  { value: 'Киргизия', label: 'Киргизия' },
  { value: 'Таджикистан', label: 'Таджикистан' },
  { value: 'Туркменистан', label: 'Туркменистан' },
  { value: 'Узбекистан', label: 'Узбекистан' }
]

export const languages: OptionType[] = [
  { value: 'Русcкий', label: 'Русcкий' },
  { value: 'Украинский', label: 'Украинский' },
  { value: 'Казахский', label: 'Казахский' },
  { value: 'Татарский', label: 'Татарский' }
]

export const workTimetable: OptionType[] = [
  { value: 'полный рабочий день', label: 'полный рабочий день' },
  { value: 'сменный график', label: 'сменный график' },
  { value: 'свободный график', label: 'свободный график' },
  { value: 'частичная занятость', label: 'частичная занятость' }
]
