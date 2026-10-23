export { cn } from "cn"

const dateFormatter = new Intl.DateTimeFormat(["id-ID", "en-US"], {
  year: "numeric",
  month: "long",
  day: "numeric",
})

export function formatDate(date: Date) {
  return dateFormatter.format(date)
}