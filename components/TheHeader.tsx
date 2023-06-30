import Link from "next/link";

const TheHeader = () => {
    return (
        <header className="header-container">
            <Link href="/" className="header-link">
                Home
            </Link>
            <Link href="/blog" className="header-link">
                Blog
            </Link>
            <Link href="/about" className="header-link">
                About
            </Link>
        </header>
    );
};
export { TheHeader };
