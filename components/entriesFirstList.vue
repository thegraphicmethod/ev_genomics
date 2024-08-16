<template>
    <!-- one big post -->
    <div 
        v-for="(entry,index) in entries"
        :key="entry.title"
        class="post"
    >
        <NuxtLink :to="'/blog/' + entry.slug" :key="entry.slug">
            <!-- date -->
            <p class="mb-2 "> <strong class="font-semibold text-morado-eg"> {{ formatBlogDate(entry.date) }}</strong>, {{ formatYY(entry.date)}}</p>
            <!-- title -->
            <h1 class="mb-6">{{ entry.title }}</h1>
            <!-- content -->
            <div v-html="entry.content" class="post_content"></div>
        </NuxtLink>

    </div>
</template>

<script setup >
    defineProps({
        entries: {
            type: Array,
            default(){
                return [
                    {title: "José Carlos Montañés defends his PhD at Universitat Pompeu Fabra",date: "2024-07-24", content:"<p>José Carlos has defended his PhD titled “Discovery and evolutionary analysis of novel genes and translated ORFs” on the 11th of July. He has used different transcriptomics technologies, including Nanopore dRNA long reads and ribosome profiling, to identify novel isoforms and peptides derived from non-canonical ORFs. He has also compared the patterns of evolution of putative de novo and recently duplicated genes. It appears that not only de novo genes, but also duplicated genes usually have a short evolutionary life. </p> <br/> <img src='/img/posts/tesis_JC_tribunal.jpg' alt='tesis'><p>Thesis committee with Joseph Schacherer, Cristian Cañestro and Fatima Gebauer</p>",slug:"jose-carlos-montanes-defends-his-ph-d-at-universitat-pompeu-fabra"},
                    {title: "Lili and Marta receive prizes at the VHIO Computational Oncology Awards",date: "2024-03-04", content:"<p>On Feb 21 2024 the VHIO Computational Oncology Award 2024 was celebrated at UAB Casa de la Convalescència. The finalists to the master thesis award presented their works as a 5′ flash talk and a poster session. Two members of the group, Lili and Marta, received a prize! Their work now continues in the group with PhD theses.</p>", slug:"lili-and-marta-receive-prizes-at-the-vhio-computational-oncology-awards"},
                    {title: "Our group is participating in the SMBE Satellite Meeting on de novo gene birth",date: "2023-01-12", content:"<p>Cova Vara and Chris Papadopoulos have presented their research in this week’s Symposium on de novo genes celebrated in Texas A&M University (College Station, Nov 6-9 2023). The research aims to explore the evolution of new genes in populations and has been funded by an ERC Advanced Grant (NovoGenePop 2022-2027). If you are interested in the topic or in joining the group do not hesitate to contact us!</p>",slug:"our-group-is-participating-in-the-smbe-satellite-meeting-on-de-novo-gene-birth"}
                ]
            }
        }
    })

    

</script>


<style >
    .post{
        @apply w-4/6 pb-24 border-b-4 border-b-stone-100 pt-12 bg-white px-12 ;
    }

    .post_content img + p{
        @apply text-sm italic mt-2;
    }

</style>