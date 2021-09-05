import Head from 'next/head';
import styles from './styles.module.scss';

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="">
            <time>04 de setembro de 2021</time>
            <strong>Criando uma pagina com posts</strong>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quibusdam, natus velit error magni impedit totam voluptates cum nostrum dolorum praesentium tenetur. Eligendi, recusandae vero quasi modi iusto consequuntur ipsum?</p>
          </a>
          <a href="">
            <time>04 de setembro de 2021</time>
            <strong>Criando uma pagina com posts</strong>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quibusdam, natus velit error magni impedit totam voluptates cum nostrum dolorum praesentium tenetur. Eligendi, recusandae vero quasi modi iusto consequuntur ipsum?</p>
          </a>
          <a href="">
            <time>04 de setembro de 2021</time>
            <strong>Criando uma pagina com posts</strong>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quibusdam, natus velit error magni impedit totam voluptates cum nostrum dolorum praesentium tenetur. Eligendi, recusandae vero quasi modi iusto consequuntur ipsum?</p>
          </a>
        </div>
      </main>
    </>
  );
}