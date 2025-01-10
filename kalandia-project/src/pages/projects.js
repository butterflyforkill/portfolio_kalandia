import Navbar from "@/components/Navbar";
import Description from "@/components/Description";
import { project1MAName, project1MA } from "@/lib/texts";

export default function Projects() {
    return (
        
      <div>
        <Navbar/>
        <div className="about-desc">
        <Description nameText={project1MAName} descText={project1MA} />

        </div>
      </div>
    );
  }