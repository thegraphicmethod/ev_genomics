<template>
    <!-- hero -->
    <section class=" grid-cols-18 md:grid hidden mt-6 lg:mt-0">
        <div class="bg-gray-100 lg:col-span-3 md:col-span-2 h-12">&nbsp;</div>
        <div class="bg-gray-100 col-span-2 h-12">&nbsp;</div>
        <div class="bg-gray-100 mix-blend-multiply h-12 ">&nbsp;</div>
        <div class="bg-gray-200 mix-blend-multiply h-12 ">&nbsp;</div>
        <div class="bg-neutro-green-eg lg:col-span-9 md:col-span-12 h-12">&nbsp;</div>
     </section>

    <section class="grid_eg_3 pb-24 bg-neutro-green-eg auto-rows-min mt-6 md:mt-0">
       
        <!-- bredcrumb -->
        <div class="lg:col-start-5 lg:col-span-5 col-span-2 h-12 hidden lg:grid">
            <h6 class=" my-2 text-stone-700">
                <NuxtLink to="../people" class="uppercase font-bold text-verde-eg">
                    people
                </NuxtLink>
                 / {{ people.first_name }} {{ people.family_name }}
            </h6>
        </div>

        <!-- left: picture and name-->
         <div class="lg:col-span-3 pt-12 lg:pt-6 ">
            <div class="lg:grid lg:grid-cols-3">
                <img src="/img/people/mar.jpg" alt="mar" class="rounded-full block m-auto grayscale mix-blend-multiply self-stretch lg:col-span-2">
            
                <div class="lg:col-start-2 lg:col-span-2">
                    <p class="text-3xl lg:text-4xl leading-none text-stone-700 mt-6">
                        <span class="italic text-stone-500">{{ people.first_name }}</span><br/>
                        <span class="font-semibold tracking-tight">{{ people.family_name }}</span>
                    </p>
                    <p class="italic text-sm mt-1">{{ people.e_mail }}l</p>
                </div>
            </div>
            
         </div>

         <!-- right title and bio -->
          <div class="text-stone-800 md:col-span-2 lg:col-span-3 lg:col-start-5 pt-12 lg:pt-6">
            <!-- role -->
            <p class="text-verde-eg role mb-2">{{ people.position }}</p>

            <!-- bio -->
            <div v-html="people.bio" id="desc"></div>
          </div>    

    </section>

    <section class="md:grid grid-cols-18 hidden">
        <div class="bg-neutro-green-eg lg:col-span-4 md:col-span-3 h-12">&nbsp;</div>
        <div class="bg-verde-eg h-12 ">&nbsp;</div>
        <div class="bg-gray-200 mix-blend-multiply h-12 ">&nbsp;</div>
        <div class="bg-gray-100 mix-blend-multiply h-12 ">&nbsp;</div>
     </section>


    <!-- pubblications list here -->
    <section class="grid_eg_3">
        <div class="lg:col-start-5 LGcol-span-2  h-12 mt-12">
            <h6 class="uppercase font-bold text-azul-eg">pubblications</h6>
        </div>

        <div class="lg:col-start-5 lg:col-span-4 mb-24 md:col-span-2 md:mt-12 lg:mt-0">
            <div v-for="pub in pubblications" class="mb-6">   
                <p class="text-sm mb-2 "> {{ pub.authors }} <strong class="font-semibold text-morado-eg"> {{ pub.year }}</strong></p>
                <h3 class="font-bold text-azul-eg mb-0 pl-2">{{ pub.title }}</h3>
                <p class=" italic pl-2 mt-2">{{ pub.review }}</p>
            </div>
        </div>
    </section>

</template>

<script setup>

defineProps({
        people: {
            type: Object,
            default(){
                return {first_name: "Mar",family_name: "Albà", e_mail:"aaa@mydomain.com", position:"Principal Investigator", bio:"<p>Mar obtained her PhD at the University of Barcelona in 1997 and a Master in Bioinformatics and Molecular Modeling at the University of London in 1999.</p><p>She worked as a postdoc in the laboratories of John Hancock (Medical Research Council, UK), on the evolution of amino acid tandem repeats, and of Paul Kellam (University College London), on virus genomics.</p><p>In 2002 she obtained a tenure-track position at Universitat Pompeu Fabra (UPF, Barcelona) and in 2005 she was appointed ICREA Research Professor at Fundacio IMIM and continues to teach at UPF.</p><p>She currently leads the Evolutionary Genomics group at GRIB (IMIM-UPF).</p>", portrait:"img_file.jpg", slug:"alba-m"}
            }
        },
        pubblications:{
            type: Array,
            default(){
                return [
                    {title: "Microproteins encoded by noncanonical ORFs are a major source of tumor-specific antigens in a liver cancer meta-cohort", authors: "Marta Espinosa Camarena, Patrick Theunissen, Marta Ruiz, Jorge Ruiz-Orera, Beatriz Calvo-Serra, Robert Castelo, Carla Castro, Pablo Sarobe, Puri Fortes*, Júlia Perera-Bel*, M. Mar Albà", review:"Science Advances 10:eadn3628.",year: 2024, url:"https://www.science.org/doi/10.1126/sciadv.adn3628?url_ver=Z39.88-2003&rfr_id=ori:rid:crossref.org&rfr_dat=cr_pub%20%200pubmed"},
                    {title: "High polymorphism levels of de novo ORFs in a Yoruba human population", authors: "Vara, C., Montañés, J.C., Albà, M.M", review:"Genome Research, 32:1215-27.",year: 2022, url:"https://pubmed.ncbi.nlm.nih.gov/35618415/"},
                    {title: "Uncovering de novo gene birth in yeast using deep transcriptomics.", authors: "JWilliam R. Blevins, Jorge Ruiz-Orera, Xavier Messeguer, Bernat Blasco-Moreno, José Luis Villanueva-Cañas, Lorena Espinar, Juana Díez, Lucas B. Carey, M.Mar Albà", review:"Nature Communications 12:604.",year: 2021, url:"https://pubmed.ncbi.nlm.nih.gov/33504782/"}
                   
                ]
            }
        }
    })
</script>

<style >
    #desc p{
        @apply  text-xl  leading-tight mb-2;

        &.role{
            @apply text-sm;
        }
    }
</style>