import { useEffect } from "react";

export default function Homepage() {
    useEffect(() => {
        document.title = 'Homepage';
    }, []);
    return (
        <>
        </>
    );
}