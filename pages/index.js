import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
export default function Home() {
  return (
    <div>
      <Head>
        <title>CodesWear Website</title>
        <meta name="description" content="Codeswear.com - Wear the code" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div >
        {/* <Image src="/stones.jpeg" alt="Zaeem added a pic" width={500}
          height={500} /> */}
        <img src="/stones.jpeg" alt="angry" />
      </div>

      <Footer />
    </div>
  );
}
