import Head from "next/head";
import Image from "next/image";
import localFont from "next/font/local";
import styles from "@/styles/Home.module.css";
import Navbar from "@/components/Navbar";
import Description from "@/components/Description";


export default function Home() {
  return (
    <>
 
    <Navbar/>
    <Description/>

    
    </>
  );
}
