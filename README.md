# 🎨 Mon Portfolio - SvelteKit + Prisma + SQLite

Bienvenue sur le repo de mon portfolio ! Ce projet a été conçu pour présenter mes projets, me contacter facilement via un formulaire, et explorer mes compétences techniques en SvelteKit, TypeScript et bases de données.
Ce projet est un portfolio personnel développé avec [SvelteKit](https://kit.svelte.dev/) et [Prisma](https://www.prisma.io/). Il inclut un formulaire de contact avec des fonctionnalités CRUD complètes.

## Fonctionnalités

- **Accueil** : Présentation personnelle.
- **Mes projets** : Liste de vos projets avec une description.
- **Formulaire de contact** : Les visiteurs peuvent envoyer des messages. Les messages peuvent être gérés (ajout, affichage, recherche, édition, suppression, marquage comme lu/répondu).

---

## 🚀 Stack utilisée

- ⚡ **SvelteKit** — Framework frontend moderne, rapide et fun
- 🔮 **TypeScript** — Parce que taper sans types, c'est risqué
- 🧬 **Prisma** — ORM pour jouer avec la base de données
- 🗃️ **SQLite** — Base de données légère et locale

---

## 📁 Structure du projet

src/
├── routes/ → Les pages et leurs layouts
│ ├── +layout.svelte → Layout principal (nav, footer…)
│ ├── +page.svelte → Page d'accueil
│ ├── contact/ → Formulaire de contact
│ └── mes-projets/ → Liste de projets
├── lib/ → Composants réutilisables ou utils
prisma/
├── schema.prisma → Modèle de base de données

## Fonctionnalités
Layout global avec <slot/> pour toutes les pages

Page d'accueil simple et responsive

Page "Projets" : présentation des projets

Page "Contact" : formulaire connecté à la base (CRUD via API)

API endpoints SvelteKit utilisant Prisma pour manipuler les données

## 🔍 Scripts utiles
//bash

npm run dev               # Lancer le projet en développement
npx prisma generate       # Générer les types Prisma
npx prisma migrate dev    # Appliquer une migration
npm run build             # Build pour la production


## 📤 Déploiement
Déployable facilement sur Vercel, Netlify, ou tout autre environnement Node.js.
⚠️ Si tu utilises une base distante (ex : PostgreSQL sur Supabase), pense à adapter schema.prisma et .env.(j'en ai bavé)

## 📄 Licence
Projet open-source sous licence MIT. Utilise-le, modifie-le, partage-le, crédite si t’es cool 😎

## 🙋‍♀️ Contact
Créé par Maryline Biloa
📧 philippemarylineb@gmail.com
🌐 github.com/marylineb/mon-portfolio.com
🔗 LinkedIn: maryline biloa






> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.
