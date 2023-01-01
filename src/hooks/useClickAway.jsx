import { useEffect, useState } from 'react'

export default function useClickAway(ref) {
  const [isClickingAway, setIsClickingAway] = useState(false)

  function handleClickAway(event) {
    if (ref.current && ref.current !== event.target) {
      console.log('yes')
      setIsClickingAway(true)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickAway)

    return () => {
      document.removeEventListener('mousedown', handleClickAway)
    }
  }, [ref])

  return { isClickingAway }
}
