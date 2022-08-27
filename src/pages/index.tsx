import styles from "../styles/styles.module.scss";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Board - Organizando suas tarefas.</title>
      </Head>
      <div>
        <h1 className={styles.title}>
          Primeiro projeto com <span>next</span>
        </h1>
      </div>
    </>
  );
}
