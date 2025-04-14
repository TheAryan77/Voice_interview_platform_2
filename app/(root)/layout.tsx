import Link from "next/link";
import Image from "next/image";
import { ReactNode } from "react";
import { redirect } from "next/navigation";
import { getCurrentUser } from "@/lib/actions/auth.action";
import { isAuthenticated } from "@/lib/actions/auth.action";

const Layout = async ({ children }: { children: ReactNode }) => {
  const isUserAuthenticated = await isAuthenticated();
  if (!isUserAuthenticated) redirect("/sign-in");
  const user = await getCurrentUser();

  return (
    <div className="root-layout">
      <nav className="flex items-center justify-between px-4 py-2">
  <Link href="/" className="flex items-center gap-2">
    <Image src="/logo.svg" alt="MockMate Logo" width={38} height={32} />
    <h2 className="text-primary-100">DevHire by Aryan</h2>
  </Link>
  <h2 className="text-primary-100 ml-auto">Hey <span className="waving-hand">&#9995;</span> {user?.name}</h2>
</nav>

      {children}
    </div>
  );
};

export default Layout;
