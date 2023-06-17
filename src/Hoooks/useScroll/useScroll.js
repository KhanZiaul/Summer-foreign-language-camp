import { useEffect } from "react";

function useScroll(pathname) {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])
}

export default useScroll;