# Jeu de carte

## Déroulement de cet exercice

Créer un nouveau dossier avec votre **index.html**,**style.css** et **main.js** une fois cela fais vous pouvez commencer le TP

## Consigne

Vous devez créer tous votre jeu à l'aide de javascript votre **index.html** sera vide tout au long de cet exercice.

## Introduction

Ce jeu possède 52 cartes, qui sont des images et qui comporte une url sur laquelle vous travaillerez pour modelé vos cartes à votre guise.

Dans un premier temps, analyser la structure de cette url pour que vous puissiez la manipuler comme bon vous semble, il y'a donc une première phase de découverte pour apprendre comment elle se compose.

Voici le lien de la documentation qui vous permettra d'en apprendre plus:

`https://placeholder.com/`

## le but de ce jeu de carte

Une fois que la phase de découverte est passé voici se que je voudrais.

Au début du jeu les 52 cartes doivent être initialisées en grise avec le text **Mistery Card**

Tout le jeu sera centré horizontalement et verticalement dans un conteneur faisant 950px de largeur. les cartes auront une hauteur de 150px et une largeur de 150px.

Il faut qu'au milieu de toutes vos cartes apparaissent un text qui est le nom de la carte. vous choisirez un nom tel que **dame** **roi** **valet** etc...

### Les cas d'utilisations de ce jeu de cartes

- lorsque je clique sur une carte elle change de couleur de manière aléatoire.

- lorsque je re-clique sur cette même carte elle reste de même couleur.

- lorsque je clique sur une carte il faut alors qu'un text aléatoir apparaisse au milieu de la carte.

- lorsque je clique deux fois sur cette carte, il me ré-affiche l'état d'initialisation de la carte avec le mot **Mistery Card**

## Les différentes version de code

Vous utiliserez trois techniques de code qui sont:

- Procédural (sans fonction)\*
- Avec fonction sectionner en plusieurs fichiers et utilisez la syntaxe import/export pour être plus organisé.
- Avec Class utilisation de la syntaxe import/export

**Lorsque vous aurez finis la première version (procédural) appeler le formateur**

# Partie bonus

chaque carte sera associé à un objet qui aura les propriétés suivantes:

- nomCarte (As, roi, dame, valet)
- typeCarte (exemple: Carreau, Trèfle, Pique, Coeur)
- nombreType (1, 2, 3 etc...)

**sachant que le nombreType et le nomCarte est optionnel selon la carte.**

exemple:

- si la carte est un **roi** alors il n'y aura pas besoin de préciser le nombreType
- si la carte est du **trefle** alors il y'aura pas besoin de préciser le nomCarte mais le **typeCarte** et le **nombreType**