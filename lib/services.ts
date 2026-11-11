export const services = {
  "developpement-web": {
    fr: {
      title: "Développement web sur mesure",
      description:
        "Création de sites vitrines, applications web et plateformes SaaS avec React et Next.js. Une développeuse freelance de la conception au déploiement.",
      intro:
        "Votre site doit présenter votre activité clairement et permettre à vos visiteurs de passer à l’action. Une application web doit aussi rester rapide, accessible et simple à faire évoluer.",
      sections: [
        [
          "Un site adapté à votre activité",
          "Site vitrine, espace client, tableau de bord ou plateforme SaaS : nous définissons les parcours utiles avant de choisir les technologies. React, Next.js et TypeScript permettent de construire une interface cohérente avec vos besoins.",
        ],
        [
          "Performance et référencement dès la conception",
          "Structure HTML sémantique, pages indexables, navigation mobile, métadonnées et maîtrise des ressources : les bases techniques sont intégrées au développement. Les résultats se vérifient ensuite avec des mesures, sans promesse de position sur Google.",
        ],
        [
          "Du premier échange à la livraison",
          "Nous clarifions les objectifs et le périmètre, puis avançons par étapes : conception, développement, tests et mise en ligne. Le devis précise les fonctionnalités retenues et les conditions du suivi.",
        ],
      ],
    },
    en: {
      title: "Custom web development",
      description:
        "Freelance web development for business websites, web applications and SaaS platforms with React and Next.js. From design to deployment.",
      intro:
        "Your website should explain what you do and help visitors take the next step. Your web application should stay fast, accessible and easy to maintain.",
      sections: [
        [
          "Built around your business",
          "From a business website to a customer portal, dashboard or SaaS platform, we define useful user journeys before selecting the technology. React, Next.js and TypeScript support an interface shaped around your needs.",
        ],
        [
          "Performance and discoverability",
          "Semantic HTML, indexable pages, mobile navigation, metadata and carefully managed assets are part of the development process. Results are measured after launch; search rankings cannot be guaranteed.",
        ],
        [
          "From planning to launch",
          "We agree on goals and scope, then work through design, development, testing and deployment. Your quote defines the features and support arrangements.",
        ],
      ],
    },
  },
  "logiciels-sur-mesure": {
    fr: {
      title: "Logiciels sur mesure et automatisation",
      description:
        "Outils métier, API et automatisations sur mesure : Codiva développe des logiciels adaptés à vos processus avec Node.js, Python et des bases de données.",
      intro:
        "Quand les tableurs et les outils génériques ne suffisent plus, un logiciel sur mesure peut simplifier vos opérations. Le point de départ reste votre façon de travailler.",
      sections: [
        [
          "Comprendre les processus existants",
          "Nous identifions les tâches répétitives, les échanges de données et les besoins de vos utilisateurs. Cette analyse permet de définir un premier périmètre utile et de limiter les fonctionnalités superflues.",
        ],
        [
          "Connecter vos outils",
          "API REST ou GraphQL, intégrations et automatisations : une solution peut relier vos applications existantes plutôt que les remplacer. Node.js, Python, PostgreSQL ou MongoDB sont choisis selon les contraintes du projet.",
        ],
        [
          "Préparer la maintenance",
          "Une architecture lisible, de la documentation et des tests adaptés facilitent les évolutions. Les accès, la gestion des données et le déploiement sont discutés dès la conception.",
        ],
      ],
    },
    en: {
      title: "Custom software and automation",
      description:
        "Business tools, APIs and automation tailored to your workflow. Freelance software development with Node.js, Python and databases.",
      intro:
        "When spreadsheets and generic tools no longer fit, custom software can simplify daily operations. We start with how your team actually works.",
      sections: [
        [
          "Understand your workflow",
          "We identify repetitive tasks, data exchanges and user needs. This analysis defines a useful first scope and avoids unnecessary features.",
        ],
        [
          "Connect existing tools",
          "REST or GraphQL APIs, integrations and automation can connect the applications you already use. Node.js, Python, PostgreSQL or MongoDB are selected to match project constraints.",
        ],
        [
          "Plan for maintenance",
          "Readable architecture, documentation and appropriate tests make future changes easier. Access control, data handling and deployment are considered from the design stage.",
        ],
      ],
    },
  },
  blockchain: {
    fr: {
      title: "Développement blockchain et smart contracts",
      description:
        "Conception de smart contracts Solidity et d’applications décentralisées sur Ethereum et EVM. Codiva accompagne votre projet Web3 du prototype à la production.",
      intro:
        "Un projet blockchain commence par une question : la décentralisation apporte-t-elle une valeur concrète à votre usage ? Nous clarifions cette utilité avant de développer.",
      sections: [
        [
          "Du cas d’usage au prototype",
          "Nous définissons les règles métier, les interactions avec les utilisateurs et les données qui doivent réellement être sur la chaîne. Un prototype permet de valider les hypothèses avant un développement plus large.",
        ],
        [
          "Smart contracts et interfaces Web3",
          "Solidity, Ethereum et les réseaux compatibles EVM permettent de construire des contrats et des applications décentralisées. Hardhat et ethers.js accompagnent les tests et l’intégration avec une interface web.",
        ],
        [
          "Sécurité et déploiement",
          "Les permissions, les cas limites et les coûts de transaction doivent être étudiés. Pour les contrats sensibles, un audit indépendant est à prévoir avant la production ; le développement ne remplace pas cet audit.",
        ],
      ],
    },
    en: {
      title: "Blockchain and smart contract development",
      description:
        "Solidity smart contracts and decentralized applications for Ethereum and EVM networks. Freelance Web3 development from prototype to production.",
      intro:
        "A blockchain project starts with a question: does decentralization add real value to your use case? We establish that value before building.",
      sections: [
        [
          "From use case to prototype",
          "We define business rules, user interactions and the data that actually belongs on-chain. A prototype helps validate assumptions before a larger investment.",
        ],
        [
          "Contracts and Web3 interfaces",
          "Solidity, Ethereum and EVM-compatible networks support smart contracts and decentralized applications. Hardhat and ethers.js support testing and integration with a web interface.",
        ],
        [
          "Security and deployment",
          "Permissions, edge cases and transaction costs need careful consideration. Sensitive contracts should receive an independent audit before production; development does not replace that audit.",
        ],
      ],
    },
  },
} as const;
export type ServiceSlug = keyof typeof services;
