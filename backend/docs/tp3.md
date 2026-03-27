# TP 3 — Vue d'ensemble

> Base de données & ORM · Mongoose · MongoDB · API REST persistante · MVC

[← Sommaire](../README.md) | [← Tests d'erreur TP 2](tp2-errors.md) | [Suivant : Scénarios de test TP 3 →](tp3-scenario.md)

---

> Prérequis : TP Séance 2 terminé (API CRUD MVC en mémoire)

## Objectifs

- Comprendre la différence entre données en mémoire (volatile) et données persistées
- Installer et configurer MongoDB (local ou Atlas cloud)
- Connecter l'API Express du TP Séance 2 à MongoDB via Mongoose
- Remplacer le tableau JavaScript en mémoire par de vrais documents MongoDB
- Adapter l'architecture MVC pour l'asynchronisme (`async/await`, `try/catch`)
- Gérer les nouveaux cas d'erreur liés à MongoDB (ObjectId invalide, duplication)

---

## Ce qui change par rapport au TP 2

| Aspect | TP 2 (mémoire) | TP 3 (MongoDB) |
|--------|---------------|----------------|
| Stockage | Tableau JavaScript | Base MongoDB |
| Identifiants | Entiers auto-incrémentés | ObjectId MongoDB |
| Persistance | Perdue au redémarrage | Conservée |
| Async | Synchrone | `async/await` |
| Erreurs id | 404 uniquement | 400 (invalide) + 404 (inexistant) |

---

## Lancer MongoDB avec Docker

Un conteneur MongoDB est disponible via le fichier `docker-compose.yml` à la racine du projet, à des fins de développement.

```bash
docker compose up -d
```

| Paramètre | Valeur |
|-----------|--------|
| Image | `mongo:8` |
| Port | `27017` |
| Utilisateur | `root` |
| Mot de passe | `root` |
| Base de données | `tp3` |

Les données sont persistées dans un volume Docker (`mongodb_data`) et survivent aux redémarrages du conteneur.

---

[← Sommaire](../README.md) | [← Tests d'erreur TP 2](tp2-errors.md) | [Suivant : Scénarios de test TP 3 →](tp3-scenario.md)
