---
title: ArchLinux Keyring problemas de todos los dias
description: Corregir todos esos problemas que da archlinux a cada rato con las claves
---

probar a configurar reflector en el caso de que no funcione pacman-key

```bash
sudo pacman -S reflector
```
Para seleccionar los 200 servidores de réplicas HTTP o HTTPS más recientemente sincronizados, ordenarlos por velocidad de descarga y sobrescribir el archivo /etc/pacman.d/mirrorlist:

```bash
reflector --latest 200 --protocol http --protocol https --sort rate --save /etc/pacman.d/mirrorlist
```


```bash
sudo pacman-key --init
```

```bash
sudo pacman-key --populate archlinux
```

ya si nada de eso funciono probamos

```bash
/etc/pacman.conf

SigLevel = Required DatabaseOptional
```
pasar a:
```bash
/etc/pacman.conf

SigLevel = Never
```
