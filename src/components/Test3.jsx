import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Section from "./Section";
import Heading from "./Heading";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";
import card from "../assets/benefits/card-1.svg";
import { interaction } from "../constants";

export const Test3 = () => {
  const [openModal, setOpenModal] = useState(false);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  return (
    <Section>
      <section className="mx-auto max-w-[1100px] px-4 py-12 ">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Interaction"
          tag="Your Experience"
          text="Our platform offers diverse and engaging ways to interact with your AI Companion, crafted to build true relationships."
        />

        <div className="mb-4 grid grid-cols-12 gap-4">
          {interaction.map((item) => (
            <>
              <BounceCard key={item.id} className="col-span-12 md:col-span-4 ">
                <CardTitle>{item.title}</CardTitle>
                <motion.div
                  onClick={() => {
                    setOpenModal(true),
                      setTitle(item.title),
                      setText(item.text);
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.8 }}
                  style={{
                    backgroundImage: `url(${item.backgroundUrl})`,
                  }}
                  className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-violet-400 to-indigo-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]"
                >
                  <div className="block text-center font-semibold text-indigo-50">
                    FEATURE DEMO HERE
                  </div>
                </motion.div>
              </BounceCard>
              <AnimatePresence>
                {openModal && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => {
                      setOpenModal(false);
                    }}
                    className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
                  >
                    <motion.div
                      initial={{ scale: 0, rotate: "12.5deg" }}
                      animate={{ scale: 1, rotate: "0deg" }}
                      exit={{ scale: 0, rotate: "0deg" }}
                      onClick={(e) => e.stopPropagation()}
                      className="bg-gradient-to-br bg-slate-900 text-white p-6 rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-hidden"
                    >
                      <div className="relative z-10">
                        <h3 className="text-3xl font-bold text-center mb-2">
                          {title}
                        </h3>
                        <p className="text-center mb-6">{text}</p>
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </>
          ))}
        </div>
      </section>
    </Section>
  );
};
export default Test3;

const BounceCard = ({ className, children }) => {
  return (
    <motion.div
      whileHover={{ scale: 0.95, rotate: "-1deg" }}
      style={{ clipPath: "url(#benefits)" }}
      className={`group relative min-h-[300px] cursor-pointer overflow-hidden rounded-2xl bg-slate-900 p-8 ${className}`}
    >
      {children}
    </motion.div>
  );
};

const CardTitle = ({ children }) => {
  return (
    <h3 className="mx-auto text-center text-3xl font-semibold">{children}</h3>
  );
};
