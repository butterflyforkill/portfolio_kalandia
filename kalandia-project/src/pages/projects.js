import Navbar from "@/components/Navbar";
import Description from "@/components/Description";
import ImageSlider from "@/components/ImageSlider";
import { project1MAName, project1MA } from "@/lib/texts";

export default function Projects() {
  return (
    <div>
      <Navbar />
      <div className="about-desc">
        <Description nameText={project1MAName} descText={project1MA} />

        <ImageSlider
          images={[
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
          ]}
          containerClass="my-slider"
          imageClass="my-image"
        />
      </div>
    </div>
  );
}
