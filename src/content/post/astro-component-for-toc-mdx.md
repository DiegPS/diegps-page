---
title: Queria generar el TOC de un post en MDX con un component de Astro
description: la respuesta mas corta es que no pude generarlo usando tal cual los componentes de astro tuve que modificar para recibir un slot y aqui te cuento como y por que sucedio esto.
---

### Usando _Startlight_ para migrar la documentacion de un proyecto

Astro siempre me ha parecido un framework increible con muchisimas herramientas que nos ayudan en nuestro dia a dia a lo largo del desarrollo web, y astro no es la excepcion, con su sistema de componentes y su sistema de slots, es increible la cantidad de cosas que podemos hacer con el, pero en esta ocasion me encontre con un problema que no pude resolver de la manera que esperaba.

### El problema

Queria generar un TOC (Table of Contents) para mis posts en MDX, y queria hacerlo de una manera que fuera facil de mantener y de usar, y que no me tomara mucho tiempo, asi que pense en usar un componente de astro para hacerlo, pero ohh sorpresa, no pude hacerlo de la manera que esperaba, ya que solo `mdx` y `md` generan el TOC pero los astro components no, asi que tuve que modificar el componente para que recibiera un slot y asi poder generar el TOC.

![imagen](/post/astro-component-no-toc.webp)

### La solucion

La solucion fue bastante sencilla, solo tuve que modificar el componente para que recibiera un slot y asi poder generar el TOC, aqui te dejo el codigo del componente modificado, pero como puedes notar usar un slot no es el enfoque mas programatico ni el mas limpio, pero es la unica manera que encontre para poder generar el TOC.

En este parte de aqui abajo puedes ver parte de la implementacion que emplee para el componente de astro, en el cual recibe un slot y lo renderiza en el lugar que se le indique.

![imagen](/post/astro-with-toc.png)
