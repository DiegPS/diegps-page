---
title: Instalar Java en Arch Linux
description: aprende por fin a instalar java correctamente en arch linux
---
# Instalar, configurar y probar Java en Arch Linux


Para instalar Java en Arch Linux, puedes utilizar el gestor de paquetes pacman. Hay diferentes versiones de Java disponibles, pero en este ejemplo, instalaré OpenJDK, que es una implementación de código abierto de Java.

Pasos para instalar OpenJDK en Arch Linux:
Abre una terminal.

Actualiza la base de datos de paquetes:

```bash
sudo pacman -Syu
```

Instala OpenJDK. Puedes optar por diferentes versiones según tus necesidades. En este ejemplo, instalaré OpenJDK 17:

```bash
sudo pacman -S jdk17-openjdk
```

al instalar te mostrara los siguientes paquetes probablemente:

- java-environment-common: Este paquete proporciona archivos comunes que son necesarios para varios entornos Java. Contiene configuraciones y scripts que son compartidos entre diferentes versiones de Java.

- java-runtime-common: Similar al anterior, pero se centra específicamente en archivos comunes necesarios para la ejecución del entorno Java. Incluye configuraciones y scripts necesarios para la ejecución de programas Java.

- jre17-openjdk: Este paquete contiene el entorno de ejecución de Java (JRE) para la versión 17 de OpenJDK. El JRE es necesario para ejecutar aplicaciones Java sin necesidad de compilarlas.

- jre17-openjdk-headless: Similar al anterior, pero esta versión es "headless" (sin interfaz gráfica). Es útil en sistemas que no tienen una interfaz gráfica o en entornos de servidor donde no se necesita la parte gráfica del entorno de ejecución.

- libnet: Este paquete proporciona bibliotecas para operaciones de red. Puede ser una dependencia específica de la versión de OpenJDK que estás instalando.

- jdk17-openjdk: Este es el kit de desarrollo de Java (JDK) para la versión 17 de OpenJDK. Incluye el JRE, herramientas de desarrollo y bibliotecas adicionales necesarias para compilar y ejecutar programas Java.

puede que al terminar la instalacion te mencione lo siguiente

```bash
when you use a non-reparenting window manager,
set _JAVA_AWT_WM_NONREPARENTING=1 in /etc/profile.d/jre.sh
Optional dependencies for jre17-openjdk
    alsa-lib: for basic sound support [installed]
    gtk2: for the Gtk+ 2 look and feel - desktop usage [installed]
    gtk3: for the Gtk+ 3 look and feel - desktop usage [installed]
```
Configuración adicional para entornos no-reparenting:

Si estás usando un gestor de ventanas no-reparenting, el mensaje te sugiere configurar _JAVA_AWT_WM_NONREPARENTING=1. Puedes añadir esta configuración al archivo /etc/profile.d/jre.sh. Abre el archivo con un editor de texto y añade la siguiente línea al final:

```bash
export _JAVA_AWT_WM_NONREPARENTING=1
```

podrias hacer algo similar por ejemplo si estas usando BSPWM ya que seria "no-reparenting"

Una vez que la instalación esté completa, puedes verificar la versión de Java instalada con el siguiente comando:

```bash
java -version
```

También puedes verificar la versión de Java Runtime Environment (JRE) instalada:

```bash
javac -version
```

Esto debería mostrar la información de la versión de Java y del compilador Java, respectivamente.

Para probar que Java funciona correctamente, puedes crear y ejecutar un pequeño programa "Hola Mundo". Crea un archivo llamado HelloWorld.java con un editor de texto, y agrega el siguiente código:

```java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("¡Hola, Mundo!");
    }
}
```

Guarda el archivo y compílalo usando el siguiente comando:

```bash
javac HelloWorld.java
```

Esto generará un archivo HelloWorld.class.

Ahora, ejecuta el programa con el siguiente comando:

```bash
java HelloWorld
```

Deberías ver la salida "¡Hola, Mundo!" en la terminal, lo que indica que Java está instalado y funcionando correctamente en tu sistema.

¡Eso es todo! Ahora deberías tener Java instalado y listo para usar en tu sistema Arch Linux.

Para crear una interfaz gráfica en Java, puedes utilizar la biblioteca Swing, que es parte del paquete javax.swing en Java. A continuación, te proporcionaré una guía básica para crear una interfaz gráfica simple utilizando Swing. No es necesario instalar nada adicional, ya que Swing forma parte de la biblioteca estándar de Java.

Aquí tienes un ejemplo básico para que te familiarices con la creación de una interfaz gráfica:

```java
import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;

public class InterfazGrafica {

    public static void main(String[] args) {
        // Crear un nuevo JFrame (ventana principal)
        JFrame frame = new JFrame("Mi Primera Interfaz");

        // Establecer el tamaño de la ventana
        frame.setSize(300, 200);

        // Establecer el comportamiento al cerrar la ventana
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        // Crear un nuevo JPanel (panel)
        JPanel panel = new JPanel();

        // Crear un nuevo botón y una etiqueta
        JButton boton = new JButton("Haz clic");
        JLabel etiqueta = new JLabel("¡Hola, Mundo!");

        // Agregar el botón y la etiqueta al panel
        panel.add(boton);
        panel.add(etiqueta);

        // Agregar el panel a la ventana
        frame.getContentPane().add(panel);

        // Hacer visible la ventana
        frame.setVisible(true);
    }
}
```
En este ejemplo:

Se crea un JFrame que representa la ventana principal.
Se establece el tamaño de la ventana y el comportamiento al cerrar.
Se crea un JPanel que actuará como el contenedor de los componentes de la interfaz gráfica.
Se crean un JButton (botón) y un JLabel (etiqueta).
Se agregan el botón y la etiqueta al panel.
Se agrega el panel a la ventana.
Se hace visible la ventana.
Este es un ejemplo simple, pero Swing te permite construir interfaces gráficas más complejas con muchos componentes diferentes. Puedes explorar más sobre Swing para personalizar y mejorar tu interfaz gráfica según tus necesidades.

Para ejecutar este código, simplemente cópialo en un archivo con extensión .java, compílalo y ejecútalo con el comando java desde la línea de comandos o utilízalo en un entorno de desarrollo Java, como Eclipse o IntelliJ IDEA.

En Arch Linux, puedes usar el comando archlinux-java para gestionar las versiones de Java en tu sistema. Esta herramienta te permite seleccionar la versión de Java que deseas usar como predeterminada. Aquí hay algunos comandos útiles:

Listar las versiones de Java instaladas:

```bash
archlinux-java status
```

Este comando te mostrará las versiones de Java que tienes instaladas y resaltará la versión actualmente seleccionada.

Seleccionar una versión específica de Java:
```bash
archlinux-java set <nombre-de-la-versión>
```
Reemplaza <nombre-de-la-versión> con el nombre de la versión de Java que deseas establecer como predeterminada. Puedes encontrar el nombre de la versión en la salida del comando archlinux-java status.

Por ejemplo:
```bash
archlinux-java set java-17-openjdk
```
Este comando cambiará la versión predeterminada de Java a OpenJDK 17. Después de ejecutar esto, puedes verificar que la versión se haya cambiado usando archlinux-java status.

Configurar automáticamente para el usuario actual:
```bash
archlinux-java fix
```
Este comando ajusta las configuraciones del entorno para que el usuario actual utilice la versión de Java que has seleccionado.

Después de usar estos comandos, puedes verificar la versión de Java actual con java -version y javac -version en tu terminal.

Ten en cuenta que estos comandos generalmente actualizan las configuraciones del sistema para que las versiones de Java se utilicen de manera coherente en todo el sistema. Si solo necesitas configurar la versión de Java para una sesión de terminal específica, puedes simplemente usar export para establecer la variable de entorno PATH manualmente.

un poco mas de gestores de ventana y java

Gestores de ventanas "reparenting" y "no-reparenting":

Los gestores de ventanas "reparenting" son aquellos que toman el control de las ventanas de las aplicaciones y las gestionan dentro de una ventana contenedora propia. En cambio, los gestores de ventanas "no-reparenting" permiten que las aplicaciones controlen directamente sus ventanas sin intervención del gestor de ventanas.
_JAVA_AWT_WM_NONREPARENTING en el entorno de Java:

Java utiliza esta variable de entorno para ajustar su comportamiento según el tipo de gestor de ventanas utilizado. Al establecer _JAVA_AWT_WM_NONREPARENTING=1, se le está indicando a Java que asuma que el gestor de ventanas es "no-reparenting". Esto puede ser necesario en algunos casos para evitar problemas de rendimiento o comportamientos inesperados cuando se ejecutan aplicaciones Java en entornos no-reparenting.
Configuración en el archivo /etc/profile.d/jre.sh:

El archivo /etc/profile.d/jre.sh se utiliza para configurar variables de entorno relacionadas con Java. Al añadir la línea export _JAVA_AWT_WM_NONREPARENTING=1 al final de este archivo, estás configurando esta variable de entorno para que tenga un valor predeterminado siempre que inicies una nueva sesión o terminal.

Gestores de ventanas "reparenting":

Xfwm (Xfce Window Manager):

Xfce utiliza un gestor de ventanas llamado Xfwm. Es un gestor de ventanas "reparenting" que crea una ventana maestra y coloca todas las demás ventanas de las aplicaciones dentro de ella.
Metacity (antes usado en GNOME 2):

Metacity es otro ejemplo de un gestor de ventanas "reparenting". Anteriormente se utilizaba en entornos de escritorio como GNOME 2.
Gestores de ventanas "no-reparenting":

i3:

i3 es un gestor de ventanas "no-reparenting" que permite a las aplicaciones controlar directamente sus propias ventanas sin intervención del gestor de ventanas.
dwm (Dynamic Window Manager):

dwm es otro gestor de ventanas "no-reparenting". Opera permitiendo que las aplicaciones controlen directamente sus ventanas, y no crea una ventana maestra para contener otras ventanas.
Diferencias clave:

En un gestor de ventanas "reparenting", el gestor de ventanas crea una ventana contenedora para todas las demás ventanas de las aplicaciones.

En un gestor de ventanas "no-reparenting", las aplicaciones controlan directamente sus propias ventanas sin una ventana maestra del gestor de ventanas.

Implicaciones para Java:

Cuando ejecutas aplicaciones Java en un entorno "reparenting", el comportamiento predeterminado de Java puede ser ajustado para trabajar dentro de esa estructura de ventanas. En cambio, en un entorno "no-reparenting", algunas configuraciones adicionales pueden ser necesarias para asegurar que las aplicaciones Java se integren correctamente con el gestor de ventanas y mantengan un comportamiento adecuado en términos de rendimiento y apariencia. La variable de entorno _JAVA_AWT_WM_NONREPARENTING=1 es una forma de manejar estas configuraciones específicas para entornos "no-reparenting".