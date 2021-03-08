import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <ul className="flex justify-center p-2 ">
          <li className=" f- pr-2 bg-pink-300">Menu1</li>
          <li>Menu2</li>
          <li>Menu3</li>
        </ul>
      </Head>
      <main>
        <h1 className="font-bold text-6xl mt-5 text-center" >Hello!</h1>
      </main>
    </div>
  )
}
