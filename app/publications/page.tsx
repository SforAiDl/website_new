"use client";

import { useState } from "react";
import styles from "./page.module.css";
import FadeIn from "../_components/FadeIn";

interface Publication {
  citation: string;
  abstract?: string;
}

const PUBLICATIONS: Publication[] = [
  { citation: '<b>Aaron Menezes*</b>, <b>Ankita V. Bisoi*</b>, <b>Shreyas V.*</b>, <b>Sarang S*</b> (et al.). (2025). <a href="https://arxiv.org/abs/2602.08810">lrnnx: A PyTorch Library for Linear RNNs</a> [EACL Student Research Workshop 2026]', abstract: '' },
  { citation: '<b>Shreyas Vinaya Sathyanarayana*</b>, Sharanabasava D. Hiremath* (et al.). (2025). <a href="https://arxiv.org/pdf/2507.07060"><u>DeepRetro: Retrosynthetic Pathway Discovery using Iterative LLM Reasoning</u></a>', abstract: 'The synthesis of complex natural products remains one of the grand challenges of organic chemistry. We present DeepRetro, a major advancement in computational retrosynthesis that enables the discovery of viable synthetic routes for complex molecules typically considered beyond the reach of existing retrosynthestic methods. DeepRetro is a novel, open-source framework that tightly integrates large language models (LLMs), traditional retrosynthetic engines, and expert human feedback in an iterative design loop.' },
  { citation: '<b>Karan Bania*</b>, <b>Harshvardhan Mestha*</b>, Tanmay Tulsidas Verlekar. (2025). <a href="https://ceur-ws.org/Vol-3985/paper4.pdf"><u>Exploring the Missing Medical Context in Generated Radiology Reports</u></a>', abstract: 'Recent advancements in multimodal LLMs have allowed its use in radiology, where, given an X-ray image, the report can be generated automatically. This paper proposes that LLMs are unable to understand the medical context in images and in reports, and presents a pipeline that allows the LLMs access to a discriminative model that can classify pathologies present in a chest X-ray.' },
  { citation: '<b>Ankita Vaishnobi Bisoi</b>, <b>Shreyas V.</b>, Jose Siguenza, Bharath Ramsundar. (2025). <a href="https://openreview.net/pdf?id=jWZV6hWCeX"><u>DeepChem-Variant: A Modular Open Source Framework for Genomic Variant Calling</u></a>', abstract: 'Variant calling is a fundamental task in genomic research for detecting genetic variations such as single nucleotide polymorphisms (SNPs) and insertions or deletions (indels). This paper presents an enhancement to DeepChem through the integration of DeepVariant.' },
  { citation: '<b>Harshvardhan Mestha*</b>, <b>Karan Bania*</b>, <b>Shreyas Vinaya Sathyanarayana</b>, Sidong Liu, Ashwin Srinivasan. (2025). <a href="https://arxiv.org/pdf/2410.20600?"><u>Multi-Turn Human–LLM Interaction Through the Lens of a Two-Way Intelligibility Protocol</u></a>', abstract: 'Our interest is in the design of software systems involving a human-expert interacting—using natural language—with a large language model (LLM) on data analysis tasks. We investigate a structured approach based on an abstract protocol for interaction between agents, motivated by a notion of "two-way intelligibility".' },
  { citation: 'Debasish Mohanty, <b>V. Shreyas</b>, Akshaya Palai, Bharath Ramsundar. (2024). <a href="https://arxiv.org/pdf/2412.08658"><u>Open-source Polymer Generative Pipeline</u></a>', abstract: 'We propose an open-source computational generative pipeline that integrates neural-network-based discriminators, generators, and query-based filtration mechanisms to generate hypothetical polymers. The pipeline targets properties, such as ionization potential (IP), by aligning various representational formats to generate hypothetical polymer candidates.' },
  { citation: '<b>V. Shreyas</b>, Jose Siguenza, <b>Karan Bania</b>, Bharath Ramsundar. (2024). <a href="https://arxiv.org/pdf/2408.06261?"><u>Open-Source Molecular Processing Pipeline for Generating Molecules</u></a>', abstract: 'We introduce open-source infrastructure for easily building generative molecular models into the widely used DeepChem library with the aim of creating a robust and reusable molecular generation pipeline.' },
  { citation: '<b>Harshvardhan Mestha</b>, <b>Tejas Agrawal</b>, <b>Karan Bania</b>, <b>V. Shreyas</b>, <b>Yash Bhisikar</b>. (2024). <a href="https://arxiv.org/pdf/2406.03586"><u>CountCLIP — [Re] Teaching CLIP to Count to Ten</u></a>', abstract: 'This paper conducts a reproducibility study of \'Teaching CLIP to Count to Ten\', which presents a method to finetune a CLIP model to improve zero-shot counting accuracy in an image while maintaining the performance for zero-shot classification.' },
  { citation: 'Mark Schöne*, <b>Yash Bhisikar*</b>, <b>Karan Bania*</b>, Khaleelulla Khan Nazeer, Christian Mayr, Anand Subramoney, David Kappel. (2024). <a href="https://arxiv.org/pdf/2411.12603"><u>STREAM: A Universal State-Space Model for Sparse Geometric Data</u></a>', abstract: 'We propose STREAM, encoding geometric structure explicitly into the parameterization of a state-space model. STREAM achieves competitive results on benchmarks from point-cloud classification to event-based vision and audio classification.' },
  { citation: '<b>Bhisikar, Yash</b>; Govindaraj, Nirmal; Devaki, Venkatavihan; Anilkumar, Ritu. (2024). <a href="https://ui.adsabs.harvard.edu/abs/2024EGUGA..2619531B/abstract"><u>Gradient-Based Optimisers Versus Genetic Algorithms in Deep Learning Architectures</u></a>', abstract: 'A case study on rainfall estimation over complex terrain comparing gradient-based optimization techniques with genetic algorithms for deep learning architectures.' },
  { citation: '<b>Ashmit Khandelwal</b>, <b>Aditya Agrawal</b>, Aanisha Bhattacharyya, Yaman K Singla, <b>Somesh Singh</b>, Uttaran Bhattacharya, Ishita Dasgupta, Stefano Petrangeli, Rajiv Ratn Shah, Changyou Chen, Balaji Krishnamurthy. (2024). <a href="https://arxiv.org/abs/2309.00359"><u>Large Content And Behavior Models To Understand, Simulate, And Optimize Content And Behavior</u></a> - [ICLR 2024 - Spotlight]', abstract: 'We make initial progress towards reintroducing behavior tokens in LLM training. The trained models show generalization capabilities on behavior simulation, content simulation, behavior understanding, and behavior domain adaptation.' },
  { citation: 'Victor Boutin, Thomas Fel, Lakshya Singhal, <b>Rishav Mukherji</b>, Akash Nagaraj, Julien Colin, Thomas Serre (2023). <a href="https://arxiv.org/abs/2301.11722"><u>Diffusion Models as Artists: Are we Closing the Gap between Humans and Machines?</u></a> - [ICML 2023 - Oral Presentation]', abstract: 'We adapt the \'diversity vs. recognizability\' scoring framework and find that one-shot diffusion models have started to close the gap between humans and machines in drawing generation.' },
  { citation: '<b>S I Harini</b>, Gautam Shroff, Ashwin Srinivasan, Prayushi Faldu, Lovekesh Vig (2023). <a href="https://arxiv.org/abs/2302.08996"><u>Neuro-symbolic Meta Reinforcement Learning for Trading</u></a> - [AAAI 2023 Workshop on Multimodal AI for Financial Forecasting]', abstract: 'We model short-duration trading in financial markets as a sequential decision-making problem under uncertainty, employing meta reinforcement learning via the RL2 algorithm with logical program induction for symbolic pattern discovery.' },
  { citation: 'Shounak Naik, <b>Rajaswa Patil</b>, Swati Agrawal, Veeky Baths (2022). <a href="https://arxiv.org/abs/2207.07706"><u>Probing Semantic Grounding in Language Models of Code with Representational Similarity Analysis</u></a> - [18th ADMA]', abstract: 'We propose using Representational Similarity Analysis to probe the semantic grounding in language models of code, showing that current pre-training methods do not induce semantic grounding.' },
  { citation: 'Ramit Sawhney*, Ritesh Singh Soun*, <b>Shrey Pandit</b>*, Megh Thakkar*, Sarvagya Malaviya, Yuval Pinter (2022). <a href="https://aclanthology.org/2022.naacl-main.127.pdf"><u>CIAug: Equipping Interpolative Augmentation with Curriculum Learning</u></a> - [NAACL 2022 - Main Conference]', abstract: 'We propose CIAug, a novel curriculum-based learning method that builds upon mixup, leveraging the relative position of samples in hyperbolic embedding space as a complexity measure.' },
  { citation: 'Ramit Sawhney*, Megh Thakkar*, <b>Shrey Pandit</b>*, Ritesh Singh Soun, Di Jin, Diyi Yang, Lucie Flek (2022). <a href="https://faculty.cc.gatech.edu/~dyang888/docs/acl22_dmix.pdf"><u>DMix: Adaptive Distance-aware Interpolative Mixup</u></a> - [ACL 2022 - Main Conference]', abstract: 'We extend Mixup and propose DMIX, an adaptive distance-aware interpolative Mixup that selects samples based on their diversity in the embedding space, achieving state-of-the-art results on sentence classification.' },
  { citation: 'Swapnil Parekh*, Yaman Singla Kumar*, <b>Somesh Singh</b>*, Changyou Chen, Balaji Krishnamurthy, Rajiv Ratn Shah (2021). <a href="https://arxiv.org/abs/2109.12406"><u>MINIMAL: Mining Models for Data Free Universal Adversarial Triggers</u></a> [AAAI 2022]', abstract: 'We present MINIMAL, a novel data-free approach to mine input-agnostic adversarial triggers from models, reducing the accuracy of Stanford Sentiment Treebank\'s positive class from 93.6% to 9.6%.' },
  { citation: 'Gaurav Kumar Nayak, <b>Het Shah</b>, Anirban Chakraborty (2021). <a href="https://arxiv.org/abs/2110.13598"><u>Incremental Learning for Animal Pose Estimation using RBF k-DPP</u></a> - [BMVC 2021]', abstract: 'We propose a novel problem of "Incremental Learning for Animal Pose Estimation" using an exemplar memory sampled using Determinantal Point Processes (DPP) to continually adapt to new animal categories.' },
  { citation: '<b>Vedant Shah</b>, Gautam Shroff (2021). <a href="https://arxiv.org/abs/2110.10233"><u>Forecasting Market Prices using DL with Data Augmentation and Meta-learning: ARIMA still wins!</u></a> - [NeurIPS 2021 Workshop]', abstract: 'We present a comprehensive and comparative study of performance of deep-learning techniques for forecasting prices in financial markets. The surprising result is that the standard ARIMA models outperform deep-learning even using data augmentation or meta-learning.' },
  { citation: 'Souradeep Chakraborty, Rahul Bajpai, Naveen Gupta (2021). <b><u>R2D2D - Using Deep Learning for Caching in 5G D2D Communications</u></b> [IEEE VTC 21 Spring]', abstract: '' },
  { citation: 'Urvil Jivani, <b>Omatharv Vaidya</b>, Anwesh Bhattacharya, Snehanshu Saha (2021). <a href="https://arxiv.org/abs/2104.04795"><u>A Swarm Variant for the Schrödinger Solver</u></a> [IJCNN 2021]', abstract: 'This paper introduces application of the Exponentially Averaged Momentum Particle Swarm Optimization (EM-PSO) as a derivative-free optimizer for Neural Networks in solving the Schrödinger equation.' },
  { citation: 'Ramit Sawhney, Megh Thakkar, <b>Shrey Pandit</b>, Debdoot Mukherjee, and Lucie Flek (2021). <b><u>DMix: Distance Constrained Interpolative Mixup</u></b> [Extended Abstract, MRL Workshop, EMNLP 2021]', abstract: 'We extend Mixup and propose distance-constrained interpolative Mixup for sentence classification leveraging the hyperbolic space.' },
  { citation: '<b>Rajaswa Patil</b>, Jasleen Dhillon, Siddhant Mahurkar, Saumitra Kulkarni, Manav Malhotra, Veeky Baths (2021). <a href="https://rajaswa.github.io/publication/vyakarana-2021/"><u>Vyākarana: A Colorless Green Benchmark for Syntactic Evaluation in Indic Languages</u></a> [MRL Workshop, EMNLP 2021]', abstract: 'We introduce Vyākarana: a benchmark of Colorless Green sentences in Indic languages for syntactic evaluation of multilingual language models.' },
  { citation: 'Abheesht Sharma, Gunjan Chhablani, Harshit Pandey, <b>Rajaswa Patil</b> (2021). <a href="https://arxiv.org/abs/2107.01198"><u>DRIFT: A Toolkit for Diachronic Analysis of Scientific Literature</u></a> [Systems Demo, EMNLP 2021]', abstract: 'We present DRIFT, an application for the diachronic analysis of research corpora that allows researchers to track research trends and development over the years.' },
  { citation: '<b>Ajay Subramanian</b>, <b>Sharad Chitlangia</b>, Veeky Baths. (2021). <a href="https://arxiv.org/pdf/2007.01099.pdf"><u>Reinforcement Learning and its Connections with Neuroscience and Psychology</u></a> [Elsevier Neural Networks]', abstract: 'We review a number of findings that establish evidence of key elements of the RL problem and solution being represented in regions of the brain.' },
  { citation: '<b>Vedant Shah</b>, Anmol Agarwal, Tanmay Tulsidas Verlekar, Raghavendra Singh (2021). <a href="https://openaccess.thecvf.com/content/ICCV2021W/TradiCV/papers/Shah_Adapting_Deep_Neural_Networks_for_Pedestrian-Detection_to_Low-Light_Conditions_Without_ICCVW_2021_paper.pdf"><u>Adapting Deep Learning Models for Pedestrian-Detection to Low-Light Conditions without Re-training</u></a> [TradiCV Workshop, ICCV 2021]', abstract: 'We propose a pre-processing pipeline which enables any existing normal-light pedestrian detection system to operate in low-light conditions.' },
  { citation: '<b>Pranav Mahajan</b>, Veeky Baths. (2021). <a href="https://www.frontiersin.org/articles/10.3389/fnagi.2021.623607/full"><u>Acoustic and Language Based Deep Learning Approaches for Alzheimer\'s Dementia Detection From Spontaneous Speech</u></a> [Frontiers in Aging Neuroscience]', abstract: '' },
  { citation: '<b>Mehul Rastogi</b>, Sen Lu, Nafiul Islam, Abhronil Sengupta. (2021). <a href="https://doi.org/10.3389/fnins.2020.603796"><u>On the Self-Repair Role of Astrocytes in STDP Enabled Unsupervised SNNs</u></a> [Frontiers in Neuroscience]', abstract: 'We draw inspiration from computational neuroscience regarding functionalities of glial cells and explore their role in the fault-tolerant capacity of Spiking Neural Networks trained with STDP.' },
  { citation: '<b>Ashwin Vaswani</b>*, <b>Rijul Ganguly</b>*, <b>Het Shah</b>*, Sharan Ranjit S.*, <b>Shrey Pandit</b>, Samruddhi Bothara. (2020). <b><u>Whatif Challenge: An Autoencoder Based Approach to Simulate Football Games</u></b> [7th Workshop on ML and Data Mining for Sports Analytics 2020]', abstract: '' },
  { citation: '<b>Rajaswa Patil</b>*, <b>Somesh Singh</b>*, Swati Agarwal. (2020). <a href="https://arxiv.org/abs/2006.00593"><u>BPGC at SemEval-2020 Task 11: Propaganda Detection in News Articles</u></a> [SemEval Workshop, COLING 2020]', abstract: 'For sub-task 1, we use contextual embeddings extracted from pre-trained transformer models to represent the text data at various granularities and propose a multi-granularity knowledge sharing approach.' },
  { citation: 'Siddhant Mahurkar*, <b>Rajaswa Patil</b>*. (2020). <a href="https://arxiv.org/abs/2006.00607"><u>LRG at SemEval-2020 Task 7: Assessing the Ability of BERT and Derivative Models to Perform Short-Edits based Humor Grading</u></a> [SemEval Workshop, COLING 2020]', abstract: 'We assess the ability of BERT and its derivative models for short-edits based humor grading and perform extensive experiments to test language modeling and generalization abilities.' },
  { citation: '<b>Rajaswa Patil</b>*, Veeky Baths. (2020). <a href="https://arxiv.org/abs/2006.00609"><u>CNRL at SemEval-2020 Task 5: Modelling Causal Reasoning in Language with Multi-Head Self-Attention Weights</u></a> [SemEval Workshop, COLING 2020]', abstract: 'We describe an approach for modelling causal reasoning in natural language by detecting counterfactuals in text using multi-head self-attention weights.' },
  { citation: 'Srivatsan Krishnan*, <b>Sharad Chitlangia</b>*, Maximilian Lam*, Zishen Wan, Alexandra Faust, Vijay Janapa Reddi. (2020). <a href="https://arxiv.org/pdf/1910.01055.pdf"><u>Quantized Reinforcement Learning</u></a> [ReCoML Workshop, MLSys 2020]', abstract: 'We conduct the first comprehensive empirical study that quantifies the effects of quantization on various deep reinforcement learning policies, showing that policies can be quantized to 6-8 bits without loss of accuracy.' },
  { citation: '<b>Ajay Subramanian</b>*, <b>Rajaswa Patil</b>*, Veeky Baths. (2019). <b><u>Word2Brain2Image: Visual Reconstruction from Spoken Word Representations</u></b> [Poster, ACCS 2019]', abstract: 'We aim to generate images purely from the EEG signals induced by listening to spoken words of objects using generative models such as VAEs and GANs.' },
  { citation: '<b>Rajaswa Patil</b>*, Siddhant Mahurkar. (2019). <b><u>Citta: A Lite Semantic Recommendation Framework for Digital Libraries</u></b> [Best Student Poster Award, KEDL 2019]', abstract: 'We propose an efficient and content-sentiment aware semantic recommendation framework, Citta, designed with the BERT language model.' },
  { citation: '<b>Souradeep Chakroborty</b>. (2019). <a href="https://arxiv.org/abs/1907.04373"><u>Capturing financial markets to apply deep reinforcement learning</u></a> [9th India Finance Conference, IIM-A]', abstract: 'We explore the usage of deep reinforcement learning algorithms to automatically generate consistently profitable, robust, uncorrelated trading signals in any general financial market.' },
];

const PREPRINTS: Publication[] = [
  { citation: 'Dianbo Liu, <b>Vedant Shah</b>, Oussama Boussif, Cristian Meo, Anirudh Goyal, Tianmin Shu, Michael Mozer, Nicolas Heess, Yoshua Bengio (2022). <a href="https://arxiv.org/abs/2205.10607"><u>Coordinating Policies Among Multiple Agents via an Intelligent Communication Channel</u></a> [arXiv]', abstract: 'We propose an alternative approach whereby agents communicate through an intelligent facilitator that learns to sift through and interpret signals provided by all agents.' },
  { citation: 'Yaman Singla Kumar*, Swapnil Parekh*, <b>Somesh Singh</b>*, Junyi Jessy Li, Rajiv Ratn Shah, Changyou Chen (2021). <a href="https://arxiv.org/abs/2109.11728"><u>AES Systems Are Both Overstable And Oversensitive</u></a> [arXiv]', abstract: 'We explore why deep-learning based Automatic Essay Scoring systems are surprisingly adversarially brittle, showing they behave like bag-of-words models despite using rich contextual embeddings.' },
  { citation: 'Arijit Gupta, <b>Rajaswa Patil</b>, Veeky Baths (2021). <a href="https://arxiv.org/abs/2105.05091"><u>Using Diachronic Distributed Word Representations as Models of Lexical Development in Children</u></a> [arXiv]', abstract: 'We use diachronic distributed word representations to perform temporal modeling and analysis of lexical development in children.' },
  { citation: '<b>Pranav Mahajan</b>, Advait Rane, Swapna Sasi, Basabdatta Sen Bhattacharya (2021). <a href="https://arxiv.org/abs/2012.06112"><u>Quantifying Synchronization in a Biologically Inspired Neural Network</u></a> [arXiv]', abstract: 'We present a collated set of algorithms to obtain objective measures of synchronisation in brain time-series data (SyncBox).' },
  { citation: '<b>Het Shah</b>, <b>Avishree Khare</b>*, <b>Neelay Shah</b>*, Khizir Siddiqui*. (2020). <a href="https://arxiv.org/pdf/2011.14691.pdf"><u>KD-Lib: A PyTorch library for Knowledge Distillation, Pruning and Quantization</u></a> [arXiv]', abstract: 'We present KD-Lib, an open-source PyTorch based library, which contains state-of-the-art modular implementations of algorithms for Knowledge Distillation, Pruning, and Quantization.' },
  { citation: 'Megh Thakkar, <b>Vishwa Shah</b>, Ramit Sawhney and Debdoot Mukherjee (2021). <b><u>Sequence Mixup for Zero-Shot Cross-Lingual Part-Of-Speech Tagging</u></b> [Extended Abstract, MRL Workshop, EMNLP 2021]', abstract: 'We present an approach utilizing Mixup to improve the generalizability of models for part-of-speech tagging trained on a source language.' },
];

function PaperCard({ pub }: { pub: Publication }) {
  const [open, setOpen] = useState(false);
  const hasAbstract = !!pub.abstract;

  return (
    <div className={`${styles.paper} ${open ? styles.paperOpen : ""}`}>
      <div
        className={`${styles.paperTop} ${hasAbstract ? styles.paperClickable : ""}`}
        onClick={(e) => {
          if (!hasAbstract) return;
          // Don't toggle if user clicked an actual link
          if ((e.target as HTMLElement).tagName === "A") return;
          setOpen(!open);
        }}
        role={hasAbstract ? "button" : undefined}
        tabIndex={hasAbstract ? 0 : undefined}
        onKeyDown={(e) => {
          if (hasAbstract && (e.key === "Enter" || e.key === " ")) {
            e.preventDefault();
            setOpen(!open);
          }
        }}
      >
        <div
          className={styles.paperCitation}
          dangerouslySetInnerHTML={{ __html: pub.citation }}
        />
        {hasAbstract && (
          <span className={styles.toggleIcon}>
            {open ? "▲" : "▼"}
          </span>
        )}
      </div>
      {open && pub.abstract && (
        <div className={styles.abstract}>
          <div className={styles.abstractTitle}>Abstract</div>
          <p>{pub.abstract}</p>
        </div>
      )}
    </div>
  );
}

export default function PublicationsPage() {
  return (
    <main className={styles.main}>
      <FadeIn>
        <div className={styles.sectionLabel}>
          <span className={styles.labelDot} />
          PUBLICATIONS
        </div>
      </FadeIn>

      <div className={styles.list}>
        {PUBLICATIONS.map((pub, i) => (
          <PaperCard key={i} pub={pub} />
        ))}
      </div>

      <FadeIn>
        <div className={`${styles.sectionLabel} ${styles.preprintLabel}`}>
          <span className={styles.labelDot} />
          PREPRINTS
        </div>
      </FadeIn>

      <div className={styles.list}>
        {PREPRINTS.map((pub, i) => (
          <PaperCard key={i} pub={pub} />
        ))}
      </div>
    </main>
  );
}
