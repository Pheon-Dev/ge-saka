"use client";

import Brain from "@/components/brain";
import { motion, useInView, useScroll } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const AboutPage = () => {
  const containerRef = useRef();

  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef = useRef();
  // const isSkillRefInView = useInView(skillRef, {once:true});
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* CONTAINER */}
      <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
        {/* TEXT CONTAINER */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2">
          {/* BIOGRAPHY CONTAINER */}
          <div className="flex flex-col gap-12 justify-center">
            {/* BIOGRAPHY IMAGE */}
            <Image
              src="/wow.jpg"
              alt=""
              width={112}
              height={112}
              className="w-28 h-28 rounded-full object-cover"
            />
            {/* BIOGRAPHY TITLE */}
            <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
            {/* BIOGRAPHY DESC */}
            <p>Data Scientist with over 2 years of work experience and a background in Computer
              Science. Proficient in data analysis and engineering, scientific computing,
              quantitative methods, and machine learning. Key projects include developing a Job
              Matching System and Trend Insights, conducting Sentiment Analysis, and creating a
              Mortality Risk Prediction model for pneumonia. Additionally, worked on a Tomato
              Plant Disease Detector, Banking Customer Retention Analysis, Stroke Risk Prediction
              and Analysis, and Housing Market Value Prediction. Experienced in designing a
              Security Website Front-End and analyzing data for Microsoft Movie Studio and a
              Movie Recommender System. Strong skills in team collaboration, adaptability, time
              management, and attention to detail.</p>
            <p className="text-lg">
              I am a passionate data scientist with a strong foundation in computer science,
              holding a degree from The Catholic University of Eastern Africa. My recent
              completion of a rigorous Data Science Bootcamp at Moringa School has
              equipped me with hands-on experience in data analysis & Engineering,
              Machine learning, Scientific computing and Quantitative methods. I’ve
              developed proficiency in key tools like Python, SQL,NLP ,TensorFlow,ETL
              and Tableau,among others and have applied my skills across various projects,
              from predictive modeling to data visualization,making me well-prepared for
              both data science and data analysis roles.
            </p>
            <p>
              Beyond technical expertise, my experience at Moringa School has also
              strengthened my soft skills, including teamwork, communication, and
              problem-solving. I’ve successfully navigated diverse business environments,
              with roles such as a Credit Control Assistant at Gain Ventures Ltd. and a
              cashier/shop assistant at MINISO,aswell as a freelancer; giving me a well-
              rounded perspective on real-world challenges. I’m eager to contribute to
              dynamic teams, whether in entry-level or intermediate positions, by leveraging
              my analytical mindset and continuous learning drive to deliver impactful, data-
              driven insights.
            </p>
            {/* BIOGRAPHY SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* EXPERIENCE CONTAINER */}
          <div
            className="flex flex-col gap-12 justify-center pb-48"
            ref={experienceRef}
          >
            {/* EXPERIENCE TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              PROJECTS
            </motion.h1>
            {/* EXPERIENCE LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              className=""
            >
              <ul className="flex flex-col gap-12 justify-center pb-48 list-none hover:list-disc">
                <li className="flex justify-between h-2">
                  <h6>
                    Job Matching System and Trend
                    Insights

                  </h6>
                </li>
                <li className="flex justify-between h-2">
                  <h6>
                    Sentiment Analysis

                  </h6>
                </li>
                <li className="flex justify-between h-2">
                  <h6>
                    Mortality Risk Prediction for
                    Pneumonia

                  </h6>
                </li>
                <li className="flex justify-between h-2">
                  <h6>
                    Tomato Plant Disease Detector

                  </h6>
                </li>
                <li className="flex justify-between h-2">
                  <h6>
                    Banking Customer Retention
                    Analysis

                  </h6>
                </li>
                <li className="flex justify-between h-2">
                  <h6>
                    Stroke Risk Prediction and
                    Analysis

                  </h6>
                </li>
                <li className="flex justify-between h-2">
                  <h6>
                    Housing Market Value Prediction

                  </h6>
                </li>
                <li className="flex justify-between h-2">
                  <h6>
                    Security Website Front-End Design

                  </h6>
                </li>
                <li className="flex justify-between h-2">
                  <h6>
                    Microsoft Movie Studio Analysis

                  </h6>
                </li>
                <li className="flex justify-between h-2">
                  <h6>
                    Movie Recommender System
                  </h6>
                </li>
              </ul>
              <div className="w-1/3 "></div>
            </motion.div>
          </div>
          {/* SOFT SKILLS CONTAINER */}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            {/* <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              SOFT SKILLS
            </motion.h1>
            <motion.div
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              className="flex gap-4 flex-wrap"
            >
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Problem-Solving
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Team Collaboration
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Communication
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Collaboration
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Networking
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Job Readiness (Resume Building, Interview Preparation)
              </div>
            </motion.div>
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg> */}
          </div>
        </div>
        {/* SVG CONTAINER */}
        <div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:w-1/2">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
