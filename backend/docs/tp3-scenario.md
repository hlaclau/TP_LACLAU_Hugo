# TP 3 — Scénarios de test

[← Sommaire](../README.md) | [← Vue d'ensemble TP 3](tp3.md) | [Suivant : Tests d'erreur TP 3 →](tp3-errors.md)

---

Parcours CRUD complet sur l'API connectée à MongoDB.

## Table des matières

1. [GET /api/users — Récupérer tous les utilisateurs](#1-get-apiusers--récupérer-tous-les-utilisateurs)
2. [POST /api/users — Créer un nouvel utilisateur](#2-post-apiusers--créer-un-nouvel-utilisateur)
3. [GET /api/users/:id — Récupérer l'utilisateur créé](#3-get-apiusersid--récupérer-lutilisateur-créé)
4. [PUT /api/users/:id — Modifier le rôle de l'utilisateur](#4-put-apiusersid--modifier-le-rôle-de-lutilisateur)
5. [GET /api/users — Vérifier la liste mise à jour](#5-get-apiusers--vérifier-la-liste-mise-à-jour)
6. [DELETE /api/users/:id — Supprimer l'utilisateur créé](#6-delete-apiusersid--supprimer-lutilisateur-créé)
7. [GET /api/users/:id — Utilisateur introuvable](#7-get-apiusersid--utilisateur-introuvable)

---

### 1. GET /api/users — Récupérer tous les utilisateurs

Vérifier que la liste des utilisateurs est retournée depuis MongoDB (code 200).

![tp3-test-1](screenshots/tp3/scenario/test-1-get-all-users.png)

---

### 2. POST /api/users — Créer un nouvel utilisateur

Créer un nouvel utilisateur et noter l'id retourné (code 201).

![tp3-test-2](screenshots/tp3/scenario/test-2-create-new-user.png)

---

### 3. GET /api/users/:id — Récupérer l'utilisateur créé

Récupérer l'utilisateur créé avec son id (code 200).

![tp3-test-3](screenshots/tp3/scenario/test-3-get-created-user-by-id.png)

---

### 4. PUT /api/users/:id — Modifier le rôle de l'utilisateur

Modifier le rôle de l'utilisateur créé (code 200).

![tp3-test-4](screenshots/tp3/scenario/test-4-update-created-user-role.png)

---

### 5. GET /api/users — Vérifier la liste mise à jour

Vérifier que la liste contient le nouvel utilisateur (code 200).

![tp3-test-5](screenshots/tp3/scenario/test-5-get-all-users-with-new-user.png)

---

### 6. DELETE /api/users/:id — Supprimer l'utilisateur créé

Supprimer l'utilisateur créé (code 204).

![tp3-test-6](screenshots/tp3/scenario/test-6-delete-the-created-user.png)

---

### 7. GET /api/users/:id — Utilisateur introuvable

Tenter de récupérer l'utilisateur supprimé (code 404).

![tp3-test-7](screenshots/tp3/scenario/test-7-created-user-not-found.png)

---

[← Sommaire](../README.md) | [← Vue d'ensemble TP 3](tp3.md) | [Suivant : Tests d'erreur TP 3 →](tp3-errors.md)
