import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <ul className="inline-flex p-2 ">
          <li>Menu1</li>
          <li>Menu2</li>
          <li>Menu3</li>
        </ul>
      </Head>
      <main>
        <h1 className="font-bold text-6xl mt-5 ml-auto mr-auto" >Hello!</h1>
      </main>
    </div>
  )
}
