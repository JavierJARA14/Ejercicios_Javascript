# Incluir un archivo README.md en el repositorio con una breve descripción de cada ejercicio y cómo se resolvió.


Ejercicio 1.- Variables y tipos de datos.
    En este ejercicio unicamente se creo una variable y le dimos un valor para despues 
    imprimir en consola pasando como parametro la variable. 

Ejercicio 2.- Operaciones matemáticas
    Aqui se requirio crear 3 varibles, asignandoles un valor a dos de ellas para 
    sumarlas y en la tercera variable se guardo el resultado para posteriormente imprimirlo en persona. 

Ejercicio 3.- Condicionales (if-else):
    Se requiere comprobar si un usuario es mayor de edad o no, con una variable que recibe un dato
    ingresado por el usuario esto con el metodo prompt(). la variable se ponia en una condicional 
    la cual de que la varible era mayor a 18 se imprimia en consola que el usuario es mayor de edad, caso contrario(else) era menor de edad imprimiendolo en consola.

Ejercicio 4.- Bucles (for-loop):
    El problema requiere imprimir numeros del uno al diez. para ello el ciclo for era el ideal ya que con el bucle cuenta con una variable incremental, solo se necesito imprimir tal variable en consola. 

Ejercicio 5.- Funciones básicas:
    Se necesita crear una funcion para recibir un nombre y saludar. por lo tanto con una variable que recibia un valor usando prompt() la variable se enviaba como parametro en la funcion cuando se mandaba a llamar para que dentro de la funcion dentro del console.log recibia la funcion con el nombre dado por el usuario para imprimirlo. 

Ejercicio 6.- Manipulación de arreglos:
    Se requiere imprimir el segundo valor de un arreglo. para esto se creo el arreglo agragando 5 ciudades donde la segunda ciudad se imprimio en consola haciendo referencia al dato que se encuentra en la posiciones 1 (teniendo en cuenta que las posiciones empiezan desde la 0).

Ejercicio 7.- Recorriendo arreglos con forEach:
    Se requiere impripir cada valor dentro de un arreglo. utilizando el metodo forEach, primero se creamos el arreglo asignando valores para usar el metodo forEach que recorre cada elemento donde en cada recorrido guardabamos el valor en una varible para imprimirlo y asi imprimiria cada dato segun el tamaño del arreglo.

Ejercicio 8.- Uso de objetos:
    se necesita un objeto para guardar datos de una persona e imprimir su nombre. para ello al crear el objeto y al momento de llamar el objeto usando el .nombre unicamente se imprime el valor del campo nombre.

Ejercicio 9.- Manipulación de objetos:
    Para este ejercicio solamente se necesita agregar el campo nacionaliadad al ejercicio anterior asi que al momento de crear el objeto se agrego la propiedad de personalidad. e igualmente se manda llamar en console.log usando .nacionalidad.

Ejercicio 10.- Filtrar elementos de un array:
    En un arreglo con edades unicamente se requiere mostrar los que son mayores de edad. con el metodo filter() con una condicinal haciamos que solo guardara el valor actual si era mayor o igual a 18.

Ejercicio 11.- Mapear un array:
    Se necesita un arreglo con los numeros elevados al cuadrado de otro arreglo. para esto creando un nuevo arreglo y usando el metodo .map() creamos una funcion dentro que retorna el valor actual pero elevado al cuadrado usando el metodo Math.pow.

Ejercicio 12.- Reducir un array:
    se necesita reducir un array sumando sus valores. para ello usando el metodo reduce() donde primero creamos el arreglo inicial y una variable que servira para acumular la suma de los valores, donde cada recorrido va sumando el valor actual al acumulador para al final imprimir el resultado. 

Ejercicio 13.- Funciones asíncronas (setTimeout):
    Este ejercicio necesita una funcion que salude cada 3 segundos. usando el metodo setTimeout() se creo una funcion que espera 3 para despues imprimir un hola dentro de otra funcion se llama la funcion que primero envia un mensaje que anuncia que se esperan 3 segundos. 

Ejercicio 14.- Manejo de Promesas:
    Se necesita una promesa que se resuelva en dos segundos. para esto se creo una funcion que devuelve una nueva promesa y dentro de la promesa se esperan dos segundos para despues resolver con un mensaje de "Propuesta resuelta" para cuando la promesa se resuelve con then se imprime dicho mensaje.

Ejercicio 15.- Uso de async/await:
    Implementar async y await. en el ejercicio anterior. aqui al usar await hace que cuando la promesa se cumpla se guarde el valor en una variable y luego imprimir tal valor en consola. 

Ejercicio 16.- Expresiones Regulares:
    Se requiere validar un correo electronico usando expresiones regulares. creando un expresion regular que no permita mas de un caracter que no sea @ despues un arroba seguido de cualquier letra de mas de dos caracteres para el dominio, luego con el metodo pattern se verifica si la cadena cumple en caso contrario devuelve un null que se verifica en una condicion para saber si el correo electronico era valido o no. 

Ejercicio 17.- Transformación de texto:
    Se requiere modificar un texto para eliminar comas y usar mayusculas. para esto se usaron dos metodos .replace() para que encuentre las comas y las cambie por una cadena vacia y toUpperCase() para convertirlo en mayusculas.

Ejercicio 18.- Ordenamiento de un array:
    Se nesecita ordenar alfabeticamente un array. usando .sort() que unicamente usandolo en el arreglo por default ya los acomoda alfabeticamente. 

Ejercicio 19.- Simulación de un endpoint con fetch (JSONPlaceholder):
    se necesita obtener informacion de una url. con fetch() se hace la peticion a la url y con el metodo 
    .json() se transforma la respuesta que cuando la promesa se resuelve este imprime la respuesta en forma de objeto. 

Ejercicio 20. Creacion de un pequeño CRUD en memoria:
    Se requiere hacer un array que alamacena objetos funciones CRUD. Se definieron variables de prueba La funcion createTask genera un objeto con esas propiedades y lo agrega al arreglo. deleteTask busca una tarea por ID y, si existe, la elimina del arreglo. completedTask busca la tarea por ID y marca su propiedad comp como true. Finalmente, se ejecuta el flujo completo: se crea la tarea, se marca como completada y luego se elimina, mostrando el estado del arreglo en cada paso.
