import { useState } from "react"

export function useShowForm() {
  const [show, setShow] = useState(false)
  return {
    show, setShow
  }
}

export { default as useContact } from "./useContact"
export { default as useFormData } from "./useFormData"
export { default as useFormState } from "./useFormState"