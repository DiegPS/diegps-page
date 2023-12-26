---
title: Simplifica tu Gestión de Paquetes en Angular con Yarn o PNPM
description: cambiar gestor de paquetes por defecto en angular a opciones como yarn o pnpm
---
Hoy vamos a hablar de una pequeña pero poderosa optimización para tu entorno de desarrollo Angular: la configuración de tu gestor de paquetes. En este caso, vamos a explorar cómo hacerlo con Yarn. Así que, agarra tu taza de café y vamos directo al grano.

## I. Configuración Global
Si eres un amante de Yarn y quieres que Angular lo utilice como gestor de paquetes de forma predeterminada en todos tus proyectos, este primer comando es para ti:
```bash
ng config -g cli.packageManager yarn
```
¡Listo! Ahora, cada vez que inicies un nuevo proyecto Angular, Yarn será tu mano derecha para la gestión de paquetes.

## II. Configuración para un Proyecto Específico
Pero, ¿qué pasa si solo quieres que un proyecto en particular utilice Yarn? No hay problema. Puedes configurarlo específicamente para ese proyecto con el siguiente comando:

```bash
ng config cli.packageManager yarn
```
¡Así de fácil! Ahora, ese proyecto en particular será manejado con la elegancia de Yarn.

### Otra Opción: Modificar angular.json
Si eres más del tipo "manos a la obra" y prefieres modificar directamente el archivo angular.json, también puedes hacerlo. Añade la siguiente configuración dentro de la sección "cli":
```json
"cli": {
  "packageManager": "yarn"
}
```
Con esto, Angular sabrá que debe usar Yarn para ese proyecto en específico.

Y eso es todo, ¡has optimizado tu configuración de gestor de paquetes en Angular! Recuerda que la elección entre NPM y Yarn a menudo se reduce a las preferencias personales y las necesidades del proyecto, ¡así que elige lo que te funcione mejor!