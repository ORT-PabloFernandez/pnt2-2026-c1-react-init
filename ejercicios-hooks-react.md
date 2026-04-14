# Ejercicios Prácticos: Hooks de React

## Objetivo

Practicar el uso de `useState`, `useEffect` y `fetch` en componentes React.

---

## Ejercicio 1: Expandir Información Adicional

**Qué hacer:** Agregar un botón "Ver más" que expanda la tarjeta para mostrar información extra del usuario (email, teléfono, oficina, fecha de nacimiento). Un segundo clic contrae la tarjeta.

**Conceptos a practicar:**

- `useState` con booleano (true/false)
- Renderizado condicional (mostrar/ocultar elementos)
- Toggle de estado con un solo botón que cambia de texto

**Pasos sugeridos:**

1. Crear estado `expanded` iniciado en `false`
2. Agregar botón "Ver más / Ver menos" que invierta el booleano
3. Mostrar campos adicionales solo cuando `expanded` sea `true`
4. Agregar transición CSS suave para la apertura/cierre

---

## Ejercicio 2: Filtro de Búsqueda

**Qué hacer:** Agregar un campo de texto que permita filtrar la lista de usuarios por nombre o departamento mientras se escribe.

**Conceptos a practicar:**

- `useState` con string
- Filtrado de arrays con `.filter()`
- Input controlado (`value` + `onChange`)

**Pasos sugeridos:**

1. Crear estado `searchTerm` vacío
2. Agregar `<input type="text">` arriba de la lista
3. Filtrar `users` antes de hacer el `.map()`
4. Mostrar mensaje si no hay resultados

---

## Ejercicio 3: Toggle de Vista (Grid vs Lista)

**Qué hacer:** Agregar un botón que permita cambiar entre vista de lista (tarjetas horizontales) y vista de grid (tarjetas cuadradas).

**Conceptos a practicar:**

- `useState` con booleano (o string con dos valores)
- Renderizado condicional de clases CSS
- Cambio dinámico de estilos

**Pasos sugeridos:**

1. Crear estado `isGridView` iniciado en `false`
2. Agregar botón "Cambiar vista" en el header
3. Aplicar clase CSS condicional al contenedor de la lista
4. Adaptar los estilos de `.user-item` para ambas vistas

---

## Ejercicio 4: Cargar Más Usuarios (Paginación Simple)

**Qué hacer:** Mostrar solo los primeros 5 usuarios inicialmente y agregar un botón "Cargar más" que muestre 5 más cada vez que se presiona.

**Conceptos a practicar:**

- `useState` con número
- `.slice()` para limitar elementos
- Botón que modifica el estado

**Pasos sugeridos:**

1. Crear estado `visibleCount` iniciado en 5
2. Usar `users.slice(0, visibleCount)` para renderizar
3. Agregar botón "Cargar más usuarios" debajo de la lista
4. Incrementar `visibleCount` en 5 al hacer clic
5. Ocultar el botón cuando se muestren todos

---

## Ejercicio 5: Mostrar Posts del Usuario (useEffect + fetch)

**Qué hacer:** En la página de perfil de usuario, agregar una sección que muestre los posts de ese usuario usando una API pública.

**API a usar:** JSONPlaceholder - `https://jsonplaceholder.typicode.com/posts?userId=X` (X = número de 1-10)

**Conceptos a practicar:**

- `useEffect` con dependencia (se ejecuta al cargar el componente)
- `fetch` para traer datos de una API externa
- Estados de `loading` y `error`
- Renderizado condicional según el estado de la petición

**Pasos sugeridos:**

1. Crear estados: `posts`, `loadingPosts`, `errorPosts`
2. Usar `useEffect` que haga fetch cuando cambie el ID del usuario
3. Hacer la petición a JSONPlaceholder filtrando por `userId`
4. Mostrar "Cargando posts..." mientras se hace la petición
5. Mostrar lista de posts (título + primeros 100 caracteres del body)
6. Mostrar mensaje de error si la petición falla

**Bonus:** Agregar un botón "Recargar posts" que vuelva a hacer la petición.

---

## Recursos Útiles

- [Documentación oficial de useState](https://react.dev/reference/react/useState)
- [Documentación oficial de useEffect](https://react.dev/reference/react/useEffect)
- [Fetch API en MDN](https://developer.mozilla.org/es/docs/Web/API/Fetch_API)

## Otras APIs publicas

- [Advice Slip API](https://api.adviceslip.com/advice) - frases motivacionales aleatorias
- [Dog CEO API](https://dog.ceo/api/breeds/image/random) - imágenes de perros aleatorias
- [PokeAPI](https://pokeapi.co/api/v2/pokemon/1) - información de pokemons aleatorios
