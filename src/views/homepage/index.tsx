import { useEffect } from "react";

export default function Homepage() {
    useEffect(() => {
        document.title = 'Homepage';
    }, []);
    return (
        <>
            <div id="sidebar">
                <div>
                    <form id="search-form" role="search">
                        <input
                            id="q"
                            aria-label="Search contacts"
                            placeholder="Search"
                            type="search"
                            name="q"
                        />
                        <div
                            id="search-spinner"
                            aria-hidden
                            hidden={true}
                        />
                        <div
                            className="sr-only"
                            aria-live="polite"
                        ></div>
                    </form>
                </div>
                <nav>
                    <ul>
                        <li>
                            <a href={`https://github.com/LNReader/lnreader`}>Github</a>
                        </li>
                        <li>
                            <a href={`/website/docs`}>Docs</a>
                        </li>
                        <li>
                            <a href={`/website/tos`}>Terms of serice</a>
                        </li>
                        <li>
                            <a href={`/website/privacy-policy`}>Privacy Policy</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    );
}