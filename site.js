// Renseigner uniquement les coordonnées que vous souhaitez rendre publiques.
const PUBLIC_CONTACTS = {
  email: 'gabriel.lanoux.research@gmail.com',
  github: 'https://github.com/glanoux-research',
  linkedin: 'https://www.linkedin.com/in/gabriel-lanoux-05a367228/'
};

const translations = {
  fr: {
    skip: 'Aller au contenu', navLabel: 'Navigation principale', languageLabel: 'Langue',
    navProjects: 'Projets', navAbout: 'Parcours', navBlog: 'Blog', navContact: 'Contact',
    portraitAlt: 'Portrait de Gabriel Lanoux',
    blogTitle: 'Blog', blogIntro: 'Notes et photos de conférences et d’événements.',
    icmlDate: '6 juillet 2026', icmlPlace: 'COEX, Séoul', icmlTitle: 'ICML 2026 à Séoul',
    icmlText: 'Premier jour d’ICML 2026, l’International Conference on Machine Learning, au COEX de Séoul du 6 au 11 juillet. Le même jour, j’ai assisté au Trustworthy & Responsible Agentic AI Symposium.',
    icmlAlt1: 'Gabriel devant le panneau d’accueil d’ICML 2026 au COEX, à Séoul', icmlCap1: 'Le panneau d’accueil d’ICML 2026 au COEX.',
    icmlAlt2: 'Gabriel dans la salle du symposium, devant l’écran du Trustworthy & Responsible Agentic AI Symposium', icmlCap2: 'Trustworthy & Responsible Agentic AI Symposium.',
    featuredTitle: 'Projets phares', featuredIntro: 'Trois comptes rendus interactifs, un pour chaque facette de mon travail : navigation des navires, robots qui apprennent et vol autonome.', allProjects: 'Les six projets →',
    aboutTitle: 'Parcours et compétences',
    contactEmail: 'Email', contactTitle: 'Contact',
    contactPageIntro: 'Une question sur un projet, un stage ou un poste ? Écris-moi directement, ou laisse un commentaire public plus bas.',
    contactEmailDesc: 'Le plus adapté pour tout ce qui est privé : stages, postes, collaborations.',
    contactGithubDesc: 'Le code, et la source de ce site.',
    contactLinkedinDesc: 'Parcours et messages professionnels.',
    eyebrow: 'Simulation · Systèmes d’IA · Robotique', introTitle: 'Bonjour, je suis Gabriel Lanoux.',
    introLead: 'Je conçois et fais tourner des systèmes complexes — simulations de navires, robots qui apprennent, calcul GPU — et je sais les sécuriser.',
    introBody: 'Je suis en double diplôme en informatique et réseaux entre l’INSA Toulouse et Seoul National University ; mon diplôme d’ingénieur est en cours. Au Deep Learning Lab de SNU, mon mémoire construit un banc d’essai de navigation qui mesure ce que les attaques sur les données de navigation, et les réponses automatiques à ces attaques, font réellement au navire.',
    explore: 'Explorer les projets',
    factsLabel: 'En bref', factNowLabel: 'Actuellement', factNow: 'Deep Learning Lab, Seoul National University',
    factThesisLabel: 'Mémoire', factThesis: 'Banc d’essai cyber-physique pour la navigation des navires',
    factSchoolLabel: 'Diplôme', factSchool: 'INSA Toulouse · informatique et réseaux (en cours)',
    factLangLabel: 'Langues', factLang: 'Français (natif) · anglais (courant)',
    projectsTitle: 'Projets',
    projectsIntro: 'Chaque page est un compte rendu interactif d’un vrai projet : simulations, politiques entraînées et journaux de vol rejoués dans le navigateur. Les identifiants des navires dans les données AIS sont pseudonymisés.',
    kvTag: 'Mémoire · navigation des navires',
    kvText: 'La partie navire de mon banc d’essai de mémoire : un modèle de manœuvre MMG du pétrolier KVLCC2 par mer forte, avec évitement de collision SB-MPC sur trois rencontres COLREG. Active ou coupe l’évitement et observe la distance de passage.',
    heavy10: '3D · environ 10 Mo', heavy9: '3D · environ 9 Mo',
    tsTag: 'Isaac Sim · hydrodynamique',
    tsText: 'Un pétrolier de 240 m sur une mer irrégulière, calculé par un modèle physique validé contre des solutions analytiques d’architecture navale, puis rejoué en 3D.',
    chTag: 'AIS × météo marine · analyse de données', chTitle: 'Navires et état de la mer en Manche',
    chText: 'Projet de cours à SNU : comment le vent, les vagues et les courants sont liés à la vitesse des cargos et des pétroliers. Une journée complète de trafic AIS rejouée sur le champ de vagues : les navires face aux vagues ralentissent, ceux qui les suivent non.',
    chStorm: 'Jour de tempête · 2 août 2023', chCalm: 'Jour calme · 16 août 2023',
    srTag: 'Jumeau numérique',
    srText: 'Que faut-il pour créer le jumeau d’un navire ? Un ferry simulé construit de zéro : télémétrie synchronisée, modèle de consommation et d’encrassement de coque, et le journal de ce qui a tenu face aux données d’un vrai navire.',
    qdTag: 'Apprentissage par renforcement · robotique', qdTitle: 'Locomotion d’un quadrupède',
    qdText: 'Des politiques de locomotion pour un quadrupède, entraînées de zéro en simulation : un premier parcours complet avec un monticule gravi en moins de 6 secondes, et une navigation par points de passage réussie sur 15 graines aléatoires sur 15.',
    qdMound: 'Parcours du monticule', qdWaypoints: 'Navigation par points de passage',
    ggTag: 'PX4 · drone autonome',
    ggText: 'Un quadrirotor autonome en simulation : une couche de guidage en Python planifie des trajectoires lisses, PX4 les vole et Gazebo fournit la physique et le vent. Chaque trace est rejouée depuis un vrai journal de vol PX4.',
    journeyTitle: 'Mon parcours',
    journeyIntro: 'De la cybersécurité des réseaux aux systèmes physiques et à l’IA, mon parcours relie infrastructure, simulation et recherche expérimentale.',
    journeySnuTitle: '2026–2027 · Deep Learning Lab, Seoul National University', journeySnuText: 'Parcours de double diplôme à SNU, au sein du Deep Learning Lab du département de génie naval et océanique. Mes intérêts de recherche portent sur la cybersécurité avec l’apprentissage automatique, l’optimisation des architectures LLM et deep learning, et la mise en œuvre sur matériel et en périphérie.', labLink: 'Découvrir le laboratoire',
    journeyNowTitle: 'Recherche actuelle · navigation maritime', journeyNowText: 'Un banc d’essai reliant un modèle de manœuvre de navire, l’évitement de collisions et des attaques sur la chaîne de données NMEA/AIS. La question : quand une réponse automatique à une alarme sur les données de navigation rend-elle le navire plus sûr, et quand le met-elle en danger ?',
    journeyInternshipTitle: '2025 · stage en administration systèmes et réseaux', journeyInternshipText: 'À la Caisse de Prévoyance Sociale de Papeete : segmentation du réseau du front office, migration d’équipements, configuration de serveurs et supervision réseau.',
    journeyAcademicTitle: '2025 · projets académiques', journeyAcademicText: 'Développement d’une carte Ethernet sur FPGA et étude de l’accélération matérielle d’un chiffrement post-quantique à l’INSA Toulouse.',
    journeyExchangeTitle: '2023–2024 · échange universitaire', journeyExchangeText: 'Semestre d’échange à l’Université Laval, à Québec.',
    journeyEducationTitle: 'Diplôme en cours · INSA Toulouse', journeyEducationText: 'Diplôme d’ingénieur en informatique et réseaux en cours, spécialité cybersécurité orientée réseau.',
    skillsTitle: 'Compétences',
    interestsTitle: 'Intérêts', interestAI: 'Modèles de langage et optimisation des architectures IA', interestRobotics: 'Robotique et simulation',
    interestSecurity: 'Cybersécurité et apprentissage automatique', interestResearch: 'Co-conception algorithmes et matériel, calcul en périphérie',
    feedbackTitle: 'Commentaires', feedbackIntro: 'Lis les commentaires ci-dessous et ajoute le tien avec un compte GitHub. Les messages sont publics ; évite les informations personnelles ou confidentielles.',
    feedbackLabel: 'Commentaires GitHub', feedbackFallback: 'Si ton navigateur bloque le panneau, tu peux lire et publier dans le même fil sur GitHub :', feedbackFallbackLink: 'Ouvrir les commentaires sur GitHub',
    footer: 'Site statique · Français / English',
    unavailable: 'À renseigner', titleHome: 'Gabriel Lanoux · Simulation, systèmes d’IA, robotique', titleProjects: 'Gabriel Lanoux · Projets', titleAbout: 'Gabriel Lanoux · Parcours et compétences', titleBlog: 'Gabriel Lanoux · Blog', titleContact: 'Gabriel Lanoux · Contact',
    skillsIntro: 'Regroupées selon ce que mes projets utilisent, en commençant par ce qu’ils montrent.',
    skGroupSim: 'Simulation et robotique',
    skSim1: 'Isaac Sim, Gazebo, PX4 (software in the loop)',
    skSim2: 'Modèles de manœuvre de navire (MMG)',
    skSim3: 'Évitement de collision (SB-MPC)',
    skGroupAI: 'IA / ML',
    skAI1: 'Apprentissage par renforcement en simulation (Stable-Baselines3)',
    skAI2: 'Inférence de LLM en local (Ollama)',
    skGroupSys: 'Systèmes et réseaux',
    skSys1: 'Linux, serveur GPU partagé (Docker, Slurm)',
    skSys2: 'TCP/IP, routage, segmentation réseau',
    skSys3: 'Supervision réseau, migration d’équipements',
    skGroupSec: 'Sécurité',
    skSec1: 'Analyse réseau (Wireshark), pare-feux',
    skSec2: 'Détection d’intrusion',
    skSec3: 'Surfaces d’attaque NMEA/AIS',
    skGroupLang: 'Langages',
    skLang1: 'Python',
    skLang2: 'C/C++',
    skLang3: 'VHDL',
    skLang4: 'SQL',
    skLang5: 'Java'
  },
  en: {
    skip: 'Skip to content', navLabel: 'Main navigation', languageLabel: 'Language',
    navProjects: 'Projects', navAbout: 'About', navBlog: 'Blog', navContact: 'Contact',
    portraitAlt: 'Portrait of Gabriel Lanoux',
    blogTitle: 'Blog', blogIntro: 'Notes and photos from conferences and events.',
    icmlDate: '6 July 2026', icmlPlace: 'COEX, Seoul', icmlTitle: 'ICML 2026 in Seoul',
    icmlText: 'First day of ICML 2026, the International Conference on Machine Learning, held at COEX in Seoul from 6 to 11 July. The same day I attended the Trustworthy & Responsible Agentic AI Symposium.',
    icmlAlt1: 'Gabriel in front of the ICML 2026 welcome sign at COEX, Seoul', icmlCap1: 'The ICML 2026 welcome sign at COEX.',
    icmlAlt2: 'Gabriel in the symposium room, in front of the Trustworthy & Responsible Agentic AI Symposium screen', icmlCap2: 'Trustworthy & Responsible Agentic AI Symposium.',
    featuredTitle: 'Featured projects', featuredIntro: 'Three interactive reports, one for each side of my work: ship navigation, learning robots and autonomous flight.', allProjects: 'All six projects →',
    aboutTitle: 'Journey and skills',
    contactEmail: 'Email', contactTitle: 'Contact',
    contactPageIntro: 'A question about a project, an internship or a position? Write to me directly, or leave a public comment below.',
    contactEmailDesc: 'Best for anything private: internships, positions, collaborations.',
    contactGithubDesc: 'Code and the source of this site.',
    contactLinkedinDesc: 'Background and professional messages.',
    eyebrow: 'Simulation · AI systems · Robotics', introTitle: 'Hello, I’m Gabriel Lanoux.',
    introLead: 'I build and run complex systems — ship simulations, learning robots, GPU compute — and I know how to secure them.',
    introBody: 'I am a dual-degree student in computer science and networks between INSA Toulouse and Seoul National University; my engineering degree is in progress. At SNU’s Deep Learning Lab, my thesis builds a ship-navigation testbed that measures what attacks on navigation data, and the automatic responses to them, actually do to the ship.',
    explore: 'Explore projects',
    factsLabel: 'At a glance', factNowLabel: 'Now', factNow: 'Deep Learning Lab, Seoul National University',
    factThesisLabel: 'Thesis', factThesis: 'Cyber-physical ship navigation testbed',
    factSchoolLabel: 'Degree', factSchool: 'INSA Toulouse · computer science and networks (in progress)',
    factLangLabel: 'Languages', factLang: 'French (native) · English (fluent)',
    projectsTitle: 'Projects',
    projectsIntro: 'Each page is an interactive report from a real project: simulations, trained policies and flight logs replayed in the browser. Vessel identifiers in AIS data are pseudonymised.',
    kvTag: 'Thesis · ship navigation',
    kvText: 'The ship side of my thesis testbed: an MMG manoeuvring model of the KVLCC2 tanker in a rough sea, with SB-MPC collision avoidance on three COLREG encounters. Turn avoidance on and off and watch the closest point of approach.',
    heavy10: '3D · about 10 MB', heavy9: '3D · about 9 MB',
    tsTag: 'Isaac Sim · hydrodynamics',
    tsText: 'A 240 m tanker responding to an irregular sea, computed with a physics model validated against closed-form naval architecture and replayed as a live 3D scene.',
    chTag: 'AIS × metocean · data analysis', chTitle: 'Ships and sea state in the English Channel',
    chText: 'Term project at SNU: how wind, waves and currents relate to the speed of cargo ships and tankers. A full day of AIS traffic replayed over the wave field: ships heading into the waves slow down, ships running with them do not.',
    chStorm: 'Storm day · 2 Aug 2023', chCalm: 'Calm day · 16 Aug 2023',
    srTag: 'Digital twin',
    srText: 'What does it take to twin a ship? A simulated ferry built from scratch: synced telemetry, a fuel and hull-fouling model, and the log of what held up when checked against a real vessel’s data.',
    qdTag: 'Reinforcement learning · robotics', qdTitle: 'Quadruped locomotion',
    qdText: 'Locomotion policies for a quadruped, trained from scratch in simulation: a first full course with a mound climbed in under 6 seconds, and waypoint navigation that succeeds on 15 out of 15 fresh seeds.',
    qdMound: 'Mound course', qdWaypoints: 'Waypoint navigation',
    ggTag: 'PX4 · autonomous drone',
    ggText: 'An autonomous quadrotor in simulation: a Python guidance layer plans smooth trajectories, PX4 flies them and Gazebo supplies physics and wind. Every trace is replayed from a real PX4 flight log.',
    journeyTitle: 'My journey',
    journeyIntro: 'From network cybersecurity to physical systems and AI, my path connects infrastructure, simulation, and experimental research.',
    journeySnuTitle: '2026–2027 · Deep Learning Lab, Seoul National University', journeySnuText: 'Dual-degree studies at SNU in the Deep Learning Lab of the Department of Naval Architecture and Ocean Engineering. My research interests include cybersecurity with machine learning, LLM and deep learning architecture optimization, and implementation on hardware and edge devices.', labLink: 'Explore the lab',
    journeyNowTitle: 'Current research · maritime navigation', journeyNowText: 'A testbed linking a ship manoeuvring model, collision avoidance and attacks on the NMEA/AIS data path. The question: when does an automatic response to a navigation-data alarm make the ship safer, and when does it put it at risk?',
    journeyInternshipTitle: '2025 · network and system administration internship', journeyInternshipText: 'At Caisse de Prévoyance Sociale in Papeete: segmentation of the front-office network, equipment migration, server configuration, and network monitoring.',
    journeyAcademicTitle: '2025 · academic projects', journeyAcademicText: 'Development of an FPGA Ethernet card and a study of hardware acceleration for post-quantum cryptography at INSA Toulouse.',
    journeyExchangeTitle: '2023–2024 · university exchange', journeyExchangeText: 'Exchange semester at Université Laval in Québec City.',
    journeyEducationTitle: 'Degree in progress · INSA Toulouse', journeyEducationText: 'Engineering degree in computer science and networks in progress, specializing in network cybersecurity.',
    skillsTitle: 'Skills',
    interestsTitle: 'Interests', interestAI: 'Language models and AI architecture optimization', interestRobotics: 'Robotics and simulation',
    interestSecurity: 'Cybersecurity and machine learning', interestResearch: 'Algorithm–hardware co-design and edge computing',
    feedbackTitle: 'Comments', feedbackIntro: 'Read the comments below and add yours with a GitHub account. Messages are public; avoid personal or confidential information.',
    feedbackLabel: 'GitHub comments', feedbackFallback: 'If the comment panel is blocked by your browser, you can still read and post in the same thread on GitHub:', feedbackFallbackLink: 'Open comments on GitHub',
    footer: 'Static site · English / Français',
    unavailable: 'To add', titleHome: 'Gabriel Lanoux · Simulation, AI systems, robotics', titleProjects: 'Gabriel Lanoux · Projects', titleAbout: 'Gabriel Lanoux · Journey and skills', titleBlog: 'Gabriel Lanoux · Blog', titleContact: 'Gabriel Lanoux · Contact',
    skillsIntro: 'Grouped by what my projects use, starting with what they show.',
    skGroupSim: 'Simulation & robotics',
    skSim1: 'Isaac Sim, Gazebo, PX4 (software in the loop)',
    skSim2: 'Ship manoeuvring models (MMG)',
    skSim3: 'Collision avoidance (SB-MPC)',
    skGroupAI: 'AI / ML',
    skAI1: 'Reinforcement learning in simulation (Stable-Baselines3)',
    skAI2: 'Local LLM inference (Ollama)',
    skGroupSys: 'Systems & networks',
    skSys1: 'Linux, shared GPU server (Docker, Slurm)',
    skSys2: 'TCP/IP, routing, network segmentation',
    skSys3: 'Network monitoring, equipment migration',
    skGroupSec: 'Security',
    skSec1: 'Network analysis (Wireshark), firewalls',
    skSec2: 'Intrusion detection',
    skSec3: 'NMEA/AIS attack surfaces',
    skGroupLang: 'Languages',
    skLang1: 'Python',
    skLang2: 'C/C++',
    skLang3: 'VHDL',
    skLang4: 'SQL',
    skLang5: 'Java'
  }
};

const page = document.body.dataset.page;
// The site used to be a single page. Old links to its sections go to the new pages.
const OLD_ANCHORS = {
  '#projects': '/projects/', '#projets': '/projects/',
  '#parcours': '/about/', '#competences': '/about/#competences', '#interets': '/about/#interets',
  '#commentaires': '/contact/#commentaires'
};
if (page === 'home' && OLD_ANCHORS[location.hash]) location.replace(OLD_ANCHORS[location.hash]);
let lang = 'en';
try { if (localStorage.getItem('portfolio-lang') === 'fr') lang = 'fr'; } catch (e) { /* storage unavailable */ }

function renderContacts(t) {
  for (const kind of ['email', 'github', 'linkedin']) {
    const target = document.querySelector(`[data-contact="${kind}"]`);
    if (!target) continue;
    const value = PUBLIC_CONTACTS[kind];
    target.replaceChildren();
    if (!value) { target.textContent = t.unavailable; continue; }
    const link = document.createElement('a');
    link.href = kind === 'email' ? `mailto:${value}` : value;
    link.textContent = kind === 'email' ? value : value.replace(/^https:\/\/(www\.)?/, '').replace(/\/$/, '');
    if (kind !== 'email') { link.target = '_blank'; link.rel = 'noopener noreferrer'; }
    target.append(link);
  }
}

function render() {
  const t = translations[lang];
  document.documentElement.lang = lang;
  document.title = t['title' + page[0].toUpperCase() + page.slice(1)];
  document.querySelectorAll('[data-i18n]').forEach(el => { if (t[el.dataset.i18n]) el.textContent = t[el.dataset.i18n]; });
  document.querySelectorAll('[data-i18n-alt]').forEach(el => { if (t[el.dataset.i18nAlt]) el.alt = t[el.dataset.i18nAlt]; });
  document.querySelectorAll('[data-i18n-aria]').forEach(el => { if (t[el.dataset.i18nAria]) el.setAttribute('aria-label', t[el.dataset.i18nAria]); });
  const selector = document.querySelector('[data-language-select]');
  selector.value = lang;
  selector.setAttribute('aria-label', t.languageLabel);
  renderContacts(t);
  const frame = document.querySelector('iframe.giscus-frame');
  frame?.contentWindow?.postMessage({ giscus: { setConfig: { lang } } }, 'https://giscus.app');
}

function initComments() {
  if (page !== 'contact') return;
  const script = document.createElement('script');
  script.src = 'https://giscus.app/client.js';
  script.async = true;
  script.crossOrigin = 'anonymous';
  Object.assign(script.dataset, {
    repo: 'glanoux-research/glanoux-research.github.io',
    repoId: 'R_kgDOV0DCpQ',
    category: 'Announcements',
    categoryId: 'DIC_kwDOV0DCpc4DLe1u',
    mapping: 'number',
    term: '1',
    strict: '1',
    reactionsEnabled: '0',
    emitMetadata: '0',
    inputPosition: 'top',
    theme: 'preferred_color_scheme',
    lang
  });
  document.getElementById('comments-widget').append(script);
}


document.querySelector('[data-language-select]').addEventListener('change', (event) => {
  lang = event.target.value === 'fr' ? 'fr' : 'en';
  try { localStorage.setItem('portfolio-lang', lang); } catch (e) { /* storage unavailable */ }
  render();
});
render();
initComments();
