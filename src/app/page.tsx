import imagePaths from "@/constants/imagePaths";
import Image from "next/image";
// import styles from "./page.module.css";

export default function Home() {
  return <div className="">
    {/* Hero Section */}
    <div>
      <Image
        src={`${imagePaths.image}/homePageHero.png`}
        alt="Hero Image"
        width={1728}
        height={676}
        layout="responsive"
        priority
      />
    </div>
  </div>;
}
