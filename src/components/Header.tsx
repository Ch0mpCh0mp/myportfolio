

export default function Header() {
  return (
    <header className=" bg-navy w-4/5 h-4/5 flex items-center m-auto lg:h-[70vh] lg:m-0">
      <nav>
        <ul className="font-majorMono text-7xl sm:text-8xl text-deeppink underline lg:text-9xl">
          <li>
            <a href="#work">WORK</a>
          </li>
          <li>
            <a href="#about">ABOUT</a>
          </li>
          <li>
            <a href="#contact">CONTACT</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
