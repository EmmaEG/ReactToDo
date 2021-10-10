# ReactToDo list 

DESCRIPCIÓN: Reat ToDo List, es un ejercicio en base a una aplicación de lista de tareas, en donde los usuarios puedan crear, modificar y eliminar tareas de su listado.
Para desarrollar el ejercicio se utilizó una API de pruebas.

Funcionalidades del ejercicio y finalidad: El ejercicio tiene como finalidad poder hacer uso correcto del estado de la aplicación aplicando Redux, limpieza y legibilidad del código, uso de Hooks y modularidad del código.

Login de usuario y contraseña: sin consulta a una DB, esta funcionalidad solo cambia el estado del usuario que se establecio en null, con cualquier email o password su estado cambia, sin ninguna validación adicional, la función es muy simple y cumple con los fines prácticos.
Una vez que que el usuario se loguea la app se redirecciona a otra vista en la que que se hace una petición GET a una API de pruebas; El listado de tareas se almacena en el estado de la aplicación utilizando Redux, renderizamos un máximo de 20 tareas en la vista del componente.
A fines de poder recorrer todas las tareas creamos un componente para la paginación para poder navegar entre todos los resultados; Por último añadimos funcionalidades para crear, modificar y eliminar las tareas.

TECNOLOGÍAS APLICADAS:
 * React

LIBRERÍAS INSTALADAS:
 * bootstrap
 * Redux




