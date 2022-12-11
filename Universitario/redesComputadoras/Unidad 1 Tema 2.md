---
tags: "Universitario/redesComputadoras"
creation: 2022-12-09
revision: 0
---
# Software de red y modelos de referencia
Para cualquier comunicación podemos identificar dos elementos necesarios para que sea efectiva, las normas y el lenguaje. En caso de las redes de computadoras las normas son dadas por los modelos de referencia (las reglas que siguen para la comunicación) y el lenguaje por los protocolos que permiten hablar a dos o mas computadores el mismo "idioma" (el lenguaje en común para la comunicación)
## Software de red 
### Jerarquía de los protocolos
Ya que el diseño de redes suele ser complicado ya que se necesita hacer mil cosas, usualmente se organiza los protocolos en capas en donde cada una se construye con las salidas de la capa anterior. 
Cada capa "x" se comunica con la capa "x" de otro equipo mediante protocolos específicos por cada capa. 
![[capasDeProtocolo.png]]
En esta figura se denomina "igual" o "peer" son los elementos que se comunican mediante el uso de protocolos, por ejemplo, las personas que usan un computador, el computador en si o el procesos de software.
También, se debe tener en cuenta que las capas no se comunican directamente como se muestra en las figura (líneas punteadas) en practica, las capas se comunican de arriba hacia abajo hasta llegar al medio físico donde se produce la comunicación real. La comunicación entre capas de un mismo sistema se consigue mediante el desarrollo de interfases, es decir, cada capa debe tener una interfaz que permita la comunicación entre estas dos, por lo que es sumamente importante definir bien las capas para que toda la para transmitir la información necesario para el funcionamiento de cada capa.

Así tenemos porfin una arquitectura de red, la que se define como "el conjunto de capas y protocolos que constituyen un sistema de comunicaciones" y una frase importante para entender la webada es "Cada capa o nivel es un consumidor de servicios ofrecidos por el nivel inferior y proveedor de servicios del nivel superior"
![[transformacionDeData.png]]
Cuando se envía un menaje a una capa inferior (generalmente para enviar dicho mensaje a otro sistema) este mensaje lleva u encabezado que contiene información esencial para preservar el orden del mensaje, usualmente la capa 3 descompone el mensaje en unidades pequeñas llamadas paquetes (colocando un encabezado en cada paquete). Como observamos en la figura, la maquina emisora envía el mensaje hacia abajo, separando la data hasta llegar a Bits que se envían por el medio físico y la maquina receptora recibe el mensaje hacia arriba reconstruyéndolo 
### Aspecto de diseño para las capas 
Cosas a tener en cuenta porque esta webada es muy complicada:
- #### Confiabilidad
Tu red debe operar de manera correcta y confiable, es decir, debe ser robusta y en caos de que exista un error, debe detectar errores y comunicarlo usando códigos de detección de errores para hacer mas fácil solucionar todo. 
También, debemos considerar la ruta por la que se manda nuestros paquetes, siempre se debe escoger la ruta mas rápida o mas económica (depende de tus necesidades y la configuración manual del del administrador de red o un protocolo) mediante el enrutamiento 
- #### Escalabilidad
La tendencia de una red es aumentar de tamaño mediante pasa el tiempo, por esto, el diseño de una red debe tomar en cuenta que la webada va a crecer, por lo que debe tener un buen internetworking (es decir, debe ser capaz de seguir funcionando bien al integrarse nuevas redes de diferentes tecnologías de red )
- #### Asignación de recursos
Imagina que eres cuevana y sale Avengers 69, lo que va a a pasar es que en día de estreno te van a llegar millones de peticiones para ver la peli y si tu red no esta bien armada se te va a caer la pagina como a la unemi en día de test. La respuesta es QoS (calidad de servicio - quiality of service) que son mecanismos que utilizan estrategias y/o algoritmos para distribuir de manera uniforme los recursos de tu red para que la alta demanda no mate tu red 
- #### Seguridad (duh.)
Tu red debe estar segura de diferentes tipos de ataques como ataques utilizando técnicas como mecanismo de autenticación e integridad de mensajes y criptografía

### Comparación entre servicio orientado a conexión y servicio sin conexión 
Las capas ofrecen los dos servicios; los orientados a conexión los cuales se necesita primero establecer una conexión y finalizarla al terminar de usarla y los orientados a sin conexión los cuales aceptan mensajes y la red se encarga de manejar la información sin necesidad de que el usuario sigua presente en la conexión, estos mensajes usualmente no tienen confirmaciones de recepción. 
### La relación entre servicios y protocolos
Un servicio es un conjunto de operaciones es la relaciona entre dos capas, donde la capa inferior es la proveedora de servicio y la parte superior el usuario. 
Un protocolo es un conjunto de reglas que indican como dos capas se deben comunicar, estableciendo sintaxis y semántica así definiendo un estándar. 
## Modelos de referencia
### Modelo de referencia OSI 
El modelo OSI es un propuesta de la organización internacional de normas ISO como primer paso hacia la estandarización de protocolos de diversas capas.
- ### Capa física 
Incluye los aspectos físicos de la comunicación, características electromagnéticas, tipos de conectores, frecuencias, voltajes, etc.
- ### Capa de enlace de datos 
En esta capa busca la transferencia fiable de información sobre la capa física, es decir, aquí existen las funciones de detección de error y retransmisión de mensaje 
- ### Capa de Red
Aquí se establece la arquitectura de la red y la emisión de paquetes o distintas redes y distinto orden. El protocolo mas importante es el de IP.
- ### Capa de transporte 
Establece una conexión de transporte entre dos dispositivo, estableciendo una red que adapte requerimientos de sesión en base a la necesidades, tamaño de unidad, calidad de servicio, etc..
- ### Capa de sesión
Sirve para cobertura a posibles fallos de transporte rechazando los datos en caso de que falle. Si esta capa no proporciona servicios de secuenciación, debe hacerlo la capa de sesión.
- ### Capa de presentación 
La capa de presentación es la capa de semántica y sintaxis, transformando grupos de bytes a texto, matrices, imágenes, sonidos, etc.
- ### Capa de aplicación 
La capa de aplicación es al capa mas superior que ofrece los servicios de aplicación (acceso a la app, básicamente el acceso de usuario a las funcionalidades). Se separa en el agente de aplicación (actúa como interfaz) y la entidad de al aplicación (conecta la interfaz con la aplicación) 

## Modelo de referencia TCP/IP
- ### Capa Acceso a la red
Define las característica de la interfaz física entre el nodo y el medio de transmisión, también, es responsable del intercambio de datos, ofreciendo servicios como IP, direcciones físicas, tramas de datos y se encarga de integrar dichas tramas en señal física.
- ### Capa de Internet
Se encarga de encaminar los datos a través de rutas lógicas de red, definiendo el formato de los paquetes que se deben utilizar. También se proporciona soporte para el direccionamiento de IP y el formato de paquetes, finalmente, se encarga de la conversión de direcciones lógicas a direcciones MAC 
- ### Capa de Transporte
Es la capa encargada de la comunicación de datos para transportar los datos de la red, dos protocolos de transporte:
- TCP: garantiza el transporte de datos en modo conectado (es decir, reciben un mensaje de recibido)
- UDP: garantiza el transporte de datos sin conexión, no son fiables porque es mas veloz a costa de no tener control de errores
- ### Capa de aplicaciones 
Junta las capas de sesión, presentación y aplicación del modelo OSI ya que el modelo TCP/IP no las contempla como independientes 

## Comparación de los modelos
Funcionalmente los modelos OSI y TCP/IP son los mismos, lo único que cambia es que el modelo OSI hace distinción en cada protocolo e interfaz, mientras que TCP/IP tiende a juntarlos