import Link from 'next/link';

export default function Header() {
    return (
        <header className="w-full flex items-center p-8 bg-pink-400 fixed top-0 left-0 justify-between">
            <div className="flex gap-4">
                <Link href="/">
                    <h1 className="text-white text-xl p-4 hover:font-bold">Home Page</h1>
                </Link>
                <Link href="/page1">
                    <h1 className="text-white text-xl p-4 hover:font-bold">Pag 1</h1>
                </Link>
            </div>
            <div>
                <Link href="/signup">
                    <h1 className="text-white text-xl p-4 hover:font-bold">Sign Up</h1>
                </Link>
            </div>
        </header>
    );
}