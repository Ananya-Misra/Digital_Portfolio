import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({ project, index }) => {
  const isEven = index % 2 === 0;
  const projectKey = project.name.toLowerCase();

  return (
    <motion.div
      variants={fadeIn(isEven ? "left" : "right", "spring", index * 0.5, 0.75)}
      className={`flex flex-col lg:flex-row items-center gap-10 mb-20 ${
        isEven ? "lg:flex-row" : "lg:flex-row-reverse"
      }`}
      key={`project-${projectKey}-${index}`}
    >
      <div className="w-full lg:flex-1" key={`image-${projectKey}`}>
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-auto lg:h-[80%] rounded-xl shadow-lg object-cover"
        />
      </div>

      {/* Content section - full width on mobile, flex-1 on desktop */}
      <div className="w-full lg:flex-1" key={`content-${projectKey}`}>
        <h1 className="text-2xl font-bold mb-2 text-white-100">
          {project.name}
        </h1>
        <p className="text-secondary mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4" key={`tags-${projectKey}`}>
          {project.tags.map((tag, tagIndex) => (
            <span
              key={`tag-${projectKey}-${tag.name}-${tagIndex}`}
              className={`text-sm font-medium p-1 rounded ${
                tag.color || "bg-gray-800"
              }`}
            >
              #{tag.name}
            </span>
          ))}
        </div>

        <a
          href={project.source_code_link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            type="button"
            className="bg-black-200 py-3 px-8 outline-none w-fit text-white font-bold shadow-sm shadow-secondary rounded-xl"
          >
            View Project
          </button>
        </a>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  // Create unique projects array in case of duplicates
  const uniqueProjects = projects.reduce((acc, current) => {
    const x = acc.find((item) => item.name === current.name);
    if (!x) {
      return acc.concat([current]);
    } else {
      return acc;
    }
  }, []);

  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Here are some of my featured projects. Each project has a brief
          description and links to code repositories.
        </motion.p>
      </div>

      <div className="mt-20">
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${project.name
              .replace(/\s+/g, "-")
              .toLowerCase()}-${index}`}
            project={project}
            index={index}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Projects, "projects");
