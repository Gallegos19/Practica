This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.



Conceptos Básicos de Git:
Repositorio: Un repositorio Git es un lugar donde se almacenan los archivos y las carpetas de un proyecto, junto con el historial de cambios.

Commit: Un commit representa un conjunto de cambios en los archivos del repositorio. Cada commit tiene un mensaje que describe los cambios realizados.

Rama (Branch): Una rama en Git es una línea de desarrollo independiente que permite trabajar en nuevas características sin afectar la rama principal (por lo general, llamada master o main).

Clonar (Clone): Clonar un repositorio Git significa crear una copia local del repositorio en tu máquina.

Push: Enviar (push) implica subir los cambios locales al repositorio remoto para compartirlos con otros colaboradores.

Pull: Obtener (pull) implica traer los cambios del repositorio remoto a tu copia local del repositorio.

Comandos Fundamentales de Git:
git init: Inicializa un nuevo repositorio Git en un directorio existente.

git clone <URL del Repositorio>: Clona un repositorio existente en tu máquina.

git add <Nombre del Archivo>: Agrega un archivo al área de preparación (staging) para ser incluido en el próximo commit.

git commit -m "Mensaje del Commit": Crea un nuevo commit con los archivos que están en el área de preparación y asigna un mensaje descriptivo.

git push <Nombre de la Rama Remota>: Sube los commits locales de una rama al repositorio remoto.

git pull <Nombre de la Rama Remota>: Trae los cambios del repositorio remoto a tu copia local y los fusiona con tu rama actual.

git branch: Muestra una lista de ramas en el repositorio. La rama actual se resalta con un asterisco (*).

Rebases (Rebasing):
El rebasing es una técnica avanzada en Git que permite reorganizar el historial de commits. En lugar de fusionar los cambios de una rama en otra (como en un merge), el rebasing integra los cambios de una rama en otra como si los cambios se hubieran hecho en una secuencia lineal, creando una historia de commits más limpia y fácil de entender.

Para hacer un rebase, se utiliza el comando git rebase. Por ejemplo, para reorganizar los commits de una rama sobre la rama master, puedes hacer lo siguiente:
git checkout feature-branch
git rebase master


Etiquetas (Tags):
Las etiquetas en Git se utilizan para marcar puntos específicos en la historia del repositorio, como versiones de software. A diferencia de las ramas, las etiquetas no cambian; se utilizan para marcar un commit específico. Puedes crear una etiqueta así:
git tag v1.0.0

Solicitudes de Extracción (Pull Requests):
Las solicitudes de extracción (o pull requests) son una característica comúnmente asociada con plataformas de alojamiento de repositorios como GitHub, GitLab y Bitbucket. Permiten a los colaboradores proponer cambios en un repositorio y solicitar que estos cambios se fusionen en la rama principal.

Crear una rama y hacer cambios:
git checkout -b mi-feature
# Realizar cambios y commits
git add .
git commit -m "Nuevas características agregadas"
git push origin mi-feature

Crear una solicitud de extracción:
Después de hacer push a tu rama en el repositorio remoto, puedes crear una solicitud de extracción a través de la plataforma de alojamiento del repositorio (por ejemplo, en GitHub). Otros colaboradores pueden revisar tus cambios, hacer comentarios y aprobar la solicitud de extracción.

Fusionar cambios:
Una vez que la solicitud de extracción es aprobada, los cambios se pueden fusionar en la rama principal utilizando la interfaz web o el comando git merge localmente.

Estas características avanzadas son poderosas y te permiten gestionar proyectos de forma más eficiente y colaborativa. Recuerda que las solicitudes de extracción son específicas de las plataformas de alojamiento como GitHub, mientras que las rebases y las etiquetas son funcionalidades de Git que se pueden utilizar en cualquier entorno Git.