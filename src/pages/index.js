import Head from "next/head";
import styles from "@/styles/Home.module.sass";
import NavBar from "@/ui/components/NavBar";
import Banner from "@/ui/components/Banner";
import Featured from "@/ui/components/Featured";
import About from "@/ui/components/About";
import Footer from "@/ui/components/Footer";
import Form from "@/ui/components/Form";
import Help from "@/ui/components/Help";
import Kids from "@/ui/components/Kids";

export default function Home() {
  return (
    <>
      <Head>
        <title>Prime Ember</title>
      </Head>
      <main className={styles.container}>
        <Banner/>
        <Featured/>
        <Help/>
        <About/>
        <Kids/>
        <Form/>
      </main>
    </>
  );
}
