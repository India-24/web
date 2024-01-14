import Link from "next/link";
import ModeToggle from "./theme-toggle";
import Image from "next/image";

export default function Header() {
    return (
        <header className="px-4 lg:px-6 h-14 flex items-center">
            <Link className="flex items-center justify-center" href="#">
                <Logo className="h-6 w-6" />
                <span className="sr-only">Hackathon 2024</span>
            </Link>
            <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
                <Link
                    className="text-md font-medium hover:underline underline-offset-4"
                    href="/"
                >
                    Home
                </Link>
                <Link
                    className="text-md font-medium hover:underline underline-offset-4"
                    href="/faq"
                >
                    FAQs
                </Link>
                <Link
                    className="text-md font-medium hover:underline underline-offset-4"
                    href="/team"
                >
                    Team
                </Link>
                <Link
                    className="text-md font-medium hover:underline underline-offset-4"
                    href="/contact"
                >
                    Contact Us
                </Link>
                <ModeToggle  />
            </nav>
        </header>
    );
}

function Logo(props) {
  return (
    <Image src="https://cloud-aco9e89py-hack-club-bot.vercel.app/0image__1_.svg" alt="Hackathon 2024" width={24} height={24} {...props} />
  );
}
