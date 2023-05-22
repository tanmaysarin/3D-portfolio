import { motion } from 'framer-motion'

import { styles } from '../styles'
import { ComputersCanvas } from './canvas'

const Hero = () => {
  return (
    // The Top->Down UI for the screen
    <section className='relative w-full h-screen mx-auto'>

      {/** Generating the Left->Right UI for the section */}
      <div className={`${styles.paddingX} absolute inset-0 top-[120px]
      max-w-7xl mx-auto flex flex-row items-start hap-5`}>

        {/** Adding the circle and the line */}
        <div className='flex flex-col justify-center items-center mt-5'>

          {/** Creating the circle */}
          <div className='w-5 h-5 rounded-full bg-[#915eff]' />

          {/** Creating the Line */}
          <div className='w-1 sm:h-80 h-40 violet-gradient'/>

        </div>
        {/** Adding the circle and the line */}

        {/** Adding Name and Description */}
        <div>

          {/** Adding the Name */}
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm &nbsp;
          <span className='text-[#915eff]'>Tanmay</span>
          </h1>
          {/** Adding the Name */}

          {/** Adding the description */}
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I am a budding Software Developer,
            <br className='sm:block hidden'/> looking for opportunities to learn.
          </p>
          {/** Adding the description */}

        </div>
        {/** Adding Name and Description */}

      </div>
      {/** Generating the Left->Right UI for the section */}

      <ComputersCanvas />

    </section>
    // The Top->Down UI for the screen
  )
}

export default Hero