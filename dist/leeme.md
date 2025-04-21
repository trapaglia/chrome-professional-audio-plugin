# Ecualizador Profesional para Chrome

## Descripción
Esta extensión de Chrome proporciona un ecualizador de audio profesional que permite a los usuarios ajustar y mejorar la calidad del sonido de cualquier pestaña del navegador en tiempo real. Diseñada para músicos, productores de audio, entusiastas del sonido y cualquier persona que desee una experiencia auditiva mejorada durante la navegación web.

## Características Principales

### Filtrado Dinámico
- Filtros paramétricos completamente personalizables
- Añade tantos filtros como necesites
- Controla frecuencia (20Hz-20kHz), Q (ancho de banda) y ganancia (-30dB a +30dB)
- Opción de bypass individual para cada filtro

### Visualización Avanzada
- Visualizador de espectro en tiempo real con escala de octavas
- Visualización en líneas continuas para un espectro más equilibrado
- Algoritmo de suavizado adaptativo que mejora la claridad en altas frecuencias
- Visualización pre y post ecualización para ver el impacto de tus ajustes
- Marcadores de frecuencia y Q para una edición precisa
- Representación visual de la curva de respuesta de cada filtro
- Barra de referencia de colores con información sobre bandas de frecuencia y su uso práctico (Boom/cine, Bassline, Calor, Voces, Guitarras, Brillantez, Aire/hi-hats)

### Control de Volumen
- Ajuste de ganancia global (-30dB a +30dB)
- Procesamiento de audio de alta calidad

### Interfaz Intuitiva
- Diseño limpio y moderno
- Controles deslizantes para ajustes precisos
- Guardado automático de configuraciones

## Tecnologías Utilizadas
- Web Audio API para procesamiento de audio de alta calidad
- Chrome Extension API para captura de audio de pestañas
- JavaScript moderno con módulos ES6
- Canvas para visualizaciones en tiempo real
- Arquitectura de comunicación entre procesos (background, popup, offscreen)

## Cómo Usar
1. Instala la extensión desde Chrome Web Store
2. Navega a la página web con el contenido de audio que deseas mejorar
3. Haz clic en el icono de la extensión para abrir el ecualizador
4. Presiona "Activar Audio" para comenzar a procesar el sonido
5. Añade filtros y ajusta los parámetros según tus preferencias
6. Utiliza los checkboxes de bypass para comparar el sonido original con el procesado

## Actualizaciones Recientes

### Mejoras en el Visualizador de Audio (Abril 2025)
- **Escala de octavas**: Cambio de escala logarítmica base 10 a escala de octavas (base 2) para una representación más natural de las frecuencias musicales.
- **Visualización en líneas continuas**: Reemplazo de barras individuales por líneas continuas, solucionando la disparidad en el ancho de las barras y creando un espectro más equilibrado visualmente.
- **Suavizado adaptativo**: Implementación de un algoritmo que aplica más suavizado en altas frecuencias (donde el espectro tiende a ser más "picudo") y menos en bajas frecuencias, mejorando significativamente la claridad y legibilidad del espectro.
- **Barra de referencia de colores**: Adición de una barra que muestra visualmente las diferentes bandas de frecuencia con un degradado de colores y etiquetas.
- **Etiquetas prácticas**: Inclusión de etiquetas que indican el uso práctico de cada banda de frecuencia (Boom/cine, Bassline, Calor, Voces, Guitarras, Brillantez, Aire/hi-hats).
- **Ajuste de escala**: Modificación de la escala de etiquetas para que el valor máximo sea 20kHz en lugar de 32kHz, enfocándose en el rango audible humano.

## Posibles Mejoras Futuras

### Funcionalidades Avanzadas
- **Presets de ecualización**: Incluir presets predefinidos para diferentes géneros musicales y tipos de contenido (podcast, películas, etc.)
- **Compresión y limitación**: Añadir procesadores dinámicos para mejorar aún más el sonido
- **Efectos adicionales**: Reverberación, delay, chorus y otros efectos de audio
- **Modo de análisis avanzado**: Herramientas para análisis de fase, correlación estéreo y otros parámetros técnicos
- **Ecualización automática**: Algoritmos de inteligencia artificial para optimizar automáticamente el sonido según el contenido

### Mejoras de Interfaz
- **Temas personalizables**: Modo oscuro y otros temas visuales
- **Interfaz redimensionable**: Permitir al usuario ajustar el tamaño de la ventana del ecualizador
- **Atajos de teclado**: Para un control más rápido y eficiente
- **Modo compacto**: Versión minimizada para ocupar menos espacio en pantalla
- **Visualizaciones alternativas**: Espectrograma, cascada, gráfico 3D

### Optimizaciones Técnicas
- **Procesamiento más eficiente**: Optimizar el uso de CPU y memoria
- **Soporte para múltiples canales**: Procesamiento de audio multicanal (5.1, 7.1)
- **Exportación/importación de configuraciones**: Guardar y cargar configuraciones de ecualización
- **Sincronización en la nube**: Guardar configuraciones en la cuenta de Google del usuario
- **Modo de baja latencia**: Para aplicaciones que requieren respuesta inmediata

### Integración con Otras Plataformas
- **Versión para Firefox y otros navegadores**: Ampliar la disponibilidad a más usuarios
- **Aplicación de escritorio**: Versión independiente del navegador
- **API para desarrolladores**: Permitir a otros desarrolladores integrar con la extensión

## Contribuciones
Las contribuciones son bienvenidas. Si tienes ideas para mejorar esta extensión, no dudes en crear un pull request o abrir un issue.

## Licencia
[Especificar la licencia aquí]

## Contacto
[Información de contacto del desarrollador]