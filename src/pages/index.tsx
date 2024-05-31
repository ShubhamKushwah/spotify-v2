import Head from "next/head";
import { useState } from "react";

// Components
import Bento from "@/components/Bento";
import Container from "@/components/Container";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  const [selected, setSelected] = useState(0);

  return (
    <div className="flex h-screen">
      <Head>
        <title>Spotify V2</title>
      </Head>
      <Sidebar />
      <Bento selected={selected} setSelected={setSelected} />
      <Container selected={selected} />
    </div>
  );
}
