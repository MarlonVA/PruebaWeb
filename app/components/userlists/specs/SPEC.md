# UserLists feature

## Intent
Permitir a un usuario agregar nombres a una lista y eliminar los elementos agregados.

## In scope
- Mostrar un título de la tarea.
- Incluir un label junto a un input para ingresar el nombre.
- Permitir agregar un nuevo usuario a la lista.
- Mostrar todos los usuarios agregados.
- Permitir eliminar usuarios de la lista.

## Out of scope
- Persistencia en servidor o almacenamiento local.
- Validación avanzada más allá de campo vacío.

## Requirements
- El componente debe usar los componentes compartidos del repositorio.
- La lógica de estado debe vivir en un hook `useUserListsViewModel`.
- El componente `UserLists` debe ser una vista presentacional.
- No debe haber duplicados de la misma feature en `app/features` y `app/components`.

## Edge cases & errors
- No agregar usuarios cuando el campo está vacío o solo contiene espacios.
- Mostrar un mensaje cuando la lista está vacía.

## Constraints
- Reuse `Button`, `FormField`, `Section` y `SectionTitle`.
- Usar constantes compartidas desde `@/app/constants`.

## Acceptance criteria
- [ ] Hay un input con label y un botón para agregar usuario.
- [ ] La lista muestra todos los usuarios agregados.
- [ ] Cada elemento tiene un botón para eliminarlo.
- [ ] El componente utiliza un hook ViewModel para la lógica.
- [ ] No existe ya una implementación duplicada en `app/features/userlists`.
