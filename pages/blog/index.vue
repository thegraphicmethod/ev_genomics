<template>
    <section class="grid_eg_3 mt-12 mb-24 ">

        <div>
            <div class="h-12"></div>
        </div>

        <div class="lg:col-start-2 col-span-2 lg:p-6">
            <!-- side tags and search -->
            <div class="lg:sticky top-6 ">
                <h6 class="uppercase font-bold text-morado-eg my-6 hidden lg:grid">BLOG</h6>
                <blogTagList></blogTagList>
                <input class="w-full rounded-full px-6 py-1 my-6" placeholder="search">
            </div>
        </div>

        <div class="lg:col-start-5 lg:col-span-5 col-span-3 bg-white">
            <entriesFirstList></entriesFirstList> 
        </div>

         <!-- list other posts -->
        <div class="lg:col-start-5 lg:col-span-5 mt-24 col-span-3">
            <entriesOthersList></entriesOthersList>
        </div>

    </section>

</template>

<script setup >

    // blog categories -> tags
    
    // blog entries list
    // split 0,1,2 -> entriesFirstList
    // 3,4, ... N -> entriesOthersList

    
</script>

<style scoped>

/*
    .post{
        @apply lg:w-4/6 pb-24 border-b-4 border-b-stone-100 pt-12 bg-white px-12 ;
    }
        */

    .post_content img + p{
        @apply text-sm italic mt-2;
    }

    h3{
        @apply font-semibold text-lg leading-none mb-1;
    }
</style>