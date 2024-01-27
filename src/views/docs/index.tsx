import { useEffect } from "react";

export default function Docs() {
    useEffect(() => {
        document.title = 'Docs'
    }, []);
    return (
        <>
            <h1>We are updating...</h1>
        </>
    );
}
