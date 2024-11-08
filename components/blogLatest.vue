<template>
    <!-- blog latest-->
   
      <div class="lg:col-start-3 lg:col-span-2 md:col-span-3 mb-6">
        <h6 class="uppercase font-bold text-morado-eg">recent posts</h6>
      </div>

      <!-- container -->
       <div class="lg:col-start-3 lg:col-end-9 md:col-span-3 mb-6">

            <div class="grid md:grid-cols-3">
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

       </div>

      <!-- call for action -->
      <div class="lg:col-start-1 lg:col-span-2  hidden lg:grid bg-morado-eg "></div>

        <div class="lg:col-start-3 lg:col-span-2 pr-6">
            <NuxtLink to="/blog" class="text-white bg-morado-eg font-semibold text-lg uppercase  py-3 rounded-r-full block w-full font-mono lg:pl-0 pl-12">our blog</NuxtLink> 
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