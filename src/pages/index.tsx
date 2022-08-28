import styles from "../styles/styles.module.scss";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Board - Organizando suas tarefas.</title>
      </Head>
      <main className={styles.contentContainer}>
        <img src="/images/board-user.svg" alt="Ferramenta board" />

        <section className={styles.callToAction}>
          <h1>
            Uma ferramenta para seu dia a dia Escrea, planeje e organize-se..
          </h1>
          <p>
            <span>100% gratuita</span> e online.
          </p>
        </section>

        <div className={styles.donators}>
          <img src="https://sujeitoprogramador.com/steve.png" alt="usuário 1" />
        </div>
      </main>
    </>
  );
}
