import Head from "next/head";

// Components
import Bento from "@/components/Bento";
import Container from "@/components/Container";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <div className="flex h-screen">
      <Head>
        <title>Spotify V2</title>
      </Head>
      <Sidebar />
      <Bento />
      <Container />
    </div>
  );
}
