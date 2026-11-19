// Renseigner uniquement les coordonnées que vous souhaitez rendre publiques.
const PUBLIC_CONTACTS = {
  email: 'lanoux@snu.ac.kr',
  github: 'https://github.com/glanoux-research',
  linkedin: 'https://www.linkedin.com/in/gabriel-lanoux-05a367228/'
};

const translations = {
  fr: {
    skip: 'Aller au contenu', brand: 'Portfolio', navLabel: 'Navigation principale',
    navJourney: 'Parcours', navInterests: 'Intérêts', navSkills: 'Compétences', navDemos: 'Démos', navContact: 'Contacts',
    contactIntro: 'Retrouve-moi sur ces canaux publics.', contactEmail: 'Email',
    demoTwinShort: 'Jumeau numérique maritime', demoRagShort: 'Recherche documentaire RAG',
    demoRobotShort: 'Robotique', allProjects: 'Tous les projets',
    eyebrow: 'Cybersécurité · Réseaux · Recherche appliquée', introTitle: 'Bonjour, je suis Gabriel Lanoux.',
    introLead: 'Je poursuis un double diplôme en informatique et réseaux entre l’INSA Toulouse et Seoul National University. Mon diplôme d’ingénieur est en cours.',
    introBody: 'Au Deep Learning Lab de SNU, j’explore la rencontre entre cybersécurité, apprentissage automatique et optimisation des systèmes de calcul. Ma recherche actuelle porte sur un banc d’essai de navigation maritime : simulation d’un navire, évitement de collisions et effets d’attaques sur les données NMEA/AIS.',
    explore: 'Explorer les projets', journeyTitle: 'Mon parcours',
    journeyIntro: 'De la cybersécurité des réseaux aux systèmes physiques et à l’IA, mon parcours relie infrastructure, simulation et recherche expérimentale.',
    journeySnuTitle: '2026–2027 · Deep Learning Lab, Seoul National University', journeySnuText: 'Parcours de double diplôme à SNU, au sein du Deep Learning Lab du département de génie naval et océanique. Mes intérêts de recherche portent sur la cybersécurité avec l’apprentissage automatique, l’optimisation des architectures LLM et deep learning, et la mise en œuvre sur matériel et en périphérie.', labLink: 'Découvrir le laboratoire',
    journeyNowTitle: 'Recherche actuelle · navigation maritime', journeyNowText: 'Banc d’essai associant un modèle de manœuvre de navire, l’évitement de collisions et l’étude d’attaques sur les données NMEA/AIS. L’objectif est de comparer les détecteurs d’intrusion à leurs effets sur la mission.',
    journeyInternshipTitle: '2025 · stage en cybersécurité réseau', journeyInternshipText: 'À la Caisse de Prévoyance Sociale de Papeete : segmentation du réseau du front office, migration d’équipements et configuration des serveurs associés.',
    journeyAcademicTitle: '2025 · projets académiques', journeyAcademicText: 'Développement d’une carte Ethernet sur FPGA et étude de l’accélération matérielle d’un chiffrement post-quantique à l’INSA Toulouse.',
    journeyExchangeTitle: '2023–2024 · échange universitaire', journeyExchangeText: 'Semestre d’échange à l’Université Laval, à Québec.',
    journeyEducationTitle: 'Diplôme en cours · INSA Toulouse', journeyEducationText: 'Diplôme d’ingénieur en informatique et réseaux en cours, spécialité cybersécurité orientée réseau.',
    interestsTitle: 'Mes intérêts', interestAI: 'Modèles de langage et optimisation des architectures IA', interestRobotics: 'Robotique et simulation',
    interestSecurity: 'Cybersécurité et apprentissage automatique', interestResearch: 'Co-conception algorithmes et matériel, calcul en périphérie',
    skillsTitle: 'Compétences et langues', skillNetworks: 'Réseaux : TCP/IP, VPN, routage, DNS, segmentation',
    skillSecurity: 'Sécurité : pare-feux, chiffrement, analyse réseau', skillCode: 'Développement : Python, C/C++, Java, SQL',
    skillTools: 'Outils : Wireshark, Git, VHDL, LaTeX', skillLanguages: 'Français natif · anglais courant',
    projectsTitle: 'Démos de projets', projectsIntro: 'Ces aperçus interactifs illustrent des idées présentes dans mes projets. Les calculs et données sont simplifiés pour le navigateur.',
    twinCard: 'Faire varier vitesse et état de coque pour observer une télémétrie simulée et une estimation illustrative de consommation.',
    ragCard: 'Suivre les étapes d’une recherche dans un petit corpus fictif et voir comment une réponse citerait ses sources.',
    robotCard: 'Explorer le déphasage d’une démarche en boucle ouverte sur une représentation simplifiée de robot.',
    openDemo: 'Ouvrir la démo', footer: 'Portfolio en cours de préparation · Français / English',
    backProjects: 'Retour aux projets', demoLabel: 'Aperçu interactif simplifié',
    twinIntro: 'Le projet local synchronise une simulation de navire avec un jumeau et présente une estimation de performance. Ici, modifiez deux paramètres pour comprendre le principe ; les nombres ne proviennent pas du modèle réel.',
    speed: 'Vitesse (nœuds)', fouling: 'Encrassement de coque (%)', twinNote: 'Illustration pédagogique : formule arbitraire, sans valeur de prédiction opérationnelle.',
    fuel: 'Indice de consommation simulé', vessel: 'État affiché', vesselText: 'Navire en route',
    ragIntro: 'Le prototype local extrait des documents juridiques coréens, indexe leurs passages et génère des réponses avec citations. Cette démo utilise un petit corpus fictif, sans modèle ni conseil juridique.',
    ragQuestion: 'Choisissez une question', ragOptionSources: 'Comment citer les sources ?', ragOptionUpdates: 'Comment suivre les mises à jour ?',
    ragNote: 'Corpus inventé pour expliquer la récupération et la citation. Aucun document juridique réel n’est chargé.',
    retrieved: 'Passage retrouvé', answer: 'Exemple de réponse', ragSourceA: 'Note fictive A : une réponse doit mentionner le document utilisé.',
    ragAnswerA: 'La réponse renvoie au document consulté [Note fictive A].', ragSourceB: 'Note fictive B : chaque nouvelle version reçoit une date.',
    ragAnswerB: 'Comparer les dates des versions permet de repérer les mises à jour [Note fictive B].',
    robotIntro: 'Le projet local explore la simulation et la commande d’un robot articulé. Déplacez la phase pour voir le décalage entre deux jambes dans un cycle abstrait ; ce schéma ne représente pas la dynamique réelle du robot.',
    phase: 'Phase du cycle (%)', robotNote: 'Schéma pédagogique en boucle ouverte ; aucune stabilité ou performance n’est revendiquée.',
    leftLeg: 'Jambe gauche', rightLeg: 'Jambe droite', forward: 'vers l’avant', backward: 'vers l’arrière', neutral: 'au centre',
    unavailable: 'À renseigner', titleHome: 'Gabriel Lanoux · Parcours et projets', titleTwin: 'Démo · Jumeau numérique maritime', titleRag: 'Démo · Recherche documentaire RAG', titleRobot: 'Démo · Robotique'
  },
  en: {
    skip: 'Skip to content', brand: 'Portfolio', navLabel: 'Main navigation',
    navJourney: 'Journey', navInterests: 'Interests', navSkills: 'Skills', navDemos: 'Demos', navContact: 'Contact',
    contactIntro: 'Find me on these public channels.', contactEmail: 'Email',
    demoTwinShort: 'Maritime digital twin', demoRagShort: 'RAG document search',
    demoRobotShort: 'Robotics', allProjects: 'All projects',
    eyebrow: 'Cybersecurity · Networks · Applied research', introTitle: 'Hello, I’m Gabriel Lanoux.',
    introLead: 'I am pursuing a dual-degree program in computer science and networks between INSA Toulouse and Seoul National University. My engineering degree is still in progress.',
    introBody: 'At SNU’s Deep Learning Lab, I explore the intersection of cybersecurity, machine learning, and computing system optimization. My current research is a maritime navigation testbed: ship simulation, collision avoidance, and the effects of attacks on NMEA/AIS data.',
    explore: 'Explore projects', journeyTitle: 'My journey',
    journeyIntro: 'From network cybersecurity to physical systems and AI, my path connects infrastructure, simulation, and experimental research.',
    journeySnuTitle: '2026–2027 · Deep Learning Lab, Seoul National University', journeySnuText: 'Dual-degree studies at SNU in the Deep Learning Lab of the Department of Naval Architecture and Ocean Engineering. My research interests include cybersecurity with machine learning, LLM and deep learning architecture optimization, and implementation on hardware and edge devices.', labLink: 'Explore the lab',
    journeyNowTitle: 'Current research · maritime navigation', journeyNowText: 'A testbed combining a ship manoeuvring model, collision avoidance, and attacks on NMEA/AIS data. The aim is to compare intrusion detectors through their effects on the mission.',
    journeyInternshipTitle: '2025 · network cybersecurity internship', journeyInternshipText: 'At Caisse de Prévoyance Sociale in Papeete: front office network segmentation, equipment migration, and configuration of associated servers.',
    journeyAcademicTitle: '2025 · academic projects', journeyAcademicText: 'Development of an FPGA Ethernet card and a study of hardware acceleration for post-quantum cryptography at INSA Toulouse.',
    journeyExchangeTitle: '2023–2024 · university exchange', journeyExchangeText: 'Exchange semester at Université Laval in Québec City.',
    journeyEducationTitle: 'Degree in progress · INSA Toulouse', journeyEducationText: 'Engineering degree in computer science and networks in progress, specializing in network cybersecurity.',
    interestsTitle: 'My interests', interestAI: 'Language models and AI architecture optimization', interestRobotics: 'Robotics and simulation',
    interestSecurity: 'Cybersecurity and machine learning', interestResearch: 'Algorithm–hardware co-design and edge computing',
    skillsTitle: 'Skills and languages', skillNetworks: 'Networks: TCP/IP, VPN, routing, DNS, segmentation',
    skillSecurity: 'Security: firewalls, encryption, network analysis', skillCode: 'Development: Python, C/C++, Java, SQL',
    skillTools: 'Tools: Wireshark, Git, VHDL, LaTeX', skillLanguages: 'Native French · fluent English',
    projectsTitle: 'Project demos', projectsIntro: 'These interactive previews illustrate ideas from my projects. Calculations and data are simplified for the browser.',
    twinCard: 'Change speed and hull condition to see simulated telemetry and an illustrative fuel estimate.',
    ragCard: 'Follow a search in a small fictional corpus and see how an answer could cite its sources.',
    robotCard: 'Explore phase offsets in an open loop gait using a simplified robot representation.',
    openDemo: 'Open demo', footer: 'Portfolio in preparation · Français / English',
    backProjects: 'Back to projects', demoLabel: 'Simplified interactive preview',
    twinIntro: 'The local project synchronizes a ship simulation with a digital twin and displays a performance estimate. Change two parameters to understand the idea; these numbers do not come from the actual model.',
    speed: 'Speed (knots)', fouling: 'Hull fouling (%)', twinNote: 'Educational illustration: arbitrary formula with no operational predictive value.',
    fuel: 'Simulated fuel index', vessel: 'Displayed state', vesselText: 'Vessel underway',
    ragIntro: 'The local prototype extracts Korean legal documents, indexes passages, and generates cited answers. This demo uses a tiny fictional corpus, with no model and no legal advice.',
    ragQuestion: 'Choose a question', ragOptionSources: 'How are sources cited?', ragOptionUpdates: 'How are updates tracked?',
    ragNote: 'Fictional corpus explaining retrieval and citation. No real legal documents are loaded.',
    retrieved: 'Retrieved passage', answer: 'Sample answer', ragSourceA: 'Fictional note A: an answer should identify the document used.',
    ragAnswerA: 'The answer refers back to the document consulted [Fictional note A].', ragSourceB: 'Fictional note B: each new version has a date.',
    ragAnswerB: 'Comparing version dates helps identify updates [Fictional note B].',
    robotIntro: 'The local project explores simulation and control of an articulated robot. Move the phase to see the offset between two legs in an abstract cycle; this diagram does not model the robot’s real dynamics.',
    phase: 'Cycle phase (%)', robotNote: 'Open loop educational diagram; no claim of stability or performance.',
    leftLeg: 'Left leg', rightLeg: 'Right leg', forward: 'forward', backward: 'backward', neutral: 'centered',
    unavailable: 'To add', titleHome: 'Gabriel Lanoux · Journey and projects', titleTwin: 'Demo · Maritime digital twin', titleRag: 'Demo · RAG document search', titleRobot: 'Demo · Robotics'
  }
};

const page = document.body.dataset.page;
let lang = localStorage.getItem('portfolio-lang') === 'en' ? 'en' : 'fr';

function setText(selector, value) {
  const element = document.querySelector(selector);
  if (element) element.textContent = value;
}

function renderContacts(t) {
  for (const kind of ['email', 'github', 'linkedin']) {
    const target = document.querySelector(`[data-contact="${kind}"]`);
    if (!target) continue;
    const value = PUBLIC_CONTACTS[kind];
    target.replaceChildren();
    if (!value) { target.textContent = t.unavailable; continue; }
    const link = document.createElement('a');
    link.href = kind === 'email' ? `mailto:${value}` : value;
    link.textContent = value;
    if (kind !== 'email') { link.target = '_blank'; link.rel = 'noopener noreferrer'; }
    target.append(link);
  }
}

function renderTwin(t) {
  const speed = document.getElementById('speed');
  const fouling = document.getElementById('fouling');
  if (!speed || !fouling) return;
  setText('#speed-value', speed.value);
  setText('#fouling-value', fouling.value);
  const index = ((Number(speed.value) / 12) ** 3 * (1 + Number(fouling.value) / 100)).toFixed(2);
  document.getElementById('twin-output').innerHTML = `<dl><dt>${t.vessel}</dt><dd>${t.vesselText}</dd><dt>${t.speed}</dt><dd>${speed.value}</dd><dt>${t.fuel}</dt><dd>${index}</dd></dl>`;
}

function renderRag(t) {
  const select = document.getElementById('rag-select');
  if (!select) return;
  const a = select.value === 'sources';
  document.getElementById('rag-output').innerHTML = `<p><strong>${t.retrieved}</strong><br>${a ? t.ragSourceA : t.ragSourceB}</p><p><strong>${t.answer}</strong><br>${a ? t.ragAnswerA : t.ragAnswerB}</p>`;
}

function renderRobot(t) {
  const phase = document.getElementById('phase');
  if (!phase) return;
  setText('#phase-value', phase.value);
  const motion = (angle) => {
    const value = Math.sin(angle);
    return Math.abs(value) < .15 ? t.neutral : value > 0 ? t.forward : t.backward;
  };
  const angle = Number(phase.value) / 100 * Math.PI * 2;
  document.getElementById('robot-output').innerHTML = `<dl><dt>${t.leftLeg}</dt><dd>${motion(angle)}</dd><dt>${t.rightLeg}</dt><dd>${motion(angle + Math.PI)}</dd></dl>`;
}

function render() {
  const t = translations[lang];
  document.documentElement.lang = lang;
  document.title = t['title' + page[0].toUpperCase() + page.slice(1)];
  document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = t[el.dataset.i18n]; });
  document.querySelectorAll('[data-i18n-aria]').forEach(el => { el.setAttribute('aria-label', t[el.dataset.i18nAria]); });
  const button = document.querySelector('[data-lang-toggle]');
  button.textContent = lang === 'fr' ? 'EN' : 'FR';
  button.setAttribute('aria-label', lang === 'fr' ? 'Switch to English' : 'Passer en français');
  renderContacts(t);
  renderTwin(t);
  renderRag(t);
  renderRobot(t);
}

document.querySelector('[data-lang-toggle]').addEventListener('click', () => {
  lang = lang === 'fr' ? 'en' : 'fr';
  localStorage.setItem('portfolio-lang', lang);
  render();
});
for (const id of ['speed', 'fouling', 'phase', 'rag-select']) {
  document.getElementById(id)?.addEventListener('input', render);
}
render();
