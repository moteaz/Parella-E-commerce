import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { FaHamburger } from "react-icons/fa";
import NavItems from "./NavItems";

interface User {
  userProfile: {
    name?: string | null | undefined;
    email?: string | null | undefined;
    image?: string | null | undefined;
  } | null;
}

const MobileNavbar = ({ userProfile }: User) => {
  return (
    <Sheet>
      <SheetTrigger>
        <FaHamburger className="text-3xl cursor-pointer text-black" />
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle className="text-center font-bold text-xl">
            Parella
          </SheetTitle>
        </SheetHeader>

        <NavItems mobile userProfile={userProfile} />

        {/* <SheetClose className="overflow-y-auto">
          <NavItems mobile />
        </SheetClose> */}
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavbar;