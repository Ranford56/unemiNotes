---
tags: "Universitario/interfacesMultimedia"
creation: 2022-12-04
revision: 0
---

# Elementos para el diseño de interfaz de usuario

## Metodología de personajes - objetivos - escenarios
### Establecer objetivo y alcance del diseño 
Para el desarrollo de una interfaz debemos tomar en cuenta que esta va a ser una solución para una empresa que busca una buena experiencia de usuario mientras se utiliza su programa por lo que preguntas como "Por que se necesita la interfaz?", "Para quien va destinada esta interfaz? "y "Que es lo que se busca al completar esta interfaz?" ofrecen información al desarrollador que permite el mejor entendimiento del contexto o el ambiente para el que necesita desarrollar la interfaz. 

### Determina el prototipo de persona que va a interactuar con el producto digital
#### Características
Debemos tener siempre en cuenta a las personas en caso del desarrollo de un sistema basado 100% en crear experiencias para dicha persona, es por eso que se utiliza la técnica de personas en la cual creas fichas de personas que vas a ser tus usuarios de prueba, con diferentes rangos de personalidades, oficios, discapacidades, niveles de educación, etc. Así, podrás saber para que usuarios en especifico tu diseño falla.
#### Objetivos
Las personas actúan siendo tienen una razón imperativa para hacerlo, es decir, un objetivo. Es el trabajo de los desarrolladores crear las herramientas para que sea mas fácil cumplir el objetivo y el trabajo de los diseñadores hacer que la utilización de dichas herramientas sea satisfactoria. Por lo que siempre se debe tener en cuenta los objetivos que tendrán nuestros usuarios al utilizar nuestra aplicación
#### Escenarios
El escenario describe el entorno y la actitud de los usuarios al utilizar la aplicación, por ejemplo, una persona con falta de tiempo va a tener una diferente actitud y entorno que una persona utilizando la aplicación relajada en su cama.
Existen diferentes tipos de escenarios: 
- ##### Escenarios de uso diario
Aquí se encuentra el 80% de las interacciones del usuario, en este apartado el usuario una aplicación o una funcionalidad de la aplicación la mayor parte del tiempo para cumplir su objetivo. En este escenario se puede permitir el diseño de interfaces mas "únicas" que tengan una curva de aprendizaje ya que el usuario va a ir aprendiendo con cada uso 
- ##### Escenarios de uso esporádico 
Contrario al escenario de uso diario en este caso la aplicación o funcionalidad de aplicación es rara vez utilizada por lo que se necesita una interfaz fácil con curva de aprendizaje nula o que preste conceptos aprendidos en aplicaciones con interfaces similares ya que el usuario cada vez que utilice la app seguramente se haya olvidado de la interfaz.
- ##### Escenarios de uso necesario
Podemos entender escenarios de uso necesario como los escenarios que son necesarios de hacerlos para continuar utilizando la aplicación, casi siempre se quiere evitar estos ya que estos escenarios son mayormente momentos en los que el usuario debe configurar algo y se debe asumir que el usuario no tiene interés en configurar por lo que se recomienda utilizar valores por omisión y programación defensiva

### Arquitectura de la información 
La arquitectura de la información, similar a base de datos, es la manera en la que organizamos la información que queremos presentar al usuario, esta información debe seguir un par de reglas para considerarse "buena definición de categorías": 
- Las categorías son mutuamente excluyentes 
- Tienen una jerarquía equivalente 
- Abarcan todo el universo del contenido

El punto de esta información es categorizarla de buena manera para formar una composición en forma de árbol o pirámide que se denomina taxonomía, así, se puede definir cada elemento de la interfaz con una categoría de información.

### Modelo de la interacción 
Implica un grupo diminuto de funciones simples sobre las que se construyen funciones mas complejas. Como ejemplo, se tiene la creación de funciones de hipertexto, menú y botón en base a los vínculos. Básicamente, se construye funcionalidades en base a las funciones básicas, creando así interfaces estabas, uniformes y simples.

#### Modelo de Implementación
Modelo que sigue el programador para diseñar la interfaz, con prioridad en que se cumpla la funcionalidad de manera eficaz 
#### Modelo de Interacción
Es el modelo que contiene las interacciones entre el usuario y la interfaz, es lo que junta el modelo de implementación (el programa de la interfaz en si) y el modelo mental (el paso a paso mental que tiene el usuario para solucionar el problema)
#### Modelo Mental 
Es la perspectiva que tiene el usuario para realizar una tarea dentro de la aplicación o sitio web. Esta perspectiva proviene de las experiencias acumuladas del usuario usando aplicaciones. 

### La interfaz de usuario 
Técnicamente, la interfaz es el punto de vista de contacto del usuario con cualquier equipo electrónico, pero al diseñar dicha interfaz se toma en cuenta el factor emocional ya que este factor tiene una gran influencia en la facilidad de uso del producto digital.

# Niveles de interacción para el diseño de usuarios 
Existen tres nivels para el diseño de interfaces; Mirar, Leer y Pensar, cada uno de estos niveles son partes de un todo que toma lugar de forma simultanea para el usuario, es decir, el usuario no se sienta y experimenta cada nivel uno por uno, sino que la amalgama de estos crea la experiencia. 
## Nivel uno: Miro y entiendo 
Este nivel es el mas básico ya que toma lugar de una manera casi inconsciente, en este nivel el usuario utiliza las experiencias y aprendizajes previamente aprendidos para tratar de reconocer patrones, relaciones, grupos, tamaños, etc. Los cuales llevaran al usuario comprender múltiples aspectos producto y su interfaz 
### La intuición 
A diferencia de como lo presenta la cultura pop, la intuición es es una serie de patrones los cuales estamos acostumbrados a ver hasta el punto que lo esperamos. Podemos utilizar esta intuición a nuestro favor, siguiendo las "reglas" que esta establece para que la experiencia en nuestra interfaz no vaya en contra de la intuición del usuario (por ejemplo, poner el titulo muy junto al inicio del texto cuando esperamos que este arriba a la izquierda y en negrita) permitiendo así una experiencia placentera 
### Leyes de la Gestalt 
La Gestalt es una corriente de la psicología que estudia el como las el cerebro humano percibe patrones y conjuntos 
- #### La ley de la relación entre figura y fondo 
La mente humana puede percibir una imagen como fondo o figura, pero no los dos al mismo tiempo
- #### Ley de Continuidad
Los detalles que mantienen un patrón o dirección tienden a agruparse como parte de un modelo.
- #### Ley de Proximidad
Elementos que están cercanos entre si se perciben como partes del mismo grupo 
- #### Ley de Semejanza o Similitud
Agrupamos elementos que son similares en forma (definiendo forma como tamaño, color, forma y otros aspectos) como 
- #### Ley de Cierre
Una forma se percibe mejor cuando su contorno esta mas cerrado.
- #### Ley de Compleción
Si un contorno no esta completamente cerrado nuestra mente tiende a percibir como si estuviera cerrado
### Patrones UX/UI
Los patrones de UX son diseños ya hechos anteriormente, estos patrones son tan utilizados que se ha convertido en un estándar, por lo que los usuarios están acostumbrados a utilizarlos y tienen experiencia con ellos, por lo que no hay una curva de aprendizaje en caso de utilizarse.
### Leyes UX 
- Los usuarios que encuentras a una interfaz mas estética tienen a tener una mejor experiencia 
- El tamaño y posición de un elemento permiten encontrar mejor a dicho elemento 
- La decisión de un usuario se ve afectada por la cantidad de opciones, entre menos opciones, mas rápido se toma la decisión
- La proximidad de elementos cercanos hace que se perciban como parte de una unidad
- Los usuarios esperan encontrarse o usar la experiencia que han recolectado anteriormente en otras aplicaciones 

## Nivel dos: Leo y entiendo
Este nivel requiere un poco mas de esfuerzo de parte del usuario. Este nivel busca que el usuario no necesite nada mas además de lo escrito para entender la funcionalidad de un elemento de la interfaz, por ejemplo, un link que diga "Catalogo de prendas de ropa de hombres" explica completamente la función del link, pero un link que diga "Soporte" es demasiado ambiguo

## Nivel tres: Pienso y entiendo 
Es el nivel superior y por ende es el nivel que requiere mas esfuerzo de parte del usuario, en este nivel se pide a los usuarios recordar algo leído antes o hacer alusión a algo aprendido previamente (no se vayan a morir hpta). Aunque a veces sea necesario utilizar este tipo de nivel, se debe mencionar que en los test de usabilidad se demuestra que los usuarios buscan una compensación muy grande después de hacer este esfuerzo, por lo que es algo que no se debe usar todo el tiempo. 

# Pilares del diseño IU/UX
## Design Thinking 
El design thinking es una metodología la cual busca que el pensamiento de diseño tenga en cuenta elementos como la necesidad personal del usuario, los limites tecnológicos y la viabilidad del negocio
Las fases son:
- ### Empatizar
Se centra en analizar profundamente al usuario para comprender sus motivaciones y necesidades, no solo observando a los usuarios sino interactuando con ellos. 
- ### Definir 
Analizando las necesidades obtenidas en la etapa anterior, se definen cuales so las principales así se puede plantar medidas para llegar a una solución 
- ### Idear
En esta etapa se debe pensar creativamente y lanzar ideas para solucionar los problemas específicos identificados, se busca ideas creativas y sin miedo a equivocarse 
- ### Prototipar 
Se materializa las ideas seleccionadas (independiente de que las ideas necesiten prototiparse de manera física o digital)
- ### Evaluar 
Finalmente, los usuarios evalúan los prototipos elaborados y dependiendo de las criticas el equipo de diseño busca hacer correcciones, así, sabemos cuales fueron los aciertos y errores del prototipo

## Metodologías agiles de desarrollo de software 
### SCRUM
Es un marco de trabajo para desarrollar y mantener productos complejos, las unidades fundamentales para la implementación son las siguientes:
- #### Scrum Team
Es un pequeño grupo de personas formado por un Scrum master, un Product Owner y Developers donde cada Scrum team tiene un objetivo en el que se enfocan 
- #### Eventos de Scrum 
El sprint es un contenedor para todos los demás eventos. Cada evento es una oportunidad para inspeccionar y adaptar los artefacto, es crucial participar en dichos eventos ya que los que no lo hagan se pueden quedar atrás por la falta de feedback
- #### Artefactos de Scrum 
Representan un trabajo o valor. Están diseñados para maximizar la transparencia dela información clave. Por lo tanto, todas las personas que los inspeccionan tiene la misma base de adaptación 
Cada artefacto contiene un compromiso para garantizar que se proporcione información que mejore la transparencia y el enfoque frente al cual se pueda medir el progreso 

### Kanban
Es una herramienta ágil de gestión de proyectos para visualizar el trabajo. Utilizan tarjetas, columnas y la mejora continua para ayudar a equipos a comprometerse con la cantidad adecuada de trabajo. 
- #### Señales visuales
Los equipos escriben todos sus proyectos y elementos de trabajo en tarjetas, así, cada persona sabe que se esta realizando y quien lo esta realizando 
- #### Columnas 
Cada columna representa una actividad especifica, un verbo por así decirlo, que represente el flujo de trabajo ("Por hacer", "En curso", "Terminado")
- #### Limites de trabajo en curso 
Los limites de trabajo son el máximo de tarjetas que puede existir en una columna es un momento dado. Estos limites exponen cuellos de botellas maximizar el flujo de trabajo 
- #### Punto de compromiso 
Se suele tener un backlog, aqui se plantean ideas para proyectos que se pueden adoptar cuando el equipo este listo, entonces, el punto de compromiso es el momento en el que el equipo adopta una idea y trabaja en el proyecto 
- #### Punto de entrega 
Es el final del flujo de trabajo en un equipo de kanban, es el momento en el que el producto esta en manos del cliente, después de pasar por el "plazo" (el tiempo que tomo al equipo llevar las tarjetas desde el punto de compromiso al punto de entrega)

### Lean Startup 
Nos ofrece un vocabulario común juntando varias disciplinas como la fabricación lean hasta el design thinking, buscan; eliminar el despilfarro de proceso de diseño de experiencia de usuario, armonizaran el sistema utilizando colaboración funcional y la experimentación al crear soluciones. 
Los pilares de esta metodologia son:
- Se considera importante el designt thinking ya que se este defiende una posicion concreta para todos lso aspectos del negocio 
- Las metodología sde desarrollo agil ya que reducen el ciclo de vida de los prodcutos y dan constante valor a sus clientes 
- Lean Startup, sigue el ciclo "crear, medir, aprender" en donde se busca crear software de manera rapida y que el equipo pueda aprender de dicho software para su mejora 

# Principios de diseño IU/UX
## Principios del equipo de desarrollo de la interfaz 
- ### Equipos multifuncionales 
Este tipo de equipos debe incluir todas las disciplinas que intervienen en la creación de producto, ing de software, diseño de interacciones, diseño grafico, gestion del producto, etc. 
- ### Pequeños, dedicados, coubicados
Busca limitar el tamaño de los equipos, así, se dedican de manera exclusiva al proyecto. Así, se permite mas fácil la comunicación, concentración y camaradería 
- ### Equipos centrados en los problemas
Dicho equipo esta centrado en los problemas que debe resolver en vez de solo implementar funcionalidades, básicamente, es un grupo de reparación que solo tiene como objetivo solucionar el error 

## Principios del proceso del desarrollo de la interfaz 
- ### Eliminación del despilfarro
Lo mas importante de la Lean UX es eliminar todo lo que no contribuya al objetivo final, así, buscamos que los equipos solo estén concentrados en el objetivo final.
- ### Lotes pequeños
Lean UX busca que se presentan pocos diseños, solo los básicos para avanzar pero que sean de buena calidad para que así se puedan hacer pruebas e implementaciones con elementos de calidad 
- ### Proceso igual a resultados 
Lean UX mide el progreso de un proyecto en base a los resultados de negocio definidos no en base a la documentación, permitiendo así una gestión de proyecto que se basa en si las funciones que estamos desarrollando e implementando son eficaces 

## Principios del resulta
- ### Descubrimiento continuo 
Consiste en comprometer a los clientes en el proceso de diseño y desarrollo, así, podemos entender lo que los usuarios están haciendo con nuestros productos y porque lo están haciendo, así, los clientes pueden validar nuestras ideas y podemos tener un acceso a feedback continuo en caso de necesitarlo.
- ### GOOB
Getting Out of the Building quiere decir que los debates sobre las necesidades de los usuarios puede llevarse a cabo lejos de la oficina ya que las respuestas no están en una oficina, sino en el mercado y dicho mercado esta lejos del ambiente de oficina (no se refiere a salir físicamente de la oficina, sino a tener en cuenta que se debe crear una app para el mercando, no para la oficina)  
- ### Entendimiento Común
Es el conocimiento colectivo de equipo que se construye poco a poco a mediad de que se trabaja en forma conjunta sobre el producto y los clientes. Esto es ultra necesario en el Lean UX ya que se espera que todos sepan el contexto del proyecto. 
- ### Exteriorización del trabajo 
Los equipos debe exponer el proyecto mas allá de los ordenadores, utilizando pizarras, tableros, paredes, notas adhesivas, etc. Todo para ser capaz de reflejar la días de manera eficiente, así, permite un momento de reflexión exterior al trabajo además de permitir feedback 
- ### Hacer en lugar de analizar 
Lean UX valora la acción por encima del análisis, hay mas valor en crear la primera versión de una idea que pasar medio día debatiendo sus méritos en uan reunion interminable 
- ### Aprendizaje en lugar de crecimiento 
Lean UX prefiere que el equipo aprenda una idea antes de implementarla ciegamente con el riesgo de que falle, por lo que se prefiere que se tome el tiempo de asegurarla mediante el aprendizaje. 
- ### Permiso para equivocarse 
Los equipos de lean UX buscan experimentar con ideas por lo que se necesita un entorno segura en el que experimentar y equivocase para así conseguir feedback y poder mejorar la idea hasta que se consiga lo que se busca 
- ### Escapar de los negocios basados en entregables
Lean UX busca que el progreso de un proyecto que base en los resultados que se consigue, no en los documentos que el equipo escriba notificando cada avance que se consigue. 