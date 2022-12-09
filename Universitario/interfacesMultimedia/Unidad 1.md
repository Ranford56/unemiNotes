---
tags: "Universitario/interfacesMultimedia"
creation: 2022-12-04
revision: 0
---

# Elementos para el diseño de interfaz de usuario

## Metodología de personajes - objetivos - escenarios
### Establecer objetivo y alcance del diseño 
Para el desarrollo de una interfaz debemos tomar en cuenta que esta va a ser una solución para una empresa que busca una buena experiencia de usuario mientras se utiliza su programa por lo que preguntas como "Por que se necesita la interfaz?", "Para quien va destinada esta interfaz?"y "Que es lo que se busca al completar esta interfaz?" ofrecen información al desarrollador que permite el mejor entendimiento del contexto o el ambiente para el que necesita desarrollar la interfaz. 

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