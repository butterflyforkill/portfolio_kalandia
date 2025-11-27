import Navbar from "@/components/Navbar";
import Description from "@/components/Description";
import ImageSlider from "@/components/ImageSlider";
import { project1MAName, project1MA } from "@/lib/texts";

const firstImages = [
  {
    url: "https://ik.imagekit.io/p0zp0rqkm/photos_kalandia/Lola_site_photos/photo_2025-07-28%2010.53.08.jpeg?updatedAt=1753693381574",
    alt: "First image",
  },
  {
    url: "https://ik.imagekit.io/p0zp0rqkm/photos_kalandia/Lola_site_photos/photo_2025-07-28%2010.53.07.jpeg?updatedAt=1753693381547",
    alt: "Second image",
  },
  {
    url: "https://ik.imagekit.io/p0zp0rqkm/photos_kalandia/Lola_site_photos/photo_2025-07-28%2010.52.58.jpeg?updatedAt=1753693378811",
    alt: "Third image",
  },
];

const secondImages = [
  {
    url: "https://ik.imagekit.io/p0zp0rqkm/photos_kalandia/Lola%20Kalandia%20rose%20dress_4_bearbeitet.jpg",
    alt: "First image",
  },
  {
    url: "https://ik.imagekit.io/p0zp0rqkm/photos_kalandia/photo_2025-08-01%2016.38.45.jpeg?updatedAt=1754059249260",
    alt: "Second image",
  },
  {
    url: "https://ik.imagekit.io/p0zp0rqkm/photos_kalandia/photo_2025-08-01%2016.38.34.jpeg?updatedAt=1754059246834",
    alt: "Third image",
  },
];

const thirdImages = [
  {
    url: "https://ik.imagekit.io/p0zp0rqkm/photos_kalandia/photo_2025-11-27%2016.36.35.jpeg",
    alt: "First image",
  },
  {
    url: "https://ik.imagekit.io/p0zp0rqkm/photos_kalandia/photo_2025-08-01%2016.38.50.jpeg?updatedAt=1754059249243",
    alt: "Second image",
  },
  {
    url: "https://ik.imagekit.io/p0zp0rqkm/photos_kalandia/photo_2025-08-01%2016.38.46.jpeg?updatedAt=1754059249253",
    alt: "Third image",
  },
];

const fourthImages = [
  {
    url: "https://ik.imagekit.io/p0zp0rqkm/photos_kalandia/photo_2025-08-01%2016.36.34.jpeg?updatedAt=1754059241380",
    alt: "First image",
  },
  {
    url: "https://ik.imagekit.io/p0zp0rqkm/photos_kalandia/photo_2025-08-01%2016.36.22.jpeg?updatedAt=1754059241321",
    alt: "Second image",
  },
  {
    url: "https://ik.imagekit.io/p0zp0rqkm/photos_kalandia/photo_2025-08-01%2016.36.24.jpeg?updatedAt=1754059241311",
    alt: "Third image",
  },
];

const fifthImages = [
  {
    url: "https://ik.imagekit.io/p0zp0rqkm/photos_kalandia/photo_2025-08-01%2016.36.20.jpeg?updatedAt=1754059237874",
    alt: "First image",
  },
  {
    url: "https://ik.imagekit.io/p0zp0rqkm/photos_kalandia/photo_2025-08-01%2016.36.17.jpeg?updatedAt=1754059237884",
    alt: "Second image",
  },
  {
    url: "https://ik.imagekit.io/p0zp0rqkm/photos_kalandia/photo_2025-08-01%2016.36.18.jpeg?updatedAt=1754059237862",
    alt: "Third image",
  },
];

const sixthImages = [
  {
    url: "https://ik.imagekit.io/p0zp0rqkm/photos_kalandia/photo_2025-08-01%2016.39.50.jpeg?updatedAt=1754059257107",
    alt: "First image",
  },
  {
    url: "https://ik.imagekit.io/p0zp0rqkm/photos_kalandia/photo_2025-08-01%2016.39.56.jpeg?updatedAt=1754059258341",
    alt: "Second image",
  },
  {
    url: "https://ik.imagekit.io/p0zp0rqkm/photos_kalandia/photo_2025-08-01%2016.39.54.jpeg?updatedAt=1754059257249",
    alt: "Third image",
  },
];

export default function Projects() {
  return (
    <div>
      <Navbar />
      <div className="about-desc">
        <ImageSlider
          images={firstImages}
          containerClass="image-slider2"
          imageClass="slider-image"
        />
        <Description nameText={project1MAName} descText={project1MA} />

        <ImageSlider
          images={secondImages}
          containerClass="image-slider2"
          imageClass="slider-image"
        />

        <ImageSlider
          images={thirdImages}
          containerClass="image-slider2"
          imageClass="slider-image"
        />

        <ImageSlider
          images={fourthImages}
          containerClass="image-slider2"
          imageClass="slider-image"
        />

        <ImageSlider
          images={fifthImages}
          containerClass="image-slider2"
          imageClass="slider-image"
        />

        <ImageSlider
          images={sixthImages}
          containerClass="image-slider2"
          imageClass="slider-image"
        />
      </div>
    </div>
  );
}
