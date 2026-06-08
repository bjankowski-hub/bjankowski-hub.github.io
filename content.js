const CONTENT = {
  fr: {
    meta: { title: "Bartosz Jankowski — Portfolio", lang: "fr" },
    nav: { about: "À propos", project: "Projet", contact: "Contact" },
    hero: {
      school: "MBA IA & Data Innovation · De Vinci Executive Education",
      title: "Du product management à l'IA",
      intro1: "Après 13 ans en marketing produits B2B dans diverses industries, j'ai décidé de prendre un vrai tournant : mettre l'IA et la data au cœur de ma pratique professionnelle. Pourquoi maintenant ? Parce que l'IA transforme en profondeur les métiers, la stratégie et le management. Alors autant être acteur de cette transformation, pas spectateur.",
      intro2: "C'est pour cette raison que je prépare un MBA IA & Data Innovation (RNCP Niveau 7) à De Vinci Executive Education. Ma thèse-projet est déployée sur terrain industriel réel et je la construis comme un vrai projet d'accompagnement, de la définition du besoin à l'implémentation, jusqu'à la conduite du changement.",
      btnProject: "Voir mon projet",
      btnCVfr: "CV Français ↓",
      btnCVen: "CV English ↓"
    },
    project: {
      tag: "Projet de Thèse",
      name: "SCOPE",
      fullName: "Smart Catalogue & Optimised Pricing Engine",
      subtitle: "Système IA de cross-référencement de catalogue et de recommandation pricing multi-scénarios pour l'aftermarket automobile",
      status: "POC en développement",
      contextTitle: "Contexte",
      context: "Cette étude s'inscrit dans une démarche d'accompagnement terrain, menée auprès d'un acteur majeur de l'aftermarket automobile mondial. Elle s'articule autour de quatre axes : identifier les pain points des équipes pricing face à la gestion opérationnelle de larges catalogues de références ; définir un cadre de gouvernance de la donnée structuré et conforme aux exigences légales en vigueur ; concevoir et implémenter une solution IA répondant aux besoins identifiés ; et évaluer l'impact organisationnel sur les métiers concernés en proposant un plan d'accompagnement au changement.",
      problemTitle: "Problématique",
      problem: "Dans quelle mesure l'IA peut-elle, en s'appuyant sur une gouvernance de la donnée structurée et conforme aux exigences légales, automatiser l'identification des alternatives concurrentes, optimiser les stratégies de pricing et quel impact mesurable cette combinaison génère-t-elle sur la performance opérationnelle et la compétitivité prix ?",
      archTitle: "Architecture de l'étude",
      bricks: [
        {
          num: "01", name: "Gouvernance des Données", tag: "Socle", type: "cadre", statusLabel: "Architecturé",
          desc: "Normalisation des données, conformité RGPD, alignement EU AI Act, légalité des données concurrentielles (Art. 101 TFUE). Prérequis non-IA : condition sine qua non pour que B2 et B3 produisent des résultats fiables et juridiquement défendables."
        },
        {
          num: "02", name: "Cross-référencement IA", tag: "Contribution #1", type: "poc", statusLabel: "POC en cours",
          desc: "Réconciliation interne et identification des alternatives concurrentes par référence. Matching structuré complété par NLP et embeddings sémantiques en fallback."
        },
        {
          num: "03", name: "Moteur Pricing Multi-Scénarios", tag: "Contribution #2", type: "poc", statusLabel: "POC en cours",
          desc: "Trois recommandations simultanées : règles métier via RAG, plancher de marge brute, modèle d'élasticité-prix construit sur données historiques. Régression log-log sur 12 mois glissant, avec indicateur de fiabilité par référence. Objectif : raccourcir le temps d'analyse et optimiser la prise de décision."
        },
        {
          num: "04", name: "Interface Intégrée", tag: "Résultante", type: "todo", statusLabel: "À construire",
          desc: "Dashboard end-to-end avec validation humaine obligatoire. Interface conçue pour les non-data ; aucune expertise ML requise."
        }
      ]
    },
    skills: {
      title: "Compétences",
      cols: [
        {
          heading: "Produit & Business",
          groups: [
            {
              label: "Pilotage produit",
              items: ["Cycle de vie produit B2B", "Roadmap & priorisation", "Rédaction de spécifications produit", "Coordination transverse R&D / Marketing / Commerce", "Pilotage de projets d'innovation B2B"]
            },
            {
              label: "Analyse & Marché",
              items: ["Analyse de marché & qualification du besoin", "Études qualitatives & quantitatives", "Focus groupes & insights utilisateurs"]
            },
            {
              label: "Business & ROI",
              items: ["Positionnement prix & rentabilité", "Business case & construction de KPIs", "Gestion de P&L", "Alignement parties prenantes multi-niveaux"]
            }
          ]
        },
        {
          heading: "IA & Data",
          groups: [
            {
              label: "Architecture IA",
              items: ["Frameworks agentiques (LLM, RAG)", "LangGraph orchestration", "Human-in-the-loop design", "Machine learning & IA générative"]
            },
            {
              label: "Gouvernance & Conformité",
              items: ["EU AI Act compliance", "Gouvernance & éthique de l'IA", "Enjeux juridiques de la donnée"]
            },
            {
              label: "Outils & Développement",
              items: ["Claude / Anthropic API", "n8n workflow automation", "Prompt engineering", "Évangélisation produit IA auprès des métiers"]
            }
          ]
        }
      ]
    },
    contact: {
      title: "Travaillons ensemble.",
      closing: "Un projet IA à piloter, une opportunité à explorer ? Contactez-moi.",
      sub: "Disponible pour des opportunités AI/Data Product Manager.",
      btnEmail: "✉ M'écrire",
      btnLinkedin: "LinkedIn →"
    },
    footer: "© 2026 Bartosz Jankowski · Lyon, France"
  },

  en: {
    meta: { title: "Bartosz Jankowski — Portfolio", lang: "en" },
    nav: { about: "About", project: "Project", contact: "Contact" },
    hero: {
      school: "MBA AI & Data Innovation · De Vinci Executive Education",
      title: "From product management to AI",
      intro1: "After 13 years in B2B product marketing across various industries, I decided to make a real pivot: putting AI and data at the heart of my professional practice. Why now? Because AI is profoundly transforming business functions, strategy and management. Better to be an actor in this transformation than a spectator.",
      intro2: "That is why I am completing an MBA in AI & Data Innovation at De Vinci Executive Education. My thesis project is deployed on real industrial terrain and I am building it as a genuine consulting engagement, from needs definition to implementation, through to change management.",
      btnProject: "View my project",
      btnCVfr: "CV Français ↓",
      btnCVen: "CV English ↓"
    },
    project: {
      tag: "Thesis Project",
      name: "SCOPE",
      fullName: "Smart Catalogue & Optimised Pricing Engine",
      subtitle: "AI-powered catalogue cross-referencing and multi-scenario pricing recommendation system for the automotive aftermarket",
      status: "POC in development",
      contextTitle: "Context",
      context: "This study is part of a field consulting engagement conducted with a major global automotive aftermarket actor. It is structured around four axes: identifying pain points of pricing teams in managing large product reference catalogues; defining a data governance framework that is structured and legally compliant; designing and implementing an AI solution that addresses the identified needs; and assessing the organisational impact on affected business functions with a change management plan.",
      problemTitle: "Research Question",
      problem: "To what extent can AI, supported by structured and legally compliant data governance, automate the identification of competitive alternatives and optimise pricing strategies — and what measurable impact does this combination generate on operational performance and price competitiveness?",
      archTitle: "Study Architecture",
      bricks: [
        {
          num: "01", name: "Data Governance", tag: "Foundation", type: "cadre", statusLabel: "Architected",
          desc: "Data normalization, GDPR compliance, EU AI Act alignment, competitive data legality (Art. 101 TFUE). Non-AI prerequisite: necessary condition for B2 and B3 to produce reliable, legally defensible outputs."
        },
        {
          num: "02", name: "AI Cross-Referencing", tag: "Contribution #1", type: "poc", statusLabel: "POC in progress",
          desc: "Internal reconciliation and identification of competitive alternatives by reference. Structured matching complemented by NLP and semantic embeddings as fallback."
        },
        {
          num: "03", name: "Multi-Scenario Pricing Engine", tag: "Contribution #2", type: "poc", statusLabel: "POC in progress",
          desc: "Three simultaneous recommendations: business rules via RAG, gross margin floor, price-elasticity model on historical data. Log-log regression on a 12-month rolling window, with a reliability indicator per reference. Goal: reduce analysis time and optimise decision-making."
        },
        {
          num: "04", name: "Integrated Interface", tag: "Resultant", type: "todo", statusLabel: "To build",
          desc: "End-to-end dashboard with mandatory human validation. Interface designed for non-data profiles; no ML expertise required."
        }
      ]
    },
    skills: {
      title: "Skills",
      cols: [
        {
          heading: "Product & Business",
          groups: [
            {
              label: "Product management",
              items: ["B2B product lifecycle management", "Roadmap & prioritisation", "Product specification writing", "Cross-functional coordination R&D / Marketing / Sales", "B2B innovation project management"]
            },
            {
              label: "Market & Analysis",
              items: ["Market analysis & needs qualification", "Qualitative & quantitative research", "Focus groups & user insights"]
            },
            {
              label: "Business & ROI",
              items: ["Pricing positioning & profitability", "Business case & KPI construction", "P&L management", "Multi-level stakeholder alignment"]
            }
          ]
        },
        {
          heading: "AI & Data",
          groups: [
            {
              label: "AI Architecture",
              items: ["Agentic frameworks (LLM, RAG)", "LangGraph orchestration", "Human-in-the-loop design", "Machine learning & generative AI"]
            },
            {
              label: "Governance & Compliance",
              items: ["EU AI Act compliance", "AI governance & ethics", "Data legal framework"]
            },
            {
              label: "Tools & Development",
              items: ["Claude / Anthropic API", "n8n workflow automation", "Prompt engineering", "AI product evangelism (tech → business)"]
            }
          ]
        }
      ]
    },
    contact: {
      title: "Let's work together.",
      closing: "An AI project to lead, an opportunity to explore? Contact me.",
      sub: "Available for AI/Data Product Manager opportunities.",
      btnEmail: "✉ Get in touch",
      btnLinkedin: "LinkedIn →"
    },
    footer: "© 2026 Bartosz Jankowski · Lyon, France"
  },

  pl: {
    meta: { title: "Bartosz Jankowski — Portfolio", lang: "pl" },
    nav: { about: "O mnie", project: "Projekt", contact: "Kontakt" },
    hero: {
      school: "MBA AI & Innowacje Danych · De Vinci Executive Education",
      title: "Od product managementu do AI",
      intro1: "Po 13 latach w marketingu produktowym B2B w różnych branżach, zdecydowałem się na prawdziwy zwrot: umieszczenie AI i danych w centrum mojej praktyki zawodowej. Dlaczego teraz? Ponieważ AI głęboko transformuje zawody, strategię i zarządzanie. Lepiej być aktorem tej transformacji niż widzem.",
      intro2: "Właśnie dlatego realizuję MBA w zakresie AI & Innowacji Danych na De Vinci Executive Education. Mój projekt dyplomowy jest wdrażany na rzeczywistym terenie przemysłowym i buduję go jak prawdziwy projekt doradczy, od definicji potrzeb po wdrożenie i zarządzanie zmianą.",
      btnProject: "Zobacz mój projekt",
      btnCVfr: "CV Français ↓",
      btnCVen: "CV English ↓"
    },
    project: {
      tag: "Praca Dyplomowa",
      name: "SCOPE",
      fullName: "Smart Catalogue & Optimised Pricing Engine",
      subtitle: "System AI do cross-referencowania katalogów i wieloscenariuszowej rekomendacji cenowej w aftermarkecie motoryzacyjnym",
      status: "POC w trakcie",
      contextTitle: "Kontekst",
      context: "Niniejsze badanie jest częścią projektu doradczego przeprowadzonego z czołowym światowym aktorem aftermarketu motoryzacyjnego. Obejmuje cztery obszary: identyfikację pain pointów zespołów cenowych w zarządzaniu dużymi katalogami referencji; zdefiniowanie ram zarządzania danymi zgodnych z wymogami prawnymi; zaprojektowanie i wdrożenie rozwiązania AI odpowiadającego na zidentyfikowane potrzeby; oraz ocenę wpływu organizacyjnego z planem zarządzania zmianą.",
      problemTitle: "Pytanie Badawcze",
      problem: "W jakim stopniu AI, oparta na ustrukturyzowanym zarządzaniu danymi zgodnym z wymogami prawnymi, może zautomatyzować identyfikację alternatyw konkurencyjnych i zoptymalizować strategie cenowe — i jaki mierzalny wpływ ma ta kombinacja na efektywność operacyjną i konkurencyjność cenową?",
      archTitle: "Architektura badania",
      bricks: [
        {
          num: "01", name: "Zarządzanie Danymi", tag: "Fundament", type: "cadre", statusLabel: "Zaplanowane",
          desc: "Normalizacja danych, zgodność z RODO, EU AI Act, legalność danych konkurencyjnych (Art. 101 TFUE). Warunek konieczny: B2 i B3 mogą dostarczać wiarygodne i prawnie uzasadnione wyniki tylko na tej podstawie."
        },
        {
          num: "02", name: "Cross-Referencowanie AI", tag: "Wkład #1", type: "poc", statusLabel: "POC w toku",
          desc: "Wewnętrzna reconciliacja i identyfikacja alternatyw konkurencyjnych wg referencji. Dopasowanie strukturalne uzupełnione przez NLP i embeddingi semantyczne."
        },
        {
          num: "03", name: "Wieloscenariuszowy Silnik Cenowy", tag: "Wkład #2", type: "poc", statusLabel: "POC w toku",
          desc: "Trzy jednoczesne rekomendacje: reguły biznesowe przez RAG, próg marży brutto, model elastyczności cenowej na danych historycznych. Regresja log-log na 12-miesięcznym oknie kroczącym, z wskaźnikiem wiarygodności. Cel: skrócenie czasu analizy i optymalizacja decyzji."
        },
        {
          num: "04", name: "Zintegrowany Interfejs", tag: "Wypadkowa", type: "todo", statusLabel: "Do zbudowania",
          desc: "Kompleksowy dashboard z obowiązkową walidacją ludzką. Interfejs dla profili niezdatowych; nie wymaga wiedzy ML."
        }
      ]
    },
    skills: {
      title: "Kompetencje",
      cols: [
        {
          heading: "Produkt & Biznes",
          groups: [
            {
              label: "Zarządzanie produktem",
              items: ["Cykl życia produktu B2B", "Roadmapa i priorytety", "Pisanie specyfikacji produktu", "Koordynacja R&D / Marketing / Sprzedaż", "Zarządzanie projektami innowacyjnymi B2B"]
            },
            {
              label: "Rynek & Analiza",
              items: ["Analiza rynku i kwalifikacja potrzeb", "Badania jakościowe i ilościowe", "Grupy fokusowe i insights"]
            },
            {
              label: "Biznes & ROI",
              items: ["Pozycjonowanie cenowe i rentowność", "Business case i KPI", "Zarządzanie P&L", "Alignment wielopoziomowy"]
            }
          ]
        },
        {
          heading: "AI & Data",
          groups: [
            {
              label: "Architektura AI",
              items: ["Frameworki agentyczne (LLM, RAG)", "LangGraph orchestration", "Human-in-the-loop design", "Machine learning i generatywna AI"]
            },
            {
              label: "Governance & Zgodność",
              items: ["EU AI Act compliance", "Governance i etyka AI", "Ramy prawne danych"]
            },
            {
              label: "Narzędzia & Rozwój",
              items: ["Claude / Anthropic API", "n8n workflow automation", "Prompt engineering", "Ewangelizacja produktu AI"]
            }
          ]
        }
      ]
    },
    contact: {
      title: "Współpracujmy razem.",
      closing: "Projekt AI do poprowadzenia, okazja do omówienia? Skontaktuj się ze mną.",
      sub: "Dostępny na stanowiska AI/Data Product Manager.",
      btnEmail: "✉ Napisz do mnie",
      btnLinkedin: "LinkedIn →"
    },
    footer: "© 2026 Bartosz Jankowski · Lyon, Francja"
  }
};
