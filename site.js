// Renseigner uniquement les coordonnées que vous souhaitez rendre publiques.
const PUBLIC_CONTACTS = {
  email: 'lanoux@snu.ac.kr',
  github: 'https://github.com/glanoux-research',
  linkedin: 'https://www.linkedin.com/in/gabriel-lanoux-05a367228/'
};

const translations = {
  fr: {
    skip: 'Aller au contenu', navLabel: 'Navigation principale', languageLabel: 'Langue',
    navProjects: 'Projets', navJourney: 'Parcours', navSkills: 'Compétences', navFeedback: 'Commentaires', navContact: 'Contacts',
    contactIntro: 'Retrouve-moi sur ces canaux publics.', contactEmail: 'Email',
    eyebrow: 'Cybersécurité · Simulation · Recherche appliquée', introTitle: 'Bonjour, je suis Gabriel Lanoux.',
    introLead: 'Je poursuis un double diplôme en informatique et réseaux entre l’INSA Toulouse et Seoul National University. Mon diplôme d’ingénieur est en cours.',
    introBody: 'Au Deep Learning Lab de SNU, j’explore la rencontre entre cybersécurité, apprentissage automatique et optimisation des systèmes de calcul. Ma recherche actuelle porte sur un banc d’essai de navigation maritime : simulation d’un navire, évitement de collisions et effets d’attaques sur les données NMEA/AIS.',
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
    journeyNowTitle: 'Recherche actuelle · navigation maritime', journeyNowText: 'Banc d’essai associant un modèle de manœuvre de navire, l’évitement de collisions et l’étude d’attaques sur les données NMEA/AIS. L’objectif est de comparer les détecteurs d’intrusion à leurs effets sur la mission.',
    journeyInternshipTitle: '2025 · stage en cybersécurité réseau', journeyInternshipText: 'À la Caisse de Prévoyance Sociale de Papeete : segmentation du réseau du front office, migration d’équipements et configuration des serveurs associés.',
    journeyAcademicTitle: '2025 · projets académiques', journeyAcademicText: 'Développement d’une carte Ethernet sur FPGA et étude de l’accélération matérielle d’un chiffrement post-quantique à l’INSA Toulouse.',
    journeyExchangeTitle: '2023–2024 · échange universitaire', journeyExchangeText: 'Semestre d’échange à l’Université Laval, à Québec.',
    journeyEducationTitle: 'Diplôme en cours · INSA Toulouse', journeyEducationText: 'Diplôme d’ingénieur en informatique et réseaux en cours, spécialité cybersécurité orientée réseau.',
    skillsTitle: 'Compétences et langues', skillNetworks: 'Réseaux : TCP/IP, VPN, routage, DNS, segmentation',
    skillSecurity: 'Sécurité : pare-feux, chiffrement, analyse réseau', skillCode: 'Développement : Python, C/C++, Java, SQL',
    skillTools: 'Outils : Wireshark, Git, VHDL, LaTeX', skillLanguages: 'Français natif · anglais courant',
    interestsTitle: 'Mes intérêts', interestAI: 'Modèles de langage et optimisation des architectures IA', interestRobotics: 'Robotique et simulation',
    interestSecurity: 'Cybersécurité et apprentissage automatique', interestResearch: 'Co-conception algorithmes et matériel, calcul en périphérie',
    feedbackTitle: 'Commentaires', feedbackIntro: 'Lis les commentaires ci-dessous et ajoute le tien avec un compte GitHub. Les messages sont publics ; évite les informations personnelles ou confidentielles.',
    feedbackLabel: 'Commentaires GitHub', feedbackFallback: 'Si ton navigateur bloque le panneau, tu peux lire et publier dans le même fil sur GitHub :', feedbackFallbackLink: 'Ouvrir les commentaires sur GitHub',
    footer: 'Site statique · Français / English',
    unavailable: 'À renseigner', titleHome: 'Gabriel Lanoux · Parcours et projets'
  },
  en: {
    skip: 'Skip to content', navLabel: 'Main navigation', languageLabel: 'Language',
    navProjects: 'Projects', navJourney: 'Journey', navSkills: 'Skills', navFeedback: 'Comments', navContact: 'Contact',
    contactIntro: 'Find me on these public channels.', contactEmail: 'Email',
    eyebrow: 'Cybersecurity · Simulation · Applied research', introTitle: 'Hello, I’m Gabriel Lanoux.',
    introLead: 'I am pursuing a dual-degree program in computer science and networks between INSA Toulouse and Seoul National University. My engineering degree is still in progress.',
    introBody: 'At SNU’s Deep Learning Lab, I explore the intersection of cybersecurity, machine learning, and computing system optimization. My current research is a maritime navigation testbed: ship simulation, collision avoidance, and the effects of attacks on NMEA/AIS data.',
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
    journeyNowTitle: 'Current research · maritime navigation', journeyNowText: 'A testbed combining a ship manoeuvring model, collision avoidance, and attacks on NMEA/AIS data. The aim is to compare intrusion detectors through their effects on the mission.',
    journeyInternshipTitle: '2025 · network cybersecurity internship', journeyInternshipText: 'At Caisse de Prévoyance Sociale in Papeete: front office network segmentation, equipment migration, and configuration of associated servers.',
    journeyAcademicTitle: '2025 · academic projects', journeyAcademicText: 'Development of an FPGA Ethernet card and a study of hardware acceleration for post-quantum cryptography at INSA Toulouse.',
    journeyExchangeTitle: '2023–2024 · university exchange', journeyExchangeText: 'Exchange semester at Université Laval in Québec City.',
    journeyEducationTitle: 'Degree in progress · INSA Toulouse', journeyEducationText: 'Engineering degree in computer science and networks in progress, specializing in network cybersecurity.',
    skillsTitle: 'Skills and languages', skillNetworks: 'Networks: TCP/IP, VPN, routing, DNS, segmentation',
    skillSecurity: 'Security: firewalls, encryption, network analysis', skillCode: 'Development: Python, C/C++, Java, SQL',
    skillTools: 'Tools: Wireshark, Git, VHDL, LaTeX', skillLanguages: 'Native French · fluent English',
    interestsTitle: 'My interests', interestAI: 'Language models and AI architecture optimization', interestRobotics: 'Robotics and simulation',
    interestSecurity: 'Cybersecurity and machine learning', interestResearch: 'Algorithm–hardware co-design and edge computing',
    feedbackTitle: 'Comments', feedbackIntro: 'Read the comments below and add yours with a GitHub account. Messages are public; avoid personal or confidential information.',
    feedbackLabel: 'GitHub comments', feedbackFallback: 'If the comment panel is blocked by your browser, you can still read and post in the same thread on GitHub:', feedbackFallbackLink: 'Open comments on GitHub',
    footer: 'Static site · English / Français',
    unavailable: 'To add', titleHome: 'Gabriel Lanoux · Journey and projects'
  }
};

const page = document.body.dataset.page;
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
  document.querySelectorAll('[data-i18n-aria]').forEach(el => { if (t[el.dataset.i18nAria]) el.setAttribute('aria-label', t[el.dataset.i18nAria]); });
  const selector = document.querySelector('[data-language-select]');
  selector.value = lang;
  selector.setAttribute('aria-label', t.languageLabel);
  renderContacts(t);
  const frame = document.querySelector('iframe.giscus-frame');
  frame?.contentWindow?.postMessage({ giscus: { setConfig: { lang } } }, 'https://giscus.app');
}

function initComments() {
  if (page !== 'home') return;
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

// Close the contact menu when clicking elsewhere or pressing Escape.
document.addEventListener('click', (event) => {
  document.querySelectorAll('.nav-menu[open]').forEach(menu => { if (!menu.contains(event.target)) menu.open = false; });
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') document.querySelectorAll('.nav-menu[open]').forEach(menu => { menu.open = false; });
});

document.querySelector('[data-language-select]').addEventListener('change', (event) => {
  lang = event.target.value === 'fr' ? 'fr' : 'en';
  try { localStorage.setItem('portfolio-lang', lang); } catch (e) { /* storage unavailable */ }
  render();
});
render();
initComments();
