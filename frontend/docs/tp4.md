# TP 4 — Vue d'ensemble

> Frontend Fundamentals · React · Composants · Props · State · axios · API REST

[← Sommaire](../README.md) | [← Vue d'ensemble TP 3](../../backend/docs/tp3.md) | [Suivant : Scénarios de test TP 4 →](tp4-scenario.md)

---

> Prérequis : TP Séance 3 terminé (API Express + MongoDB persistante)

## Objectifs

- Créer une application React fonctionnelle avec Vite
- Structurer l'interface en composants réutilisables
- Utiliser `props` et `state` pour rendre l'interface dynamique
- Consommer l'API backend du TP Séance 3 avec `axios`
- Afficher la liste des utilisateurs, créer et supprimer via l'API
- Gérer les états de chargement, d'erreur et de succès des appels API

---

## Stack technique

| Outil | Rôle |
|-------|------|
| [Vite](https://vite.dev/) | Bundler et serveur de développement |
| [axios](https://axios-http.com/) | Client HTTP pour consommer l'API |
| [Biome](https://biomejs.dev/) | Linter et formateur (partagé avec le backend) |

---

## Fonctionnalités

- Lister tous les utilisateurs au chargement de la page
- Créer un nouvel utilisateur via un formulaire
- Supprimer un utilisateur existant (avec modale de confirmation)
- Afficher un message de succès après une création ou modification réussie
- Désactiver le bouton de soumission pendant les appels API
- Afficher un indicateur de chargement pendant les appels API
- Afficher les erreurs retournées par l'API
- Animations à l'affichage des cartes utilisateurs

---

## Lancer l'application

### Les deux projets en parallèle (recommandé)

Depuis la racine du dépôt :

```bash
npm run dev
```

Cela démarre simultanément le backend et le frontend via `concurrently`.

### Séparément

```bash
# Backend
npm run start --workspace=backend

# Frontend
npm run dev --workspace=frontend
```

| Projet | URL |
|--------|-----|
| Frontend | `http://localhost:5173` |
| Backend | `http://localhost:3001` |

---

[← Sommaire](../README.md) | [← Vue d'ensemble TP 3](../../backend/docs/tp3.md) | [Suivant : Scénarios de test TP 4 →](tp4-scenario.md)
