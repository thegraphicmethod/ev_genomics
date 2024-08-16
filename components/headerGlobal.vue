<template>
<!-- head small -->
<section class="grid grid-cols-18 ">
      <div class="h-12 bg-gray-100 mix-blend-multiply"></div>
      <div class="h-12 bg-gray-50 mix-blend-multiply"></div>
      
      <div>
        <NuxtLink to="/">
          <img src="~/assets/svg/eg_monogram_alone.svg" alt="ev_g" class="h-12 w-auto ml-2 opacity-50">
        </NuxtLink>
      </div>

      <div class="col-span-5 mt-2">
        <p><span class="italic text-stone-500">evolutionary</span> <span class="font-semibold text-stone-800">genomics</span> <span class="text-sm opacity-50">LAB</span></p>
      </div>

      <!-- nav test-->
      <NavGlobal></NavGlobal>

      <div class="h-12 col-start-1 bg-gray-50 mix-blend-multiply"></div>
    </section>
</template>