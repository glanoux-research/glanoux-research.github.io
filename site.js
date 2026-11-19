// Renseigner uniquement les coordonnées que vous souhaitez rendre publiques.
const PUBLIC_CONTACTS = { email: '', github: '', linkedin: '' };

const translations = {
  fr: {
    skip: 'Aller au contenu', brand: 'Portfolio', navLabel: 'Navigation principale',
    navJourney: 'Parcours', navInterests: 'Intérêts', navDemos: 'Démos', navContact: 'Contacts',
    contactIntro: 'Coordonnées publiques à renseigner avant publication.', contactEmail: 'Email',
    demoTwinShort: 'Jumeau numérique maritime', demoRagShort: 'Recherche documentaire RAG',
    demoRobotShort: 'Robotique', allProjects: 'Tous les projets',
    eyebrow: 'Portfolio personnel · première version', introTitle: 'Bonjour, je suis [Nom à renseigner].',
    introLead: 'Étudiant en master, je travaille à la rencontre de l’intelligence artificielle, des systèmes physiques et de la cybersécurité.',
    introBody: 'Mon travail actuel porte sur un banc d’essai cyberphysique pour la navigation maritime : simulation d’un navire, évitement de collisions et étude des effets d’attaques sur les données de navigation. J’explore aussi les modèles de langage, la robotique et la création d’outils utiles.',
    explore: 'Explorer les projets', journeyTitle: 'Mon parcours',
    journeyIntro: 'Cette section est une base éditoriale. Les établissements, dates, expériences et résultats précis seront ajoutés après validation.',
    journeyNowTitle: 'Recherche actuelle', journeyNowText: 'Banc d’essai de navigation maritime : modèle de manœuvre, évitement de collisions et sécurité du flux de données NMEA/AIS.',
    journeyProjectsTitle: 'Projets techniques', journeyProjectsText: 'Prototypes de jumeau numérique, recherche augmentée par récupération, robotique simulée et systèmes autour des LLM.',
    journeyNextTitle: 'À compléter', journeyNextText: 'Formation, expériences professionnelles, publications et dates clés.',
    interestsTitle: 'Mes intérêts', interestAI: 'IA appliquée et modèles de langage', interestRobotics: 'Robotique et simulation',
    interestSecurity: 'Cybersécurité des systèmes physiques', interestResearch: 'Recherche expérimentale et visualisation',
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
    unavailable: 'À renseigner', titleHome: 'Portfolio · Parcours et projets', titleTwin: 'Démo · Jumeau numérique maritime', titleRag: 'Démo · Recherche documentaire RAG', titleRobot: 'Démo · Robotique'
  },
  en: {
    skip: 'Skip to content', brand: 'Portfolio', navLabel: 'Main navigation',
    navJourney: 'Journey', navInterests: 'Interests', navDemos: 'Demos', navContact: 'Contact',
    contactIntro: 'Public contact details to be added before publication.', contactEmail: 'Email',
    demoTwinShort: 'Maritime digital twin', demoRagShort: 'RAG document search',
    demoRobotShort: 'Robotics', allProjects: 'All projects',
    eyebrow: 'Personal portfolio · first version', introTitle: 'Hello, I’m [Name to add].',
    introLead: 'I am a master’s student working at the intersection of artificial intelligence, physical systems, and cybersecurity.',
    introBody: 'My current work is a cyberphysical testbed for maritime navigation: ship simulation, collision avoidance, and the effects of attacks on navigation data. I also explore language models, robotics, and useful software tools.',
    explore: 'Explore projects', journeyTitle: 'My journey',
    journeyIntro: 'This section is an editorial starting point. Schools, dates, experience, and specific outcomes will be added after confirmation.',
    journeyNowTitle: 'Current research', journeyNowText: 'Maritime navigation testbed: manoeuvring model, collision avoidance, and security of the NMEA/AIS data path.',
    journeyProjectsTitle: 'Technical projects', journeyProjectsText: 'Prototypes in digital twins, retrieval augmented search, robot simulation, and LLM systems.',
    journeyNextTitle: 'To complete', journeyNextText: 'Education, professional experience, publications, and milestones.',
    interestsTitle: 'My interests', interestAI: 'Applied AI and language models', interestRobotics: 'Robotics and simulation',
    interestSecurity: 'Cybersecurity for physical systems', interestResearch: 'Experimental research and visualization',
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
    unavailable: 'To add', titleHome: 'Portfolio · Journey and projects', titleTwin: 'Demo · Maritime digital twin', titleRag: 'Demo · RAG document search', titleRobot: 'Demo · Robotics'
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
