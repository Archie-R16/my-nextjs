import Link from "next/link";

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div>
            <h1>About as</h1>
            <ul>
                <li className="about-li">
                    <Link href="/about/contacts" className="about-link">
                        Contacts
                    </Link>
                </li>
                <li className="about-li">
                    <Link href="/about/team" className="about-link">
                        Team
                    </Link>
                </li>
            </ul>
            {children}
        </div>
    );
}
