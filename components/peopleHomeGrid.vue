<template>

    <div class="lg:col-start-7 md:col-span-3 h-px bg-gray-300 mb-6 lg:mb-6 bg-blend-multiply md:mb-12 "></div>

    <!-- People -->
    <div class="lg:col-start-7 lg:col-span-2  h-12">
        <h6 class="uppercase font-bold text-verde-eg">People</h6>
    </div>
    
    <section class=" lg:col-start-5 lg:col-span-5 pb-36">


            <article class="grid lg:grid-cols-5 md:grid-cols-2">

                <div 
                    v-for="one in people"
                    class="col-span-2 mb-12 cursor-pointer"
                >
                    <nuxt-link :to="'/people/' + one.slug">
                        <h3 
                            class="text-2xl "
                            :class = "activePeople === one.slug || activePeople == 'none' ? 'text-black' :'text-gray-400'"
                        >
                            <span class="italic">{{ one.first_name }}</span> <span class="font-bold">{{one.family_name}}</span>
                        </h3>
                        <p class="text-verde-eg">{{ one.position }}</p>
                        <p class="mt-3 italic">{{ one.e_mail }}</p>
                    </nuxt-link>
                </div>   
            </article>
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

    
</script>