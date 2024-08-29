"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "Programming Languages",
    desc: [
      "Python",
    ],
    img: "",
    link: "",
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "Data Manipulation and Analysis",
    desc: [
      "Data Wrangling",
      "Pandas (Advanced)",
      "SQL",
      "Exploratory Data Analysis (EDA)",
      "Data Cleaning",
    ],
    img: "",
    link: "",
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "Machine Learning",
    desc: [
      "Supervised Learning (e.g., regression, classification)",
      "Unsupervised Learning (e.g., clustering, dimensionality reduction)",
      "Advanced Machine Learning (e.g., Random Forests, SVMs, Neural Networks)",
      "Natural Language Processing (NLP)",
      "Time Series Analysis",
      "Image Classification",
      "Recommender systems",
      "Model Evaluation",
    ],
    img: "",
    link: "",
  },
  {
    id: 4,
    color: "from-purple-300 to-red-300",
    title: "Data Visualization",
    desc: [
      "Matplotlib",
      "Seaborn",
      "Advanced Visualization (Plotly)",
      "Dashboard Creation (Power BI, Tableau)",
    ],
    img: "",
    link: "",
  },
  {
    id: 5,
    color: "from-red-300 to-blue-300",
    title: "Statistical Analysis",
    desc: [
      "Descriptive Statistics",
      "Inferential Statistics",
      "Probability and Statistics",
      "A/B Testing",
      "Bayesian Methods",
    ],
    img: "",
    link: "",
  },
  {
    id: 6,
    color: "from-blue-300 to-violet-300",
    title: "Big Data and Cloud Computing",
    desc: [
      "Hadoop/Spark (Introduction)",
      "AWS (Cloud Computing)",
      "Docker",
      "Streamlit",
    ],
    img: "",
    link: "",
  },
  {
    id: 7,
    color: "from-violet-300 to-purple-300",
    title: "Model Deployment",
    desc: [
      "Flask",
      "Django",
      "Deploying Models as APIs or web applications",
    ],
    img: "",
    link: "",
  },
  {
    id: 8,
    color: "from-purple-300 to-red-300",
    title: "Project Management and Development",
    desc: [
      "End-to-End Project Development",
      "Agile Methodologies (Scrum, Kanban)",
    ],
    img: "",
    link: "",
  },
  {
    id: 9,
    color: "from-purple-300 to-red-300",
    title: "",
    desc: [
    ],
    img: "",
    link: "",
  },
];

const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
          My Skills
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-8 text-white">
                  <h1 className="text-md font-bold md:text-4xl lg:text-6xl xl:text-8xl">
                    {item.title}
                  </h1>
                  <ul>
                    {item.desc.map((desc) => (
                      <li key={desc}>
                        <h5 className="text-lg font-bold md:text-4md lg:text-6md xl:text-8md">
                          {desc}
                        </h5>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      {/* <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
        <h1 className="text-8xl">Do you have a project?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Front-end Developer and UI Designer
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
          >
            Hire Me
          </Link>
        </div>
      </div> */}
    </motion.div>
  );
};

export default PortfolioPage;
