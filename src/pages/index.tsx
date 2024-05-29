import Bento from "@/components/Bento";
import Container from "@/components/Container";
import Sidebar from "@/components/Sidebar";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <Bento />
      <Container />
    </div>
  );
}
