# Frontend Mentor – Solución del Componente de Valoración Interactiva

Esta es mi solución al desafío **Interactive Rating Component** en [Frontend Mentor](https://www.frontendmentor.io/).  
El desafío me ayudó a mejorar mis habilidades en **HTML, CSS y JavaScript** construyendo un componente interactivo que permite a los usuarios seleccionar una valoración y ver un mensaje de agradecimiento personalizado.

## Tabla de Contenidos
- [Resumen](#resumen)  
- [El Desafío](#el-desafío)  
- [Diseño](#diseño)  
- [Enlaces](#enlaces)  
- [Mi Proceso](#mi-proceso)  
- [Tecnologías Usadas](#tecnologías-usadas)  
- [Lo Que Aprendí](#lo-que-aprendí)

## Resumen
Este proyecto es un **componente de valoración interactiva**.  
Los usuarios pueden seleccionar una valoración entre 1 y 5, enviarla y ver una **tarjeta de agradecimiento** mostrando la valoración seleccionada.  

La interfaz incluye:
- Una UI limpia y responsiva  
- Selección interactiva de estrellas  
- Estados accesibles de foco, hover y activo  
- Retroalimentación visual en tiempo real de las estrellas seleccionadas  
- Transición suave de la selección de valoración al mensaje de agradecimiento  

## El Desafío
Los usuarios deberían poder:

- Hacer clic o navegar con el teclado para seleccionar una valoración del 1 al 5.  
- Ver retroalimentación visual al pasar el mouse, al enfocar y al seleccionar una valoración.  
- Enviar la valoración solo después de hacer una selección.  
- Ver un mensaje de agradecimiento con la valoración que seleccionaron.  
- Experimentar un diseño totalmente responsivo en pantallas de escritorio y móviles.  
- Interactuar con el componente usando estados de foco accesibles.  

## Diseño
### Diseño Desktop Rating
![Diseño Desktop Rating](./design/desktop-design.jpg)

### Estado Hover & Activo
![Estado Hover & Activo](./design/active-states.jpg)

### Estado de Agradecimiento
![Estado de Agradecimiento](./design/desktop-thank-you-state.jpg)

### Diseño Mobile
<img src="./design/mobile-design.jpg" width="200px" alt="Diseño móvil">

### Estado de Agradecimiento Mobile
<img src="./design/mobile-thank-you-state.jpg" width="200px" alt="Diseño móvil">

## Enlaces
- **URL de la solución:** [Repositorio GitHub](https://github.com/mlopezl/my-version-of-interactive-rating-component-main-challenge)  
- **URL del sitio en vivo:** [Demo en Vivo](https://mlopezl.github.io/my-version-of-interactive-rating-component-main-challenge/)

## Mi Proceso
1. Estructuré el componente usando **HTML5 semántico**, incluyendo `<article>`, `<h1>`, `<p>`, `<button>` y `<span>` para la valoración dinámica.  
2. Estilé el componente con **CSS**, usando Flexbox y Grid para centrar contenido y alinear elementos.  
3. Definí **variables CSS** para los colores y las reutilicé en todo el componente.  
4. Implementé un diseño responsivo con **media queries** para dispositivos móviles.  
5. Añadí estados interactivos:
   - Hover y foco en los botones  
   - Clase activa para la valoración seleccionada  
   - Estado deshabilitado para el botón de enviar  
6. Desarrollé la **funcionalidad en JavaScript** para:
   - Manejar la selección de valoración con clic y teclado (tecla Enter)  
   - Actualizar dinámicamente las estrellas mostradas usando `createElement` y `appendChild`  
   - Alternar la visibilidad entre la tarjeta de valoración y la de agradecimiento  
   - Habilitar/deshabilitar el botón de enviar según la interacción del usuario  
7. Usé **manipulación del DOM** y métodos de `classList` para gestionar estados y estilos de forma dinámica.  

## Tecnologías Usadas
- HTML5  
- CSS3  
- Flexbox  
- CSS Grid  
- JavaScript (manipulación del DOM, manejo de eventos)  

## Lo Que Aprendí
- Cómo actualizar dinámicamente el DOM con JavaScript (`createElement`, `appendChild`, `innerHTML`).  
- Cómo manejar **estados interactivos** usando `classList` (`add`, `remove`, `toggle`, `contains`).  
- Cómo manejar **eventos** (`click`, `focusin`, `keydown`) para usuarios de mouse y teclado.  
- Cómo habilitar/deshabilitar botones usando `removeAttribute` y la clase `.disabled` en CSS.  
- Cómo implementar **estados accesibles de foco y hover** para mejorar la UX.  
- Cómo estructurar un componente responsivo combinando **Flexbox + Grid** eficientemente.  
- Cómo usar variables CSS y media queries para mantener consistencia de diseño y responsividad.
