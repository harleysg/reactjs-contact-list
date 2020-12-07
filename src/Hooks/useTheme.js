import { useEffect, useState } from "react"

export default function useTheme() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const html = document.head.parentNode
    if(isDark){
      html.setAttribute("theme", "dark")
    } else if(isDark){
      html.setAttribute("theme", "light")
    }
    
    return () => {
      html.removeAttribute("theme")
    }
  }, [isDark])

  return {
    isDark,
    setIsDark
  }
}