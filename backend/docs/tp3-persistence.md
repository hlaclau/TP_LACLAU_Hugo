# TP 3 — Test de persistance

[← Sommaire](../README.md) | [← Tests d'erreur TP 3](tp3-errors.md)

---

Ce test valide l'objectif principal du TP : les données survivent au redémarrage du serveur.

## Table des matières

1. [Créer un utilisateur et noter son `_id`](#1-post-apiusers--créer-un-utilisateur-et-noter-son-_id)
2. [Redémarrer le serveur](#2-redémarrer-le-serveur)
3. [Retrouver l'utilisateur après redémarrage](#3-get-apiusers_id--retrouver-lutilisateur-après-redémarrage)

---

### 1. POST /api/users — Créer un utilisateur et noter son `_id`

![persistence-create](screenshots/tp3/persistence/test-persistence-create-user-id-69c660853f1b49f33147b867.png)

---

### 2. Redémarrer le serveur

Arrêter le serveur (`Ctrl+C`) puis le relancer (`node server.js`).

![persistence-reboot](screenshots/tp3/persistence/test-persistence-reboot-proof.png)

---

### 3. GET /api/users/:_id — Retrouver l'utilisateur après redémarrage

L'utilisateur créé avant le redémarrage doit toujours être accessible (code 200).

![persistence-get](screenshots/tp3/persistence/test-persistence-get-user-69c660853f1b49f33147b867-after-reboot.png)

---

[← Sommaire](../README.md) | [← Tests d'erreur TP 3](tp3-errors.md)
