import { useEffect, useState } from "react"

export const useScroll = () => {
  const [scroll, setScroll] = useState([0, 0])
  useEffect(() => {
    const updateScroll = () => {
      setScroll([window.scrollY, window.scrollX])
    }
    window.addEventListener("scroll", updateScroll)
    updateScroll()
    return () => {
      window.removeEventListener("scroll", updateScroll)
    }
  }, [])
  return scroll
}
