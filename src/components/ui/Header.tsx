import {Button} from "@/src/components/ui/button";
import Link from "next/link";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@/src/components/ui/avatar";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 shadow-md">
      <Avatar className="w-20 h-20">
        <AvatarImage
          src="/images/Nicolas-teboul-Benjamin.webp"
          alt="Ma photo"
        />
        <AvatarFallback>BN-T</AvatarFallback>
      </Avatar>
            
      <nav className="flex items-center gap-4">
        {/* Lien GitHub */}
        <Link
          href="https://github.com/benjaminnicolas-teboul"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub className="w-6 h-6 " />
        </Link>

        {/* Lien LinkedIn */}
        <Link
          href="https://www.linkedin.com/in/benjamin-nicolas-teboul-084a27364/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin className="w-6 h-6 text-white" />
        </Link>
        <Button asChild>
        <Link href="/mon-cv.pdf" target="_blank">
            My CV
          </Link>
        </Button>
      </nav>
    </header>
  );
};
export default Header;
