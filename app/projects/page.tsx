import styles from "./page.module.css";
import FadeIn from "../_components/FadeIn";

const PROJECTS = [
  {
    title: "lrnnx: A library for Linear RNNs",
    description: 'A unified PyTorch library providing easy access to state-of-the-art Linear RNN architectures for sequence modeling. The technical report of this system was accepted to <a href="https://2026.eacl.org/calls/srw/" target="_blank" rel="noopener noreferrer">EACL Student Research Workshop 2026</a>.',
    image: "/assets/logo_dark.png",
    links: [
      { label: "preprint", href: "https://arxiv.org/abs/2602.08810" },
      { label: "github", href: "https://github.com/SforAiDl/lrnnx" },
      { label: "docs", href: "https://lrnnx.readthedocs.io/en/latest/" },
    ],
    isLogo: true,
  },
  {
    title: "CountCLIP - [Re] Teaching CLIP to Count to Ten",
    description: 'Reproducibility study of the paper <a href="https://arxiv.org/abs/2302.12066" target="_blank" rel="noopener noreferrer">Teaching CLIP to Count to Ten</a>, published by Google Research, in ICCV 2023. Implementation of the paper from scratch and collected a specialized dataset to facilitate the training. Further explorations and analysis of the paper were done, and we wrote a paper on our findings which is currently under review at ReScience C 2024.',
    image: "/assets/sample.gif",
    links: [
      { label: "preprint", href: "https://arxiv.org/abs/2406.03586" },
      { label: "github", href: "https://github.com/SforAiDl/CountCLIP" },
      { label: "dataset", href: "https://zenodo.org/records/10981852" },
    ],
  },
  {
    title: "GenRL",
    description: "A PyTorch reinforcement learning library centered around reproducible and generalizable algorithm implementations.",
    image: "/assets/projects/genrl.png",
    links: [
      { label: "docs", href: "https://genrl.readthedocs.io/en/latest/" },
      { label: "github", href: "https://github.com/SforAiDl/genrl" },
    ],
  },
  {
    title: "VFormer",
    description: "A modular PyTorch library for vision transformer models. Contains implementations of prominent ViT architectures broken down into modular components like encoder, attention mechanism, and decoder. Makes it easy to develop custom models by composing components of different architectures. Contains utilities for visualizing attention maps of models using techniques such as gradient rollout.",
    image: "/assets/projects/vformer.png",
    links: [
      { label: "docs", href: "https://vformer.readthedocs.io/" },
      { label: "github", href: "https://github.com/SforAiDl/vformer" },
    ],
  },
  {
    title: "KDLib",
    description: "A Pytorch Knowledge Distillation library for benchmarking and extending works in the domains of Knowledge Distillation, Pruning, and Quantization.",
    image: "/assets/projects/kdlib.png",
    links: [
      { label: "docs", href: "https://kd-lib.readthedocs.io/en/latest/" },
      { label: "github", href: "https://github.com/SforAiDl/KD_Lib" },
    ],
  },
  {
    title: "DecepticoNLP",
    description: "DecepticoNLP is a Python Library for Robustness Monitoring and Adversarial Debugging of NLP models.",
    image: "/assets/projects/decepticonlp.png",
    links: [
      { label: "github", href: "https://github.com/SforAiDl/decepticonlp" },
    ],
  },
  {
    title: "DeepTime",
    description: "An exploratory and experimental research into the applications of modern deep learning breakthroughs in traditional time-series analysis approaches.",
    image: "/assets/logo_dark.png",
    links: [],
    isLogo: true,
  },
  {
    title: "ADReSS",
    description: "Alzheimer's Dementia Recognition from Spontaneous Speech. The aim is unbiased early detection of cognitive decline from multi-modal data.",
    image: "/assets/logo_dark.png",
    links: [],
    isLogo: true,
  },
  {
    title: "IKD-DAFL",
    description: "DAFL (Data free learning) is an unsupervised Knowledge Distillation technique. We are trying to apply IKD on this technique for smaller datasets as of now like MNIST/CIFAR.",
    image: "/assets/logo_dark.png",
    links: [],
    isLogo: true,
  },
  {
    title: "Playground",
    description: "A python library consisting of pipelines for visual analysis of different sports using Computer Vision and Deep Learning.",
    image: "/assets/logo_dark.png",
    links: [
      { label: "github", href: "https://github.com/SforAiDl/Playground" },
    ],
    isLogo: true,
  },
  {
    title: "Neural Correlates for Reinforcement Learning",
    description: "A review of the connections between neuroscience and reinforcement learning.",
    image: "/assets/logo_dark.png",
    links: [],
    isLogo: true,
  },
  {
    title: "SNNs to Validate Experimental Results",
    description: "Building computational spiking neural network models to model neural functioning and thereby validate experimental results.",
    image: "/assets/logo_dark.png",
    links: [],
    isLogo: true,
  },
];

export default function ProjectsPage() {
  return (
    <main className={styles.main}>
      <FadeIn>
        <div className={styles.sectionLabel}>
          <span className={styles.labelDot} />
          PROJECTS
        </div>
      </FadeIn>

      <div className={styles.grid}>
        {PROJECTS.map((project, i) => (
          <FadeIn key={i} delay={i * 50}>
            <article className={styles.card}>
              <div className={`${styles.cardImage} ${project.isLogo ? styles.cardImageLogo : ""}`}>
                <img src={project.image} alt={project.title} />
              </div>
              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{project.title}</h3>
                <div 
                  className={styles.cardDesc} 
                  dangerouslySetInnerHTML={{ __html: project.description }} 
                />
                {project.links.length > 0 && (
                  <div className={styles.cardLinks}>
                    {project.links.map((link) => (
                      <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer">
                        [{link.label}]
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </article>
          </FadeIn>
        ))}
      </div>
    </main>
  );
}
