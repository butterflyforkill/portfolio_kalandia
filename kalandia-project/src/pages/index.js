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
    url: "https://ik.imagekit.io/p0zp0rqkm/photos_kalandia/Lola_site_photos/photo_2025-07-28%2010.53.03.jpeg?updatedAt=1753693378899",
    alt: "First image",
  },
  {
    url: "https://ik.imagekit.io/p0zp0rqkm/photos_kalandia/Lola_site_photos/photo_2025-07-28%2010.53.02.jpeg?updatedAt=1753693378891",
    alt: "Second image",
  },
  {
    url: "https://ik.imagekit.io/p0zp0rqkm/photos_kalandia/Lola_site_photos/photo_2025-07-28%2010.52.56.jpeg?updatedAt=1753693378844",
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
          containerClass="index-slider"
          imageClass="slider-image"
        />

        <Description nameText={indexText} descText={descriptionText} />
      </div>
    </>
  );
}
