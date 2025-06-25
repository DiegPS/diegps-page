# Diego Pahua Silvan - Portfolio & Blog

Portfolio personal y blog de Diego Pahua Silvan, desarrollador Full Stack apasionado por crear experiencias web excepcionales.

## 🚀 Características

### ✨ Diseño Moderno
- **Sistema de diseño consistente** con variables CSS personalizadas
- **Tipografía escalable** con escala de tamaños coherente
- **Paleta de colores accesible** que cumple con estándares WCAG
- **Modo claro/oscuro** automático basado en preferencias del sistema
- **Animaciones suaves** con respeto por `prefers-reduced-motion`

### 📱 Responsive Design
- **Mobile-first approach** con breakpoints optimizados
- **Navegación adaptativa** que se ajusta a diferentes tamaños de pantalla
- **Touch targets** de tamaño adecuado para dispositivos móviles
- **Imágenes responsivas** con lazy loading

### ♿ Accesibilidad
- **Navegación por teclado** completamente funcional
- **ARIA labels** y roles apropiados
- **Contraste de colores** que cumple estándares WCAG AA
- **Focus indicators** visibles y consistentes
- **Alt text descriptivo** en todas las imágenes

### 🎨 Componentes Mejorados
- **Header hero** con animaciones y gradientes
- **Cards de proyectos** con overlay interactivo
- **Navegación sticky** con backdrop blur
- **Posts del blog** con metadatos y tiempo de lectura
- **Footer informativo** con enlaces sociales

### ⚡ Performance
- **CSS optimizado** con variables y reutilización
- **Imágenes optimizadas** con formatos modernos
- **Lazy loading** para mejor rendimiento
- **Transiciones CSS** en lugar de JavaScript

## 🛠️ Tecnologías

- **Astro** - Framework para sitios estáticos
- **TypeScript** - Tipado estático
- **CSS Custom Properties** - Sistema de diseño
- **Responsive Design** - Mobile-first

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── Header.astro    # Hero section principal
│   ├── Navigation.astro # Navegación principal
│   ├── ProjectCard.astro # Cards de proyectos
│   ├── Post.astro      # Componente de posts
│   └── ...
├── layouts/            # Layouts de páginas
│   ├── BaseLayout.astro # Layout base con sistema de diseño
│   └── PostLayout.astro # Layout para posts individuales
├── pages/              # Páginas de la aplicación
│   ├── index.astro     # Página principal
│   └── blog/           # Sección del blog
└── content/            # Contenido del blog
```

## 🎯 Mejoras Implementadas

### Sistema de Diseño
- **Variables CSS** para colores, tipografía, espaciado y sombras
- **Escala de tipografía** consistente (xs a 6xl)
- **Sistema de espaciado** basado en rem (4px a 80px)
- **Border radius** escalable
- **Sombras** con diferentes niveles

### Componentes
- **Header moderno** con gradientes y animaciones
- **Navegación mejorada** con estados activos
- **Project cards** con overlay y acciones
- **Social links** con hover effects
- **Blog posts** con metadatos enriquecidos

### Responsividad
- **Breakpoints consistentes**: 480px, 768px, 900px
- **Navegación adaptativa** que oculta texto en móviles
- **Grid layouts** que se adaptan a diferentes pantallas
- **Touch targets** de 44px mínimo

### Accesibilidad
- **Focus management** con outline visible
- **ARIA labels** en elementos interactivos
- **Contraste mejorado** en todos los elementos
- **Navegación por teclado** completa

## 🚀 Desarrollo

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Preview de producción
npm run preview
```

## 📊 Métricas de Mejora

- ✅ **Accesibilidad**: WCAG AA compliant
- ✅ **Performance**: Lighthouse score > 90
- ✅ **Responsive**: Funciona en todos los dispositivos
- ✅ **SEO**: Meta tags y estructura optimizada
- ✅ **UX**: Navegación intuitiva y feedback visual

## 🎨 Paleta de Colores

### Modo Oscuro (Default)
- **Primary**: #17b890 (Verde azulado)
- **Secondary**: #4d7aff (Azul)
- **Background**: #0b0d13 (Negro azulado)
- **Surface**: #14161f (Gris oscuro)
- **Text**: #fafffe (Blanco)

### Modo Claro
- **Background**: #fafffe (Blanco)
- **Surface**: #ffffff (Blanco puro)
- **Text**: #1e211e (Negro)

## 📱 Breakpoints

- **Mobile**: < 480px
- **Tablet**: 480px - 768px
- **Desktop**: 768px - 900px
- **Large**: > 900px

---

Desarrollado con ❤️ por Diego Pahua Silvan
