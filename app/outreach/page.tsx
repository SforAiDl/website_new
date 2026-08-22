"use client";

import { useState } from "react";
import styles from "./page.module.css";
import FadeIn from "../_components/FadeIn";

interface OutreachItem {
  title: string;
  details: string;
}

interface YearSection {
  year: string;
  items: OutreachItem[];
}

const OUTREACH_DATA: YearSection[] = [
  {
    year: "2026",
    items: [
      { title: "CTE Course: ML 101", details: 'Course Website: <a href="https://sforaidl.github.io/ml101">sforaidl.github.io/ml101</a>.' },
      { title: "Summer Induction Assignment 2026", details: 'Assignment can be found <a href="https://github.com/SforAiDl/SAiDL-Summer-2026-Induction-Assignment">here</a>. Join the Slack workspace <a href="https://join.slack.com/t/saidl/shared_invite/zt-3wjuirqd2-UbYGraYqvtGzNALRJesBJw">here</a>.' },
    ],
  },
  {
    year: "2025",
    items: [
      { title: "AI Symposium 2025 - Generative AI", details: 'Dates: 20th - 21st December. <a href="https://sites.google.com/goa.bits-pilani.ac.in/ai-symposium-2025/">Website</a>.' },
      { title: "SAiDL Season of Code 2025", details: 'SAiDL\'s Season of Code gives students to work on cutting-edge AI projects with a strong focus on Open Source. Find the details of this year\'s project <a href="/assets/docs/lrnn_lib.pdf">here</a>.' },
      { title: "Spring Induction Assignment 2025", details: 'Assignment can be found <a href="https://github.com/SforAiDl/SAiDL-Spring-2025-Induction-Assignment">here</a>. Join the Slack workspace <a href="https://join.slack.com/t/saidl/shared_invite/zt-2wmlm99ed-Ss_7ZDOSd8Jmc7DNP9hjUA">here</a>.' },
    ],
  },
  {
    year: "2024",
    items: [
      { title: "AI Symposium 2024 - Generative AI & Applications", details: 'Dates: 22nd - 24th November. <a href="https://sites.google.com/goa.bits-pilani.ac.in/ai-symposium-2024/home">Website</a>.' },
      { title: "Spring Induction Assignment 2024", details: 'Assignment can be found <a href="https://github.com/SforAiDl/SAiDL-Spring-2024-Induction-Assignment">here</a>. Join the Slack workspace <a href="https://join.slack.com/t/saidl/shared_invite/zt-2wmlm99ed-Ss_7ZDOSd8Jmc7DNP9hjUA">here</a>.' },
    ],
  },
  {
    year: "2023",
    items: [
      { title: "Summer Induction Assignment 2023", details: 'Assignment can be found <a href="https://github.com/SforAiDl/SAiDL-Summer-2023-Induction-Assignment">here</a>. Join the Slack workspace <a href="https://join.slack.com/t/saidl/shared_invite/zt-2wmlm99ed-Ss_7ZDOSd8Jmc7DNP9hjUA">here</a>.' },
      { title: "AI Symposium 2023 - DL in Life Sciences", details: 'Dates: 25th - 26th November. <a href="https://sites.google.com/goa.bits-pilani.ac.in/ai-symposium-2023/home">Website</a>.' },
    ],
  },
  {
    year: "2022",
    items: [
      { title: "SAiDL Season of Code 2022", details: 'SAiDL\'s Season of Code gives students to work on cutting-edge AI projects with a strong focus on Open Source. This year\'s projects: 1) Meta-Learning with JAX, 2) Event Vision Library, 3) Exploring Deep Learning models for Visual Saliency Prediction. More information <a href="https://sforaidl.github.io/SAiDL-Season-of-Code">here</a>.' },
      { title: "[SAiDL & APPCAIR] Workshop on Probabilistic Graphical Models (Part I)", details: 'Dates: 18th April - 27th April, 2022. <a href="https://sites.google.com/goa.bits-pilani.ac.in/pgm/home">Website</a>. Details <a href="https://bit.ly/prob-mod-cs">here</a>.' },
      { title: "Session on Getting into Research", details: 'Speakers: Omatharv Vaidya, Vedant Shah, Sharad Chitlangia, Rajaswa Patil, Alish Dipani. <a href="https://drive.google.com/file/d/1YkfKjZLZH5KRuyFxay1sbwhqiQxlbMhF/view?usp=sharing">Slides</a>.' },
      { title: "Spring Induction Assignment 2022", details: 'Assignment can be found <a href="https://github.com/SforAiDl/SAiDL-Spring-2022-Induction-Assignment">here</a>. Join the Slack workspace <a href="https://join.slack.com/t/saidl/shared_invite/zt-120z8dtkn-mdotu1rjjVQg1nE91a5mpg">here</a>.' },
    ],
  },
  {
    year: "2021",
    items: [
      { title: "[SAiDL & APPCAIR] AI Symposium 2021", details: 'Dates: 2nd & 3rd October, 2021. <a href="https://sites.google.com/view/ai-symposium-2021/home">Website</a>. <a href="https://www.youtube.com/playlist?list=PLKwsK83XYnLVI9SmQ3zLzSdNyVoGrsGDF">Session recordings</a>.' },
      { title: "CTE Course: Introduction to Causal Inference", details: "Taught by: Sharad Chitlangia, Vedant Shah, Rishabh Patra, Soundarya Krishnan, Ishita Mediratta, Anmol Agarwal." },
      { title: "CTE Course: Intro to Machine Learning and Deep Learning", details: "Taught by: Vishwa Shah, Shrey Pandit, Hrithik Nambiar, Yash Bhartia, Sushmit Wani." },
      { title: "SAiDL Season of Code 2021", details: 'SAiDL\'s Season of Code gives students to work on cutting edge AI projects. This year\'s projects: 1) Causal Inference in Time Series, 2) Program Synthesis with Julia, 3) Visualisation Library for Vision Transformers, 4) Meta Learning with Jax. More information <a href="https://sforaidl.github.io/SAiDL-Season-of-Code/2021.html">here</a>.' },
      { title: "Summer Induction Assignment 2021", details: 'Assignment can be found <a href="https://github.com/SforAiDl/Summer-Induction-Assignment-2021">here</a>.' },
    ],
  },
  {
    year: "2020",
    items: [
      { title: "[SAiDL & APPCAIR] Summer Symposium on AI Research", details: 'Dates: 25th & 26th July, 2020. <a href="https://sites.google.com/view/aisymposium2020">Website</a>. <a href="https://www.youtube.com/playlist?list=PLKwsK83XYnLUZR1PmKeSehCSK0M_Qg4pN">Session recordings</a>.' },
      { title: "Summer Induction Assignment 2020", details: 'Assignment can be found <a href="https://github.com/SforAiDl/Summer-Induction-Assignment-2020">here</a>.' },
      { title: "SAiDL Season of Code 2020", details: 'Projects: 1) Adversarial NLP, 2) Deep Contextual Bandits, 3) Computer Vision for Sports Analytics, 4) Knowledge Distillation library, 5) Twitter Feed Distillation, 6) Benchmarking Causal inference and RL, 7) Deep Learning for Time Series, 8) Spiking Neural Networks. More information <a href="https://sforaidl.github.io/SAiDL-Season-of-Code/2020.html">here</a>.' },
      { title: "QSTP: Introduction to Deep Learning", details: "A Quark Summer Project on learning the fundamentals of deep learning and how they are applied in Computer Vision, Natural Language Processing and Reinforcement Learning." },
    ],
  },
  {
    year: "2019",
    items: [
      { title: "Winter Induction Assignment", details: 'Assignment can be found <a href="https://github.com/SforAiDl/Winter-Assignment-2019">here</a>.' },
      { title: "CTE course: Introduction to Machine Learning", details: 'Taken by Rajaswa Patil and Pranav Mahajan. The course included introduction to fundamental concepts of Machine Learning and Deep learning and hands-on experience through projects and self-organized Kaggle competitions. Batch strength: 120 students. Course <a href="https://docs.google.com/document/d/1lPXc35aS77sgNldH6cy1Qaj-wY5eKrS5ch1FtHsgwmI/edit?usp=sharing">handout</a>.' },
      { title: "CTE course: Advanced Computer Vision", details: 'Course taken by Ashwin Vaswani, Rijul Ganguly. Course <a href="https://bpgc-cte.org/uploads/handout-1578414756073.pdf">handout</a>.' },
      { title: "TIP Projects and Courses", details: "Learning to play games with RL, Computer Vision, Financial Market Modelling, Machine Learning and AI & Cognitive Neuroscience." },
      { title: "Summer Induction Assignment", details: 'Assignment can be found <a href="https://github.com/SforAiDl/Summer-Assignment-2019">here</a>.' },
      { title: "TIP course: Advanced Deep Learning", details: 'Taken by Mehul Rastogi, Sharad Chitlangia, Rijul Ganguly and Ajay Subramanian. Slides and resources can be found <a href="https://github.com/SforAiDl/Deep-Learning-TIP">here</a>.' },
    ],
  },
  {
    year: "2018",
    items: [
      { title: "Winter Induction Assignment", details: 'Assignment can be found <a href="https://github.com/SforAiDl/Winter-Assignment-2018">here</a>.' },
      { title: "TIP course: Introduction to Deep Learning", details: 'Taken by Alish Dipani, Mehul Rastogi, Sharad Chitlangia, Rijul Ganguly. Slides and resources can be found <a href="https://github.com/SforAiDl/Deep-Learning-TIP">here</a>.' },
    ],
  },
  {
    year: "2017",
    items: [
      { title: "Winter Induction Assignment", details: "Induction assignment." },
    ],
  },
];

function AccordionItem({ item }: { item: OutreachItem }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`${styles.item} ${open ? styles.itemOpen : ""}`}>
      <button
        className={styles.itemHeader}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className={styles.itemTitle}>{item.title}</span>
        <span className={styles.icon}>{open ? "▲" : "▼"}</span>
      </button>
      <div className={`${styles.detailsWrapper} ${open ? styles.open : ""}`}>
        <div className={styles.detailsInner}>
          <div className={styles.itemDetails}>
            <div dangerouslySetInnerHTML={{ __html: item.details }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function OutreachPage() {
  return (
    <main className={styles.main}>
      <FadeIn>
        <div className={styles.sectionLabel}>
          <span className={styles.labelDot} />
          OUTREACH
        </div>
      </FadeIn>

      {OUTREACH_DATA.map((section) => (
        <FadeIn key={section.year}>
          <section className={styles.yearSection}>
            <h3 className={styles.yearTitle}>{section.year}</h3>
            <div className={styles.yearItems}>
              {section.items.map((item, i) => (
                <AccordionItem key={i} item={item} />
              ))}
            </div>
          </section>
        </FadeIn>
      ))}
    </main>
  );
}
