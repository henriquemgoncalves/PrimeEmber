import Head from "next/head";
import styles from "@/styles/Home.module.sass";
import Banner from "@/ui/components/Banner";
import Featured from "@/ui/components/Featured";
import About from "@/ui/components/About";
import Form from "@/ui/components/Form";
import Kids from "@/ui/components/Kids";
import Local from "@/ui/components/Local";

export default function Home() {
  return (
    <>
      <Head>
        <title>Prime Ember</title>
      </Head>
      <main className={styles.container}>
        <Banner/>
        <Featured/>
        <About/>
        <Kids/>
        <Form/>
        <Local/>
      </main>
    </>
  );
}
