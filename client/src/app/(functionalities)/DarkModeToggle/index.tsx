import { Sun, Moon } from "lucide-react";
import { useAppDispatch, useAppSelector } from '@/app/redux';
import { setIsDarkMode } from '@/state';
import { motion, AnimatePresence } from 'framer-motion';


function DarkModeToggle(){

  const dispatch = useAppDispatch();


  const isDarkMode = useAppSelector(
    (state) => state.global.isDarkMode
  );


  const toggleDarkMode = () => {
    dispatch(setIsDarkMode(!isDarkMode));
  }

  return (
    <button title="Toggle" onClick={toggleDarkMode} className="relative w-8 h-8 flex items-center justify-center overflow-hidden">
      <AnimatePresence mode="wait">
        {isDarkMode ? (
          <motion.div
            key="moon"
            initial={{ opacity: 0, scale: 0.8, rotate: -90 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.8, rotate: 90 }}
            transition={{ duration: 0.3, type:'spring' }}
          >
            <Moon className="text-gray-500" size={24} />
          </motion.div>
        ) : (
          <motion.div
            key="sun"
            initial={{ opacity: 0, scale: 0.8, rotate: 90 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.8, rotate: -90 }}
            transition={{ duration: 0.3, type:'spring' }}
          >
            <Sun className="text-gray-500" size={24} />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
}

export default DarkModeToggle;
