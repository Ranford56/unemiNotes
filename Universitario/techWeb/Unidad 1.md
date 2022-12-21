---
tags: "Universitario/techWeb"
creation: 2022-12-05
revision: 0
---

# Internet y la web 
## Internet en la industria y la investigación 
Con el desarrollo del internet y computadoras se han solucionado varios problemas que se extienden a lo largo de varias industrias y dominios. Estos son algunos ejemplos: 
- ### Mejoramiento de servicios medicos
	- #### Registros de salud electronicos
	 El historial medico de un paciente ahora esta a la disposición de varios proveedores de servicios médicos usando una red segura, así, reducimos la probabilidad de errores médicos 
	- #### Proyecto Genoma Humano 
	 Es un proyecto que se fundo para analizar los 20 000+ genes del ADN humano, utilizando computadoras para el almacenamiento e internet para poder acceder a ellos desde cualquier lugar 
- ### Mejoramiento para el bien social 
	- #### AMBER Alert
	 Es un sistema de alerta que notifica a servicios como televisión, radio y servicios de internet de un niño secuestrado o perdido 
	- #### World Community Grid
	 Permite donar el poder de procesamiento de computo de tu computador para que se puedan realizar proyectos científicos en vez de gastar dinero 
- ### Mejoramiento de Infraestructura de computadores e Internet 
	- #### Computación en la nube 
	 Permite la conexión a computadoras remotas que ofrecen diferentes servicios como almacenamiento o capacidades de procesamiento, por lo que desde un dispositivo con poco procesamiento, puedes tener acceso a una computadora con una mayor cantidad de procesamiento mediante le internet 
- ### Mejoramiento en la colaboración entre personas
	- #### GPS
	 Se utiliza un área de satélites para recuperar información sobre la ubicación del dispositivo y permite proporcionar indicaciones paso a paso hacia un destino. 
	- #### Robots
	 Los robots pueden utilizarse para la automatización de tareas cotidianas como la limpieza, combate militar, expediciones, etc. Mejorando la calidad de vida de los usuarios 
	- #### Mensajería Instantánea
	 Estos servidores soportan todo tipo de mensajería en linea los cuales permiten servicios como Skype, Messenger, correos electrónicos
- ### Mejoramiento del entretenimiento 	 
	- #### App Store 
	 La app store permite el acceso a varias aplicaciones que ofrecen varios tipos de funcionalidades mediante el internet, estas aplicaciones son compatibles con una gran cantidad de dispositivos y están a un click de distancia 
	- #### TV por Internet 
	 Servicios como Apple TV y Google TV permiten acceder a un gran contenido de juegos, películas, programas de televisión, noticias, etc.
## Historia de la web 
La conexión global de computadoras se hizo posible gracias a la necesidad de unir el campo de la computación y la comunicación. A finales de los 60's ARPA ceo un plano que conectaba los principales sistemas de computo alrededor de 12 universidades que permitía una velocidad de 56 kbps, a esa red se la denomino ARPARED y eventualmente se convirtió en el internet que conocemos hoy en día 
### Conmutación de paquetes 
Entre los objetivos de la ARPANET estaba el permitir que varios usuarios enviaran y recibieran información al mismo tiempo usando las mismas rutas de comunicación, por lo que utilizaron la conmutación de paquetes 
### TCP/IP
Es el protocolo para comunicarse a través de ARPANET, aseguraba que los paquetes se enrutarían de forma correcta y llegaran intactos. Ahora que se tenia una manera de asegurar la llegada de datos, ahora el problema era que existían muchas redes tratando de comunicarse entre si por lo que se invento el protocolo de internet (IP) el cual ofrecía una dirección única a cada computadora creando así una red de redes 
### Crecimiento explosivo 
Aunque el internet antes solo estaba pensado en ser una herramienta que permita la comunicación entre universidades pero con el tiempo se expandió mas y mas hasta el punto de generar una feroz competencia entre proveedores de internet dando como resultado el aumento de banda ancha del internet a la vez que se reducen costos 
### World Wide Web, HTML, HTTP
La world wide web permite ejecutar aplicaciones basadas en web para poder localizar y ver documentos multimedia, pero en 1989 Tim Berners-Lee empezó a desarrollar una tecnología para compartir información mediante documentos de texto con hipervínculos. También desarrollo el protocolo de transferencia para su tecnología, la cual usa el URL para especificar la dirección del a pagina web que se visualiza  
### HTTPS
Los url que manejan información critica y que requiera privacidad utilizan el https, el cual es es estándar. Combina el HTTP con los esquemas criptográficos SSL y TLS (capa de conexión segura y seguridad de la capa de transporte)
### Mosaic, Netscape, Web 2.0
El uso de la Web exploto gracias al a disponibilidad que ofreció el navegador Mosaic (un navegador con interfaz grafica amigable para el usuario). Mosaic fue desarrollado por Netscape, la compañía que se considera la que encendió la mecha de la caída de la burbuja "punto com".
Esta caída trajo un resurgimiento en 2004 con varias compañías como Google, Youtube Facebook, Skype y Wikipedia las cuales son compañías insignias del Web 2.0

## Fundamentos de la Web 
### Hipervinculos 
Estos permiten que al hacer click en ellos puedan cargar un documento web especifico, pero, estos hipervínculos pueden contener elementos como imágenes y texto también, localizando la pagina solicitada y enviándola al navegador web del usuario 
### URI y URL 
Los URI (identificadores uniformes de recursos) identifican recursos en Internet, pero los URI que comienzan con "http://" se llaman URL (localizadores uniformes de recursos) los cuales hacen referencias a archivos, directorios o código del lado del servidor. Con esa url se puede navegar directamente al sitio web deseado solo ingresándola en el campo de dirección del navegador 
### Partes de un URL 
http://www.deitel.com/books/downloads.html
Tomando en cuenta este url podemos identificar sus componentes:
- Protocolo de transferencia (http://) 
En este caso, se hace referencia a que se necesita el protocolo http para acceder a este recurso
- Nombre del host del servidor (www.deitel.com)
El host se traduce en una dirección IP utilizando el DNS, es decir, el DNS es el directorio que permite saber que IP le pertenece a un host 
- La ubicación del recurso (/books/downloads.html)
Aunque casi siempre esta dirección es virtual por razones de seguridad, de todas maneras es común verlo y permite tener una idea de la estructura de la pagina web para el usuario
### Realizar una solicitud y recibir una respuesta 
Cuando el navegador recibe una URL este usa HTTP para solicitar la pagina web que se encuentra en esa dirección. 
Existen diferentes tipos de solicitudes, la mas simple es: 
GET /books/downloads.html HTTP/1.1
Aquí, se utiliza el método GET que indica que se desea obtener un recurso del servidor, dando la ruta del recurso y el nombre de protocolo y la versión de este Usualmente de la siguiente manera: 
HTTP/1.1. 200 OK 
En caso de una transacción exitosa y 
HTTP/1.1 404 Not found 
En caso de que no se pueda localizar los recursos solicitados, independiente de la salida, podemos observar que el servidor web responde primero con el tipo de protocolo y la versión primero siempre 
### Encabezados HTML
Los mensajes del servidor o del usuario deben contener encabezados, los cuales ofrecen información extra sobre los datos que se envían, por ejemplo: 
Content-type: text/html
Refleja que el tipo de contenido que se envía o recibe (dependiendo de la situación) es un documento de texto de HTML 5. 
### Solicitudes GET y POST de HTTP
En resumen, las solicitudes GET y POST son las mas conocidas y las que mas se usan, en donde: 
GET: implica que la solicitud busca obtener información de un servidor (como un documento, imágenes uy otros) 
POST: implica que la solicitud envía datos a un servidor, enviando así datos de formulario o documentos a un servidor. 
### Cache del lado del cliente 
Es común que los navegadores coloquen cache para paginas web que se hayan abierto recientemente para poder cargar dichas paginas web de manera mas rápida para mejorar la experiencia de usuario. Consigue esto ya que dentro de la información de la respuesta HTTP se indica que tiempo que el contenido de dicha respuesta se mantiene "actualizado", es decir, durante cuanto tiempo es valida esa respuesta para usarla sin consultar a la pagina.

## Generaciones de los sitios web 
### Web 1.0
Apareció en 1990 y es una forma muy rustica del internet, en donde las paginas son solo de lectura y el usuario no puede interactuar con ellas además de leerlas. Las paginas están controladas en base a lo que el webmaster sube a la pagina 
### Web 2.0
En esta nueva generación se permite la interacción de usuarios en forma de comunidades como redes sociales, blogs, wikis, foros y cualquier sitio web que permita la interacción entre usuarios, permitiendo el intercambio de información entre usuarios.
### Web 3.0
Son aplicaciones web conectadas a aplicaciones web para enriquecer la experiencia, agregando conocimiento del contexto a la web, autonomía del navegador y la construcción de la web semántica, permitiendo al usuario el control para que pueda editar directamente las bases de datos 
### Web 4.0 
Se ofrece un comportamiento mas inteligente y predictivo permitiendo que con una sola petición se pueda poner en marcha un conjunto de acciones que puedan completar lo que hayamos pedido (usualmente con Deep Learning y Machine Learning) 