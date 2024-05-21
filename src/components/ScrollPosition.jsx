import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollPosition() {
    const { pathname } = useLocation();

    useEffect(() => {
        // Retrieve the stored scroll position for the current pathname
        const storedPosition = localStorage.getItem(`scrollPosition_${pathname}`);
        
        // Scroll to the stored position or the top if it's not stored
        window.scrollTo(0, parseInt(storedPosition) || 0);
    }, [pathname]);

    useEffect(() => {
        // Save the scroll position when navigating away from the current route
        return () => {
        localStorage.setItem(`scrollPosition_${pathname}`, window.scrollY.toString());
        };
    }, [pathname]);

    return null;
}