import Header from "./Header";

export default function Hero() {
  return (
    <section id="hero" aria-labelledby="hero-title" className="grid min-h-screen grid-cols-1">

      <div className="hero-left flex items-center justify-center bg-darkcyan h-[10vh]">

        <nav className="flex items-center justify-end w-4/5">

          <div id="vertical-line" className="flex-1 h-px border-t-2 border-black mr-2"></div>

          <ul className="flex gap-3">
            <li><a href="https://github.com/Elakoda" target="_blank" rel="noopener noreferrer">GH</a></li>
            <li><a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer">LI</a></li>
          </ul>

        </nav>
      </div>

      <div className="hero-middle flex flex-col justify-end bg-darkorange h-[45vh] pl-16">
        <p className="text-sm font-extralight">Hi, my name is</p>
        <h1 id="hero-title" className="font-bold text-3xl underline mb-4">Elham Khodabandeh</h1>
        <h2 className="font-semibold">I'm a Web Developer in Training</h2>
        <p className="font-semibold">
          Currently studying at{" "}
          <a
            href="https://digitalcareerinstitute.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            DCI
          </a>
        </p>
        <p className="font-semibold pb-28">Welcome to my page</p>
      </div>

      <div className="hero-right bg-lightcoral h-[45vh]">
        <Header />
      </div>
    </section>
  );
}


// das ist die erste version bevor es responsive geacht wurde in der ersten div unter der section
//       <div className="hero-left flex items-center justify-center bg-darkcyan">
