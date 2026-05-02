import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const PageLayout = ({ children }: { children: ReactNode }) => (
  <div className="relative min-h-screen overflow-x-hidden">
    {/* Floating background blobs */}
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-32 -left-20 w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gradient-warm opacity-30 blur-3xl animate-blob" />
      <div className="absolute top-1/3 -right-20 w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gradient-cool opacity-30 blur-3xl animate-blob" style={{ animationDelay: "3s" }} />
      <div className="absolute bottom-0 left-1/3 w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gradient-primary opacity-25 blur-3xl animate-blob" style={{ animationDelay: "6s" }} />
    </div>

    <Navbar />
    <main className="pt-28 sm:pt-32 px-4 sm:px-6">{children}</main>
    <Footer />
  </div>
);

export default PageLayout;
