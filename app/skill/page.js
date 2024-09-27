import React from 'react'

const skill = () => {
  return (
    <div w-full h-auto>
                           
                           <h1 className="skill text-3xl font-bold text-gray-300 text-center mt-8">SKILLS</h1>
       <div className="contain ml-20 mt-28 flex justify-between mx-10">     
        
        <div className="frontend">                                      {/*   frontend skills  */}         
       
      <h3 className='text-2xl font-semibold text-cyan-300 my-2'>Frontend</h3>
      <ul className='list-disc text-gray-300'>
      <li>Html</li>
      <li>Css</li>
      <li>Javascript</li>
  
    
      </ul></div>
    <div className="beckend">
      <h3 className='text-2xl font-semibold text-cyan-300 my-2'>Beckend</h3>
      <ul className='list-disc text-gray-300'>
      <li>Node.js</li>
      <li>Express.js</li>
      <li>Mongodb</li>
  




      </ul></div>
<div className="frmeworks">
      <h3 className='text-2xl font-semibold text-cyan-300 my-2'>Frameworks</h3>
      <ul className='list-disc text-gray-300'>



        <li>Tailwind</li>
        <li>Bootstrap</li>
        <li>React</li>
        <li>Next.js</li>
      </ul>
</div>
      </div>
    </div>
  )
}

export default skill
