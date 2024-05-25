import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import discord from "../assets/Discord.mp4";
import minecraft1 from "../assets/minecraft.mp4";
import Section from "./Section";
import Heading from "./Heading";
import minecraft from "../assets/minecraft.svg";

const Test = () => {
  return (
    <div className="">
      <TextParallaxContent
        video={minecraft1}
        subheading={"Let's play"}
        heading={"Connect to your game"}
      >
        <ExampleContent />
      </TextParallaxContent>
      <TextParallaxContent
        video={discord}
        subheading={"let's talk"}
        heading={"Be your friend"}
      >
        <ExampleContent1 />
      </TextParallaxContent>
    </div>
  );
};

const vid_paddinf = 12;

const StickyImage = ({ video }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [-0.9, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  return (
    <motion.div
      style={{
        height: `calc(100vh - ${vid_paddinf * 2}px)`,
        scale,
      }}
      ref={targetRef}
      className={` w-full overflow-hidden sticky rounded-3xl`}
    >
      <video
        src={video}
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      />
      <motion.div
        className="absolute border border-indigo-950 rounded-3xl inset-0 bg-neutral-950/70"
        style={{
          opacity,
        }}
      />
    </motion.div>
  );
};

const OverlayCopy = ({ subheading, heading }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
    >
      <p className="mb-2 text-center text-xl md:mb-4 md:text-3xl">
        {subheading}
      </p>
      <p className="text-center text-4xl font-bold md:text-7xl">{heading}</p>
    </motion.div>
  );
};

const ExampleContent = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <div className="container">
      <div className="  mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4  pt-12 md:grid-cols-12">
        <h2 className="col-span-1 text-3xl font-bold md:col-span-4">Gaming</h2>
        <div className="col-span-1 md:col-span-8">
          <p className="mb-4 text-xl text-neutral-600 md:text-2xl">
            We’re also venturing into the gaming realm, with potential
            integrations for games like Minecraft, Roblox, and League of
            Legends. Our first exciting integration will be with Minecraft. This
            choice is driven by the game’s expansive and creative environment,
            which aligns perfectly with the capabilities of your AI Companion.
          </p>
          <div
            className="flex w-full m-1 justify-center items-center"
            ref={ref}
          >
            <motion.div
              className="w-[100px] h-[100px]  m-2"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: isInView ? "10%" : "100%", opacity: 1 }}
              viewport={{ margin: "-600" }}
              transition={{ duration: 0.7 }}
            >
              <img className="w-full" src={minecraft} alt="minecraft" />
            </motion.div>
            <motion.div
              className="w-[100px] h-[100px] m-2 border bg-red-600"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: isInView ? "10%" : "100%", opacity: 1 }}
              transition={{ duration: 0.85 }}
            />
            <motion.div
              className="w-[100px] h-[100px] m-2 border bg-red-600"
              initial={{ y: -100, opacity: 0 }}
              viewport={{ margin: "-600" }}
              animate={{ y: isInView ? "10%" : "100%", opacity: 1 }}
              transition={{ duration: 0.9 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const ExampleContent1 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <div className="container">
      <div className="  mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
        <h2 className="col-span-1 text-3xl font-bold md:col-span-4">
          Social Media
        </h2>
        <div className="col-span-1 md:col-span-8">
          <p className="mb-4 text-xl text-neutral-600 md:text-2xl">
            We understand that users might prefer interacting with their AI
            Companion on their favorite social media platforms. This integration
            ensures quick and easy access, allowing your AI to be part of your
            daily interactions without needing to enter our platform. Whether
            you’re sharing moments on Facebook, tweeting on Twitter, or posting
            on Instagram, your AI Companion will be right there with you.
          </p>
          <div
            className="flex w-full m-1 justify-center items-center"
            ref={ref}
          >
            <motion.div
              className="w-[100px] h-[100px]  m-2"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: isInView ? "10%" : "100%", opacity: 1 }}
              viewport={{ margin: "-600" }}
              transition={{ duration: 0.7 }}
            >
              <img className="w-full" src={minecraft} alt="minecraft" />
            </motion.div>
            <motion.div
              className="w-[100px] h-[100px] m-2 border bg-red-600"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: isInView ? "10%" : "100%", opacity: 1 }}
              transition={{ duration: 0.85 }}
            />
            <motion.div
              className="w-[100px] h-[100px] m-2 border bg-red-600"
              initial={{ y: -100, opacity: 0 }}
              viewport={{ margin: "-600" }}
              animate={{ y: isInView ? "10%" : "100%", opacity: 1 }}
              transition={{ duration: 0.9 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const TextParallaxContent = ({ video, subheading, heading, children }) => {
  return (
    <Section>
      <div
        style={{
          paddingLeft: vid_paddinf,
          paddingRight: vid_paddinf,
          paddingTop: vid_paddinf,
        }}
      >
        <div
          id="Integration"
          className=" relative w-full justify-center items-center"
        >
          <StickyImage video={video}></StickyImage>
          <OverlayCopy heading={heading} subheading={subheading} />
        </div>
        {children}
      </div>
    </Section>
  );
};
export default Test;
