import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='container w-auto h-auto mx-14 mt-20 text-gray-300'>
     < h1 className="skill text-3xl font-bold text-cyan-500 ">About</h1>
     <p className='mt-3'>Hello! I’m <b>Ritik Kumar</b>, a passionate and motivated <b>web developer</b> from <b>Haridwar, Uttarakhand</b>. With a solid educational background in <b>Computer Science</b> and hands-on experience in both <b>front-end</b> <b>and back-end</b> development, I thrive on creating beautiful, functional <b>websites</b> and <b>web applications</b>.

I’ve honed my skills in a variety of <b>frontend technologies</b> like <b>HTML, CSS, JavaScript, React/Redux, Tailwind, Bootstrap, and I’m currently diving deeper into Next.js. On the backend, I specialize in Node.js, Express.js, and MongoDB,</b> allowing me to deliver <b>full-stack solutions</b> that are both <b>efficient</b> and <b>scalable</b>.

I recently completed my Bachelor of Science in Computer Science from Gurukul Kangri Vishwavidyalaya, and I’m eager to apply the knowledge and experience I’ve gained to real-world projects. My development journey has included creating a fully functional To-Do List App, where I implemented features like task management and <b>database</b> integration using the <b>MERN</b> stack.

Additionally, I’ve developed a <b>Password Manager App</b>, designed to <b>securely</b> store and <b> manage passwords</b>, helping users protect their <b>sensitive</b> information. This project allowed me to deepen my understanding of <b>encryption</b> and <b>data security</b>.

Beyond <b>technical skills</b>, I bring strong problem-solving abilities and a <b>collaborative</b>e spirit to any team. I’m constantly learning and adapting to new <b>technologies</b>, driven by my passion for delivering high-quality, user-centric solutions.

Let’s create something amazing together! Feel free to explore my work or get in touch with me through  <Link className='text-blue-500' href={"https://www.linkedin.com/in/ritik-kumar-288918313/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"}> <b>Linkedin</b></Link> .</p>
    </div>
  )
}

export default page
