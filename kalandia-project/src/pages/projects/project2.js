import Navbar from "@/components/Navbar";
import Description from "@/components/Description";
import ImageSlider from "@/components/ImageSlider";
import { projectZP91Name, projectZP91 } from "@/lib/texts";

const firstImages = [
  {
    url: "https://ik.imagekit.io/p0zp0rqkm/photos_kalandia/project_2/photo_2026-01-15%2012.47.25.jpeg",
    alt: "First image",
  },
  {
    url: "https://ik.imagekit.io/p0zp0rqkm/photos_kalandia/project_2/photo_2026-01-15%2012.47.08.jpeg",
    alt: "Second image",
  },
  // {
  //   url: "https://ik.imagekit.io/p0zp0rqkm/photos_kalandia/Lola_site_photos/photo_2025-07-28%2010.52.58.jpeg?updatedAt=1753693378811",
  //   alt: "Third image",
  // },
];

const secondImages = [
  {
    url: "https://ik.imagekit.io/p0zp0rqkm/photos_kalandia/project_2/photo_2026-01-15%2012.46.13.jpeg",
    alt: "First image",
  },
  {
    url: "https://ik.imagekit.io/p0zp0rqkm/photos_kalandia/project_2/photo_2026-01-15%2012.47.19.jpeg",
    alt: "Second image",
  },
  // {
  //   url: "https://ik.imagekit.io/p0zp0rqkm/photos_kalandia/photo_2025-08-01%2016.38.34.jpeg?updatedAt=1754059246834",
  //   alt: "Third image",
  // },
];

const thirdImages = [
  {
    url: "https://ik.imagekit.io/p0zp0rqkm/photos_kalandia/project_2/photo_2026-01-15%2012.47.00.jpeg",
    alt: "First image",
  },
  {
    url: "https://ik.imagekit.io/p0zp0rqkm/photos_kalandia/project_2/photo_2026-01-15%2012.45.59.jpeg",
    alt: "Second image",
  },
  // {
  //   url: "https://ik.imagekit.io/p0zp0rqkm/photos_kalandia/photo_2025-08-01%2016.38.46.jpeg?updatedAt=1754059249253",
  //   alt: "Third image",
  // },
];

const fourthImages = [
  {
    url: "https://ik.imagekit.io/p0zp0rqkm/photos_kalandia/project_2/photo_2026-01-15%2012.46.57.jpeg",
    alt: "First image",
  },
  {
    url: "https://ik.imagekit.io/p0zp0rqkm/photos_kalandia/project_2/photo_2026-01-15%2012.46.09.jpeg",
    alt: "Second image",
  },
  // {
  //   url: "https://ik.imagekit.io/p0zp0rqkm/photos_kalandia/photo_2025-08-01%2016.36.24.jpeg?updatedAt=1754059241311",
  //   alt: "Third image",
  // },
];

export default function Project1() {
  return (
    <div>
      <Navbar />
      <div className="about-desc">
        <ImageSlider
          images={firstImages}
          containerClass="image-slider3"
          imageClass="slider-image2"
        />
        <Description nameText={projectZP91Name} descText={projectZP91} />

        <ImageSlider
          images={secondImages}
          containerClass="image-slider3"
          imageClass="slider-image2"
        />

        <ImageSlider
          images={thirdImages}
          containerClass="image-slider3"
          imageClass="slider-image2"
        />

        <ImageSlider
          images={fourthImages}
          containerClass="image-slider3"
          imageClass="slider-image2"
        />
      </div>
    </div>
  );
}
