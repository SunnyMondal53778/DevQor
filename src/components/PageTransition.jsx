import { useEffect, useState, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import './PageTransition.css'

/**
 * PageTransition Component - Wraps page content with smooth enter/exit animations
 */
function PageTransition({ children }) {
    const location = useLocation()
    const [displayChildren, setDisplayChildren] = useState(children)
    const [transitionStage, setTransitionStage] = useState('enter')
    const isInitialMount = useRef(true)

    useEffect(() => {
        // Skip exit animation on initial mount
        if (isInitialMount.current) {
            isInitialMount.current = false
            return
        }

        // When location changes, start exit animation
        setTransitionStage('exit')

        // After exit animation completes, update children and start enter animation
        const timeout = setTimeout(() => {
            setDisplayChildren(children)
            setTransitionStage('enter')
            // Scroll to top on page change
            window.scrollTo({ top: 0, behavior: 'instant' })
        }, 300)

        return () => clearTimeout(timeout)
    }, [location.pathname])

    // Update children when they change (initial render)
    useEffect(() => {
        setDisplayChildren(children)
    }, [children])

    return (
        <div className={`page-transition page-transition--${transitionStage}`}>
            {displayChildren}
        </div>
    )
}

export default PageTransition
