import Head from "next/head";
import Image from "next/image";
import localFont from "next/font/local";
import styles from "@/styles/Home.module.css";
import Navbar from "@/components/Navbar";
import Description from "@/components/Description";
import { indexText, descriptionText } from "@/lib/texts";
import ImageSlider from "@/components/ImageSlider";

export default function Home() {
  return (
    <>
      <Head>
        <title>Lola Kalandia</title>
        <meta name="description" content="Lola Kalandia portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Navbar />
      <div className="about-desc">
        <ImageSlider/>

      <Description nameText={indexText} descText={descriptionText} />
      </div>
    </>
  );
}
