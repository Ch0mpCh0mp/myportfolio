

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen bg-bluegray pl-20">

      <p className="font-whisper text-9xl pt-24 lg:text-[12rem]">Hello.</p>
      <p className="font-semibold mt-6 mb-12">Keeping it simple here</p>

      <p className="font-semibold">Email: <a href="mailto:elakoda@gmail.com"  className="font-poiret text-red-300 underline">elakoda@gmail.com</a></p>
      <p className="font-semibold">You can find me here on the Internet:</p>

      <ul id="contact-info" className="font-poiret text-red-300 font-bold flex justify-between w-1/3 lg:w-1/6">
        <li><a href="https://github.com/Ch0mpCh0mp" target="_blank" rel="noopener noreferrer">Github</a></li>
        <li><a href="http://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
      </ul>
      
    </section>
  );
}
