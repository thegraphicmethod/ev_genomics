<template>
    <!-- blog latest-->
   
      <div class="col-start-3 col-span-2 mb-6">
        <h6 class="uppercase font-bold text-morado-eg">recent posts</h6>
      </div>

      <!-- container -->
       <div class="col-start-3 col-end-9 grid grid-cols-3 mb-6">
        <div
            v-for="(entry,index) in entries"
            class="pr-6"
        > 
        <NuxtLink :to="'blog/' + entry.slug">
            <p><strong class="font-semibold text-morado-eg"> {{ formatBlogDate(entry.date) }}</strong>, {{ formatYY(entry.date)}}</p>
            <h3 class="text-xl leading-tight font-bold mb-6 hover:text-morado-eg"> {{ entry.title }}</h3>
        </NuxtLink>
        </div>

       </div>

      <!-- call for action -->
      <div class="col-start-1 col-span-2 bg-morado-eg"></div>

      <div class="col-start-3 col-span-2 pr-6 ">
        <NuxtLink to="/blog" class="text-white bg-morado-eg font-semibold text-lg uppercase  py-3 rounded-r-full block w-full font-mono">our blog</NuxtLink> 
      </div>


</template>

<script setup >
    defineProps({
        entries: {
            type: Array,
            default(){
                return [
                    {title: "José Carlos Montañés defends his PhD at Universitat Pompeu Fabra",date: "2024-07-24",slug:"jose-carlos-montanes-defends-his-ph-d-at-universitat-pompeu-fabra"},
                    {title: "Lili and Marta receive prizes at the VHIO Computational Oncology Awards",date: "2024-03-04", slug:"lili-and-marta-receive-prizes-at-the-vhio-computational-oncology-awards"},
                    {title: "Our group is participating in the SMBE Satellite Meeting on de novo gene birth",date: "2023-01-12",slug:"our-group-is-participating-in-the-smbe-satellite-meeting-on-de-novo-gene-birth"}
                ]
            }
        },
        
    })
    </script>