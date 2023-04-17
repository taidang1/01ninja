import Footer from "./Footer";
import Navbar from "./Navbar";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
    const router = useRouter(); 
    return (
        <div className="content">
            <Navbar />
            <AnimatePresence mode="exitBeforeEnter" >
            <motion.div 
            key={router.route}
             initial="initialState"
             animate="animateState"
             exit="exitState"
             transition={{
                    duration: 0.3,
             }}
             variants={{
                 initialState: {
                     opacity: 1,

                   
                 },
                 animateState: {
                     opacity: 1,
                 
                 },
                 exitState: {
                    opacity: 0,
                    
                 }
             }}
            >
            { children }
            </motion.div>
            </AnimatePresence>
            <Footer />
        </div>
    );
}

export default Layout;