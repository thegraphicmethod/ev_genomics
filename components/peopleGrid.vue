<template>

    <!-- side pannel -->
    <article id="sidePannel" 
        class="md:w-4/12 w-11/12 bg-verde-eg fixed min-h-full z-10 top-0 md:mix-blend-multiply transition-all"
        :class = "showPannel ? 'left-0 ': '-left-[999px]'">

        <!-- close btn -->
         <div
            class="absolute -right-6 top-16 bg-verde-eg  text-white rounded-full text-center  p-3 cursor-pointer block m-auto"
         @click="closePannel">
         <img src="~/assets/svg/MaterialSymbolsCloseWhite.svg" alt="close">
        </div>

         <!-- details -->
        <div class="mt-36 text-white px-12">
            <p>Praesent a urna eget ex sodales pharetra congue at urna. Ut quis finibus tellus. Mauris eleifend dolor quis vehicula sodales. Aenean faucibus elit a pharetra porta. Proin ultrices gravida gravida. Sed vulputate ligula magna, eu egestas tellus accumsan nec. </p>
        </div>

        <!-- more -->
        <div class="mt-12 text-white px-12 ">
            <NuxtLink :to="'people/' + activePeople"
            class="border border-white pl-6 pr-3 py-2 font-semibold mix-blend-multiplyyy rounded-full"
            >
                more info <img src="~/assets/svg/MaterialSymbolsChevronRightWhite.svg" alt="more" class="inline h-6 w-auto">
            </NuxtLink>
            
         </div>

    </article>
  
    <!-- People -->
    <section class="grid_eg_3 bg-neutro-green-eg pt-6 mt-6 md:mt-0 lg:pt-0">

        <div class="lg:col-start-7 lg:grid hidden h-12">
            <h6 class="uppercase font-bold text-verde-eg">People</h6>
        </div>

        <section class="lg:row-start-2 lg:col-start-5 lg:col-span-5 md:col-start-2 md:col-span-2 pb-36">

            <article class="grid lg:grid-cols-5 md:grid-cols-2 pt-6 lg:pt-0">

                <div 
                    v-for="one in people"
                    class="lg:col-span-2 mb-12 cursor-pointer"
                    @click="selectOne(one.slug)"
                >
                    <h3 
                        class="text-2xl "
                        :class = "activePeople === one.slug || activePeople == 'none' ? 'text-black' :'text-gray-400'"
                    >
                        <span class="italic">{{ one.first_name }}</span> <span class="font-bold">{{one.family_name}}</span>
                    </h3>
                    <p class="text-verde-eg">{{ one.position }}</p>
                    <p class="mt-3 italic">{{ one.e_mail }}</p>
                </div>   
            </article>
        </section>

        
    </section>
</template>

<script setup >

    const activePeople = ref("none");
    const showPannel = ref(false);

    defineProps({
        people: {
            type: Array,
            default(){
                return [
                    {first_name: "Mar",family_name: "Albà", e_mail:"aaa@mydomain.com", position:"Principal Investigator", bio:"Praesent a urna eget ex sodales pharetra congue at urna. Ut quis finibus tellus. Mauris eleifend dolor quis vehicula sodales. Aenean faucibus elit a pharetra porta. Proin ultrices gravida gravida. Sed vulputate ligula magna, eu egestas tellus accumsan nec. ", portrait:"img_file.jpg", slug:"alba-m"},
                    {first_name: "José Carlos",family_name: "Montañés", e_mail:"aaa@mydomain.com", position:"PhD student", bio:"Praesent a urna eget ex sodales pharetra congue at urna. Ut quis finibus tellus. Mauris eleifend dolor quis vehicula sodales. Aenean faucibus elit a pharetra porta. Proin ultrices gravida gravida. Sed vulputate ligula magna, eu egestas tellus accumsan nec. ", portrait:"img_file.jpg", slug:"montanes-j-c"},
                    {first_name: "Alfredo",family_name: "Calosci", e_mail:"aaa@mydomain.com", position:"PhD student", bio:"Praesent a urna eget ex sodales pharetra congue at urna. Ut quis finibus tellus. Mauris eleifend dolor quis vehicula sodales. Aenean faucibus elit a pharetra porta. Proin ultrices gravida gravida. Sed vulputate ligula magna, eu egestas tellus accumsan nec. ", portrait:"img_file.jpg", slug:"calosci-a"}
                ]
            }
        }
    })

    function selectOne(slug) {
        if( activePeople.value != slug){
            activePeople.value = slug;
            showPannel.value = true;
            
        } else {
            activePeople.value = 'none';
            showPannel.value = false;
        }
    }

    function closePannel(){
        showPannel.value = false;
        activePeople.value = 'none';
    }

</script>