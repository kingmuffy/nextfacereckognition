import Image from "next/image";
import styles from "./page.module.css";
import facee from "public/facee.png";
import Button from "@/components/Button/Button";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
         Face Recognition System
        </h1>
        <p className={styles.desc}>
          Turning your fear and daubt into Trust. We bring together the people from the
          global online interactions.
        </p>
        <Button url="/portfolio" text="See how it Works"/>
      </div>
      <div className={styles.item}>
        <Image src={facee} alt="" className={styles.img} />
      </div>
    </div>
  );
}