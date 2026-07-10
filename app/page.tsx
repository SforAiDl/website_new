import styles from "./page.module.css";
import FadeIn from "./_components/FadeIn";
import HeroReveal from "./_components/HeroReveal";

const PARTNERS = [
  { src: "/assets/harvard_color_logo.png", alt: "Harvard", style: { transform: "translateY(1px)" } },
  { src: "/assets/brown_logo_color.png", alt: "Brown", style: { transform: "translateY(-3px)" } },
  { src: "/assets/mila_logo_color.png", alt: "MILA", height: "85px" },
  { src: "/assets/google_logo_color.png", alt: "Google", style: { transform: "translateY(6px)" } },
  { src: "/assets/microsoft_logo_color.png", alt: "Microsoft" },
  { src: "/assets/mit_logo_color.png", alt: "MIT" },
  { src: "/assets/adobe_logo_color.png", alt: "Adobe" },
  { src: "/assets/amazon_logo_color.png", alt: "Amazon", height: "35px", style: { transform: "translateY(7px)" } },
  { src: "/assets/inria_logo_color.png", alt: "INRIA", style: { transform: "translateY(-2px)" } },
  { src: "/assets/cmu_logo_color.png", alt: "CMU" },
  { src: "/assets/yale_logo_color.png", alt: "Yale" },
];

const NEWS_ITEMS = [
  { date: "Apr 2026", content: "Aditya will be carrying out his undergraduate thesis at Microsoft Research, India!" },
  { date: "Mar 2026", content: 'SAiDL\'s <a href="https://github.com/SforAiDl/SAiDL-Summer-2026-Induction-Assignment">Summer Induction Assignment</a> is out! Join the <a href="https://join.slack.com/t/saidl/shared_invite/zt-3wjuirqd2-UbYGraYqvtGzNALRJesBJw">Slack</a> workspace.' },
  { date: "Jan 2026", content: "Anish started his research internship at MIT CSAIL." },
  { date: "Nov 2025", content: "Pratham will be interning at GE in the summer!" },
  { date: "Aug 2025", content: "Soham will be interning at Sprinklr in the summer!" },
  { date: "Aug 2025", content: "Ashmit will be interning at DE Shaw in the summer!" },
  { date: "Jun 2025", content: "Tejas secured an RF position at MSR India!" },
  { date: "Apr 2025", content: "Harshvardhan got selected for the SSMP scholarship with TU Dresden!" },
  { date: "Apr 2025", content: "Sasmit will be carrying out his undergraduate thesis with simplismart.ai!" },
  { date: "Apr 2025", content: "Harshvardhan will be carrying out his undergraduate thesis with Royal Holloway, University of London." },
  { date: "Aug 2024", content: "Shreyas got a placement offer from Sprinklr!" },
  { date: "Aug 2024", content: "Karan got a placement offer from Gan.AI!" },
  { date: "Aug 2024", content: "Yash got a placement offer from e6data!" },
  { date: "Jul 2024", content: "Ankita secured a SWE internship at Google!" },
  { date: "Apr 2024", content: "Tejas got selected for the IKDD Uplink program and will be a summer intern at IIT Bombay!" },
  { date: "Apr 2024", content: "Shreyas will be joining the CS department at UNC Chapel Hill in Fall 2024." },
  { date: "Mar 2024", content: "Ashmit secured an RF position at MSR India!" },
  { date: "Feb 2024", content: "Rishav and Aditya will be joining CMU's MS ML program in Fall 2024." },
  { date: "Feb 2024", content: "Yash and Karan got selected for the DAAD WISE 2024 Scholarship!" },
  { date: "Jan 2024", content: "Yash and Karan got selected for the MITACS Globalink Research Internship 2024!" },
  { date: "Aug 2023", content: "Ashmit got a placement offer from Gan.AI!" },
  { date: "Apr 2023", content: "Rishav will be working as a research intern at Cambridge University!" },
  { date: "Apr 2023", content: "Aditya will be carrying out his undergraduate thesis at Brown University!" },
  { date: "Apr 2023", content: "Shreyas will be carrying out his undergraduate thesis at Harvard University!" },
  { date: "Apr 2023", content: "Harini will be carrying out her undergraduate thesis at Stanford University!" },
  { date: "Apr 2023", content: "Soham will be carrying out his undergraduate thesis at TCS Research!" },
  { date: "Apr 2023", content: "Ashmit will be carrying out his undergraduate thesis at Adobe MDSR!" },
  { date: "Feb 2023", content: "Rishav and Soham got selected for MITACS Globalink Research Internship 2023!" },
  { date: "Jan 2023", content: "Rishav got selected for DAAD WISE 2023 Scholarship!" },
  { date: "Oct 2022", content: "Rajaswa will be joining the PROSE Team at Microsoft Research as a Research Fellow!" },
  { date: "Sep 2022", content: "Three SAiDL members have been selected as Adobe MDSR Summer Interns for 2023!" },
  { date: "Jun 2022", content: "Four SAiDL members have been selected for Amazon Summer School 2022!" },
  { date: "Jun 2022", content: 'SAiDL is organizing the third edition of the <a href="https://ssoc.saidl.in/">SAiDL Season of Code</a>! Join our <a href="http://bit.ly/saidl-outreach-slack">Slack</a> workspace to get involved.' },
  { date: "May 2022", content: "Shrey, Atharv, Harini, and Neelay are selected for GSoC 2022!" },
  { date: "May 2022", content: "Somesh will be working as a machine learning research associate at Adobe Research, India!" },
  { date: "Apr 2022", content: "Aditya Ahuja will be interning at Google, Mountain View this summer!" },
  { date: "Apr 2022", content: "Hardik will be doing his undergraduate thesis at ARL, NTNU!" },
  { date: "Apr 2022", content: 'APPCAIR and SAiDL with TCS Research are organizing a workshop on <a href="https://sites.google.com/goa.bits-pilani.ac.in/pgm/home">Probabilistic Graphical Models</a> from 18 Apr to 27 Apr 2022.' },
  { date: "Apr 2022", content: "Ashwin will be joining CMU for the MSCV program in Fall 2022." },
  { date: "Apr 2022", content: "Alish will be joining the Psychology PhD program at Northeastern University." },
  { date: "Apr 2022", content: "Atharv will be working as a Research Fellow at Microsoft Research, India!" },
  { date: "Mar 2022", content: "Omatharv will be working as a research intern at Warwick University this summer." },
  { date: "Feb 2022", content: "Hritik will be interning at IBM during summer 2022!" },
  { date: "Feb 2022", content: "Omatharv will be pursuing his undergraduate thesis at UT Austin starting Fall 2022." },
  { date: "Jan 2022", content: 'Four SAiDL members have been selected for <a href="https://sites.google.com/view/researchweek2022/home">Google Research Week</a>. (out of 150 final year undergrads, masters and PhD students selected across India!)' },
  { date: "Jan 2022", content: "Somesh joins Adobe MDSR Labs as a research intern!" },
  { date: "Jan 2022", content: 'SAiDL\'s <a href="https://github.com/SforAiDl/SAiDL-Spring-2022-Induction-Assignment">Spring Induction Assignment</a> is out! Join the <a href="https://join.slack.com/t/saidl/shared_invite/zt-120z8dtkn-mdotu1rjjVQg1nE91a5mpg">Slack</a> workspace.' },
  { date: "Dec 2021", content: "Hardik will be working at Queen's University as a part of MITACS in summer 2022." },
  { date: "Oct 2021", content: "Ajay starts his PhD at NYU!" },
  { date: "Oct 2021", content: 'Recordings for all sessions of AI Symposium 2021 are now available <a href="https://www.youtube.com/playlist?list=PLKwsK83XYnLVI9SmQ3zLzSdNyVoGrsGDF">here</a>.' },
  { date: "Oct 2021", content: "Pranav starts his DPhil at the University of Oxford!" },
  { date: "Sep 2021", content: "Ashwin will be joining Google Research, India as a pre-doctoral researcher." },
  { date: "Sep 2021", content: 'We are organizing the second edition of AI Symposium in association with APPCAIR. Visit <a href="https://sites.google.com/view/ai-symposium-2021/home">here</a> for more details.' },
  { date: "Sep 2021", content: "Sharad will be working as a research scientist at Amazon!" },
  { date: "Aug 2021", content: 'SAiDL is organizing the second edition of the <a href="https://ssoc.saidl.in/">SAiDL Season of Code</a>! Join our <a href="https://join.slack.com/t/ssoc2021/shared_invite/zt-u4eefbut-aX7TYc1WoQWgylPydivUlg">Slack</a> workspace to get involved.' },
  { date: "Aug 2021", content: "Atharv will be working as a research intern at the RVL Lab, University of Toronto." },
  { date: "Jul 2021", content: "Het will be working as a Research Fellow at Microsoft Research, India!" },
  { date: "Jul 2021", content: "Rajaswa starts as a pre-doctoral researcher at TCS Research." },
  { date: "Jul 2021", content: 'SAiDL\'s <a href="https://github.com/SforAiDl/Summer-Induction-Assignment-2021">Summer Induction Assignment</a> is out! Fill the form to register and join the <a href="https://join.slack.com/t/slack-nau3849/shared_invite/zt-sn2czhqc-CTVXRMFxqBEBTbmoLTb0kg">Slack</a> workspace.' },
  { date: "May 2021", content: "Rajaswa will be teaching the Transformers tutorial at Neuromatch Academy!" },
  { date: "May 2021", content: 'Rajaswa has been selected for <a href="https://vasishth.github.io/smlp2021/">SMLP 2021 Summer School!</a>' },
  { date: "May 2021", content: "Vedant, Rishabh, and Atharv will be interning at TCS Research this summer!" },
  { date: "May 2021", content: "Het will be interning at MSR India!" },
  { date: "May 2021", content: "Gaurav and Vedant will be doing their thesis at Mila!" },
  { date: "May 2021", content: "Vishwa will be doing her thesis at MIDAS, IIIT D!" },
  { date: "May 2021", content: "Neelay will be doing his thesis at Harvard!" },
  { date: "May 2021", content: "Alish will be doing his RAship at NBRC!" },
  { date: "May 2021", content: 'Het and Avishree have been selected as research interns for the <a href="https://github.com/esowc/challenges_2021/issues/9">ML4Land</a> project at <a href="https://esowc.ecmwf.int/">ESOWC-ECMWF 2021</a>.' },
  { date: "Apr 2021", content: "Rajaswa will be a data science intern at Cognizer!" },
  { date: "Mar 2021", content: "Souradeep got placed at Flipkart for the role of APM!" },
  { date: "Jan 2021", content: "Aditya starts his thesis at the Visual Computing Group at Harvard." },
  { date: "Oct 2020", content: "Het will be working as a remote research intern at VCL, IISc Bangalore." },
  { date: "Aug 2020", content: "Sharad will be working as a remote research intern at CMU's SafeAI Lab." },
  { date: "Aug 2020", content: "Pranav got a PPO at Nvidia, and Het and Rijul got placed at PayPal!" },
  { date: "Aug 2020", content: "Aditya got a PPO from Media.net!" },
  { date: "Aug 2020", content: 'SAiDL\'s <a href="https://github.com/SforAiDl/Summer-Induction-Assignment-2020">Summer Induction Assignment</a> is out! Register and join the <a href="https://bp-gc.in/summerslack">Slack</a> channel.' },
  { date: "Jul 2020", content: "Ten SAiDL members have been selected for the AI Summer School organized by Google Research India. (among 150 selections across India)!" },
  { date: "Jul 2020", content: "Ashwin, Rijul, and Het's paper got accepted at the MLSA 2020 workshop collocated with ECML-PKDD 2020." },
  { date: "Jul 2020", content: 'SAiDL is organizing the <a href="https://bp-gc.in/symposium_2020">Summer Symposium on AI Research</a>. Register to join!' },
  { date: "Jul 2020", content: "Rajaswa's and Somesh's papers have been accepted at the SemEval-2020 workshop collocated with COLING-2020." },
  { date: "Jun 2020", content: "Alish and Mehul have been selected as TAs for Neuromatch Academy!" },
  { date: "May 2020", content: "Ashwin will be working as a remote research intern at QTIM Lab, Harvard Medical School in collaboration with MGH!" },
  { date: "May 2020", content: "Ajay will be working as a remote research intern at Harvard University in collaboration with MIT!" },
  { date: "May 2020", content: "Aditya will be working as a research intern at ECMWF as part of the ESoWC program!" },
  { date: "May 2020", content: "SAiDL is organizing a reading course on Neurolinguistics led by Rajaswa Patil." },
  { date: "May 2020", content: "Pranav starts his position as a hardware engineering intern at Nvidia working on distributed deep learning technologies!" },
  { date: "May 2020", content: "Shangeth starts his position as a research intern at IBM Research!" },
  { date: "May 2020", content: 'SAiDL is organizing a Season of Code to work on cutting edge research projects with a strong focus on open source software. Check out our projects <a href="https://github.com/SforAiDl/SAiDL-Season-of-Code">here</a>!' },
];

const GOALS = [
  { num: "1", text: "Inculcate the spirit of research in Indian universities" },
  { num: "2", text: "Form an extensive alumni network of researchers in AI and deep learning" },
  { num: "3", text: "Collaborate with industry and research labs on cutting-edge research" },
];

export default function HomePage() {
  return (
    <>
      {/* Alert Banner */}
      {/* <div className={styles.alert} id="alert-banner">
        <div className={styles.alertContent}>
          The 2026 Summer Induction Assignment is out.{" "}
          <a href="https://github.com/SforAiDl/SAiDL-Summer-2026-Induction-Assignment" target="_blank">
            View it here
          </a>
          .
        </div>
      </div> */}

      {/* Hero */}
      <section className={styles.hero} id="hero-section">
        <HeroReveal />
        <div className={styles.heroGrid}>
          <div className={styles.heroTop}>
            <FadeIn>
              <h1 className={styles.heroTitle}>
                <span className={styles.highlightLetter}>S</span><img src="/assets/logo_dark.png" alt="o" className={styles.inlineLogo} />ciety for<br />
                <span className={styles.highlightLetter}>A</span>rtificial <span style={{ whiteSpace: "nowrap" }}><span className={`${styles.highlightLetter} ${styles.highlightI}`}><span className={styles.letterI}>I</span><span className={styles.letterSmallI}>i</span></span>ntelligence</span><br />
                and <span className={styles.highlightLetter}>D</span>eep <span className={styles.highlightLetter}>L</span>earning
              </h1>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className={styles.mission} id="mission-section">
        <div className={styles.missionInner}>
          <div className={styles.missionHeader}>
            <FadeIn>
              <div className={styles.sectionLabel}>
                <span className={styles.labelDot} />
                ABOUT US
              </div>
              <p className={styles.missionText}>
                We are a student-run, non-profit, professional group of motivated individuals
                based out of BITS Pilani, working on research and application of Artificial
                Intelligence and Deep Learning. Our goal is to:
              </p>
            </FadeIn>
          </div>
          <div className={styles.goalsGrid}>
            {GOALS.map((g, i) => (
              <FadeIn key={g.num} delay={100 + i * 100}>
                <div className={`${styles.goalCard} ${i === GOALS.length - 1 ? styles.goalCardLast : ""}`}>
                  <span className={styles.goalNumber}>{g.num}</span>
                  <p className={styles.goalText}>{g.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Marquee */}
      <FadeIn>
        <div className={styles.marqueeContainer}>
          <div className={styles.sectionLabel} style={{ marginBottom: "1.5rem" }}>
            <span className={styles.labelDot} />
            Our members have collaborated with:
          </div>
          <section className={styles.marquee} id="partners-marquee">
            <div className={styles.track}>
              <div className={styles.trackContent}>
                {[...PARTNERS, ...PARTNERS].map((p, i) => (
                  <img
                    key={i}
                    src={p.src}
                    alt={p.alt}
                    style={{
                      ...(p.height ? { height: p.height } : {}),
                      ...(p.style || {})
                    }}
                  />
                ))}
              </div>
            </div>
          </section>
        </div>
      </FadeIn>

      {/* News */}
      <section className={styles.newsSection} id="news-section">
        <div className={styles.newsInner}>
          <div className={styles.newsSidebar}>
            <FadeIn>
              <div className={styles.sectionLabel}>
                <span className={styles.labelDot} />
                NEWS
              </div>
            </FadeIn>
          </div>
          <div className={styles.newsList}>
            <FadeIn delay={100}>
              <div className={styles.newsScroll}>
                {NEWS_ITEMS.map((item, i) => (
                  <div key={i} className={styles.newsItem}>
                    <div className={styles.newsDate}>{item.date}</div>
                    <div
                      className={styles.newsContent}
                      dangerouslySetInnerHTML={{ __html: item.content }}
                    />
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
