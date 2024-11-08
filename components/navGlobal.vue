<template>
     <nav class=" col-span-3 lg:col-span-4 md:col-start-2 ">
        <ul class="mt-2 text-stone-700">
          <li>
            <NuxtLink to="/" id="s1">home</NuxtLink>
            </li>
          <li >
            <NuxtLink to="/pubblications" id="s2">pubblications</NuxtLink> 
            </li>
          <li >
            <NuxtLink to="/people" id="s3">people</NuxtLink>
            </li>
          <li><NuxtLink to="/blog" id="s4">blog</NuxtLink></li>
        </ul>
    </nav>
</template>

<style>

    nav{
        li{
            @apply inline-block mr-3 font-light text-stone-800;

            a{
                &.router-link-active{
                    @apply font-bold text-morado-eg;
                }

                @apply hover:text-nrj-eg;

            }

            a#s1{
              &.router-link-active{
                    @apply  text-rojo-eg;
              }
            }

            a#s2{
              &.router-link-active{
                    @apply  text-azul-eg;
              }
            }

            a#s3{
              &.router-link-active{
                    @apply  text-verde-eg;
              }
            }

            a#s4{
              &.router-link-active{
                    @apply  text-morado-eg;
              }
            }
        }
    }

</style>