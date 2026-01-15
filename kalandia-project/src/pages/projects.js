import Navbar from "@/components/Navbar";
import Link from "next/link";
import Image from "next/image";
import styles from "./projects.module.css";

const projects = [
  {
    id: 1,
    title: "Project Dogma: perfect human",
    slug: "project1",
    url: "https://ik.imagekit.io/p0zp0rqkm/photos_kalandia/coming_soon/photo_2026-01-15%2016.46.38.jpeg",
    alt: "Project 1.M.A.",
  },
  {
    id: 2,
    title: "Project RE:BIRTH ZP 91",
    slug: "project2",
    url: "https://ik.imagekit.io/p0zp0rqkm/photos_kalandia/coming_soon/photo_2026-01-15%2016.53.00.jpeg",
    alt: "Project RE:BIRTH ZP 91",
  },
  {
    id: 3,
    title: "",
    slug: "project3",
    url: "https://ik.imagekit.io/p0zp0rqkm/photos_kalandia/coming_soon/coming_soon.jpg",
    alt: "Project 3",
  },
];

export default function Projects() {
  return (
    <>
      <Navbar />

      {/* Clean Grid — exactly like your drawing */}
      <div className={styles.grid}>
        {projects.map((project) => (
          <Link href={`/projects/${project.slug}`} key={project.id}>
            <div className={styles.card}>
              <Image
                src={project.url} // ← external URL
                alt={project.alt}
                width={800}
                height={1000}
                className={styles.image}
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWj7O8QAAAABJRU5ErkJggg=="
                priority={project.id <= 3} // faster load for first 3
              />
              <div className={styles.overlay}>
                <div className={styles.title}>{project.title}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
