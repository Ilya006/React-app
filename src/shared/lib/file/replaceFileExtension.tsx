export function replaceFileExtension (filename: string, to: string) {
  return filename.replace(/\.\w+$/, `.${to}`)
}