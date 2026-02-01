import { useEffect, useRef, useState } from 'react'
import './ScrollReveal.css'

/**
 * ScrollReveal Component - Adds scroll-triggered animations to children
 * @param {string} animation - Animation type: 'fadeUp', 'fadeDown', 'fadeLeft', 'fadeRight', 'scale', 'rotate'
 * @param {number} delay - Animation delay in milliseconds
 * @param {number} duration - Animation duration in milliseconds
 * @param {number} threshold - Intersection threshold (0-1)
 * @param {boolean} once - Whether to animate only once
 */
function ScrollReveal({
    children,
    animation = 'fadeUp',
    delay = 0,
    duration = 600,
    threshold = 0.1,
    once = true,
    className = '',
    stagger = 0,
    index = 0,
}) {
    const [isVisible, setIsVisible] = useState(false)
    const ref = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                    if (once) {
                        observer.unobserve(entry.target)
                    }
                } else if (!once) {
                    setIsVisible(false)
                }
            },
            { threshold, rootMargin: '0px 0px -50px 0px' }
        )

        if (ref.current) {
            observer.observe(ref.current)
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current)
            }
        }
    }, [threshold, once])

    const totalDelay = delay + (stagger * index)

    return (
        <div
            ref={ref}
            className={`scroll-reveal scroll-reveal--${animation} ${isVisible ? 'scroll-reveal--visible' : ''} ${className}`}
            style={{
                '--reveal-delay': `${totalDelay}ms`,
                '--reveal-duration': `${duration}ms`,
            }}
        >
            {children}
        </div>
    )
}

export default ScrollReveal
