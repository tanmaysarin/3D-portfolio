import { motion } from "framer-motion"

import { styles } from "../styles"
import { SectionWrapper } from "../hoc"
import { fadeIn, textVariant } from "../utils/motion"

import { testimonials } from "../constants"

const FeedbackCard = ({index, testimonial, name, designation, company, image}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
  >

    {/** Adding the huge " in the testimonial card */}
    <p className="text-white font-black text-[48px]">"</p>

    <div className="mt-1">

      {/** Adding the Testimonials */}
      <p className="text-white tracking-wider text-[18px]">{testimonial}</p>

      {/** Creating the subtext, which includes the writer's username, designation and picture */}
      <div className="mt-7 flex justify-between items-center gap-1">

        {/** Adding the username, designation and company*/}
        <div className="flex-1 flex flex-col">

          {/** Adding the "@" Symbol and name of author */}
          <p className="text-white font-medium text-[16px]">
            <span className="blue-text-gradient">@</span> {name}
          </p>

          {/** Adding the Subtext */}
          <p className="mt-1 text-secondary text-[12px]">
            {designation} of {company}
          </p>

        </div>
        {/** Adding the username, designation and company*/}

        <img 
          src = {image}
          alt = {`feedback-bu-${name}`}
          className="w-10 h-10 rounded-full object-cover"
        />

      </div>
      {/** Creating the subtext, which includes the writer's username, designation and picture */}

    </div>

  </motion.div>
)

const Feedbacks = () => {
  return (
    // Creating a black container to contain everything
    <div className="mt-12 bg-black-100 rounded-[20px]">

      {/** Adding a purplish background to add the testimonial section header in */}
      <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}>

        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What others say</p>
          <h2 className={styles.sectionHeadText}>Testimonials.</h2>

        </motion.div>

      </div>
      {/** Adding a purplish background to add the testimonial section header in */}

      {/** Container to contain all the feedback cards */}
      <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}>

        {testimonials.map((testimonial, index) => (

          <FeedbackCard
          key = {testimonial.name}
          index = {index}
          {...testimonial}
          />

        ))}

      </div>
      {/** Container to contain all the feedback cards */}

    </div>
    // Creating a black container to contain everything
  )
}

export default SectionWrapper(Feedbacks, '')