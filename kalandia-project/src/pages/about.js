import Navbar from "@/components/Navbar";
import Description from "@/components/Description";
import { aboutText, aboutLolaText, aboutLolaText2 } from "@/lib/texts";
import { sections } from "@/lib/sections";
import DescriptionHandle from "@/components/DescriptionHandle";
import DescriptionWithoutTitle from "@/components/DescriptionWithoutTitle";


export default function About() {
    return (
        
      <div>
        <Navbar/>
        <div className="about-desc">
        <Description nameText={aboutText} descText={aboutLolaText} />
        <DescriptionHandle sections = {sections}/>
        <DescriptionWithoutTitle descText={aboutLolaText2}/>
        </div>

      </div>
    );
  }