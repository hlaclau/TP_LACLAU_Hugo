# Tests API avec Bruno

> Bruno est un client HTTP open-source orienté fichiers — les requêtes sont versionnées directement dans le dépôt git.

[← Sommaire](../README.md)

---

## Prérequis

Télécharger et installer Bruno : [usebruno.com](https://www.usebruno.com/)

---

## Ouvrir la collection

1. Lancer Bruno
2. Cliquer sur **Open Collection**
3. Sélectionner le dossier `backend/docs/bruno/`

La collection **TP Api** apparaît avec toutes les requêtes disponibles.

---

## Configurer l'environnement

Un environnement `local` est inclus avec la variable `baseUrl` préconfigurée :

| Variable | Valeur |
|----------|--------|
| `baseUrl` | `http://localhost:3001` |

Sélectionner l'environnement **local** dans le menu déroulant en haut à droite de Bruno avant de lancer les requêtes.

---

## Requêtes disponibles

| Fichier | Méthode | Route | Description |
|---------|---------|-------|-------------|
| `get-all-users.bru` | `GET` | `/api/users` | Récupère tous les utilisateurs |
| `get-user-by-id.bru` | `GET` | `/api/users/:id` | Récupère un utilisateur par son id |
| `get-users-by-role.bru` | `GET` | `/api/users?role=...` | Filtre les utilisateurs par rôle |
| `get-users-paginated.bru` | `GET` | `/api/users?page=...&limit=...` | Liste paginée |
| `get-users-paginated-by-role.bru` | `GET` | `/api/users?role=...&page=...` | Paginé + filtre par rôle |
| `Get Users By Matching Name.bru` | `GET` | `/api/users?name=...` | Recherche par nom (regex) |
| `create-user.bru` | `POST` | `/api/users` | Crée un nouvel utilisateur |
| `create-user-missing-fields.bru` | `POST` | `/api/users` | Cas d'erreur : champs manquants (400) |
| `update-user.bru` | `PUT` | `/api/users/:id` | Met à jour un utilisateur |
| `update-user-not-found.bru` | `PUT` | `/api/users/:id` | Cas d'erreur : utilisateur introuvable (404) |
| `delete-user.bru` | `DELETE` | `/api/users/:id` | Supprime un utilisateur |
| `delete-user-not-found.bru` | `DELETE` | `/api/users/:id` | Cas d'erreur : utilisateur introuvable (404) |
| `get-user-not-found.bru` | `GET` | `/api/users/:id` | Cas d'erreur : utilisateur introuvable (404) |

---

## Lancer les requêtes

S'assurer que le serveur est démarré (`npm start` dans `backend/`) puis que l'environnement **local** est sélectionné, et cliquer sur **Send** pour chaque requête.

---

[← Sommaire](../README.md)
