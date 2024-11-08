<template>

    <div
        v-for="(entry,index) in entries"
        :key="entry.title"
        class="mb-6 md:w-5/6"
    >
        <NuxtLink :to="'/blog/' + entry.slug" :key="entry.slug">
            <p class="mb-2 text-sm">
                <strong class="font-semibold text-morado-eg ">{{ formatBlogDate(entry.date) }}</strong> , {{ formatYY(entry.date)}}</p>
            <h3 >{{ entry.title }}</h3>
            <p class="pl-2">{{ entry.excerpt }}</p>
        </NuxtLink>
    </div>

</template>

<script setup >
    defineProps({
        entries: {
            type: Array,
            default(){
                return [
                    {title: "Evolutionary trajectories of new duplicated and putative de novo genes",date: "2024-07-24", excerpt:"Completely new protein sequences in genomes can arise by gene duplication or de novo.",slug:"jose-carlos-montanes-defends-his-ph-d-at-universitat-pompeu-fabra"},
                    {title: "Our group goes to ECCB 2022",date: "2024-03-04", excerpt:"We had a great time at the European Conference in Computational Biology celebrated in Sitges ", slug:"our-group-goes-to-eccb-2022"},
                    {title: "The functions of human de novo originated proteins start to be revealed",date: "2023-01-12", excerpt:"Proteins restricted to a given species or lineage are mysterious. Many of them have emerged de novo from ancestral non-coding genomic regions rather than from pre-existing genes. ",slug:"the-functions-of-human-de-novo-originated-proteins-start-to-be-revealed"}
                ]
            }
        }
    })

</script>

<style scoped>
    h3{
        @apply font-semibold text-lg leading-none mb-1;
    }
</style>