<template>
    <!-- blog latest-->
   
      <div class="col-start-3 col-span-2 mb-6">
        <h6 class="uppercase font-bold text-azul-eg">highlighted research</h6>
      </div>

      <!-- container -->
       <div class="col-start-3 col-end-9 grid grid-cols-3 mb-4">
            <div
                v-for="(pub,index) in pubblications"
                class="pr-6"
            > 
                <p class="mb-6 leading-tight"> {{ pub.authors }}</p>
                <h3 class="text-lg leading-tight font-semibold mb-6 text-azul-eg">{{ pub.title }}</h3>
                <p class="italic leading-tight">{{ pub.review }}</p>
            </div>

       </div>

       <div class="col-start-3 col-end-5 mt-12">

        <NuxtLink to="pubblications/"
            class="border border-stone-200 pl-6 pr-3 py-2 font-semibold rounded-full w-full block uppercase bg-white text-azul-eg hover:bg-neutro-blue-eg hover:text-azul-eg transition-all text-sm"
            >all the pubblications ...</NuxtLink>
       </div>

      <!-- call for action 
      <div class="col-start-1 col-span-2 bg-morado-eg"></div>

      <div class="col-start-3 col-span-2 pr-6 ">
        <NuxtLink to="/blog" class="text-white bg-morado-eg font-semibold text-lg uppercase  py-3 rounded-r-full block w-full font-mono">our blog</NuxtLink> 
      </div>
      -->

  
</template>

<script setup >
    defineProps({
        pubblications: {
            type: Array,
            default(){
                return [
                    {title: "Microproteins encoded by noncanonical ORFs are a major source of tumor-specific antigens in a liver cancer meta-cohort", authors: "Marta Espinosa Camarena, Patrick Theunissen, Marta Ruiz, Jorge Ruiz-Orera, Beatriz Calvo-Serra, Robert Castelo, Carla Castro, Pablo Sarobe, Puri Fortes*, Júlia Perera-Bel*, M. Mar Albà", review:"Science Advances 10:eadn3628.",year: 2024, url:"https://www.science.org/doi/10.1126/sciadv.adn3628?url_ver=Z39.88-2003&rfr_id=ori:rid:crossref.org&rfr_dat=cr_pub%20%200pubmed"},
                    {title: "Native RNA sequencing in fission yeast reveals frequent alternative splicing isoforms", authors: "José Carlos Montañés, Marta Huertas, Simone G Moro, William R Blevins, Mercè Carmona, José Ayté, Elena Hidalgo and M. Mar Albà", review:"Genome Research, 32:1215-27.",year: 2022, url:"https://pubmed.ncbi.nlm.nih.gov/35618415/"},
                    {title: "Uncovering de novo gene birth in yeast using deep transcriptomics.", authors: "JWilliam R. Blevins, Jorge Ruiz-Orera, Xavier Messeguer, Bernat Blasco-Moreno, José Luis Villanueva-Cañas, Lorena Espinar, Juana Díez, Lucas B. Carey, M.Mar Albà", review:"Nature Communications 12:604.",year: 2021, url:"https://pubmed.ncbi.nlm.nih.gov/33504782/"}
                   
                ]
            }
        }
        
    })
    </script>