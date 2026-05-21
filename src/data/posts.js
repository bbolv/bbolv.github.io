export const POSTS = [
  {
    id: "welcoming",
    title: "Bienvenida",
    date: "21 de Mayo, 2026",
    category: "General",
    type: "Personal",
    readTime: "1 min de lectura",
    excerpt: "Me gustaría darte la bienvenida a este espacio en donde podrás conocer un poco más sobre mí, mis intereses, y sobre el conocimiento que he adquirido a lo largo de distintos episodios de mi vida.",
    summary: "Una pequeña introducción a los motivos detrás de este blog, los temas de interés que convergerán y cómo las distintas categorías guiarán las lecturas.",
    takeaways: [
      "En este blog convergerán temas de interés particular desde la física, las matemáticas y la tecnología, hasta los procesos de pensamiento y de vida.",
      "Las lecturas están clasificadas en distintas categorías y tipos de dificultad para ajustarse a todos los lectores."
    ],
    content: [
      {
        type: "heading",
        text: "¡Bienvenidos!"
      },
      {
        type: "paragraph",
        text: "Me gustaría darte la bienvenida a este espacio en donde podrás conocer un poco más sobre mí, mis intereses, y sobre el conocimiento que he adquirido a lo largo de distintos episodios de mi vida."
      },
      {
        type: "paragraph",
        text: "En este espacio convergerán temas de interés particular desde la física, las matemáticas, la tecnología y la música, hasta los procesos de pensamiento y de vida, y temas en general. En cada post encontrarás una etiqueta que hace referencia a distintas categorías para clasificar las lecturas; desde textos técnicos, de divulgación hasta de opinión personal, por lo que algunos serán más complejos que otros. Sin embargo, no te desanimes, trataré de escribir para todas y para todos. Será común encontrar un texto de divulgación ligado a uno o varios textos más técnicos que profundizan en el tema. Y ¿por qué no?, también de mis opiniones personales."
      },
      {
        type: "paragraph",
        text: "¡Espero que disfrutes mucho las lecturas que tengo preparadas para ti!"
      }
    ]
  },
  /*{
    id: "geodesic-structure-regular-black-holes",
    title: "Estructura Geodésica de Agujeros Negros Regulares Rotativos",
    date: "15 de Mayo, 2026",
    category: "Física",
    type: "Técnico",
    readTime: "8 min de lectura",
    excerpt: "Un análisis profundo sobre las trayectorias de partículas masivas en espaciotiempos de agujeros negros sin singularidades físicas, explorando cómo la materia exótica redefine los horizontes de sucesos.",
    summary: "Este artículo explora las geodésicas de partículas masivas en la vecindad de agujeros negros regulares rotativos. Analizamos las ecuaciones de movimiento clásico y cuántico-sugerido empleando formalismos de relatividad general y soluciones numéricas en Mathematica y Python.",
    takeaways: [
      "Los agujeros negros regulares eliminan la singularidad central clásica mediante fuentes de materia exótica.",
      "La rotación introduce efectos de arrastre de marco de referencia (Lense-Thirring) que alteran drásticamente las órbitas estables.",
      "Las órbitas ligadas y de escape revelan el comportamiento termodinámico y la estabilidad del horizonte interno."
    ],
    content: [
      {
        type: "paragraph",
        text: "En la relatividad general clásica, la formación de singularidades espaciotemporales parece inevitable según los teoremas de Hawking y Penrose. Sin embargo, se espera que los efectos de gravedad cuántica eviten infinitos en la curvatura física. Esto ha motivado el estudio de agujeros negros regulares, soluciones métricas donde el tensor de curvatura de Riemann permanece finito en todo el espaciotiempo."
      },
      {
        type: "heading",
        text: "La métrica regular rotativa"
      },
      {
        type: "paragraph",
        text: "Consideramos una extensión rotativa que generaliza la métrica de Hayward o Bardeen. Introduciendo un parámetro de masa efectivo que depende de la coordenada radial r y de una constante de carga magnética g, evitamos la singularidad en r = 0:"
      },
      {
        type: "blockquote",
        text: "La estructura geodésica es el termómetro definitivo para verificar si un espaciotiempo modificado se comporta de acuerdo con las observaciones astrofísicas actuales.",
        author: "Brandon Bautista, Geodesic structure of a rotating regular black hole (2023)"
      },
      {
        type: "paragraph",
        text: "Para calcular las órbitas, derivamos la ecuación de Hamilton-Jacobi para una partícula de masa m en esta métrica. La constante de Carter K se vuelve esencial para separar la latitud θ y la coordenada radial r:"
      },
      {
        type: "code",
        language: "python",
        code: `# Integración numérica de ecuaciones geodésicas usando SciPy en Python
import numpy as np
from scipy.integrate import solve_ivp

def geodesic_equations(t, y, M, a, g):
    r, theta, phi, pr, ptheta = y
    # Definición de la métrica regular rotativa y del potencial efectivo V_eff
    Delta = r**2 - 2*mass_function(r, M, g)*r + a**2
    # Ecuaciones de movimiento geodésico (derivadas de Hamilton-Jacobi)
    dr_dt = Delta * pr / (r**2 + a**2 * np.cos(theta)**2)
    # ... integrando coordenadas geodésicas
    return [dr_dt, dtheta_dt, dphi_dt, dpr_dt, dptheta_dt]
`
      },
      {
        type: "heading",
        text: "Conclusiones del análisis geodésico"
      },
      {
        type: "paragraph",
        text: "Nuestros resultados numéricos demuestran que las partículas masivas que cruzan el horizonte de sucesos no colapsan en un punto de densidad infinita, sino que pueden transitar a través de núcleos ultra-densos estables o incluso rebotar en regiones internas de gravedad repulsiva, dependiendo del valor del espín y la carga."
      }
    ]
  },
  {
    id: "physics-behind-the-guitar",
    title: "La Física detrás de la Guitarra: Ondas, Armónicos y Resonancia",
    date: "8 de Mayo, 2026",
    category: "Musica",
    type: "Divulgación",
    readTime: "6 min de lectura",
    excerpt: "Un viaje acústico explorando la teoría ondulatoria que da vida a las notas en el diapasón de la guitarra, uniendo mis dos grandes pasiones: la física y la música.",
    summary: "Exploramos los fundamentos físicos de la guitarra acústica y eléctrica. Analizamos las ecuaciones de onda de cuerdas fijas, la generación de frecuencias fundamentales y armónicas, y el rol crucial de la caja de resonancia en el timbre del instrumento.",
    takeaways: [
      "Las cuerdas de guitarra producen ondas estacionarias cuyas frecuencias dependen de la longitud, la tensión y la densidad lineal.",
      "El diapasón divide físicamente la cuerda en proporciones logarítmicas basadas en el temperamento igual de doce tonos.",
      "El timbre característico de cada instrumento surge de la combinación única de armónicos reproducida por los resonadores."
    ],
    content: [
      {
        type: "paragraph",
        text: "La guitarra es uno de los instrumentos más populares y versátiles del mundo, pero también es un laboratorio físico fascinante. Cada vez que pulsamos una cuerda, estamos disparando complejos fenómenos físicos de ondas estacionarias, transferencia de energía acústica y resonancia de materiales que la física matemática puede describir con gran precisión."
      },
      {
        type: "heading",
        text: "La Física de la Cuerda Vibrante"
      },
      {
        type: "paragraph",
        text: "Cuando una cuerda de longitud L fijada en ambos extremos (el puente y la cejuela) es perturbada, se crean ondas que viajan en direcciones opuestas. Al reflejarse en los extremos, se superponen formando ondas estacionarias. La ecuación unidimensional de onda ideal describe esta vibración:"
      },
      {
        type: "code",
        language: "python",
        code: `# Simulación conceptual de armónicos en una cuerda de guitarra
import numpy as np

def calculate_harmonic_frequency(n, L, T, mu):
    """
    n: número del armónico (1 = fundamental, 2 = segundo, etc.)
    L: longitud de la cuerda (metros)
    T: tensión aplicada (Newtons)
    mu: densidad lineal de masa de la cuerda (kg/m)
    """
    wave_speed = np.sqrt(T / mu)
    frequency = n * wave_speed / (2 * L)
    return frequency
`
      },
      {
        type: "heading",
        text: "La Progresión Logarítmica del Diapasón"
      },
      {
        type: "paragraph",
        text: "La colocación de los trastes en el mástil de la guitarra sigue una escala matemática muy exacta. Para subir un semitono, la longitud de la cuerda libre debe reducirse dividiendo por la raíz doceava de dos (aproximadamente 1.059463). Tradicionalmente, los lauderos han usado la famosa 'regla del 18' (más precisamente 17.817) para calcular la distancia a cada traste sucesivo, dividiendo la longitud restante de la cuerda por esta constante. Esto nos da un diapasón temperado perfectamente regular."
      },
      {
        type: "paragraph",
        text: "Es sumamente satisfactorio ver cómo la armonía que experimentamos al escuchar un acorde de jazz o un riff de rock clásico surge de proporciones matemáticas puras y leyes físicas de transferencia ondulatoria. La música es, verdaderamente, la matemática hecha sonido."
      }
    ]
  },
  {
    id: "offline-first-architecture-flutter-sqlite",
    title: "Arquitectura Offline-First en Aplicaciones Móviles Modernas",
    date: "28 de Abril, 2026",
    category: "Desarrollo",
    type: "Técnico",
    readTime: "6 min de lectura",
    excerpt: "Diseñar aplicaciones móviles robustas exige asumir que la conexión a internet fallará. Analizamos cómo implementar un ecosistema 'offline-first' usando sincronización inteligente y almacenamiento local.",
    summary: "Este artículo técnico detalla el diseño arquitectónico de una aplicación móvil con soporte sin conexión a internet nativo, enfocándose en la consistencia de datos, resolución de conflictos y optimización de recursos.",
    takeaways: [
      "El almacenamiento local actúa como la única fuente de verdad directa para la interfaz de usuario.",
      "Las colas de operaciones asíncronas garantizan que los cambios locales se sincronicen en el orden correcto.",
      "El diseño de estrategias de sincronización basadas en marcas de tiempo disminuye drásticamente la latitud de red."
    ],
    content: [
      {
        type: "paragraph",
        text: "En el desarrollo de software móvil, construir aplicaciones que dependan enteramente de APIs REST activas para su renderizado es un patrón de falla común. Si la red oscila, el usuario experimentará pantallas de carga infinitas o pérdidas de información crítica. Una arquitectura 'offline-first' revierte este flujo: la UI siempre lee y escribe directamente en la base de datos local."
      },
      {
        type: "heading",
        text: "La Única Fuente de Verdad (Single Source of Truth)"
      },
      {
        type: "paragraph",
        text: "En este esquema, el gestor de estados (como BLoC, Riverpod o Redux) no se comunica directamente con el cliente HTTP. En su lugar, observa (streams o listeners) la base de datos local SQLite o Hive. Cuando se realiza una acción, se guarda localmente y se encola una tarea de sincronización:"
      },
      {
        type: "code",
        language: "typescript",
        code: `// Ejemplo conceptual del flujo de comandos en TypeScript/Dart
async function saveUserData(userData: UserData): Promise<void> {
  // 1. Guardar en SQLite local inmediatamente
  await localDb.insert('users', userData);
  
  // 2. Notificar a la UI (los listeners de la DB se disparan al instante)
  uiState.triggerUpdate();
  
  // 3. Encolar la sincronización en el SynchronizationQueue en segundo plano
  await syncQueue.enqueue({
    action: 'UPDATE_USER',
    payload: userData,
    timestamp: Date.now()
  });
}
`
      },
      {
        type: "heading",
        text: "Estrategias de Resolución de Conflictos"
      },
      {
        type: "paragraph",
        text: "Cuando el dispositivo recupera la conexión a internet, la cola de sincronización procesa los eventos pendientes de forma secuencial. Pueden surgir conflictos cuando los mismos datos fueron modificados concurrentemente en el servidor. Recomendamos implementar resoluciones automáticas basadas en:"
      },
      {
        type: "list",
        items: [
          "Last Write Wins (LWW): El cambio con la marca de tiempo más reciente prevalece.",
          "Merge manual guiado: Estructurar campos no conflictivos y solicitar intervención en campos clave.",
          "CRDTs (Conflict-free Replicated Data Types): Estructuras de datos matemáticas que se fusionan de forma consistente sin coordinación central."
        ]
      }
    ]
  },
  {
    id: "telemetry-pipelines-redis-nestjs",
    title: "Optimización de Pipelines de Telemetría con Redis y NestJS",
    date: "12 de Abril, 2026",
    category: "Desarrollo",
    type: "Técnico",
    readTime: "7 min de lectura",
    excerpt: "Ingerir millones de coordenadas geográficas en tiempo real desde hardware IoT requiere un backend altamente optimizado. Descubre cómo estructurar un pipeline de alta velocidad.",
    summary: "Un análisis de arquitectura de software centrado en la ingesta, almacenamiento en caché y procesamiento asíncrono de telemetría GPS a gran escala usando NestJS, Redis Streams y colas distribuidas.",
    takeaways: [
      "Redis Streams funciona como un bus de mensajería ligero de altísimo rendimiento para telemetría.",
      "El buffering y las inserciones por lotes (bulk inserts) en la base de datos previenen cuellos de botella de disco.",
      "NestJS proporciona la abstracción perfecta a través de decoradores y microservicios incorporados."
    ],
    content: [
      {
        type: "paragraph",
        text: "Cuando trabajas con sistemas telemáticos (por ejemplo, el rastreo de flotas de camiones con GPS), los servidores reciben miles de peticiones HTTP o WebSockets por segundo. Si intentas escribir cada coordenada de geolocalización directamente en una base de datos relacional o documental tradicional (MongoDB, PostgreSQL), los hilos de conexión a la base de datos se saturarán rápidamente."
      },
      {
        type: "heading",
        text: "Estructurando el pipeline de ingesta"
      },
      {
        type: "paragraph",
        text: "La solución óptima consiste en desacoplar la API de ingesta (que recibe los datos de los sensores IoT) del proceso de persistencia. La API simplemente valida el paquete y lo empuja a una cola ultra-rápida en memoria en menos de 2 milisegundos."
      },
      {
        type: "code",
        language: "typescript",
        code: `// Controlador de NestJS de alto rendimiento usando Redis como buffer
@Controller('telemetry')
export class TelemetryController {
  constructor(private readonly redisService: RedisService) {}

  @Post('ping')
  @HttpCode(202) // Aceptado, pero procesado asíncronamente
  async receiveTelemetry(@Body() dto: GPSPayloadDto) {
    // Empujar al flujo de datos en Redis de forma no bloqueante
    await this.redisService.xadd(
      'telemetry_stream',
      '*',
      'deviceId', dto.deviceId,
      'lat', dto.latitude.toString(),
      'lng', dto.longitude.toString(),
      'speed', dto.speed.toString()
    );
  }
}
`
      },
      {
        type: "heading",
        text: "Procesamiento por lotes (Batching)"
      },
      {
        type: "paragraph",
        text: "Un set de microservicios trabajadores (workers) independientes leen de Redis en bloques de, por ejemplo, 500 registros, y realizan una sola consulta 'bulkInsert' en la base de datos. De este modo, reducimos el número de transacciones en la base de datos en un 99.8%, garantizando una escalabilidad sobresaliente."
      }
    ]
  },
  {
    id: "general-relativity-to-clean-code",
    title: "De la Relatividad General al Código Limpio: Abstracciones que Importan",
    date: "30 de Marzo, 2026",
    category: "Física",
    type: "Divulgación",
    readTime: "5 min de lectura",
    excerpt: "La física de agujeros negros y la ingeniería de software comparten una herramienta fundamental: el poder de la abstracción. Reflexiones sobre cómo modelar sistemas complejos de forma elegante.",
    summary: "Una columna de opinión que conecta las matemáticas avanzadas de Einstein con los principios de diseño de software (SOLID, DRY) para demostrar que la abstracción conceptual es el mayor pilar de la ingeniería.",
    takeaways: [
      "Las coordenadas y los tensores son el equivalente en física a las interfaces y tipos del desarrollo de software.",
      "Un código complejo con demasiadas dependencias se asemeja a un sistema de coordenadas singular; las buenas abstracciones eliminan la fricción.",
      "Reducir el estado compartido en programación equivale a formular leyes físicas covariantes (independientes del observador)."
    ],
    content: [
      {
        type: "paragraph",
        text: "Tener formación en Física Teórica y trabajar en Ingeniería de Software como Tech Lead me ha dado una perspectiva peculiar. A primera vista, calcular geodésicas en un agujero negro rotativo mediante tensores parece no tener nada que ver con estructurar un Gateway de microservicios. Sin embargo, ambos dominios resuelven exactamente el mismo problema fundamental: cómo modelar y simplificar la complejidad extrema."
      },
      {
        type: "heading",
        text: "La Covarianza y el Principio de Responsabilidad Única"
      },
      {
        type: "paragraph",
        text: "En relatividad general, el principio de covarianza dicta que las leyes de la física deben ser idénticas en cualquier sistema de referencia. En software, buscamos que nuestros módulos y funciones sean independientes de la infraestructura (bases de datos, frameworks de frontend, etc.)."
      },
      {
        type: "blockquote",
        text: "Un buen físico no complica la métrica; elige las coordenadas en las que las ecuaciones se resuelven de la manera más natural posible. Un buen desarrollador hace exactamente lo mismo con sus tipos e interfaces.",
        author: "Brandon Bautista"
      },
      {
        type: "paragraph",
        text: "Cuando diseñamos sistemas distribuidos, crear abstracciones limpias e inmutables previene efectos colaterales indeseados. Si las funciones dependen fuertemente del contexto global, estamos creando 'singularidades físicas' en nuestro código que harán colapsar el flujo de ejecución en producción."
      }
    ]
  },
  {
    id: "technical-leadership-in-startups",
    title: "Liderar sin Perder el Enfoque Técnico: Retos de un Tech Lead",
    date: "14 de Marzo, 2026",
    category: "Tech Lead",
    type: "Divulgación",
    readTime: "6 min de lectura",
    excerpt: "El rol de Tech Lead requiere equilibrar el diseño de software de alta calidad, la gestión de personas y la toma de decisiones ágiles bajo presión constante.",
    summary: "Guía práctica y reflexiones sobre cómo dirigir exitosamente un equipo de desarrollo ágil en startups sin alejarse del código, optimizando los procesos técnicos y empoderando a los ingenieros.",
    takeaways: [
      "El Tech Lead debe actuar como puente facilitador entre los objetivos de negocio y la viabilidad técnica.",
      "Evita el micromanagement técnico: tu meta es guiar las decisiones de arquitectura, no escribir cada línea de código.",
      "La documentación clara y automatizada es la mejor defensa contra la deuda técnica en equipos pequeños."
    ],
    content: [
      {
        type: "paragraph",
        text: "Convertirse en Tech Lead suele implicar un cambio drástico. De un día para otro, tu tiempo ya no se mide en líneas de código redactadas o Pull Requests cerradas. Ahora, tu éxito está directamente ligado a la productividad, felicidad y excelencia técnica del equipo entero que lideras."
      },
      {
        type: "heading",
        text: "El Dilema del Programador Líder"
      },
      {
        type: "paragraph",
        text: "El error más común de los nuevos líderes técnicos es intentar hacerlo todo: asistir a reuniones estratégicas de negocio, diseñar la arquitectura de microservicios, resolver incidencias urgentes en producción y codificar funcionalidades clave. Esto es la receta directa al agotamiento (burnout)."
      },
      {
        type: "paragraph",
        text: "En lugar de programar todas las características críticas, debes enfocarte en allanar el camino para el equipo. Diseña las abstracciones fundamentales, establece estándares de codificación rigurosos (usando linters y CI/CD automatizados) y delega tareas complejas de desarrollo con pautas técnicas claras."
      },
      {
        type: "code",
        language: "yaml",
        code: `# Ejemplo conceptual de automatización en CI/CD que ahorra horas de revisión
name: Pull Request Linter & Quality Check

on:
  pull_request:
    branches: [ main, develop ]

jobs:
  verify:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Setup environment
        uses: actions/setup-node@v3
      - run: npm ci
      - run: npm run lint
      - run: npm test -- --coverage
`
      },
      {
        type: "heading",
        text: "La Deuda Técnica es una Decisión de Negocio"
      },
      {
        type: "paragraph",
        text: "La deuda técnica no es intrínsecamente mala; es una herramienta financiera en startups. Lo fundamental es clasificarla de forma transparente e informar al equipo de producto sobre su coste futuro de mantenimiento. La comunicación es el arma secreta de un Tech Lead excepcional."
      }
    ]
  },
  {
    id: "graphql-gateway-microservices",
    title: "Diseño de Microservicios con GraphQL Gateway",
    date: "20 de Febrero, 2026",
    category: "Desarrollo",
    type: "Técnico",
    readTime: "7 min de lectura",
    excerpt: "Federar múltiples APIs backend y ofrecer un único punto de entrada robusto para clientes Web y Móviles simplifica el desarrollo y optimiza el consumo de red.",
    summary: "Explicación detallada del patrón API Gateway usando GraphQL Federation para orquestar microservicios heterogéneos bajo un esquema tipado y robusto.",
    takeaways: [
      "GraphQL Gateway consolida APIs distribuidas reduciendo el sobregiro (over-fetching) de red en clientes móviles.",
      "El tipado estricto compartido previene discrepancias de modelos entre backend y frontend.",
      "El almacenamiento de caché inteligente en el borde (edge caching) disminuye la latitud a milisegundos."
    ],
    content: [
      {
        type: "paragraph",
        text: "A medida que una startup crece, pasar de un monolito a una arquitectura orientada a servicios es un paso natural. Sin embargo, esto plantea un desafío importante: ¿cómo interactúan los clientes móviles (iOS/Android) y web con decenas de microservicios independientes?"
      },
      {
        type: "heading",
        text: "El problema de los microservicios sin orquestador"
      },
      {
        type: "paragraph",
        text: "Hacer múltiples llamadas de red a distintos endpoints (e.g. una para datos de usuario, otra para telemetría y otra para notificaciones) desde un teléfono móvil consume batería, datos móviles y aumenta significativamente la latencia percibida por el usuario. Un API Gateway mitiga esto consolidando todas las consultas."
      },
      {
        type: "code",
        language: "javascript",
        code: `// Definición de esquema unificado en un GraphQL Gateway conceptual
const { ApolloGateway } = require('@apollo/gateway');
const { ApolloServer } = require('apollo-server');

const gateway = new ApolloGateway({
  serviceList: [
    { name: 'users', url: 'http://users-service/graphql' },
    { name: 'telemetry', url: 'http://telemetry-service/graphql' },
    { name: 'billing', url: 'http://billing-service/graphql' },
  ],
});

const server = new ApolloServer({ gateway, subscriptions: false });
server.listen({ port: 4000 }).then(({ url }) => {
  console.log(\`🚀 Gateway de Microservicios listo en \${url}\`);
});
`
      },
      {
        type: "heading",
        text: "Ventajas para el desarrollo Full Stack"
      },
      {
        type: "paragraph",
        text: "Al centralizar el esquema de GraphQL en el Gateway, los desarrolladores de frontend y móviles pueden consultar exactamente lo que necesitan y autogenerar sus tipos estáticos con herramientas como GraphQL Code Generator. Esto agiliza la velocidad del ciclo SDLC de punta a punta."
      }
    ]
  }*/
];
