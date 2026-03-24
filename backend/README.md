# TP 2 - Backend API

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
