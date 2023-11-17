type OptionType = {
  value: string
  label: string
}

export const skills: OptionType[] = [
  { value: 'массовое производство', label: 'массовое производство' },
  { value: 'работа в команде', label: 'работа в команде' },
  { value: 'работа на оборудовании', label: 'работа на оборудовании' },
  { value: 'работа с документацией', label: 'работа с документацией' }
]

export const workExperience: OptionType[] = [
  { value: 'не имеет значения', label: 'не имеет значения' },
  { value: 'нет опыта', label: 'нет опыта' },
  { value: 'от 1 года до 3 лет', label: 'от 1 года до 3 лет' },
  { value: 'более 3 лет', label: 'более 3 лет' }
]

export const employmentType: OptionType[] = [
  { value: 'полная занятость', label: 'полная занятость' },
  { value: 'частичная занятость', label: 'частичная занятость' },
  { value: 'проектная работа/разовое задание', label: 'проектная работа/разовое задание' },
  { value: 'стажировка', label: 'стажировка' }
]

export const education: OptionType[] = [
  { value: 'не требуется или не указано', label: 'не требуется или не указано' },
  { value: 'среднее профессиональное', label: 'среднее профессиональное' },
  { value: 'высшее', label: 'высшее' }
]

export const workTimetable: OptionType[] = [
  { value: 'полный день', label: 'полный день' },
  { value: 'сменный график', label: 'сменный график' },
  { value: 'гибкий график', label: 'гибкий график' },
  { value: 'удаленная работа', label: 'удаленная работа' },
  { value: 'гибкий график', label: 'гибкий график' }
]

export const tagsList: OptionType[] = [
  { value: 'Студенты', label: 'Студентов' },
  { value: 'Пенсионеры', label: 'Пенсионеров(Возвраст 60+)' },
  { value: 'Люди с инвалидностью', label: 'Людей с инвалидностью' },
  { value: 'Иностранные граждане', label: 'Иностранных граждан' }
]
