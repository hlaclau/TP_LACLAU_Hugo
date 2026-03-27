# TP 4 — Vue d'ensemble

> Frontend Fundamentals · React · Composants · Props · State · axios · API REST

[← Sommaire](../../README.md) | [← Vue d'ensemble TP 3](../../backend/docs/tp3.md)

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

## Fonctionnalités prévues

- Lister tous les utilisateurs au chargement de la page
- Créer un nouvel utilisateur via un formulaire
- Supprimer un utilisateur existant
- Afficher un indicateur de chargement pendant les appels API
- Afficher les erreurs retournées par l'API
- Vider le formulaire et rafraîchir la liste après une création réussie

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

## Scénario de test manuel (Tâche 4.2)

### Test 1 — La liste des utilisateurs s'affiche

Lancer le frontend (`npm run dev`). Les utilisateurs chargés depuis l'API apparaissent directement.

![Test 1](./screenshots/tp4/scenario/test-1-the-users-are-displayed.png)

---

### Test 2 — Créer un utilisateur

Remplir et soumettre le formulaire. Le nouvel utilisateur apparaît dans la liste sans rechargement de la page.

![Test 2](./screenshots/tp4/scenario/test-2-a-created-user-is-displayed.png)

---

### Test 3 — Supprimer un utilisateur

Cliquer sur "Supprimer" sur une carte. Une modale de confirmation s'affiche (3.1), puis l'utilisateur disparaît immédiatement de la liste (3.2).

![Test 3.1](./screenshots/tp4/scenario/test-3.1-ca-delete-a-user.png)

![Test 3.2](./screenshots/tp4/scenario/test-3.2-the-user-is-deleted.png)

---

### Test 4 — Validation des champs obligatoires

Soumettre le formulaire avec un champ vide. Un message d'erreur de validation s'affiche, aucun appel API n'est effectué.

![Test 4](./screenshots/tp4/scenario/test-4-email-and-name-required.png)

---

### Test 5 — Email déjà utilisé

Soumettre avec un email déjà présent en base. L'erreur 409 retournée par l'API s'affiche dans le formulaire.

![Test 5](./screenshots/tp4/scenario/test-5-email-already-used.png)

---

### Test 6 — API indisponible

Couper le backend (Ctrl+C) et recharger la page. Un message d'erreur s'affiche, l'application ne plante pas.

![Test 6](./screenshots/tp4/scenario/test-6-app-dont-crash-when-api-is-down.png)

---

### Test 7 — Persistance des données

Redémarrer le backend et recharger la page. Les données persistent grâce à MongoDB.

![Test 7](./screenshots/tp4/scenario/test-7-when-the-api-is-back-data-load.png)

---

[← Sommaire](../../README.md) | [← Vue d'ensemble TP 3](../../backend/docs/tp3.md)
