# Chrome Professional Audio Plugin

Este proyecto es una extensión para Google Chrome que proporciona herramientas profesionales de procesamiento de audio para cualquier contenido web. La extensión permite ecualizar, comprimir y visualizar el audio de cualquier pestaña del navegador en tiempo real.

## Características

- **Ecualizador paramétrico**: Ajusta el audio con filtros personalizables.
- **Compresor de audio**: Controla la dinámica del sonido con parámetros ajustables (threshold, ratio, knee, attack, release).
- **Visualizador de audio**: Muestra representación gráfica del espectro de frecuencias en tiempo real.
- **Sistema de presets**: Guarda y carga configuraciones predefinidas.
- **Modo oscuro/claro**: Interfaz adaptable al tema preferido.
- **Procesamiento en segundo plano**: Utiliza la API Offscreen de Chrome para procesar audio sin interrupciones.

## Estructura del Proyecto

```
chrome-professional-audio-plugin/
├── build.mjs                # Script de construcción
├── dist/                    # Archivos compilados (generados en build)
├── node_modules/            # Dependencias
├── package.json             # Configuración del proyecto
├── public/                  # Recursos estáticos
│   ├── listen.png           # Icono de la extensión
│   ├── manifest.json        # Configuración de la extensión Chrome
│   ├── offscreen.html       # Página para procesamiento en segundo plano
│   ├── popup.html           # Interfaz principal de la extensión
│   └── styles.css           # Estilos de la interfaz
├── src/                     # Código fuente
│   ├── background.ts        # Service worker de la extensión
│   ├── communications.ts    # Gestión de comunicaciones entre componentes
│   ├── compressor.ts        # Implementación del compresor de audio
│   ├── config.ts            # Configuración global
│   ├── filters_interface.ts # Interfaz para los filtros de ecualización
│   ├── interface.ts         # Componentes de la interfaz de usuario
│   ├── offscreen.js         # Lógica del documento offscreen
│   ├── popup.js             # Lógica principal de la interfaz
│   ├── state_memory.ts      # Gestión de estado y almacenamiento
│   ├── types/               # Definiciones de tipos TypeScript
│   ├── utils.ts             # Funciones de utilidad
│   └── visualizer.ts        # Visualizador de espectro de audio
├── tsconfig.json            # Configuración de TypeScript
└── webpack.config.js        # Configuración de Webpack
```

## Componentes Principales

### Service Worker (background.ts)
Gestiona el ciclo de vida de la extensión, crea el documento offscreen para procesamiento de audio y maneja la comunicación entre los diferentes componentes.

### Documento Offscreen (offscreen.js, offscreen.html)
Utiliza la API Offscreen de Chrome para procesar el audio en segundo plano, permitiendo que la extensión siga funcionando incluso cuando el popup está cerrado.

### Interfaz de Usuario (popup.js, popup.html)
Proporciona controles para ajustar los parámetros de audio y visualizar el espectro de frecuencias.

### Procesamiento de Audio
- **filters_interface.ts**: Implementa los filtros de ecualización paramétrica.
- **compressor.ts**: Implementa el compresor dinámico de audio.
- **visualizer.ts**: Genera la visualización del espectro de frecuencias.

### Gestión de Estado (state_memory.ts)
Maneja el almacenamiento persistente de configuraciones y presets utilizando la API Storage de Chrome.

## Requisitos

- Node.js (v14 o superior)
- npm (v6 o superior)
- Google Chrome (versión 88 o superior)

## Instalación y Compilación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/trapaglia/chrome-professional-audio-plugin.git
   cd chrome-professional-audio-plugin
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Compila la extensión:
   ```bash
   npm run build
   ```

   Esto generará la carpeta `dist/` con todos los archivos necesarios para la extensión.

4. Carga la extensión en Chrome:
   - Abre Chrome y navega a `chrome://extensions/`
   - Activa el "Modo desarrollador" (esquina superior derecha)
   - Haz clic en "Cargar descomprimida" y selecciona la carpeta `dist/` generada

## Desarrollo

Para desarrollo continuo con recompilación automática:

```bash
npm run watch
```

## Uso

1. Haz clic en el icono de la extensión en la barra de herramientas de Chrome.
2. Activa la captura de audio haciendo clic en el botón "Activar".
3. Ajusta los parámetros del ecualizador y compresor según tus preferencias.
4. Guarda tus configuraciones como presets para uso futuro.

## Licencia

ISC

## Autor

[trapaglia](https://github.com/trapaglia)
