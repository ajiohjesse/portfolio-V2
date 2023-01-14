import { useEffect } from 'react'

const useScrollAnimate = (className, intro) => {
  useEffect(() => {
    const animated = document.querySelectorAll(`.${className}`)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(intro)
          } 
          // else {
          //   entry.target.classList.remove(intro)
          // }
        })
      },
      { threshold: 0.5 },
    )

    animated.forEach((card) => {
      observer.observe(card)
    })

    return () => observer.disconnect()
  }, [className, intro])
}

export default useScrollAnimate
