<template>
    <div v-bind="research_line">
        <h3 class="text-4xl font-semibold mb-4 leading-0 ">{{ research_line.title }}</h3>

        <div 
            class="research_desc text-lg leading-snug" id="researchDesc"
            v-html="research_line.description"
        ></div>
    
        <h6 class="mt-6 uppercase font-semibold text-sm text-nrj-eg">Founded by:</h6>
        <p class="mb-2 pl-2">{{ research_line.founded_by }}</p>

        <h6 class="mt-6 uppercase font-semibold text-sm text-nrj-eg">Collaborators:</h6>
        <p class="italic pl-2">{{ research_line.collaborators }}</p>

        <hr class="mt-6"/>

        <h6 class="mt-12 uppercase font-semibold text-sm text-azul-eg mb-6">recent pubblications:</h6>
    
        <div v-for="pub in pubblications" class="mb-6">   
            <p class="text-sm mb-2 "> {{ pub.authors }} <strong class="font-semibold text-morado-eg"> {{ pub.year }}</strong></p>
            <h3 class="font-bold text-azul-eg mb-0 pl-2">{{ pub.title }}</h3>
            <p class=" italic pl-2 mt-2">{{ pub.review }}</p>
        </div>
    
    </div>
</template>

<script setup >

    defineProps({
        research_line: {
            type: Object,
            default(rawProps){
                return {title: "Evolution of new genes", description:"<p>We are investigating the mechanisms by which new genes originate with a special emphasis on genes originated de novo from previously non-coding genomic regions.</p><p>The research is strongly based on the analysis of transcriptomics and translatomics (RiboSeq) data from related species and individuals. We are examining different model systems, including human cell lines and yeast isolates.</p><p>Additionally, we are taking advantage of long read transcriptomics technologies to learn about the changes in gene structure and expression across evolutionary time.</p>", founded_by:"Research in this area is currently supported by an European Research Council Advanced Grant (NovoGenePop) and a grant from the Spanish Ministry of Science and Innovation (PID2021-122726NB-I00).", collaborators: "Lucas Wange (UPF/IMIM), Tomàs Marqués-Bonet (UPF), Elena Hidalgo (UPF), Xavier Messeguer (UPC), Joseph Schacherer (University of Strasbourg)", }
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

<style>
    #researchDesc p{
        @apply mb-2 leading-snug;
    }
</style>