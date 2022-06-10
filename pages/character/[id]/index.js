import Head from 'next/head'
import styles from '../../../styles/Home.module.css'
import Link from 'next/link'

const defaultEndpoint = 'https://rickandmortyapi.com/api/character';

export async function getServerSideProps({ query }) {
  const { id } = query;
  const res = await fetch(`${defaultEndpoint}/${id}`);
  const data = await res.json();
  return{
    props: {
      data
    }
  }
}

export default function Home({ data }) {
  const { name, image} = data;
  return (
    <div className={styles.container}>
      <Head>
        <title>{name}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          {name} 
        </h1>
        <div className='profile'>
          <div className='profile-image'>
            <img src={ image } alt={name}/>
          </div>
          <div className='profile-detailes'>
            <h2>Character Detailes</h2>
            <ul>
              <li>
                <strong>Name:</strong> {name}
              </li>
            </ul>
          </div>
        </div>
        <p>
          <Link href='/'>
            <a>
              Back
            </a>
          </Link>
        </p>
      </main>
    </div>
  )
}