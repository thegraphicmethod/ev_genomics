<template>
    <section class="grid grid-cols-1 lg:grid-cols-9 lg:mt-12 mb-24 ">

        <div class="hidden lg:grid">
            <div class="h-12"></div>
        </div>

        <div class="lg:col-start-2 lg:col-span-3 p-6 hidden lg:grid">
            <!-- side tags and search -->
            <div class="mt-6">
                <h6 v-bind="entry" class="mb-6">
                    <NuxtLink 
                        to="../blog"
                        class="uppercase font-bold text-morado-eg mb-6"
                    >BLOG</NuxtLink>
                    / {{ entry.title }}
                </h6>

                <!-- list -->

                <div 
                    v-for="item in entries"
                    :key="item.slug"
                    class="mb-6 w-5/6 leading-tight"
                >
                    <NuxtLink :to="'/blog/' + item.slug" :key="item.slug">
                        <p class="mb-1 text-sm">
                            <strong class="font-normal text-morado-eg">{{ formatBlogDate(item.date) }}</strong> , {{ formatYY(item.date)}}</p>
                        <h4 class="font-semibold pl-2">{{ item.title }}</h4>
                    </NuxtLink>
                </div>

            </div>

            
             <article class="mt-6">
                
             </article>
        </div>

      <div class="lg:col-start-5 lg:col-span-5  bg-white lg:mt-0 mt-6">

        <!-- one post -->
        <div 
            v-bind="entry"
            class="post "
        >
            <!-- date -->
            <p class="mb-2 "> <strong class="font-semibold text-morado-eg"> {{ formatBlogDate(entry.date) }}</strong>, {{ formatYY(entry.date)}}</p>
            <!-- title -->
            <h1 class="mb-6">{{ entry.title }}</h1>
            <!-- content -->
            <div v-html="entry.content" class="post_content"></div>
        </div>
        </div>

        
    </section>

</template>

<script setup >

    defineProps({
        entry: {
            type: Object,
            default(rawProps){
                return {title: "José Carlos Montañés defends his PhD at Universitat Pompeu Fabra",date: "2024-07-24", content:"<p>José Carlos has defended his PhD titled “Discovery and evolutionary analysis of novel genes and translated ORFs” on the 11th of July. He has used different transcriptomics technologies, including Nanopore dRNA long reads and ribosome profiling, to identify novel isoforms and peptides derived from non-canonical ORFs. He has also compared the patterns of evolution of putative de novo and recently duplicated genes. It appears that not only de novo genes, but also duplicated genes usually have a short evolutionary life. </p> <br/> <img src='/img/posts/tesis_JC_tribunal.jpg' alt='tesis'/><p>Thesis committee with Joseph Schacherer, Cristian Cañestro and Fatima Gebauer</p>",slug:"jose-carlos-montanes-defends-his-ph-d-at-universitat-pompeu-fabra"}
            }
        },

        entries: {
            type: Array,
            default(){
                return [
                    {title: "Evolutionary trajectories of new duplicated and putative de novo genes",date: "2024-07-24", slug:"jose-carlos-montanes-defends-his-ph-d-at-universitat-pompeu-fabra"},
                    {title: "Our group goes to ECCB 2022",date: "2024-03-04",  slug:"our-group-goes-to-eccb-2022"},
                    {title: "The functions of human de novo originated proteins start to be revealed",date: "2023-01-12", slug:"the-functions-of-human-de-novo-originated-proteins-start-to-be-revealed"}
                ]
            }
        }

        
    })

    

    

</script>

<style scoped>

    .post{
        @apply lg:w-4/6 pb-24 w-full pt-12 bg-white px-12 ;
    }
  
    h3{
        @apply font-bold text-lg leading-none mb-1;
    }
</style>