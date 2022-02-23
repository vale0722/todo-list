<template>
  <main class="h-min-screen">
    <div class="w-full carousel h-full">
      <div id="slide0" class="relative w-full carousel-item">
        <div class="hero h-full px-16">
          <div class="flex-col hero-content">
            <div>
              <h1 class="text-3xl font-bold">Vite</h1>
              <p class="py-6 flex">
                <img
                  class="pr-4"
                  alt="analitics"
                  src="@/assets/vite.svg"
                  width="100"
                  height="100"
                />
                Vite es una herramienta de compilación que tiene como objetivo proporcionar una experiencia de desarrollo más rápida y ágil para proyectos web modernos
              </p>
            </div>
          </div>
        </div>
        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" class="btn btn-circle">❮</a>
          <a href="#slide1" class="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide1" class="relative w-full carousel-item">
        <div class="hero h-full px-16">
          <div class="flex-col hero-content">
            <div>
              <h1 class="text-3xl font-bold">El corazón de Vue3</h1>
              <p class="py-6">Vue 3 tiene un motor que está integrado por 3 módulos:</p>
              <div class="pb-6 flex justify-center">
                <img
                  alt="components"
                  src="@/assets/components.png"
                  width="300"
                  height="300"
                />
              </div>
                <div>
                  <div>
                    <h2 class="text-2xl font-bold"> Reactivity Module </h2>
                    <p class="py-6">
                      Es el módulo que se encarga de crear los objetos reactivos de Javascript que pueden ser vigilados para los cambios.
                    </p>
                  </div>
                  <div>
                    <h2 class="text-2xl font-bold">Compiler Module</h2>
                    <p class="py-6">
                      Este módulo tiene la misión de estudiar las plantillas de HTML y convertirlas en render functions.
                    </p>
                  </div>
                  <div>
                    <h2 class="text-2xl font-bold">Render Module</h2>
                    <p class="py-6">
                      Es el módulo que tiene 3 distintas funciones para el renderizado de las distintas funciones en la página web. Las funciones son:
                    </p>
                    <ul>
                      <li><strong>Render Phase:</strong> es donde se transforma la render functions en un nodo virtual</li>
                      <li><strong>Mount Phase:</strong> es donde el nodo virtual se convierte en la página web</li>
                      <li><strong>Patch Phase:</strong> es donde se realiza la comparación entre el anterior nodo virtual y el nuevo nodo virtual, y sólo actualiza aquellas partes de la página web que hayan cambiado mediante llamadas en Javascript.</li>
                    </ul>
                  </div>
                </div>
            </div>
          </div>
        </div>
        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide0" class="btn btn-circle">❮</a>
          <a href="#slide2" class="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide2" class="relative w-full carousel-item">
        <div class="hero h-full px-16">
          <div class="flex-col hero-content">
            <div>
              <h1 class="text-3xl font-bold">Componentes</h1>
              <p class="py-6">
                Vue se basa en componentes web.
                Un componente web es una parte de una web que puede ser reutilizada
                y que normalmente tiene estilos y funcionalidad aislada.</p>
            </div>
          </div>
        </div>
        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" class="btn btn-circle">❮</a>
          <a href="#slide3" class="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide3" class="relative w-full carousel-item">
        <div class="hero h-full px-16">
          <div class="flex-col hero-content">
            <div>
              <h1 class="text-3xl font-bold">Sintaxis</h1>
              <p class="py-6">
                Todas las plantillas de Vue son HTML sintácticamente válido que pueden ser analizados por navegadores compatibles.
                Por debajo, Vue compila las plantillas en un código JavaScript altamente optimizado. Combinado con el sistema de reactividad, Vue es capaz de calcular de manera inteligente la cantidad mínima de componentes para volver a renderizar y aplicar la cantidad mínima de manipulaciones DOM cuando cambia el estado de la aplicación.
              </p>
            </div>
          </div>
        </div>
        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" class="btn btn-circle">❮</a>
          <a href="#slide4" class="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide4" class="relative w-full carousel-item">
        <div class="hero h-full px-16">
          <div class="flex-col hero-content">
            <div>
              <h1 class="text-3xl font-bold">Directivas</h1>
              <p class="py-6">
                Las directivas son atributos especiales con el prefijo
                  <span class="text-warning"> v-</span>.
                Vue proporciona una serie de directivas integradas. Se espera que los valores de atributo de cada directiva sean expresiones de JavaScript únicas.Tomemos <span class="text-warning"> v-if </span> como ejemplo:
              </p>
              <div class="mockup-code my-4">
                <pre data-prefix="1"><code>&lt;p <span class="text-warning">v-if</span>="seen"&gt;Now you see me&lt;/p&gt;</code></pre>
              </div>
              <a target="_blank" class="text-pink-500 fond-bold" href="https://vuejs.org/guide/essentials/template-syntax.html#directives">Leer Más</a>
            </div>
          </div>
        </div>        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" class="btn btn-circle">❮</a>
          <a href="#slide0" class="btn btn-circle">❯</a>
        </div>
      </div>
    </div>
  </main>
</template>
<style>
li {
  @apply mb-8;
}
ul {
  @apply mx-8;
}

.carousel {
  width: 35rem;
}
</style>
