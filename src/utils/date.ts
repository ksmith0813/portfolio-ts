export const formatDate = (value?: string, showTime?: boolean, showDateTime?: boolean) => {
  const date = value ? new Date(value) : new Date()

  const getDateTime = (date: Date) => {
    const month = date.getMonth()
    const day = date.getDate()
    const year = date.getFullYear()
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let ampm = hours > 12 ? 'PM' : 'AM'
    hours = hours > 12 ? hours - 12 : hours
    return { month, day, year, hours, minutes, ampm }
  }

  const { month, day, year, hours, minutes, ampm } = getDateTime(date)

  if (showTime) {
    return `${hours}:${minutes} ${ampm}`
  } else if (showDateTime) {
    return `${month}/${day}/${year} ${hours}/:${minutes} ${ampm}`
  } else {
    return `${month}/${day}/${year}`
  }
}
