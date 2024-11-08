<template>
    <section class=" grid-cols-18 md:grid hidden mt-6 lg:mt-0">
        <div class="bg-gray-100 lg:col-span-3 md:col-span-2 h-12">&nbsp;</div>
        <div class="bg-gray-100 col-span-2 h-12">&nbsp;</div>
        <div class="bg-gray-100 mix-blend-multiply h-12 ">&nbsp;</div>
        <div class="bg-gray-200 mix-blend-multiply h-12 ">&nbsp;</div>
        <div class="bg-neutro-green-eg lg:col-span-9 md:col-span-12 h-12">&nbsp;</div>
     </section>
     
     <peopleGrid></peopleGrid>

    <section class="md:grid grid-cols-18 hidden">
        <div class="bg-neutro-green-eg lg:col-span-4 md:col-span-3 h-12">&nbsp;</div>
        <div class="bg-verde-eg h-12 ">&nbsp;</div>
        <div class="bg-gray-200 mix-blend-multiply h-12 ">&nbsp;</div>
        <div class="bg-gray-100 mix-blend-multiply h-12 ">&nbsp;</div>
     </section>

     <!-- past members -->
     <section class="grid_eg_3 mt-12 lg:mt-6">
        <div class="lg:col-start-5 lg:col-span-2  h-12">
            <h6 class="uppercase font-bold text-verde-eg">past members</h6>
        </div>

        <div class="lg:col-start-5 lg:col-span-4 md:col-span-2 mb-24">
          <PeopleFormerList></PeopleFormerList>
        </div>
    </section>
</template>

<script setup >

    // load member list
    // load former member list

</script>




