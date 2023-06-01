import { Tilt } from "react-tilt"
import { motion } from "framer-motion"

import { styles } from "../styles"
import { github } from "../assets"
import { SectionWrapper } from "../hoc"
import { projects } from "../constants"

import { fadeIn, textVariant } from "../utils/motion"

const ProjectCard = ({ index, name, description, tags, image, source_code_link}) => {

  return(

    // Add a box/container
    <motion.div
      variants={fadeIn('up', 'spring', index * 0.5, 0.75)}
    >
      {/** Add Tilt Animation */}
      <Tilt
        options = {{
          max : 45,
          scale : 1,
          speed : 450
        }}
        className = 'bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >

        {/** Add a container to contain all the image related contents of a card */}
        <div className="relative w-full h-[230px]">

          {/** Add the project image */}
          <img 
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />

          {/** Creare a container to store the github icon */}
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">

            {/** Add a clickable div with a black background */}
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >

              {/** Add the github image */}
              <img 
                src = {github}
                alt = 'github'
                className="w-1/2 h-1/2 object-contain"
              />

            </div>
            {/** Add a clickable div with a black background */}

          </div>
          {/** Creare a container to store the github icon */}

        </div>
        {/** Add a container to contain all the image related contents of a card */}

        {/** Adding a container to store the text on the card */}
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>
        {/** Adding a container to store the text on the card */}

        {/** Adding a div to add the tags near the bottom of the cards */}
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}

        </div>

      </Tilt>
      {/** Add Tilt Animation */}

    </motion.div>
    // Add a box/container

  )

}

const Works = () => {
  return (
    <>

      {/** Adding the heading for the Projects section */}
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>
      {/** Adding the heading for the Projects section */}

      {/** Adding a container to add the general description */}
      <div className="w-full flex">
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcases my skills and experience through examples of my work.
          Each project is briefly described with links to code repositories. It reflects my
          ability to solve complex problems, work with different technologies, and manage projects effectively.
        </motion.p>
      </div>
      {/** Adding a container to add the general description */}

      {/** Container to add the Github Cards */}
      <div className="mt-20 flex flex-wrap gap-7">

        {projects.map((project, index) => (

          // Return a component which has project information
          <ProjectCard 
            key = {`project-${index}`}
            index = {index}
            {...project}
          />

        ))}

      </div>
      {/** Container to add the Github Cards */}

    </>
  )
}

export default SectionWrapper(Works, '')