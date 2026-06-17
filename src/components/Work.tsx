import "./styles/Work.css";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Work = () => {
  useGSAP(() => {
  let translateX: number = 0;

  function setTranslateX() {
    const box = document.getElementsByClassName("work-box");
    const rectLeft = document
      .querySelector(".work-container")!
      .getBoundingClientRect().left;
    const rect = box[0].getBoundingClientRect();
    const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
    let padding: number =
      parseInt(window.getComputedStyle(box[0]).padding) / 2;
    translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
  }

  setTranslateX();

  let timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".work-section",
      start: "top top",
      end: `+=${translateX}`, // Use actual scroll width
      scrub: true,
      pin: true,
      id: "work",
    },
  });

  timeline.to(".work-flex", {
    x: -translateX,
    ease: "none",
  });

  // Clean up (optional, good practice)
  return () => {
    timeline.kill();
    ScrollTrigger.getById("work")?.kill();
  };
}, []);

  const projects = [
    {
      title: "Business Intelligence for Online Retail",
      category: "Data Warehouse & ETL",
      tools: "SQL Server, SSIS, SSRS, Tableau, Power BI",
      description: "Designed and developed an interactive dashboard to visualize key performance indicators (KPIs) such as sales trends, customer demographics, and product performance. Enabled data-driven decision-making by identifying actionable insights from large retail datasets.",
    },
    {
      title: "Telecom Customer Churn Prediction",
      category: "Machine Learning",
      tools: "Python, Pandas, Scikit-learn, Seaborn, Matplotlib",
      description: "Built a machine learning pipeline to analyze customer behavior and identify patterns leading to churn. Conducted exploratory data analysis, feature engineering, and trained predictive models to help telecom providers proactively retain at-risk customers.",
    },
    {
      title: "Human Emotion Detection",
      category: "Deep Learning & Computer Vision",
      tools: "Python, TensorFlow, Keras, OpenCV",
      description: "Developed a computer vision application capable of detecting and classifying human emotions in real-time. Leveraged deep learning frameworks and facial recognition techniques to accurately map facial landmarks to specific emotional states.",
    },
  ];

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <div className="work-description">
                <h4>Project details</h4>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
