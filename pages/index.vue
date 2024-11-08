<template>
      <!-- head home -->
      <section class="grid grid-cols-18  ">
        <div class="h-12 bg-gray-100 mix-blend-multiply"></div>
        <div class="h-12 bg-gray-50 mix-blend-multiply"></div>
        <div class="h-12 border-r border-white"></div>

        <div class="col-span-5"></div>

          <!-- nav test-->
          <NavGlobal></NavGlobal>

        <div class="h-12 col-start-1 bg-gray-50 mix-blend-multiply"></div>
      </section>

    <!-- hero -->
    <section class="grid grid-cols-9 my-12">

      <div class="col-span-2">
        <img src="~/assets/svg/eg_monogram.svg" alt="ev_g" class="opacity-50">
      </div>

      <div class="col-start-8 row-span-2 font-mono uppercase mt-12 font-normal text-stone-400">
        <p>tggt tgaa gtac ttgc ctaa tgcg agtg atag ggga cgca cgag atag tcta ttat tcgt 
      tccg tgcc cctg tacc tcga ctga tacc tcga gcgt gcgc atca cgta ggcc gact tggt tgaa gtac ttgc ctaa tgcg tacc tcga ctga tacc tcga gcgt gcgc atca cgta ggcc gact tggt tgaa </p>
      </div>

      <div class="col-start-2 col-span-2  min-h-[20vh]">
        <p class="text-4xl  leading-none text-stone-700">
          <span class="italic text-stone-500">evolutionary</span><br/>
          <span class="font-semibold tracking-tight">genomics</span>
          <span class="text-base ml-1.5 opacity-50">LAB</span>
        </p>
      </div>

      <!-- about -->
      <div class="col-start-5 row-start-1 col-span-2 leading-tight pr-6 mt-12 row-span-2 text-stone-800" >
        <div id="weAre" v-bind="we_are" v-html="we_are.content"></div>
        <hr class="my-6 border-stone-200"/>
        <div id="location" v-bind="location" v-html="location.content"></div>
      </div>


      <div class="col-span-3 h-px bg-stone-200 mt-12"></div>

    </section>

    <section class="grid grid-cols-9 pb-12 pt-6">
      <PubblicationsHighlight></PubblicationsHighlight>
    </section>

    <!-- main research lines -->
    <section class="grid grid-cols-9 ">
      <div class="col-start-6 col-span-4 h-px bg-gray-300 mt-12"></div>
    </section>

    <!-- main research lines -->
    <section class="grid grid-cols-9 py-12 bg-neutro-yellow-eggg">

      <div class="col-start-6 col-span-2 mb-6">
        <h6 class="uppercase font-bold text-nrj-eg">Main Research Lines</h6>
      </div>

      <div class="col-start-2 col-span-3 mb-6">
        <HomeResearchLine :research_line="res_line_1"></HomeResearchLine>
      </div>

      <div class="col-start-6 col-span-3 mb-6">
        <HomeResearchLine :research_line="res_line_2"></HomeResearchLine>
      </div>

    </section>

    <!-- blog latest -->
    <section class="grid grid-cols-9  bg-neutro-red-eg py-24">
      <BlogLatest></BlogLatest>
    </section>

    <!-- people list -->
    <section class="grid grid-cols-9  bg-neutro-green-eg pt-24">
      <peopleHomeGrid></peopleHomeGrid>
    </section>


</template>

<script setup lang="ts">
import HomeResearchLine from '~/components/homeResearchLine.vue';

  defineProps({
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
</script>


<style>
 /* circle { mix-blend-mode: multiply; } */

#weAre p{
  @apply text-xl leading-tight mb-2;

  strong{
    @apply font-medium;
  }
}

#location p{
  a{
    @apply font-normal decoration-rojo-eg underline decoration-dotted underline-offset-2
   }
}


</style>
