import { useEffect, RefObject } from "react"

export function useOutsideClick(
  ref: RefObject<HTMLElement | null>,
  callback: () => void
) {
  useEffect(() => {
    function handleEvent(event: MouseEvent | TouchEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback()
      }
    }
    document.addEventListener("mousedown", handleEvent)
    document.addEventListener("touchstart", handleEvent)
    return () => {
      document.removeEventListener("mousedown", handleEvent)
      document.removeEventListener("touchstart", handleEvent)
    }
  }, [ref, callback])
}
