import { BallCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { technologies } from '../constants' // the technologies

const Tech = () => {
  return (
    // Adding a div to contain all the balls
    <div className='flex flex-row flex-wrap justify-center gap-10'>

      {/** Going through the list of all the technologies */}
      {technologies.map((technology) => (
        
        // Container for a single Ball
        <div className='w-28 h-28' key={technology.name}>

          {/** Adding the Canvas for the Ball */}
          <BallCanvas icon = {technology.icon} />

        </div>
        // Container for a single Ball

      ))}
      {/** Going through the list of all the technologies */}

    </div>
    // Adding a div to contain all the balls
  )
}

export default SectionWrapper(Tech, '')