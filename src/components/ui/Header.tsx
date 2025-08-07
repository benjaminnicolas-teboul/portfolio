import {Button} from "@/src/components/ui/button";
import Link from "next/link";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@/src/components/ui/avatar";

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
      <nav>
        <Button asChild>
        <Link href="/mon-cv.pdf" target="_blank">
            Mon CV
          </Link>
        </Button>
      </nav>
    </header>
  );
};
export default Header;
