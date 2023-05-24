import { motion } from "framer-motion"

import { styles } from "../styles"
import { staggerContainer } from "../utils/motion"

// This function will instantly return another function
const SectionWrapper = (Component, idName) => // SectionWrapper is called from other components with the component name
function HOC() {                              // and an idName as input parameters
    return (

        // Add motion and css padding to make the components behave in a generic way
        <motion.section
            variants={staggerContainer()}
            initial='hidden'
            whileInView='show'
            viewport={{once: true, amount: 0.25}}
            className={`${styles.padding} max-w-7xl
            mx-auto relative z-0`}
        >
            {/** Connect the different sections with negligible empty space*/}
            <span className="hash-span" id={idName}>
                &nbsp;
            </span>
            {/** Connect the different sections with negligible empty space*/}

            {/** Call the component/section */}
            <Component />
            {/** Call the component/section */}

        </motion.section>
        // Add motion and css padding to make the components behave in a generic way

    )
}

export default SectionWrapper