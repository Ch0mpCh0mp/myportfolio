import Header from "./Header";

export default function Hero() {
  return (
    <section id="hero" aria-labelledby="hero-title" className="min-h-screen flex flex-col lg:flex-row">

      <div className="hero-left flex items-center justify-center bg-darkcyan h-[10vh] lg:h-auto lg:basis-[5%]">

        <nav className="flex items-center justify-end w-4/5 lg:flex-col lg:flex-col-reverse lg:items-center lg:justify-start lg:w-full lg:h-full lg:pt-8">

          <div id="vertical-line" className="flex-1 h-px border-t-2 border-black mr-2 lg:h-[30rem] lg:border-t-0 lg:border-r-2"></div>

          <ul className="flex gap-3 lg:flex-col lg:items-start lg:gap-6 lg:pl-2">
            <li className="lg:-rotate-90 origin-left block"><a href="https://github.com/Ch0mpCh0mp" target="_blank" rel="noopener noreferrer">GH</a></li>
            <li className="lg:-rotate-90 origin-left block"><a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer">LI</a></li>
          </ul>

        </nav>
      </div>

      <div className="hero-middle flex flex-col justify-end bg-darkorange h-[45vh] pl-16 md:pl-20 lg:h-auto lg:basis-[40%] lg:pl-8 lg:pb-7">
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

      <div className="hero-right bg-lightcoral h-[45vh] lg:h-auto lg:basis-[55%] lg:flex lg:items-center lg:justify-start">
        <Header />
      </div>
    </section>
  );
}


// das ist die erste version bevor es responsive geacht wurde in der ersten div unter der section
//       <div className="hero-left flex items-center justify-center bg-darkcyan">
