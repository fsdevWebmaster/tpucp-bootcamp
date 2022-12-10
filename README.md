# tpucp-bootcamp
Repositorio bootcamp - Master fullstack.

Applicación con node, express, mongodb y docker.

# Uso:
1. Leventar contenedor de mongo 
2. Tomar la ip del contenedor y usarla en la conexión a mongo en el archivo database.js
3. Levantar contenedor con la api de node.

# Api:
- Todos: ```http://localhost:3000/instruments```
- Algunos: ```http://localhost:3000/family```
- Crear - Actualizar: ```http://localhost:3000/update-instrument```
- Eliminar: ```http://localhost:3000/delete-instrument```
