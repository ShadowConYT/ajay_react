import { useEffect, useState, useRef } from "react";

export function useInViewPort(options = { root: null, rootMargin: "0px", threshold: 0.2}) {
    const [isInViewPort, setIsInViewPort] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([event]) => {
                setIsInViewPort(event.isIntersecting);
            },
            options
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        }
    }, [ref, options])

    return [ref, isInViewPort];
}