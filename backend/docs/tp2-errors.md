# TP 2 — Tests des cas d'erreur

> Tâche 3.2

[← Sommaire](../README.md) | [← Scénarios TP 2](tp2-scenario.md) | [Suivant : Vue d'ensemble TP 3 →](tp3.md)

---

## Table des matières

1. [POST sans name ni email — Bad Request](#1-post-apiusers-sans-name-ni-email--bad-request)
2. [GET avec id inexistant — Not Found](#2-get-apiusers9999--utilisateur-inexistant)
3. [PUT avec id inexistant — Not Found](#3-put-apiusers9999--modification-dun-utilisateur-inexistant)
4. [DELETE avec id inexistant — Not Found](#4-delete-apiusers9999--suppression-dun-utilisateur-inexistant)

---

### 1. POST /api/users sans name ni email — Bad Request

Créer un utilisateur sans fournir les champs obligatoires (code 400).

![error-test-1](screenshots/tp2/errors/test-1-create-user-without-name-and-mail.png)

---

### 2. GET /api/users/9999 — Utilisateur inexistant

Récupérer un utilisateur avec un id inexistant (code 404).

![error-test-2](screenshots/tp2/errors/test-2-get-non-existent-user.png)

---

### 3. PUT /api/users/9999 — Modification d'un utilisateur inexistant

Modifier un utilisateur avec un id inexistant (code 404).

![error-test-3](screenshots/tp2/errors/test-3-update-non-existent-user.png)

---

### 4. DELETE /api/users/9999 — Suppression d'un utilisateur inexistant

Supprimer un utilisateur avec un id inexistant (code 404).

![error-test-4](screenshots/tp2/errors/test-4-delete-non-existent-token.png)

---

[← Sommaire](../README.md) | [← Scénarios TP 2](tp2-scenario.md) | [Suivant : Vue d'ensemble TP 3 →](tp3.md)
