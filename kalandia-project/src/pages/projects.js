import Navbar from "@/components/Navbar";
import Link from "next/link";
import Image from "next/image";
import styles from "./projects.module.css";

const projects = [
  {
    id: 1,
    title: "Project 1.M.A.",
    slug: "project1",
    url: "https://ik.imagekit.io/p0zp0rqkm/photos_kalandia/Lola_site_photos/photo_2025-07-28%2010.53.08.jpeg?updatedAt=1753693381574",
    alt: "Project 1.M.A.",
  },
  {
    id: 2,
    title: "Project 2",
    slug: "project2",
    url: "https://ik.imagekit.io/p0zp0rqkm/photos_kalandia/project_2/photo_2026-01-15%2012.46.05.jpeg",
    alt: "Project 2",
  },
  {
    id: 3,
    title: "Project 3",
    slug: "project3",
    url: "",
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
