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

## Scénarios de test TP 2

> Les captures d'écran ci-dessous correspondent aux scénarios de test du **TP 2**.

### 1. GET /api/users — Récupérer tous les utilisateurs
Vérifier que les 3 utilisateurs initiaux sont retournés (code 200).

![test-1](docs/screenshots/tp2/scenario/test-1-get-all-users.png)

---

### 2. POST /api/users — Créer un nouvel utilisateur
Créer un nouvel utilisateur et noter l'id retourné (code 201).

![test-2](docs/screenshots/tp2/scenario/test-2-create-new-user.png)

---

### 3. GET /api/users/:id — Récupérer l'utilisateur créé
Récupérer l'utilisateur créé avec son id (code 200).

![test-3](docs/screenshots/tp2/scenario/test-3-get-created-user-by-id.png)

---

### 4. PUT /api/users/:id — Modifier le rôle de l'utilisateur
Modifier le rôle de l'utilisateur créé (code 200).

![test-4](docs/screenshots/tp2/scenario/test-4-update-created-user-role.png)

---

### 5. GET /api/users — Vérifier la liste mise à jour
Vérifier que la liste contient maintenant 4 utilisateurs (code 200).

![test-5](docs/screenshots/tp2/scenario/test-5-get-all-users-with-new-user.png)

---

### 6. DELETE /api/users/:id — Supprimer l'utilisateur créé
Supprimer l'utilisateur créé (code 204).

![test-6](docs/screenshots/tp2/scenario/test-6-delete-the-created-user.png)

---

### 7. GET /api/users/:id — Utilisateur introuvable
Tenter de récupérer l'utilisateur supprimé (code 404).

![test-7](docs/screenshots/tp2/scenario/test-7-created-user-not-found.png)

---

## Tâche 3.2 — Tests des cas d'erreur TP 2

### 1. POST /api/users sans name ni email — Bad Request
Créer un utilisateur sans fournir les champs obligatoires (code 400).

![error-test-1](docs/screenshots/tp2/errors/test-1-create-user-without-name-and-mail.png)

---

### 2. GET /api/users/9999 — Utilisateur inexistant
Récupérer un utilisateur avec un id inexistant (code 404).

![error-test-2](docs/screenshots/tp2/errors/test-2-get-non-existent-user.png)

---

### 3. PUT /api/users/9999 — Modification d'un utilisateur inexistant
Modifier un utilisateur avec un id inexistant (code 404).

![error-test-3](docs/screenshots/tp2/errors/test-3-update-non-existent-user.png)

---

### 4. DELETE /api/users/9999 — Suppression d'un utilisateur inexistant
Supprimer un utilisateur avec un id inexistant (code 404).

![error-test-4](docs/screenshots/tp2/errors/test-4-delete-non-existent-token.png)

---

## Scénarios de test TP 3

> Les captures d'écran ci-dessous correspondent aux scénarios de test du **TP 3** (migration vers MongoDB).

### 1. GET /api/users — Récupérer tous les utilisateurs
Vérifier que la liste des utilisateurs est retournée depuis MongoDB (code 200).

![tp3-test-1](docs/screenshots/tp3/scenario/test-1-get-all-users.png)

---

### 2. POST /api/users — Créer un nouvel utilisateur
Créer un nouvel utilisateur et noter l'id retourné (code 201).

![tp3-test-2](docs/screenshots/tp3/scenario/test-2-create-new-user.png)

---

### 3. GET /api/users/:id — Récupérer l'utilisateur créé
Récupérer l'utilisateur créé avec son id (code 200).

![tp3-test-3](docs/screenshots/tp3/scenario/test-3-get-created-user-by-id.png)

---

### 4. PUT /api/users/:id — Modifier le rôle de l'utilisateur
Modifier le rôle de l'utilisateur créé (code 200).

![tp3-test-4](docs/screenshots/tp3/scenario/test-4-update-created-user-role.png)

---

### 5. GET /api/users — Vérifier la liste mise à jour
Vérifier que la liste contient le nouvel utilisateur (code 200).

![tp3-test-5](docs/screenshots/tp3/scenario/test-5-get-all-users-with-new-user.png)

---

### 6. DELETE /api/users/:id — Supprimer l'utilisateur créé
Supprimer l'utilisateur créé (code 204).

![tp3-test-6](docs/screenshots/tp3/scenario/test-6-delete-the-created-user.png)

---

### 7. GET /api/users/:id — Utilisateur introuvable
Tenter de récupérer l'utilisateur supprimé (code 404).

![tp3-test-7](docs/screenshots/tp3/scenario/test-7-created-user-not-found.png)

---

## Tâche 4.2 — Tests des cas d'erreur MongoDB

> Les captures d'écran ci-dessous correspondent aux tests des cas d'erreur du **TP 3** avec MongoDB.

### 1. POST /api/users — Email déjà existant
Créer un utilisateur avec une adresse email déjà utilisée (code 409 Conflict).

![tp3-error-test-1](docs/screenshots/tp3/errors/test-1-create-user-with-already-used-email.png)

---

### 2. GET /api/users/id_invalide — ObjectId invalide
Récupérer un utilisateur avec un id invalide (ex: `123`) (code 400 Bad Request).

![tp3-error-test-2](docs/screenshots/tp3/errors/test-2-get-user-with-invalid-id.png)

---

### 3. GET /api/users/000000000000000000000000 — ObjectId valide mais inexistant
Récupérer un utilisateur avec un ObjectId valide mais inexistant en base (code 404 Not Found).

![tp3-error-test-3](docs/screenshots/tp3/errors/test-3-get-user-with-non-existent-id.png)

---

### 4. DELETE /api/users/id_invalide — ObjectId invalide
Supprimer un utilisateur avec un id invalide (code 400 Bad Request). Le même comportement s'applique pour `PUT /api/users/id_invalide`.

![tp3-error-test-4](docs/screenshots/tp3/errors/test-4-delete-user-with-invalid-id.png)
