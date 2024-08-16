<template>
    <ul class="inline">
        <li class="tag active">all tags</li>
        <!-- research lines list -->
        <li
            v-for="tag in tags_research"
            :key="tag.slug"
            class="tag"
        >{{ tag.text }}</li>
        
        <!-- people list -->
        <li
            v-for="tag in tags_members"
            :key="tag.slug"
            class="tag"
        >{{ tag.text }}</li>
    </ul>
</template>

<script setup >

    defineProps({
        tags_research: {
            type: Array,
            default(){
                return [
                    {text: "Evolution of new genes", slug:"evolution-of-new-genes"},
                    {text: "neoantigen landscape", slug:"neoantigen-landscape"},
                ]
            }
        },

        tags_members: {
            type: Array,
            default(){
                return [
                    {text: "Albà", slug:"alba"},
                    {text: "Montañes", slug:"montanes"},
                ]
            }
        }
    })

</script>