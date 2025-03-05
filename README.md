# Blog Angular - Application Pédagogique / Educational Blog Application

[English version below](#english-version)

## Version Française

### À Propos

Cette application est un blog pédagogique développé avec Angular 18/19, conçu pour démontrer les meilleures pratiques et les fonctionnalités modernes d'Angular.

### Démo

Voir la démo en ligne : [https://angular-19-mini-blog.vercel.app/](https://angular-19-mini-blog.vercel.app/)

### Fonctionnalités Principales

- Gestion d'articles (création, lecture)
- Authentification utilisateur
- Comparaison Signals vs Observables
- Notifications système
- Architecture modulaire et scalable

### Technologies Utilisées

- Angular 18/19
- RxJS & Signals
- TailwindCSS
- Angular Animations

### Concepts Démontrés

1. **Gestion d'État**

   - Utilisation des Signals
   - Gestion des Observables
   - Comparaison des deux approches

2. **Architecture**

   - Lazy Loading
   - Composants autonomes
   - Services injectables
   - Gardes de route

3. **UI/UX**
   - Composants réutilisables
   - Système de notification
   - Animations
   - Design responsive

### Installation

```bash
# Cloner le repository
git clone [url-du-repo]

# Installer les dépendances
npm install

# Lancer l'application
npm start
```

### Structure du Projet

```
src/
├── app/
│   ├── core/           # Services, gardes et composants core
│   ├── features/       # Modules fonctionnels
│   └── shared/        # Composants et utilitaires partagés
├── assets/            # Ressources statiques
└── styles/           # Styles globaux
```

### Guide Pas à Pas pour Recréer le Blog

1. **Initialisation du Projet**

   ```bash
   # Installation d'Angular CLI
   npm install -g @angular/cli@latest

   # Création du projet
   ng new blog-pedagogique --style=scss --routing=true --standalone=true
   ```

2. **Configuration de l'Architecture**

   - Mise en place de la structure des dossiers (core, features, shared)
   - Configuration des alias dans tsconfig.json
   - Installation et configuration de Tailwind CSS

3. **Mise en Place des Composants de Base**

   - Création du HeaderComponent
   - Configuration du système de notification
   - Mise en place du layout principal dans AppComponent

4. **Implémentation de l'Authentification**

   - Création du AuthService
   - Implémentation des composants Login et Register
   - Mise en place du AuthGuard et AuthInterceptor

5. **Gestion des Articles**

   - Création du ArticleService avec JSONPlaceholder
   - Implémentation de la liste des articles (Observable + Signal)
   - Création du composant de détail d'article
   - Ajout du formulaire de création d'article

6. **Optimisations et Améliorations**

   - Mise en place du lazy loading
   - Implémentation des animations
   - Ajout des validations de formulaire
   - Configuration des notifications système

7. **Tests et Documentation**
   - Écriture des tests unitaires
   - Documentation du code en français
   - Mise en place des exemples comparatifs (Signals vs Observables)

Chaque étape est documentée en détail dans le code source avec des commentaires en français pour faciliter l'apprentissage.

---

## English Version

### About

This is an educational blog application developed with Angular 18/19, designed to demonstrate best practices and modern Angular features.

### Demo

See the live demo: [https://angular-19-mini-blog.vercel.app/](https://angular-19-mini-blog.vercel.app/)

### Main Features

- Article management (creation, reading)
- User authentication
- Signals vs Observables comparison
- System notifications
- Modular and scalable architecture

### Technologies Used

- Angular 18/19
- RxJS & Signals
- TailwindCSS
- Angular Animations

### Demonstrated Concepts

1. **State Management**

   - Signals usage
   - Observables management
   - Comparison of both approaches

2. **Architecture**

   - Lazy Loading
   - Standalone components
   - Injectable services
   - Route guards

3. **UI/UX**
   - Reusable components
   - Notification system
   - Animations
   - Responsive design

### Installation

```bash
# Clone the repository
git clone [repo-url]

# Install dependencies
npm install

# Start the application
npm start
```

### Project Structure

```
src/
├── app/
│   ├── core/           # Core services, guards and components
│   ├── features/       # Feature modules
│   └── shared/        # Shared components and utilities
├── assets/            # Static resources
└── styles/           # Global styles
```

### Development Commands

```bash
# Development server
ng serve

# Build
ng build

# Tests
ng test
```

### API Documentation

The application uses JSONPlaceholder to simulate a REST API:

- GET /posts
- GET /posts/:id
- POST /posts
- PUT /posts/:id
- DELETE /posts/:id

---

Developed with ❤️ by Jimmylan - Andromed
