import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="slebew ancrit malvi x vanli lmao yahahha hayuuu pale papale" />
        <p className="description">
          bilek beliau aseli 100% icikiwir shap pov shap hitam mk
        </p>
      </main>

      <Footer />
    </div>
  )
}
