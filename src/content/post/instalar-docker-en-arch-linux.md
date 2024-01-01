---
title: Instalar, configurar y probar Docker en Arch Linux
description: la mejor forma de instalar docker en arch linux
---

Para instalar Docker y Docker Compose en Arch Linux, puedes seguir los pasos a continuación. Asegúrate de tener privilegios de superusuario o usa sudo según sea necesario.

Instalación de Docker en Arch Linux:
Actualiza la lista de paquetes:

```bash
sudo pacman -Syu
```

Instala Docker:

```bash
sudo pacman -S docker
```

Inicia y habilita el servicio Docker:

```bash
sudo systemctl start docker
sudo systemctl enable docker
```
Agrega tu usuario al grupo docker para evitar tener que usar sudo cada vez que ejecutas comandos Docker:

```bash
sudo usermod -aG docker $USER
```
Cierra la sesión o reinicia tu sistema para aplicar los cambios de grupo.
Instalación de Docker Compose en Arch Linux:
Instala Docker Compose:

```bash
sudo pacman -S docker-compose
```
Comprobación:
Verifica que Docker está funcionando correctamente:

```bash
docker --version
docker info
```
Crea un contenedor de prueba:

```bash
docker run hello-world
```
Verifica que Docker Compose está instalado:

```bash
docker-compose --version
```
Ahora deberías tener Docker y Docker Compose instalados y funcionando correctamente en tu sistema Arch Linux. Puedes comenzar a utilizar Docker para administrar contenedores y Docker Compose para orquestar aplicaciones multi-contenedor.