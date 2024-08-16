<template>
     <nav class="col-span-4">
        <ul class="mt-2 font-mono text-stone-700">
          <li>
            <NuxtLink to="/">home</NuxtLink>
            </li>
          <li >
            <NuxtLink to="/pubblications">pubblications</NuxtLink> 
            </li>
          <li >
            <NuxtLink to="/people">people</NuxtLink>
            </li>
          <li><NuxtLink to="/blog">blog</NuxtLink></li>
        </ul>
    </nav>
</template>

<style>

    nav{
        li{
            @apply inline-block mr-3 uppercase font-mono font-normal text-stone-800;
            a{
                &.router-link-active{
                    @apply font-bold text-morado-eg;
                }

            @apply hover:text-nrj-eg;

            }
        }
    }

</style>