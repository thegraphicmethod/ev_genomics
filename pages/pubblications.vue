<template>
    <div>
        <section class="grid_eg_3 mt-12 lg:mb-24 mb-12">
            <div class="md:col-start-2 md:col-span-2 hidden lg:grid">
                <h6 class="uppercase font-bold text-azul-eg block">Pubblications</h6>
            </div>

            <div class="lg:col-span-4 col-span-3 mb-4 lg:mb-0">
                <PubblicationsTags></PubblicationsTags>
            </div>

            <div class="lg:col-auto col-span-3">
                <input class="rounded-full px-6 py-1 font-mono w-full" placeholder="search">
            </div>
        </section>

        <!-- research list -->
        <section class="grid_eg_3 mb-36 lg:mt-12">
            <PubblicationsList></PubblicationsList>
        </section>
    </div>
</template>

<script setup >

    // load pubblications full list
    // load tags -> reserac lines
    // load tags -> members

</script>

