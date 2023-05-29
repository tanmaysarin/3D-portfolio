import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'

import { SectionWrapper } from '../hoc'

// A new functional component to display the cards
const ServiceCard = ({index, title, icon}) => {
  return(
    // Add a Tilt property
    <Tilt className='xs:w-[250px] w-full'>

      {/** Adding a motion property */}
      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px]
        rounded-[20px] shadow-card'
      >
      {/** Add a motion property */}

        {/** On the tilt and motion property above, add the actual box */}
        <div
          options = {{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12
          min-h-[280px] flex justify-evenly items-center flex-col'
        >

          {/** Add the objct/technology image and details on the card */}
          <img 
            src={icon}
            alt={title}
            className='w-16 h-16 onject-contain'
          />
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
          {/** Add the objct/technology image and details on the card */}

        </div>
        {/** On the tilt and motion property above, add the actual box */}

      </motion.div>
      {/** Adding a motion property */}

    </Tilt>
  )
}

const About = () => {
  return (
    <>

      {/** Adding the heading for the about section */}
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      {/** Adding the heading for the about section */}

      {/** Adding the Mission Statement paragraph */}
      <motion.p variants={fadeIn('', '', 0.1, 1)}
      className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
        I am a skilled software developer with experience across all domains of the
        Software Development Cycle, including but not limited to Typescript, React, Angular,
        Python, .NetCore, T-SQL and DevSecOps. I'm a quick learner and wish to collaborate on
        projects which solve real-world problems. Let's work together to bring your ideas to life!
      </motion.p>
      {/** Adding the Mission Statement paragraph */}

      {/** Creating a holder to contain all the project cards */}
      <div className='mt-20 flex flex-wrap gap-10'>

        {/** Services come from a js dictionary */}
        {services.map((service, index) => (

          // Rendering a custom card
          <ServiceCard key = {service.title} index = {index} {...service} /> // index, all properties
          // Rendering a custom card
          
        ))}
        {/** Services come from a js dictionary */}

      </div>
      {/** Creating a holder to contain all the project cards */}

    </>
  )
}

export default SectionWrapper(About, "about")