<template>
    <div>
        <section class="grid grid-cols-9 mt-12 mb-24">
            <div class="col-start-2 col-span-2">
                <h6 class="uppercase font-bold text-azul-eg block">Pubblications</h6>
            </div>

            <div class="col-span-4">
                <PubblicationsTags></PubblicationsTags>
            </div>

            <div>
                <input class="rounded-full px-6 py-1 font-mono" placeholder="search">
            </div>
        </section>

        <!-- research list -->
        <section class="grid grid-cols-9 mb-36 mt-12">
            <PubblicationsList></PubblicationsList>
        </section>
    </div>
</template>

<script setup >

    // load pubblications full list
    // load tags -> reserac lines
    // load tags -> members

</script>

