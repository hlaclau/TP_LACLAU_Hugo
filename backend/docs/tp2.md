# TP 2 — Vue d'ensemble

> Backend Fundamentals · HTTP · REST · CRUD · Express · Postman

[← Sommaire](../README.md) | [Suivant : Scénarios de test TP 2 →](tp2-scenario.md)

---

## Objectifs

- Comprendre les méthodes HTTP (GET, POST, PUT, DELETE) et les codes de statut
- Maîtriser les principes REST et CRUD
- Structurer une API Express avec des routes organisées
- Tester les endpoints avec Postman ou Insomnia
- Gérer les erreurs et retourner des réponses HTTP appropriées

---

## Fonctionnalités

- Lister tous les utilisateurs
- Récupérer un utilisateur par son identifiant
- Créer un nouvel utilisateur
- Modifier un utilisateur existant
- Supprimer un utilisateur
- Logging automatique de chaque requête entrante (méthode, URL, durée)

---

## Routes disponibles

| Méthode | Route | Description | Codes retour |
|---------|-------|-------------|--------------|
| `GET` | `/api/users` | Récupère la liste de tous les utilisateurs | 200 |
| `GET` | `/api/users/:id` | Récupère un utilisateur par son id | 200, 404 |
| `POST` | `/api/users` | Crée un nouvel utilisateur | 201, 400, 409 |
| `PUT` | `/api/users/:id` | Met à jour un utilisateur existant | 200, 404, 409 |
| `DELETE` | `/api/users/:id` | Supprime un utilisateur | 204, 404 |

### Codes de statut

| Code | Signification | Cas d'usage |
|------|--------------|-------------|
| 200 | OK | Requête réussie, données retournées |
| 201 | Created | Utilisateur créé avec succès |
| 204 | No Content | Suppression réussie, aucune donnée retournée |
| 400 | Bad Request | Champs obligatoires manquants (`name`, `email`) |
| 404 | Not Found | Aucun utilisateur trouvé pour cet id |
| 409 | Conflict | L'adresse email est déjà utilisée |

---

## Lancer le serveur

Depuis la racine du dépôt (recommandé) :

```bash
npm run dev
```

Ou uniquement le backend :

```bash
npm run start --workspace=backend
```

Le serveur écoute sur `http://localhost:3001`.

---

[← Sommaire](../README.md) | [Suivant : Scénarios de test TP 2 →](tp2-scenario.md)
