<div align="center">

[🇫🇷 Français](README.md) &nbsp;·&nbsp; [🇬🇧 English](README.en.md) &nbsp;·&nbsp; [🇵🇱 Polski](README.pl.md)

<br>

<img src="https://github.com/bjankowski-hub.png" width="120" />

# Bartosz Jankowski

**Senior Product Manager construisant ses compétences IA & data pour transformer 13 ans d'expertise industrielle en systèmes qui amplifient le jugement humain.**

<br>

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Bartosz_Jankowski-0A66C2?style=flat&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/bartosz-jankowski-7a139346)
[![Email](https://img.shields.io/badge/Email-me_contacter-D14836?style=flat&logo=microsoftoutlook&logoColor=white)](mailto:bjankowski@outlook.fr)
[![Lyon](https://img.shields.io/badge/Lyon,_France-4A4A4A?style=flat)](https://www.google.com/maps/place/Lyon)
[![MBA](https://img.shields.io/badge/MBA_IA_%26_Data-De_Vinci_Executive_Education-1A1A2E?style=flat)](https://executive-education.devinci.fr)

</div>

---

## Qui suis-je ?

13 ans à faire le pont entre des contraintes terrain complexes et des équipes qui n'ont pas toujours le même langage. Automobile, confort thermique, smart city — toujours à l'intersection entre le technique et le business.

Aujourd'hui, je construis une couche IA & data sur cette base. Pas pour devenir data scientist — mais pour être le PM qui comprend les architectures, challenge les hypothèses, et sait distinguer là où l'IA crée une vraie valeur opérationnelle de là où elle crée du risque.

Je prépare un **MBA IA & Data Innovation (RNCP Niveau 7)** à De Vinci Executive Education. Ma thèse-projet est déployée sur terrain industriel réel, en partenariat avec un équipementier automobile mondial majeur. Je la construis comme un vrai projet d'accompagnement — de la définition du besoin à l'implémentation, jusqu'à la conduite du changement.

---

## Projet de Thèse — SCOPE

> **Smart Catalogue & Optimised Pricing Engine**
> *Système IA de cross-référencement de catalogue et de recommandation pricing multi-scénarios pour l'aftermarket automobile*

### Le problème

Les acteurs de l'aftermarket automobile gèrent des catalogues de **50 000+ références produits**. Deux goulots d'étranglement structurels :

**Cohérence catalogue** : les données internes (marketing ↔ ERP) divergent ; le cross-référencement concurrentiel est manuel, chronophage et non systématique à grande échelle.

**Pricing à grande échelle** : équilibrer positionnement marché, objectifs de marge et élasticité-prix sur des dizaines de milliers de références reste aujourd'hui un travail en grande partie manuel.

### Approche — Un projet construit de bout en bout

#### 1. Définition du besoin — Recherche-action terrain

Avant toute architecture : **13 entretiens structurés** avec les profils clés — pricing stratégique et opérationnel, trade marketing, finance, data & BI, experts IA. Pas une étude de cas — une co-construction du besoin réel avec les futurs utilisateurs, pour concevoir une solution qui tient sur le terrain.

#### 2. Solution — Architecture 4 briques séquentielles

```
┌──────────────────────────────────────────────────────────┐
│           B1 — Gouvernance des Données  (Socle)          │
│   Qualité · Ownership · RGPD · EU AI Act · Art.101 TFUE  │
└─────────────────────────┬────────────────────────────────┘
                          │  prérequis
           ┌──────────────┴──────────────┐
           ▼                             ▼
┌──────────────────┐        ┌───────────────────────────┐
│  B2 — Cross-     │        │   B3 — Moteur Pricing  ⭐  │
│  référencement ⭐│──────▶│   Multi-Scénarios          │
│  Contribution #1 │        │   Contribution #2 — Cœur  │
└──────────────────┘        └───────────────────────────┘
          │                              │
          └──────────────┬───────────────┘
                         ▼
          ┌──────────────────────────────┐
          │   B4 — Interface Intégrée    │
          │   Dashboard · Validation     │
          └──────────────────────────────┘
```

**B1 — Gouvernance** : normalisation des données, conformité RGPD, alignement EU AI Act, légalité des données concurrentielles (Art. 101 TFUE). Prérequis non-IA — condition sine qua non pour que B2 et B3 produisent des résultats fiables et juridiquement défendables.

**B2 — Cross-référencement IA** ⭐ : matching structuré sur base de compatibilité véhicule-pièce, complété par NLP et embeddings sémantiques sur données non normalisées.

**B3 — Moteur pricing multi-scénarios** ⭐ : trois recommandations simultanées — règles métier via RAG, plancher de marge brute, modèle d'élasticité-prix construit sur données historiques. Objectif : raccourcir le temps d'analyse et optimiser la prise de décision.

**B4 — Interface intégrée** : dashboard end-to-end avec validation humaine obligatoire. Interface conçue pour les non-data.

#### 3. Conduite du changement — intégrée à la conception

La conduite du changement n'est pas un livrable post-projet. Elle est embarquée dans les choix architecturaux dès le départ.

**Human-in-the-loop par design** : aucune décision n'est prise sans validation humaine. SCOPE est un outil de recommandation, pas d'automatisation.

**Déploiement séquentiel en 5 phases** : démonstration de valeur rapide dès la Phase 1 avant d'introduire les modules à plus haute complexité.

**Plan de transfert enterprise** : déploiement sur 18–24 mois, 6 phases progressives, monitoring ROI embarqué, formation et accompagnement des équipes métier.

---

## Statut du Projet

```mermaid
gantt
    title SCOPE — Calendrier de Recherche & Développement
    dateFormat  YYYY-MM-DD
    axisFormat  %b %Y
    todayMarker on

    section Recherche
    Entretiens métier                :active, 2026-06-15, 2026-07-31

    section Développement
    Optimisation solution · Stack technique · POC · Littérature :active, 2026-05-15, 2026-09-30

    section Rédaction
    Rédaction de la thèse            :2026-09-01, 2026-10-31

    section Soutenance
    Restitution 🎓                   :milestone, crit, 2027-03-01, 0d
```

---

## Compétences & Positionnement

<div align="center">

**Métier**

![Pricing strategy](https://img.shields.io/badge/Pricing_strategy-2E3440?style=flat-square)
![Catalogue management](https://img.shields.io/badge/Catalogue_management-2E3440?style=flat-square)
![Stratégie produit](https://img.shields.io/badge/Strat%C3%A9gie_produit-2E3440?style=flat-square)
![Stakeholder alignment](https://img.shields.io/badge/Stakeholder_alignment-2E3440?style=flat-square)
![Conduite du changement](https://img.shields.io/badge/Conduite_du_changement-2E3440?style=flat-square)
![Business case & ROI](https://img.shields.io/badge/Business_case_%26_ROI-2E3440?style=flat-square)
![Action research](https://img.shields.io/badge/Action_research-2E3440?style=flat-square)

<br>

**IA & Data**

![RAG architecture](https://img.shields.io/badge/RAG_architecture-1B4F72?style=flat-square)
![LangGraph orchestration](https://img.shields.io/badge/LangGraph_orchestration-1B4F72?style=flat-square)
![Human-in-the-loop](https://img.shields.io/badge/Human--in--the--loop-1B4F72?style=flat-square)
![EU AI Act compliance](https://img.shields.io/badge/EU_AI_Act_compliance-1B4F72?style=flat-square)
![n8n automation](https://img.shields.io/badge/n8n_automation-1B4F72?style=flat-square)
![Claude / Anthropic](https://img.shields.io/badge/Claude_%2F_Anthropic-1B4F72?style=flat-square)
![Prompt engineering](https://img.shields.io/badge/Prompt_engineering-1B4F72?style=flat-square)

</div>

---

## Contact

Disponible pour des opportunités AI/Data Product Manager — stage ou CDI.

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Bartosz_Jankowski-0A66C2?style=flat&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/bartosz-jankowski-7a139346)
[![Email](https://img.shields.io/badge/Email-bjankowski%40outlook.fr-D14836?style=flat&logo=microsoftoutlook&logoColor=white)](mailto:bjankowski@outlook.fr)
