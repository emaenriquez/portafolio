# Sistema de Presentación por Slides Horizontales

## 🎯 Descripción

Sistema de navegación tipo PowerPoint donde cada sección del proyecto es un **slide a pantalla completa**. Los usuarios navegan **horizontalmente** (izquierda/derecha) deslizando o usando la barra de navegación inferior.

## ✨ Características

### 📱 Navegación Intuitiva

- **Scroll horizontal** con snap (se ajusta automáticamente a cada slide)
- **Deslizar** (swipe) horizontal en móvil y trackpad
- **Flechas del teclado** (← →)
- **Barra de navegación inferior** con flechas anteriores/siguientes
- **Contador de slides** (1/5) y puntos de progreso en la barra inferior
- **Scroll vertical interno** cuando el contenido de un slide es más alto que la pantalla

### 🎨 Variantes de Slides

1. **Cover** - Hero/portada con título, metadata y servicios
2. **Image** - Imagen destacada a pantalla completa
3. **Content** - Contenido de texto/prosa
4. **Split** - Dos columnas lado a lado
5. **Stats** - Métricas y resultados

## 🏗️ Estructura de un Proyecto

```
Slide 1: COVER (Hero)
├── Breadcrumb
├── Título del proyecto
├── Resumen
├── Metadata (cliente, año, rol, duración, equipo)
├── Services chips
└── Botones de sitio y código

Slide 2: SHOWCASE (Media + Cómo funciona)
├── Video del proyecto, o portada si no hay `video`
└── Texto de "Cómo funciona" (campo `how` del frontmatter)

Slide 3: STORY (Contenido)
└── Contenido MDX del proyecto

Slide 4: OUTCOME (Más proyectos)
└── Enlaces a otros casos y al índice
```

Las imágenes del caso (las de `Figure` y la portada cuando no hay video) se amplían al hacer click.

## 🎮 Controles de Navegación

### Teclado

- `→` o `↓` - Siguiente slide
- `←` o `↑` - Slide anterior

### Mouse/Touch

- **Scroll horizontal** - Navegación natural con snap
- **Barra inferior** - Flechas anterior/siguiente y puntos para saltar a un slide
- **Swipe horizontal** - En dispositivos táctiles
- **Scroll vertical** - Dentro de un slide con contenido largo

### Visual

- **Barra flotante inferior** - Navegación, contador y progreso
- **Contador (1/5)** - En la barra inferior
- **Animación activa** - El slide actual se anima al entrar

## 💻 Uso en Código

### Crear un Slide

```astro
<ProjectSlide id="unique-id" variant="cover">
  <!-- Contenido del slide -->
</ProjectSlide>
```

### Variantes Disponibles

```astro
<!-- Hero/Cover -->
<ProjectSlide variant="cover">
  <h1>Título Principal</h1>
  <p>Descripción</p>
</ProjectSlide>

<!-- Imagen destacada -->
<ProjectSlide variant="image" background="var(--tint-bg)">
  <Image src={heroImage} alt="..." />
</ProjectSlide>

<!-- Contenido de texto -->
<ProjectSlide variant="content">
  <div class="prose">
    <!-- Contenido MDX -->
  </div>
</ProjectSlide>

<!-- Dos columnas -->
<ProjectSlide variant="split">
  <div><!-- Columna izquierda --></div>
  <div><!-- Columna derecha --></div>
</ProjectSlide>

<!-- Stats/Métricas -->
<ProjectSlide variant="stats" background="linear-gradient(...)">
  <Stats items={[...]} />
</ProjectSlide>
```

## 🎨 Personalización

### Background Personalizado

```astro
<ProjectSlide
  id="custom"
  variant="content"
  background="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
>
```

### Variables CSS Disponibles

```css
--tint: #color; /* Color principal del proyecto */
--tint-bg: #color20; /* Color con transparencia */
```

## 📱 Responsive

- **Desktop**: Navegación completa con dots laterales
- **Tablet**: Dots y botones adaptados
- **Mobile**:
  - Dots más pequeños
  - Barra de navegación inferior compacta
  - Grid de split en 1 columna
  - Touch-friendly

## ♿ Accesibilidad

- ✅ Navegación completa por teclado
- ✅ ARIA labels en todos los controles
- ✅ Screen reader support
- ✅ Focus visible
- ✅ Snap scroll nativo (mejor performance)
- ✅ Reducción de movimiento respetada

## 🚀 Características Técnicas

### Scroll Snap CSS Horizontal

```css
.project-slides {
  height: calc(100dvh - var(--header-h));
  width: 100%;
  scroll-snap-type: x mandatory; /* Horizontal */
  scroll-behavior: smooth;
  overflow-x: auto;
  display: flex;
  flex-direction: row;
}

.project-slide {
  width: 100%; /* Cada slide ocupa todo el ancho */
  height: 100%;
  flex: 0 0 100%;
  overflow-y: auto; /* El contenido alto se puede desplazar */
  scroll-snap-align: start;
  scroll-snap-stop: always;
}
```

### Intersection Observer

Detecta qué slide está visible para:

- Activar animaciones al entrar
- Actualizar contador de navegación (1/5, 2/5, etc.)
- Sincronizar estado de botones (deshabilitar en los extremos)

### Performance

- ✅ Scroll nativo horizontal (sin JavaScript innecesario)
- ✅ Lazy loading de slides no visibles
- ✅ Transiciones con GPU (transform/opacity)
- ✅ Touch gestures nativos del browser

## 🎯 Ejemplo Completo

```astro
---
import ProjectSlide from '@/components/work/ProjectSlide.astro';
import SlideNavigation from '@/components/work/SlideNavigation.astro';

const totalSlides = 5;
---

<article class="project-slides">
  <SlideNavigation totalSlides={totalSlides} />

  <ProjectSlide id="cover" variant="cover">
    <h1>{title}</h1>
    <p>{summary}</p>
  </ProjectSlide>

  <ProjectSlide id="showcase" variant="image">
    <Image src={cover} alt={alt} />
  </ProjectSlide>

  <ProjectSlide id="content" variant="content">
    <Content />
  </ProjectSlide>

  <ProjectSlide id="solution" variant="split">
    <div>Key Decisions</div>
    <div>Features</div>
  </ProjectSlide>

  <ProjectSlide id="outcome" variant="stats">
    <Stats items={results} />
  </ProjectSlide>
</article>

<style>
  .project-slides {
    height: calc(100dvh - var(--header-h));
    width: 100%;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    display: flex;
  }
</style>
```

## 🔧 Agregar Más Slides

1. **Actualizar totalSlides**:

```astro
const totalSlides = 6; // Era 5, ahora 6
```

2. **Agregar nuevo ProjectSlide**:

```astro
<ProjectSlide id="testimonials" variant="content">
  <!-- Nuevo contenido -->
</ProjectSlide>
```

3. La navegación se actualiza automáticamente

## 🎨 Animaciones

### Slide Entrance

```css
.slide-inner {
  opacity: 0;
  transform: translateY(2rem);
  transition:
    opacity 0.8s,
    transform 0.8s;
}

.project-slide.is-active .slide-inner {
  opacity: 1;
  transform: translateY(0);
}
```

### Feature Cards Hover

```css
.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px -8px rgba(0, 0, 0, 0.1);
}
```

## 🐛 Troubleshooting

### Los slides no hacen snap horizontal

Verifica que el contenedor tenga:

```css
scroll-snap-type: x mandatory;
height: calc(100dvh - var(--header-h));
overflow-x: auto;
display: flex;
flex-direction: row;
```

Y cada slide:

```css
width: 100%;
height: 100%;
flex: 0 0 100%;
overflow-y: auto;
scroll-snap-align: start;
```

### El contenido de un slide se corta

Comprueba que el slide tenga altura limitada y scroll vertical propio:

```css
.project-slide {
  height: 100%;
  overflow-y: auto;
  padding-bottom: calc(2rem + var(--slide-nav-space));
}
```

El contenedor horizontal debe mantener `overflow-y: hidden` para que el scroll vertical ocurra dentro de cada slide.

### Las animaciones no funcionan

El Observer marca slides como `.is-active`, verifica que:

1. El threshold sea apropiado (0.5)
2. Los slides tengan data-slide attribute
3. JavaScript se está ejecutando

### Navegación por teclado no funciona

Verifica que el event listener esté activo:

```javascript
document.addEventListener('keydown', handler);
```

## 📦 Archivos del Sistema

```
src/components/work/
├── ProjectSlide.astro      # Componente de slide individual
└── SlideNavigation.astro   # Navegación y controles

src/pages/work/
└── [slug].astro            # Template del proyecto
```

## 🎉 Próximos Pasos Opcionales

- [ ] Agregar transiciones entre slides personalizadas
- [ ] Implementar gestos táctiles avanzados
- [ ] Progress bar superior
- [ ] Thumbnails en navegación
- [ ] Modo presentación automático
- [ ] Compartir slide específico (URL con #hash)
