<template>
    <ul class="inline">
        <li class="tag blog_tag active">all tags</li>
        <li
            v-for="tag in tags"
            :key="tag.slug"
            class="tag"
            >
            {{ tag.name }}
        </li>
    </ul>
</template>

<script setup >
    defineProps({
        tags:{
            type: Array,
            default(){
                return [
                    {name:"cancer", slug:"cancer"},
                    {name:"education", slug:"education"},
                    {name:"RNA-seq", slug:"rna-seq"},
                    {name:"de novo gene evolution", slug:"de-novo-gene-evolution"},
                    {name:"mammal", slug:"mammal"},
                    {name:"ribosome profiling", slug:"ribosome-profiling"},
                    {name:"transcriptomics", slug:"transcriptomics"},
                    {name:"never ending story", slug:"never-ending-story"}
                ]
            }
        }
    })
</script>

<style scooped>
    .blog_tag{
        @apply font-bold;
        &.active{
            @apply  border-white text-white bg-morado-eg font-bold;
        }
    }

</style>