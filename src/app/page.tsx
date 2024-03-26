import Image from "next/image";

export default function Home() {
  return (
  
  <main className="text-[#eb735a] bg-gradient-to-b from-[#eb735a] via-[#f8eadd] to-transparent">
    <section className="flex flex-row justify-between m-7 ">
      <div className="title">
        <h2 className="text-xl">MERIDEN LIFE COACHING</h2>
      </div>
      <div className="flex justify-around gap-10 content-center items-center">
        <div>Menu</div>
        <div>Login</div>
        <button className="h-10 border-2 solid bg-[#f8eadd] border-[#e76146] px-2 cursor-pointer rounded-3xl">FREE CONSULTATION</button>
      </div>
    </section>
    <section className="menu2">
      <div className="grid grid-cols-2">
        <div className="">
          <img className="h-auto w-auto m-7" src="/images/imagen1.jpg" alt="Foto de la chinita amiga de Manuel"/>
        </div>
        <div className="flex flex-col flex- justify-center items-center gap-10 text-center">
          <div>
            <h1 className="text-8xl text-center">MERIDEN COACHING</h1>
          </div>
          <ul className="flex flex-col text-2xl content-center items-center">
            <li>RELATIONSHIPS</li>
            <li>FAMILY</li>
            <li>WORK</li>
            <li>LIFE</li>
          </ul>
          <div>
            <button className="h-10 border-2 solid bg-[#f8eadd] border-[#e76146] px-2 cursor-pointer rounded-3xl">WORK WITH ME</button>
          </div>
        </div>
      </div>
    </section>
  </main>
  );
}