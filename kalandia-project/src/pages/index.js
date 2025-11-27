import Head from "next/head";
import Image from "next/image";
import localFont from "next/font/local";
import styles from "@/styles/Home.module.css";
import Navbar from "@/components/Navbar";
import Description from "@/components/Description";
import { indexText, descriptionText } from "@/lib/texts";
import ImageSlider from "@/components/ImageSlider";

const images = [
  {
    url: "https://ik.imagekit.io/p0zp0rqkm/photos_kalandia/photo_2025-08-01%2016.39.14.jpeg?updatedAt=1754059252671",
    alt: "First image",
  },
  {
    url: "https://ik.imagekit.io/p0zp0rqkm/photos_kalandia/photo_2025-08-01%2016.39.13.jpeg?updatedAt=1754059251864",
    alt: "Second image",
  },
  {
    url: "https://ik.imagekit.io/p0zp0rqkm/photos_kalandia/photo_2025-08-01%2016.39.16.jpeg?updatedAt=1754059254388",
    alt: "Third image",
  },
];

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
        <ImageSlider
          images={images}
          containerClass="image-slider2"
          imageClass="slider-image"
        />

        <Description nameText={indexText} descText={descriptionText} />
      </div>
    </>
  );
}
