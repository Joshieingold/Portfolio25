import { Link } from "@heroui/link";

import { Navbar } from "@/components/navbar";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen ">
      <Navbar />
      <main className="container mx-auto max-w-7xl px-6 flex-grow pt-16 ">
        {children}
      </main>
      <footer className="w-full flex items-center justify-center py-3">
        <Link isExternal >
          <span className="text-default-600">Joshua Lynch 2025</span>
        </Link>
      </footer>
    </div>
  );
}
