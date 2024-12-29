import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
<div className="container">
      <Head>
        <title>Account Activated | LeChinese</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main-content">
        <Header title="Welcome to LeChinese!" />
        <div className="content">
          <h1 className="title">Account Activated Successfully!</h1>
          <p className="description">
            Thank you for verifying your email. Your account is now active. You
            can return to the <span className="app-name">LeChinese</span> app
            and log in to explore our features.
          </p>
          <a href="yourapp://login" className="button">
            Open LeChinese App
          </a>
        </div>
      </main>

      <Footer />

      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-height: 100vh;
          padding: 0;
          margin: 0;
          font-family: Arial, sans-serif;
          background-color: #f9fafb;
          color: #333;
        }

        .main-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          text-align: center;
        }

        .content {
          max-width: 600px;
          background: white;
          padding: 2rem;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .title {
          font-size: 2rem;
          font-weight: bold;
          color: #15847d;
          margin-bottom: 1rem;
        }

        .description {
          font-size: 1.2rem;
          line-height: 1.6;
          color: #555;
          margin-bottom: 1.5rem;
        }

        .app-name {
          font-weight: bold;
          color: #15847d;
        }

        .button {
          display: inline-block;
          padding: 0.75rem 1.5rem;
          font-size: 1rem;
          font-weight: bold;
          text-decoration: none;
          color: white;
          background-color: #15847d;
          border-radius: 5px;
          transition: background-color 0.3s ease;
        }

        .button:hover {
          background-color: #136b65;
        }
      `}</style>
    </div>
  )
}
