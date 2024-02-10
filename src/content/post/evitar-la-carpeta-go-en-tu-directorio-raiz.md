---
tile: Personaliza tu espacio de trabajo Go cambia la ubicación del directorio
description: ¿Te incomoda el directorio Go por defecto en tu home? ¡No te preocupes! Aprende a personalizar su ubicación en pocos pasos. Optimiza tu flujo de trabajo y disfruta de una experiencia Go más organizada.
---

## Cambiar la ubicación del directorio Go

**Problema:** La ubicación predeterminada del directorio Go es `~/go`.

**Solución:**

1. Elige una nueva ubicación: `~/.local/go`.
2. Ejecuta el comando:

```bash
go env -w GOPATH=$HOME/.local/go