import React from "react";
import CourseLectureContent from "./CourseLectureContent";
const curriculumData = [
  {
    title: "Introduction to Large Language Models",
    duration: "15min",
    totalMinutes: "15",
    lectures: [
      { title: "What is LLM?", duration: "3:00", isLocked: false },
      { title: "History", duration: "4:00", isLocked: true },
    ],
  },
  {
    title: "The Transformer Architecture",
    duration: "23min",
    totalMinutes: "23",
    lectures: [
      { title: "Attention Mechanism", duration: "10:00", isLocked: false },
    ],
  },
  {
    title: "Getting started with GPT models",
    duration: "33min",
    totalMinutes: "33",
    lectures: [],
  },
  {
    title: "Hugging Face Transformers",
    duration: "26min",
    totalMinutes: "26",
    lectures: [],
  },
  {
    title: "Question and answer models with BERT",
    duration: "30min",
    totalMinutes: "30",
    lectures: [],
  },
  {
    title: "Text classification with XLNet",
    duration: "26min",
    totalMinutes: "26",
    lectures: [],
  },
];

const CousesLectuesSession = () => {
  return (
     <div>
          <div>
              <CourseLectureContent curriculum={curriculumData} />
          </div>
     </div>
  );
};

export default CousesLectuesSession;
