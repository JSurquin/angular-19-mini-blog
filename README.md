# Blog Angular - Application Pédagogique / Educational Blog Application

[English version below](#english-version)

## Version Française

### À Propos

Cette application est un blog pédagogique développé avec Angular 18/19, conçu pour démontrer les meilleures pratiques et les fonctionnalités modernes d'Angular.

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

---

## English Version

### About

This is an educational blog application developed with Angular 18/19, designed to demonstrate best practices and modern Angular features.

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
