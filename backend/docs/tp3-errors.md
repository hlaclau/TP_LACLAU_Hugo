# TP 3 — Tests des cas d'erreur MongoDB

[← Sommaire](../README.md) | [← Scénarios TP 3](tp3-scenario.md) | [Suivant : Test de persistance →](tp3-persistence.md)

---

## Table des matières

1. [POST avec email déjà existant — Conflict](#1-post-apiusers--email-déjà-existant)
2. [GET avec ObjectId invalide — Bad Request](#2-get-apiusersid_invalide--objectid-invalide)
3. [GET avec ObjectId inexistant — Not Found](#3-get-apiusers000000000000000000000000--objectid-valide-mais-inexistant)
4. [DELETE avec ObjectId invalide — Bad Request](#4-delete-apiusersid_invalide--objectid-invalide)

---

### 1. POST /api/users — Email déjà existant

Créer un utilisateur avec une adresse email déjà utilisée (code 409 Conflict).

![tp3-error-test-1](screenshots/tp3/errors/test-1-create-user-with-already-used-email.png)

---

### 2. GET /api/users/id_invalide — ObjectId invalide

Récupérer un utilisateur avec un id invalide (ex: `123`) (code 400 Bad Request).

![tp3-error-test-2](screenshots/tp3/errors/test-2-get-user-with-invalid-id.png)

---

### 3. GET /api/users/000000000000000000000000 — ObjectId valide mais inexistant

Récupérer un utilisateur avec un ObjectId valide mais inexistant en base (code 404 Not Found).

![tp3-error-test-3](screenshots/tp3/errors/test-3-get-user-with-non-existent-id.png)

---

### 4. DELETE /api/users/id_invalide — ObjectId invalide

Supprimer un utilisateur avec un id invalide (code 400 Bad Request). Le même comportement s'applique pour `PUT /api/users/id_invalide`.

![tp3-error-test-4](screenshots/tp3/errors/test-4-delete-user-with-invalid-id.png)

---

[← Sommaire](../README.md) | [← Scénarios TP 3](tp3-scenario.md) | [Suivant : Test de persistance →](tp3-persistence.md)
