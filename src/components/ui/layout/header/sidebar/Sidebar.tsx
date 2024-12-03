import React, { useState } from "react";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
const menuItems = [
  {
    item:"Home",
    path:"/"
  },
  {
    item: "Popular",
    path: "/anime/popular",
  },
  {
    item: "Trending",
    path: "/anime/trending",
  },
  {
    item: "Login",
    path: "/auth/login",
  },
  {
    item:"Feedback",
    path:"/anime/feedback"
  }

];

const sidebarVariants = {
  open: {
    x: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 24,
    },
  },
  closed: {
    x: "100%",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
    },
  },
};

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 24,
    },
  },
  closed: {
    opacity: 0,
    y: 20,
    transition: {
      duration: 0.2,
    },
  },
};
const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => {
          setIsOpen(true);
        }}
        className="mr-0 xl:mr-[-2rem] 2xl:mr-[-3.6rem]  text-white hover:text-[#e50000]  transition-colors bg-black p-1 md:p-2 rounded-full"
      >
        <Menu size={32} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black z-20"
            />

            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={sidebarVariants}
              className="fixed top-0 right-0 h-full w-[280px] bg-[#111111] shadow-lg z-30"
            >
              <div className="h-16 md:h-[70px] flex items-center justify-between px-6 border-b border-[#2a2a2a]">
                <h2 className="text-[#e50000] text-xl font-bold tracking-wider">
                  MENU
                </h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:text-[#e50000] transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="p-4 space-y-2">
                {menuItems.map((menulist, index) => (
                  <motion.div
                    key={index}
                    initial="closed"
                    animate="open"
                    exit="closed"
                    variants={itemVariants}
                    className="p-3 text-white hover:bg-[#2a2a2a] rounded-md cursor-pointer transition-colors"
                  >
                    <Link to={menulist.path}>{menulist.item}</Link>
                  </motion.div>
                ))}
              </div>

              <div className="absolute bottom-0 w-full p-4 border-t border-[#2a2a2a]">
                <div className="text-[#666666] text-sm text-center">
                  © 2024 ANIMESHON
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Sidebar;
