import Button from "./Button";
import Heading from "./Heading";
import Section from "./Section";
import Tagline from "./Tagline";
import { integration } from "../constants";
import { check2, grid, loading1 } from "../assets";
import { Gradient } from "./design/Roadmap";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import minecraft from "../assets/minecraft.svg";
import minecraft1 from "../assets/minecraft.mp4";

const Test2 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <Section className="overflow-hidden" id="Integration">
      <div className="container md:pb-5">
        <Heading title="Integration" tag="Think of thing you can connect" />
        <div className="flex-col flex md:flex-row justify-center items-center max-w-full md:h-[100px] h-[200px] pb-10 pt-20">
          <div className="flex w-full m-1 justify-center items-center">
            <motion.div
              className="w-[100px] h-[100px]  m-2"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: isInView ? "-50%" : "100%", opacity: 1 }}
              viewport={{ margin: "-600" }}
              transition={{ duration: 0.4 }}
            >
              <img className="w-full" src={minecraft} alt="minecraft" />
            </motion.div>
            <motion.div
              className="w-[100px] h-[100px] m-2 border bg-red-600"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: isInView ? "-50%" : "100%", opacity: 1 }}
              transition={{ duration: 0.55 }}
            />
            <motion.div
              className="w-[100px] h-[100px] m-2 border bg-red-600"
              initial={{ y: -100, opacity: 0 }}
              viewport={{ margin: "-600" }}
              animate={{ y: isInView ? "-50%" : "100%", opacity: 1 }}
              transition={{ duration: 0.6 }}
            />
          </div>
          <div className="flex w-full m-1 justify-center items-center">
            <motion.div
              className="w-[100px] h-[100px] m-2 border bg-red-600"
              initial={{ y: -100, opacity: 0 }}
              viewport={{ margin: "-600" }}
              animate={{ y: isInView ? "-50%" : "100%", opacity: 1 }}
              transition={{ duration: 0.6 }}
            />
            <motion.div
              className="w-[100px] h-[100px] m-2 border bg-red-600"
              initial={{ y: -100, opacity: 0 }}
              viewport={{ margin: "-600" }}
              animate={{ y: isInView ? "-50%" : "100%", opacity: 1 }}
              transition={{ duration: 0.55 }}
            />
            <motion.div
              className="w-[100px] h-[100px] m-2 border bg-red-600"
              initial={{ y: -100, opacity: 0 }}
              viewport={{ margin: "-600" }}
              animate={{ y: isInView ? "-50%" : "100%", opacity: 1 }}
              transition={{ duration: 0.4 }}
            />
          </div>
        </div>

        <div
          className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]"
          ref={ref}
        >
          {integration.map((item) => {
            const targetRef = useRef(null);
            const { scrollYProgress } = useScroll({
              target: targetRef,
              offset: ["end end", "end start"],
            });
            const vid_paddinf = 12;
            const scale = useTransform(scrollYProgress, [-100, 1], [1, 0.85]);
            const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

            return (
              <motion.div
                className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] ${
                  item.colorful ? "bg-conic-gradient" : "bg-n-6"
                }`}
                key={item.id}
                initial={{ x: -100, opacity: 0 }}
                animate={{
                  x: isInView ? item.x : item.x1,
                  opacity: 1,
                  y: isInView ? item.y1 : item.y,
                }}
                transition={{ duration: item.duration }}
              >
                <div className="relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
                  <div className="relative z-1">
                    <div
                      style={{
                        height: `calc(30vh - ${vid_paddinf * 2}px)`,
                        scale,
                      }}
                      ref={targetRef}
                      className="mb-10 -my-10 -mx-15"
                    >
                      <video
                        className="w-full"
                        src={item.video}
                        autoPlay
                        loop
                        muted
                        width={628}
                        height={426}
                      />
                    </div>
                    <h4 className="h4 mb-4">{item.title}</h4>
                    <p className="body-2 text-n-4">
                      {item.text.substring(0, 200)}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}

          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Test2;
