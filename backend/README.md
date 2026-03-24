# TP 2 - Backend API

> Cours : **Développement Web Fullstack** — M1, Ynov
> Séance n°2 · Backend Fundamentals · HTTP · REST · CRUD · Express · Postman

API REST construite avec **Node.js** et **Express** (😢), permettant la gestion d'utilisateurs en mémoire.

## Objectifs du TP

- Comprendre les méthodes HTTP (GET, POST, PUT, DELETE) et les codes de statut
- Maîtriser les principes REST et CRUD
- Structurer une API Express avec des routes organisées
- Tester les endpoints avec Postman ou Insomnia
- Gérer les erreurs et retourner des réponses HTTP appropriées

## Fonctionnalités

- Lister tous les utilisateurs
- Récupérer un utilisateur par son identifiant
- Créer un nouvel utilisateur
- Modifier un utilisateur existant
- Supprimer un utilisateur
- Logging automatique de chaque requête entrante (méthode, URL, durée)

## Routes disponibles

| Méthode | Route | Description | Codes retour |
|---------|-------|-------------|--------------|
| `GET` | `/api/users` | Récupère la liste de tous les utilisateurs | 200 |
| `GET` | `/api/users/:id` | Récupère un utilisateur par son id | 200, 404 |
| `POST` | `/api/users` | Crée un nouvel utilisateur | 201, 400, 409 |
| `PUT` | `/api/users/:id` | Met à jour un utilisateur existant | 200, 404, 409 |
| `DELETE` | `/api/users/:id` | Supprime un utilisateur | 204, 404 |

### Détail des codes de statut

| Code | Signification | Cas d'usage |
|------|--------------|-------------|
| 200 | OK | Requête réussie, données retournées |
| 201 | Created | Utilisateur créé avec succès |
| 204 | No Content | Suppression réussie, aucune donnée retournée |
| 400 | Bad Request | Champs obligatoires manquants (`name`, `email`) |
| 404 | Not Found | Aucun utilisateur trouvé pour cet id |
| 409 | Conflict | L'adresse email est déjà utilisée |

## Lancer le serveur

```bash
npm install
npm start
```

Le serveur écoute sur `http://localhost:3001`.

---

## Scénarios de test

### 1. GET /api/users — Récupérer tous les utilisateurs
Vérifier que les 3 utilisateurs initiaux sont retournés (code 200).

![test-1](docs/screenshots/test/test-1-get-all-users.png)

---

### 2. POST /api/users — Créer un nouvel utilisateur
Créer un nouvel utilisateur et noter l'id retourné (code 201).

![test-2](docs/screenshots/test/test-2-create-new-user.png)

---

### 3. GET /api/users/:id — Récupérer l'utilisateur créé
Récupérer l'utilisateur créé avec son id (code 200).

![test-3](docs/screenshots/test/test-3-get-created-user-by-id.png)

---

### 4. PUT /api/users/:id — Modifier le rôle de l'utilisateur
Modifier le rôle de l'utilisateur créé (code 200).

![test-4](docs/screenshots/test/test-4-update-created-user-role.png)

---

### 5. GET /api/users — Vérifier la liste mise à jour
Vérifier que la liste contient maintenant 4 utilisateurs (code 200).

![test-5](docs/screenshots/test/test-5-get-all-users-with-new-user.png)

---

### 6. DELETE /api/users/:id — Supprimer l'utilisateur créé
Supprimer l'utilisateur créé (code 204).

![test-6](docs/screenshots/test/test-6-delete-the-created-user.png)

---

### 7. GET /api/users/:id — Utilisateur introuvable
Tenter de récupérer l'utilisateur supprimé (code 404).

![test-7](docs/screenshots/test/test-7-created-user-not-found.png)
