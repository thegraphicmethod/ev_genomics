<template>

    <!-- overlay -->
    <Overlay
        :activeSection="activeSection"
    ></Overlay>
 

    <!-- head home -->
    <section class="dynamic_bg grid_eg_18  ">
        <div class="h-12 bg-gray-100 mix-blend-multiply hidden lg:grid"></div>
        <div class="h-12 bg-gray-50 mix-blend-multiply  hidden lg:grid"></div>
        <div class="h-12 border-r border-white  hidden lg:grid"></div>
        <div class="h-12 border-r border-white  hidden lg:grid"></div>
        <div class="h-12 border-r border-white  hidden lg:grid"></div>
        <div class="h-12 border-r border-white  hidden lg:grid"></div>
        <div class="h-12 border-r border-white  hidden lg:grid"></div>
        <div class="h-12  hidden lg:grid"></div>

          <!-- nav test-->
          <NavGlobal></NavGlobal>

        <div class="h-12 col-start-1 bg-gray-50 mix-blend-multiply  hidden lg:grid"></div>
    </section>

    <section class="dynamic_bg grid_eg_3 pt-12 " > 
        <!-- logo -->
        <div class="lg:col-span-3 ">
            <div class="grid grid-cols-1 lg:grid-cols-3">
                
                <div class="lg:col-span-2 ">
                    <img src="~/assets/svg/eg_monogram.svg" alt="ev_g" class="opacity-60">
                </div>

                <!-- text -->
                <div class="lg:col-start-2 md:col-span-2 pt-6 md:pt-12 lg:pt-0  ">
                    <p class="text-4xl  leading-none text-stone-700">
                        <span class="italic text-stone-500">evolutionary</span><br/>
                        <span class="font-semibold tracking-tight">genomics</span>
                        <span class="text-base ml-1.5 opacity-50">LAB {{ activeSection }}</span>
                    </p>
                </div>

            </div>
        </div>

        <!-- about -->
        <div class="lg:col-start-5 lg:row-start-1 lg:col-span-2 md:col-span-2 leading-tight pr-6 mt-6  text-stone-800" >
            <div id="weAre" v-bind="we_are" v-html="we_are.content"></div>
            <hr class="my-6 border-stone-200"/>
            <div id="location" v-bind="location" v-html="location.content"></div>
        </div>

        <div class="lg:col-start-8 mt-6 hidden lg:grid lg:col-span-2">
            <Aminoacids></Aminoacids>
        </div>

        <!-- aminoacids  
        <div class="lg:col-start-8 font-mono uppercase mt-6 font-normal text-stone-400 hidden lg:grid ">
            <p>tgg ttg agt act tgc cta atg cga gtg ata ggg gac gca cga gat agt cta tta ttc gtt 
            ccg tgc ccc tga cct cga ctg atc ctc gag gtg cgc atc act agg ccg act tgg ttg agt act tgc cta atg cgt acc tcg act gat acc tcg agc gtg cgc atc acg tag gcc gac ttg gtt gaa
            </p>
        </div>

        <div class="mt-6 bg-gray-200  h-full hidden lg:grid">a</div>
        -->

        <div class="lg:col-span-3 h-px bg-gray-300 mt-12"></div>

    </section>

    <section class="dynamic_bg grid_eg pt-12">
        <PubblicationsHighlight></PubblicationsHighlight>
    </section>
   
    <section class="dynamic_bg grid_eg_3 lg:py-24 md:py-6" >
        <div class="lg:col-start-6 lg:col-span-4 h-px md:col-span-3 bg-gray-300 mt-12"></div>
        <div class="lg:col-start-6 lg:col-span-2 my-6 md:col-start-1">
            <h6 class="uppercase font-bold text-nrj-eg">Main Research Lines</h6>
        </div>

        <div class="lg:col-start-3 lg:col-span-3 my-6 md:col-span-2">
            <HomeResearchLine :research_line="res_line_1"></HomeResearchLine> 
        </div>

        <div class="lg:col-start-6 lg:col-span-3 my-6 md:col-span-2 md:col-start-2">
            <HomeResearchLine :research_line="res_line_2"></HomeResearchLine>
        </div>

    </section>

    <section class="dynamic_bg grid_eg py-24" >
         <BlogLatest></BlogLatest>
    </section>

    <section class="dynamic_bg grid_eg_3 py-12" >
        <peopleHomeGrid></peopleHomeGrid>
    </section>

</template>

<script setup>
    // import { useResizeObserver } from '@vueuse/core'
    const dynamic_bg = ref('rgb(245 245 244)');
    const bg_array = ['rgb(245 245 244)','rgb(245 245 244)','#E4E5ED','#EDEDE4', '#EDE4ED', '#E4EDEB', '#EDEDE4'];
    const activeSection = ref(0);

    const props = defineProps({
    // home texts 1 and 2
    we_are: {
      type: Object,
        default(){
          return {content: "<p>The focus of our group is to understand <strong>evolutionary processes</strong> at the <strong>molecular level</strong> using large-scale data.<br/></p><p>We have a strong <strong>computational focus</strong> but we also collaborate with experimental groups in some of our projects.</p>",description: "goals and focus",slug:"we-are"}
        }
      },

    location: {
      type: Object,
        default(){
          return {content: "<p>We are located at the <a href='https://imim.cat/programesrecerca/informaticabiomedica/'>Biomedical Informatics Research Program</a> (GRIB, IMIM-UPF), <a href='https://www.prbb.org/?l=en'>Barcelona Biomedical Research Park</a> (PRBB).</p>",description: "we are located", slug:"location"}
        }
    },

    // research lines 1 and 2
    res_line_1: {
      type: Object,
        default(){
          return {title: "Evolution of new genes", description:"<p>We are investigating the mechanisms by which new genes originate with a special emphasis on genes originated de novo from previously non-coding genomic regions.</p><p>The research is strongly based on the analysis of transcriptomics and translatomics (RiboSeq) data from related species and individuals. We are examining different model systems, including human cell lines and yeast isolates.</p><p>Additionally, we are taking advantage of long read transcriptomics technologies to learn about the changes in gene structure and expression across evolutionary time.</p>", founded_by:"Research in this area is currently supported by an European Research Council Advanced Grant (NovoGenePop) and a grant from the Spanish Ministry of Science and Innovation (PID2021-122726NB-I00).", collaborators: "Lucas Wange (UPF/IMIM), Tomàs Marqués-Bonet (UPF), Elena Hidalgo (UPF), Xavier Messeguer (UPC), Joseph Schacherer (University of Strasbourg)"}
        }
    },

    res_line_2: {
      type: Object,
        default(){
          return {title: "The neoantigen landscape of cancer cells", description:" <p>We are investigating how the accumulation of mutations during cancer progression, as well as the translation of non-canonical ORFs in cancer-specific transcripts, can result in the production of neoantigens with the capacity to trigger an immune response against the cancer cells.</p><p>We are also developing machine learning methods to improve the prediction of the response to immunotherapy using extensive whole exome sequencing and transcriptomics data.</p>", founded_by:"This research is funded by the BBVA Foundation and the Institute of Health Carlos III (Spanish Government).", collaborators: "Júlia Perera-Bel (IMIM), Robert Castelo (UPF), Joaquim Bellmunt (IMIM/Harvard), Puri Fortes (UNAV)."}
        }
    }


    })

    definePageMeta({
        layout: 'custom'
    })

    const updateSection = (num)=>{
        activeSection.value = num;
    }

    onMounted(() => {

        // intersection observer
        const observerOptions = {
            rootMargin: '0px',
            threshold:0.6
        }

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        function observerCallback(entries, observer) {
            entries.forEach((entry,index) => {
                if(entry.isIntersecting) {
                    // do something
                    // console.log("intersecting ......")
                    // console.log(entry.target.dataset.sectionNumber)
                   
                    updateSection(entry.target.dataset.sectionNumber)

                    dynamic_bg.value = bg_array[entry.target.dataset.sectionNumber]
                }
            });
        };

        const target = '.dynamic_bg';
        let sectionCount = 0;
        document.querySelectorAll(target).forEach((i) => {
            if (i) {
                // assign data value
                i.dataset.sectionNumber = sectionCount;
                sectionCount ++;
                observer.observe(i);
            }
        });
       
    }) // end mounted

</script>

<style>
    .dynamic_bg{
        transition: background-color 1000ms linear;
        background-color: v-bind(dynamic_bg);
       
        /*min-height: 80vh;*/
        
    }

    .placeholder{
        min-height: 80vh;
        border-bottom: solid 1px #ccc;
    }

    .desc p{
        @apply mb-2 pl-2;
    }
</style>