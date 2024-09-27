import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <div className="container ml-24 mt-28 w-auto flex justify-between ">
      <div className="left w-1/2">
        <h2 className="text-4xl font-bold text-gray-300 ">Hi, I'M RITIK KUMAR</h2>
        <h3 className="text-2xl font-bold text-cyan-300 mt-1">Full-stack Developer</h3>
        <p className="mt-5 text-gray-300"> Hey, I am looking for web development internship as a MERN stack developer as i have skills like : html,css , javascript,node

          Js,express js ,mongodb database ,react js etc.

          I have just finished my bsc computer science so i can work comfortably now. So as far as i think i will be the perfect choice for internship right now. because i am available full-time now.
</p>
   <span className="flex gap-5">
    <button  className="btn bg-cyan-500 text-white w-32 h-11 mt-4 rounded-md  hover:bg-cyan-400 ">Hire Me</button>
    <button className="btn bg-cyan-500 text-white w-32 h-11 mt-4 rounded-md  hover:bg-cyan-400 ">Let's Talk</button>
   </span>
    </div>
    <div className=" fixed bottom-0 right-3  right">
      <img className=" shdw w-80 " src="/ritik.png "></img>
      </div>  </div>
      <Footer />
    </>
  );
}
