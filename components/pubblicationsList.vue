<template>
    <article id="listContainer" class="lg:col-start-2 lg:col-span-6 col-span-3 grid md:grid-cols-3">        
        <div 
            v-for="pub in pubblications"
            class="pub_item"
        >
            <p class="mb-4 text-sm"> {{ pub.authors }}</p>
            <h3 class="text-lg leading-tight font-bold mb-4 text-azul-eg pl-2">{{ pub.title }}</h3>
             <p class="italic leading-tight pl-2">{{ pub.review }}</p>
        </div>
    </article>
</template>

<script setup >

    defineProps({
        pubblications: {
            type: Array,
            default(){
                return [
                    {title: "Microproteins encoded by noncanonical ORFs are a major source of tumor-specific antigens in a liver cancer meta-cohort", authors: "Marta Espinosa Camarena, Patrick Theunissen, Marta Ruiz, Jorge Ruiz-Orera, Beatriz Calvo-Serra, Robert Castelo, Carla Castro, Pablo Sarobe, Puri Fortes*, Júlia Perera-Bel*, M. Mar Albà", review:"Science Advances 10:eadn3628.",year: 2024, url:"https://www.science.org/doi/10.1126/sciadv.adn3628?url_ver=Z39.88-2003&rfr_id=ori:rid:crossref.org&rfr_dat=cr_pub%20%200pubmed"},
                    {title: "Native RNA sequencing in fission yeast reveals frequent alternative splicing isoforms", authors: "José Carlos Montañés, Marta Huertas, Simone G Moro, William R Blevins, Mercè Carmona, José Ayté, Elena Hidalgo and M. Mar Albà", review:"Genome Research, 32:1215-27.",year: 2022, url:"https://pubmed.ncbi.nlm.nih.gov/35618415/"},
                    {title: "Uncovering de novo gene birth in yeast using deep transcriptomics.", authors: "JWilliam R. Blevins, Jorge Ruiz-Orera, Xavier Messeguer, Bernat Blasco-Moreno, José Luis Villanueva-Cañas, Lorena Espinar, Juana Díez, Lucas B. Carey, M.Mar Albà", review:"Nature Communications 12:604.",year: 2021, url:"https://pubmed.ncbi.nlm.nih.gov/33504782/"},
                    {title: "Native RNA sequencing in fission yeast reveals frequent alternative splicing isoforms", authors: "José Carlos Montañés, Marta Huertas, Simone G Moro, William R Blevins, Mercè Carmona, José Ayté, Elena Hidalgo and M. Mar Albà", review:"Genome Research, 32:1215-27.",year: 2022, url:"https://pubmed.ncbi.nlm.nih.gov/35618415/"},
                   
                ]
            }
        }
    })

</script>

<style>
    .pub_item{
        @apply pr-8 mb-12;
    }
</style>