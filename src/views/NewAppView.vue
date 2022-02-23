<template>
  <main class="h-min-screen">
    <div class="h-full">
      <div class="flex-col flex">
        <div>
          <h1 class="text-5xl font-bold">Creando una Aplicación desde Cero</h1>
          <div class="alert shadow-lg alert-warning mt-4">
            <div class="flex flex-col w-full">
              <div class="flex flex-col items-center text-center w-full">
                <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                <strong>Pre-requisitos</strong>
              </div>
              <span>- Conocer la consola de comandos y sus comandos básicos</span>
              <span>- Instalar Node.js </span>
            </div>
          </div>
          <p class="py-4">Para crear un proyecto en Vue 3, lo primero que debe realizar es ejecutar esta lea en la terminal</p>
          <div class="mockup-code my-4">
            <pre><code>  npm init vue@latest</code></pre>
          </div>
          <p class="py-4">Este comando nos servirá para automatizar el proceso de creación del proyecto base, allí nos preguntará por varias opciones:</p>
          <div class="mockup-code my-4">
            <pre><code>
    ✔ Project name: … &lt;your-project-name&gt;
    ✔ Add TypeScript? … No / Yes
    ✔ Add JSX Support? … No / Yes
    ✔ Add Vue Router for Single Page Application development? … No / Yes
    ✔ Add Pinia for state management? … No / Yes
    ✔ Add Vitest for Unit testing? … No / Yes
    ✔ Add Cypress for both Unit and End-to-End testing? … No / Yes
    ✔ Add ESLint for code quality? … No / Yes
    ✔ Add Prettier for code formating? … No / Yes

    Scaffolding project in ./&lt;your-project-name&gt;...
    Done.
            </code></pre>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
