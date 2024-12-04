import Head from "next/head";
import Image from "next/image";
import localFont from "next/font/local";
import styles from "@/styles/Home.module.css";
import Navbar from "@/components/Navbar";


export default function Home() {
  return (
    <>
      <Head>
        <title>Lola Kalandia</title>
        <meta name="description" content="Lola Kalandia portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className={`${styles.page}`}
      >
        <main className={styles.main}>
         <Navbar/>
        </main>
        <footer className={styles.footer}>
         
        </footer>
      </div>
    </>
  );
}
