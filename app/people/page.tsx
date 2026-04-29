import styles from "./page.module.css";
import FadeIn from "../_components/FadeIn";

interface Person {
  name: string;
  role: string;
  affiliation: string;
  image: string;
  href: string;
}

const MEMBERS: Person[] = [
  { name: "Harshvardhan Mestha", role: "President", affiliation: "SSMP Scholar @ ESML (with TUD)", image: "/assets/people/harsh_updated.png", href: "https://harshvardhan-mestha.github.io/" },
  { name: "Sasmit Datta", role: "Vice President", affiliation: "Intern @ aion intelligence", image: "/assets/people/sasmit_new.png", href: "https://www.linkedin.com/in/sasmit-datta/" },
  { name: "Sarang S", role: "Member", affiliation: "Research Intern @ UMD, SWE Intern @ Cisco", image: "/assets/people/sarang_s.png", href: "https://sarangs.pages.dev/" },
  { name: "Aaron Menezes", role: "Member", affiliation: "Research Intern @ Brown University, Intern @ DeepChem", image: "/assets/people/aaron_menzees.jpg", href: "https://www.linkedin.com/in/aaron-rock-menezes/" },
  { name: "Ankita Vaishnobi Bisoi", role: "Member", affiliation: "SWE Intern @ Google, Intern @ DeepChem", image: "/assets/people/ankita.jpg", href: "https://www.linkedin.com/in/ankita-vaishnobi-bisoi-061385239/" },
  { name: "Ashmit Rana", role: "Member", affiliation: "Upcoming Intern @ DE Shaw", image: "/assets/people/ashmit_rana.jpg", href: "https://www.linkedin.com/in/ashmitrana/" },
  { name: "Aarush Rathore", role: "Member", affiliation: "", image: "/assets/people/aarush_rathore.jpg", href: "https://www.linkedin.com/in/aarushrathore/" },
  { name: "Pratham Chheda", role: "Member", affiliation: "Upcoming Intern @ GE", image: "/assets/people/pratham_chheda.jpg", href: "https://www.linkedin.com/in/pratham-chheda-6a066b235/" },
  { name: "Soham Kalburgi", role: "General Secretary", affiliation: "Upcoming Intern @ Sprinklr", image: "/assets/people/soham_kalburgi.jpg", href: "https://www.linkedin.com/in/sohamkalburgi/" },
  { name: "Aditya Nagarsekar", role: "Member", affiliation: "Upcoming Intern @ Microsoft Research, India", image: "/assets/people/aditya_nagarsekar.jpg", href: "https://www.linkedin.com/in/aditya-nagarsekar-62b5761b6/" },
  { name: "Saatwik Tiwari", role: "Member", affiliation: "", image: "/assets/people/saatvik_tiwari.jpg", href: "https://www.linkedin.com/in/saatwik-tiwari-336b86301/" },
  { name: "Anish S", role: "Member", affiliation: "Research Intern @ MIT CSAIL, Upcoming Intern @ INRIA", image: "/assets/people/anish_s.jpg", href: "https://www.linkedin.com/in/anish-sathyanarayanan-53b69029b/" },
  { name: "Kamal Manchenella", role: "Member", affiliation: "", image: "/assets/people/kamal_manchenella.jpg", href: "https://www.linkedin.com/in/kamal-manchenella-13891928b/" },
];

const ALUMNI: Person[] = [
  { name: "Karan Bania", role: "Alumnus, Ex - President", affiliation: "MSML @ CMU", image: "/assets/people/karan.jpg", href: "https://karannb.github.io/" },
  { name: "Yash Bhisikar", role: "Alumnus, Ex - Vice President", affiliation: "Performance and Research @ e6data. Research Intern @ University of Manchester. Ex DAAD-WISE @ TUD.", image: "/assets/people/yash.jpg", href: "https://yashrb24.github.io/" },
  { name: "Shreyas V", role: "Alumnus", affiliation: "AI Research Scientist @ Mstack Chemicals, Intern @ DeepChem; Research Intern @ Kreiman Lab, Harvard, Krishnaswamy Lab, Yale", image: "/assets/people/shreyasv.png", href: "https://shreyasvinaya.github.io/folio/" },
  { name: "Tejas Agrawal", role: "Alumnus", affiliation: "RF @ PROSE, Microsoft Research; Ex-Research Intern @ CSALT Lab, IIT-B", image: "/assets/people/tejas.jpg", href: "https://tej-55.github.io/" },
  { name: "Rishav Mukherji", role: "Alumnus, Ex - President", affiliation: "MSML @ CMU. Ex - Research Intern, Serre Lab, Brown University, ESML (with TUD)", image: "/assets/people/rishav.JPG", href: "https://www.linkedin.com/in/rishav-mukherji/" },
  { name: "Aditya Agarwal", role: "Alumnus, Ex - Vice President", affiliation: "Research Intern, Serre Lab, Brown University", image: "/assets/people/blank.png", href: "" },
  { name: "Shreyas Bhat", role: "Alumnus, Ex - Vice President", affiliation: "PhD CS UNC, Ex - Research Intern, QTIM lab, Harvard Medical School", image: "/assets/people/shreyasb.jpeg", href: "https://shreyas-bhat.github.io/" },
  { name: "Ashmit Khandelwal", role: "Alumnus", affiliation: "Pre-Doctoral RF @ MSR", image: "/assets/people/ashmit.jpg", href: "https://ashmitkx.github.io/" },
  { name: "Soham Chitnis", role: "Alumnus", affiliation: "MSCS NYU", image: "/assets/people/soham_chitnis.jpeg", href: "https://soham-chitnis10.github.io/" },
  { name: "S I Harini", role: "Alumnus", affiliation: "Research Associate @ Adobe MDSR; Ex - GSoC, Arviz", image: "/assets/people/harini.jpeg", href: "https://harini-si.github.io/" },
  { name: "Shrey Pandit", role: "Alumnus, Ex - President", affiliation: "MS CS UT Austin, Ex - Microsoft Research, MIDAS-IIITD, Princeton-NLP", image: "/assets/people/shrey.jpeg", href: "https://shreypandit.github.io/" },
  { name: "Omatharv Bharat Vaidya", role: "Alumnus", affiliation: "PhD, UT Austin", image: "/assets/people/omatharv.jpeg", href: "https://www.linkedin.com/in/omatharv-b-vaidya-0b6966327/" },
  { name: "Hardik Shah", role: "Alumnus", affiliation: "MSc CS ETH Zurich", image: "/assets/people/hardik.jpeg", href: "https://hardik01shah.github.io/" },
  { name: "Sampreet Arthi", role: "Alumnus", affiliation: "SDE @ Amazon", image: "/assets/people/sampreet.png", href: "https://sampreet-arthi.github.io/" },
  { name: "Abhijit Deo", role: "Alumnus", affiliation: "AI Engineer @ MinusZero", image: "/assets/people/abhijit.jpeg", href: "https://abhi-glitchhg.github.io/" },
  { name: "Hrithik Nambiar", role: "Alumnus", affiliation: "CS @ Brown University", image: "/assets/people/hrithik.jpeg", href: "https://hrithiknambiar.github.io/" },
  { name: "Yash Bhartia", role: "Alumnus", affiliation: "Research Intern @ Télécom Paris", image: "/assets/people/yash2.png", href: "https://www.linkedin.com/in/yashbhartia00/" },
  { name: "Atharv Sonwane", role: "Alumnus, Ex - President", affiliation: "PhD CS Cornell, Ex - RF @ MSR India", image: "/assets/people/atharv.jpeg", href: "https://threewisemonkeys-as.github.io/" },
  { name: "Vedant Shah", role: "Alumnus, Ex - Vice President", affiliation: "PhD, Mila", image: "/assets/people/vedant.png", href: "https://veds12.github.io/" },
  { name: "Somesh Singh", role: "Alumnus", affiliation: "Research Scientist @ Adobe MDSR", image: "/assets/people/somesh.jpeg", href: "https://someshsingh22.github.io/" },
  { name: "Rishabh Patra", role: "Alumnus", affiliation: "SDE @ Amazon", image: "/assets/people/rishabh.png", href: "https://hades-rp2010.github.io/" },
  { name: "Neelay Shah", role: "Alumnus", affiliation: "ML @ Aignostics, Ex - RSE @ Max Planck Institute for Intelligent Systems", image: "/assets/people/neelay.png", href: "https://www.linkedin.com/in/neelays/" },
  { name: "Vishwa Shah", role: "Alumnus", affiliation: "ML Research @ Apple", image: "/assets/people/vishwa.png", href: "https://sites.google.com/view/vishwavshah/" },
  { name: "Sharad Chitlangia", role: "Alumnus, Ex - President", affiliation: "Applied Scientist @ Amazon", image: "/assets/people/sharad.jpeg", href: "https://www.sharadchitlang.ai/" },
  { name: "Rijul Ganguly", role: "Alumnus, Ex - Vice President", affiliation: "SDE @ Amazon", image: "/assets/people/rijul_new.jpeg", href: "https://rijul1999.github.io/" },
  { name: "Aditya A", role: "Alumnus, Ex - President", affiliation: "MSCS @ UCSD", image: "/assets/people/blank.png", href: "" },
  { name: "Het Shah", role: "Alumnus, Ex - Vice President", affiliation: "RE @ GDM India, Ex - RF @ PROSE Team, Microsoft Research", image: "/assets/people/het.jpeg", href: "https://het-shah.github.io/" },
  { name: "Ajay Subramanian", role: "Alumnus", affiliation: "PhD Student, New York University", image: "/assets/people/ajay.jpeg", href: "https://ajaysubramanian.com/" },
  { name: "Rajaswa Patil", role: "Alumnus", affiliation: "AI @ Maximor, Ex - RF @ PROSE Team, Microsoft Research", image: "/assets/people/rajaswa.png", href: "https://rajaswapatil.com/" },
  { name: "Soundarya Krishnan", role: "Alumnus", affiliation: "MLE @ Apple", image: "/assets/people/soundarya.png", href: "https://soundarya98.github.io/" },
  { name: "Avishree Khare", role: "Alumnus", affiliation: "PhD CS UPenn, Ex - RF @ PROSE Team, Microsoft Research", image: "/assets/people/avishree.png", href: "https://avishreekh.github.io/" },
  { name: "Ashwin Vaswani", role: "Alumnus", affiliation: "Research Scientist @ GDM", image: "/assets/people/ashwin.jpeg", href: "https://sites.google.com/view/ashwinvaswani" },
  { name: "Pranav Mahajan", role: "Alumnus", affiliation: "PhD Student, Oxford University", image: "/assets/people/pranav.jpeg", href: "https://www.pranavmahajan.info/" },
  { name: "Gaurav Iyer", role: "Alumnus", affiliation: "", image: "/assets/people/gaurav.png", href: "" },
  { name: "Arshia Arya", role: "Alumnus", affiliation: "PhD UCSD, Ex - SCAI Center Fellow at MSR India", image: "/assets/people/arshia.png", href: "https://arshiaarya.github.io/" },
  { name: "Souradeep Chakraborty", role: "Alumnus", affiliation: "Product @ Scapia", image: "/assets/people/souradeep.jpeg", href: "https://sauradefy99.github.io/" },
  { name: "Shangeth Rajaa", role: "Alumnus", affiliation: "Researcher at Vernacular.ai, Ex - Research Intern at IBM Research & NTU, Singapore, Ex - Research Collaborator at INRIA, Paris", image: "/assets/people/shangeth.jpeg", href: "https://shangeth.com/" },
  { name: "Mehul Rastogi", role: "Alumnus, Ex - Vice President", affiliation: "PhD UCL, Ex - Application Engineer, Oracle", image: "/assets/people/mehul.png", href: "" },
  { name: "Alish Dipani", role: "Alumnus, Ex - President, Co-Founder", affiliation: "PhD GeorgiaTech", image: "/assets/people/alish.jpeg", href: "https://alishdipani.github.io/" },
  { name: "Pranav Garg", role: "Alumnus, Ex - President, Co-Founder", affiliation: "SDE @ AWS", image: "/assets/people/pranav2.jpeg", href: "https://pranavgarg.in/" },
];

function PersonCard({ person }: { person: Person }) {
  const inner = (
    <div className={styles.card}>
      <div className={styles.cardPhoto}>
        <img src={person.image} alt={person.name} />
      </div>
      <h3 className={styles.cardName}>{person.name}</h3>
      <div className={styles.cardRole}>{person.role}</div>
      {person.affiliation && (
        <div className={styles.cardAffiliation}>{person.affiliation}</div>
      )}
    </div>
  );

  if (person.href) {
    return (
      <a href={person.href} target="_blank" rel="noopener noreferrer" className={styles.cardLink}>
        {inner}
      </a>
    );
  }

  return inner;
}

export default function PeoplePage() {
  return (
    <main className={styles.main}>
      <FadeIn>
        <div className={styles.sectionLabel}>
          <span className={styles.labelDot} />
          CURRENT MEMBERS
        </div>
      </FadeIn>

      <div className={styles.grid}>
        {MEMBERS.map((person, i) => (
          <FadeIn key={i} delay={i * 30}>
            <PersonCard person={person} />
          </FadeIn>
        ))}
      </div>

      <FadeIn>
        <hr className={styles.divider} />
        <div className={`${styles.sectionLabel} ${styles.alumniLabel}`}>
          <span className={styles.labelDot} />
          ALUMNI
        </div>
      </FadeIn>

      <div className={styles.grid}>
        {ALUMNI.map((person, i) => (
          <FadeIn key={i} delay={i * 20}>
            <PersonCard person={person} />
          </FadeIn>
        ))}
      </div>
    </main>
  );
}
