<template>
  <div>

    
    <div class="fixed bottom-0 left-0 w-full h-[100vh] mix-blend-multiply" >
      <section class="grid grid-cols-9 " >
        <div class="col-start-6 col-span-2 " >

          <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" xmlns:bx="https://boxy-svg.com" >

            <g id="f_shape">
              <circle class="mix-blend-multiply" style="fill: #BC29AD;" cx="250" cy="0" r="250" />
              <circle class="mix-blend-multiply" style="fill: #F17A0B" cx="250" cy="190" r="120" />
            </g>
          </svg>

        </div>
      </section>
        
    </div>
  
    

    <!-- head small -->
    <section class="grid grid-cols-18  ">
      <div class="h-12 bg-gray-100 mix-blend-multiply"></div>
      <div class="h-12 bg-gray-50 mix-blend-multiply"></div>

      <div class="col-span-1">
        <img src="~/assets/svg/eg_monogram_alone.svg" alt="ev_g" class="h-12 w-auto ml-2 opacity-50">
      </div>

      <div class="col-span-5 mt-2">
        <p><span class="italic text-stone-500">evolutionary</span> <span class="font-semibold text-stone-800">genomics</span> <span class="text-sm opacity-50">LAB</span></p>
      </div>

      <!-- nav test-->
      <div class="col-span-4">
        <ul class="mt-2 font-mono text-stone-700">
          <li class="inline-block mr-2 font-semibold text-morado-eg">home</li>
          <li class="inline-block mr-2">pubblications</li>
          <li class="inline-block mr-2">people</li>
          <li class="inline-block mr-2">blog</li>
        </ul>
      </div>

      <div class="h-12 col-start-1 bg-gray-50 mix-blend-multiply"></div>
    </section>

    <!-- head home -->
    <section class="grid grid-cols-18  ">
      <div class="h-12 bg-gray-100 mix-blend-multiply"></div>
      <div class="h-12 bg-gray-50 mix-blend-multiply"></div>

      <div class="col-span-6"></div>

      <!-- nav test-->
      <div class="col-span-4">
        <ul class="mt-2 font-mono text-stone-700">
          <li class="inline-block mr-2 font-semibold text-morado-eg">home</li>
          <li class="inline-block mr-2">pubblications</li>
          <li class="inline-block mr-2">people</li>
          <li class="inline-block mr-2">blog</li>
        </ul>
      </div>

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

      <div class="col-start-5 row-start-1 col-span-2 leading-tight pr-6 mt-12 row-span-2 text-stone-800">
        <p class="text-xl leading-tight mb-2">The focus of our group is to understand <strong class="font-medium">evolutionary processes</strong> at the <strong class="font-medium">molecular level</strong> using large-scale data.<br/></p>
        <p class="text-xl leading-tight  mb-2">
          We have a strong <strong class="font-medium">computational focus</strong> but we also collaborate with experimental groups in some of our projects.
        </p>
        <hr class="my-6 border-stone-200"/>
        <p id="location">We are located at the <a href="https://imim.cat/programesrecerca/informaticabiomedica/">Biomedical Informatics Research Program</a> (GRIB, IMIM-UPF), <a href="https://www.prbb.org/?l=en">Barcelona Biomedical Research Park</a> (PRBB).</p>
      </div>

    </section>

    <section class="grid grid-cols-9 mb-12 ">
    
    <!-- line test -->
    <div class="col-span-3 h-px bg-stone-200"></div>
    </section>

    <!-- research highlight -->
    <section class="grid grid-cols-9 mb-12 mt-24">

      

      <div class="col-start-3 col-span-2 mb-6">
        <h6 class="uppercase font-bold text-azul-eg">highligted research</h6>
      </div>

      <div class="col-start-3 col-span-2 pr-6">
        <p class="mb-6 leading-tight">
          José Carlos Montañés, Marta Huertas, Simone G Moro, William R Blevins, Mercè Carmona, José Ayté, Elena Hidalgo and M. Mar Albà (2022)
        </p>

        <h3 class="text-lg leading-tight font-semibold mb-6 text-azul-eg">Native RNA sequencing in fission yeast reveals frequent alternative splicing isoforms.</h3>
        <p class="italic">Genome Research, 32:1215-27. </p>
      </div>

      <div class=" col-span-2 pr-6">
        <p class="mb-6 leading-tight">William R. Blevins, Jorge Ruiz-Orera, Xavier Messeguer, Bernat Blasco-Moreno, José Luis Villanueva-Cañas, Lorena Espinar, Juana Díez, Lucas B. Carey, M.Mar Albà (2021) </p>
        <h3 class="text-lg leading-tight font-semibold mb-6">Uncovering de novo gene birth in yeast using deep transcriptomics</h3>
        <p  class="italic">Nature Communications 12:604.</p>
      </div>

      <div class=" col-span-2 pr-6">
        <p class="mb-6 leading-tight">Jorge Ruiz-Orera, Pol Verdaguer-Grau, José Luis Villanueva-Cañas, Xavier Messeguer, M.Mar Albà (2018)</p>
        <h3 class="text-lg leading-tight font-semibold mb-6">Translation of neutrally evolving peptides provides a basis for de novo gene evolution </h3>
        <p>exerpt</p>
      </div>


    </section>

    <!-- trensition test-->

    <!--
    <section class="grid grid-cols-18  ">
      <div class="h-12 bg-gray-100 mix-blend-multiply"></div>
    </section>

    <section class="grid grid-cols-18 ">
      <div class="h-12 bg-gray-200 mix-blend-multiply"></div>
      <div class="h-12 bg-gray-100 mix-blend-multiply"></div>
    </section>

    <section class="grid grid-cols-18  ">
      <div class="h-12 bg-gray-300 mix-blend-multiply"></div>
      <div class="h-12  bg-gray-200 mix-blend-multiply"></div>
      <div class="h-12 col-span-2 bg-gray-100 mix-blend-multiply"></div>
    </section>

    <section class="grid grid-cols-18 bg-neutro-yellow-eggg ">
      <div class="h-12  bg-gray-400 mix-blend-multiply"></div>
      <div class="h-12 col-span-2 bg-gray-300 mix-blend-multiply"></div>
      <div class="h-12 col-span-2 bg-gray-200 mix-blend-multiply"></div>
      <div class="h-12  col-span-2 bg-gray-100 mix-blend-multiply"></div>
      <div class="h-12 bg-gray-50 mix-blend-multiply"></div>
    </section>
-->
    <section class="grid grid-cols-18 bg-neutro-yellow-eggg h-12">
      <div class="h-full bg-gray-300 mix-blend-multiply"></div>
      <div class="h-full bg-gray-200 mix-blend-multiply"></div>
      <div class="h-full bg-gray-100 mix-blend-multiply"></div>
    </section>

    <section class="grid grid-cols-18 bg-neutro-yellow-eggg ">
     
      <div class="h-12 bg-gray-200 mix-blend-multiply"></div>
      <div class="h-12 bg-gray-100 mix-blend-multiply"></div>
      <div class="h-12 col-start-1 bg-gray-100 mix-blend-multiply"></div>
    </section>

     <!-- Main Research Lines -->
    <section class="grid grid-cols-9  bg-neutro-yellow-eggg py-12">
      <div class="col-start-5 col-span-2 mb-6">
        <h6 class="uppercase font-bold text-nrj-eg">Main Research Lines</h6>
      </div>

      <div class="col-start-2 col-span-3 mb-6 pr-8">
        <h3 class="text-4xl font-semibold mb-4 leading-0 ">Evolution of new genes</h3>
        <p class="mb-2">We are investigating the mechanisms by which new genes originate with a special emphasis on genes originated de novo from previously non-coding genomic regions.</p>
        <p class="mb-2">The research is strongly based on the analysis of transcriptomics and translatomics (RiboSeq) data from related species and individuals. We are examining different model systems, including human cell lines and yeast isolates.</p>
        <p class="mb-2">Additionally, we are taking advantage of long read transcriptomics technologies to learn about the changes in gene structure and expression across evolutionary time.</p>
        <p class="mb-2">Research in this area is currently supported by an European Research Council Advanced Grant (NovoGenePop) and a grant from the Spanish Ministry of Science and Innovation (PID2021-122726NB-I00).</p>

        <h6 class="mt-6 uppercase font-semibold text-sm text-nrj-eg">Collaborators:</h6>
        <p class="italic">Lucas Wange (UPF/IMIM), Tomàs Marqués-Bonet (UPF), Elena Hidalgo (UPF), Xavier Messeguer (UPC), Joseph Schacherer (University of Strasbourg).</p>

        <h6 class="mt-6 uppercase font-semibold text-sm text-nrj-eg">recent pubblications:</h6>
      </div>

      <div class="col-span-3 mb-6 pr-8">
        <h3 class="text-4xl font-semibold mb-4 leading-0">The neoantigen landscape of cancer cells</h3>
        <p class="mb-2">We are investigating how the accumulation of mutations during cancer progression, as well as the translation of non-canonical ORFs in cancer-specific transcripts, can result in the production of neoantigens with the capacity to trigger an immune response against the cancer cells.</p>
        <p class="mb-2">We are also developing machine learning methods to improve the prediction of the response to immunotherapy using extensive whole exome sequencing and transcriptomics data.</p>
        <p class="mb-2">This research is funded by the BBVA Foundation and the Institute of Health Carlos III (Spanish Government).</p>

        <h6 class="mt-6 uppercase font-semibold text-sm text-nrj-eg">Collaborators:</h6>
        <p class="italic">Júlia Perera-Bel (IMIM), Robert Castelo (UPF), Joaquim Bellmunt (IMIM/Harvard), Puri Fortes (UNAV).</p>

        <h6 class="mt-6 uppercase font-semibold text-sm text-nrj-eg">recent pubblications:</h6>
      </div>

    </section>

    <!-- blog latest-->
    <section class="grid grid-cols-9 py-36 bg-neutro-red-eg">
      <div class="col-start-3 col-span-2 mb-6">
        <h6 class="uppercase font-bold text-morado-eg">recent posts</h6>
      </div>

      <div class="col-start-3 col-span-2 pr-6"> 
        <p> July 15, 2024</p>
        <h3 class="text-xl leading-tight font-bold mb-6 ">José Carlos Montañés defends his PhD at Universitat Pompeu Fabra</h3>
      </div>

      <div class=" col-span-2 pr-6">
        <p> March 4, 2024</p>
        <h3 class="text-xl leading-tight font-bold mb-6">Lili and Marta receive prizes at the VHIO Computational Oncology Awards</h3>
      </div>

      <div class=" col-span-2 pr-6">
        <p> November 8, 2023</p>
        <h3 class="text-xl leading-tight font-bold mb-6">Our group is participating in the SMBE Satellite Meeting on de novo gene birth </h3>
       
      </div>

      <div class="col-start-1 col-span-2 bg-morado-eg">

      </div>

      <div class="col-start-3 col-span-2 pr-6 ">
        <a href="#" class="text-white bg-morado-eg font-semibold text-lg uppercase  py-3 rounded-r-full block w-full font-mono">call for action</a>
      </div>


    </section>

    <!-- People -->
    <section class="grid grid-cols-9 py-36 bg-neutro-green-eg">

      <!-- people grid -->
       <section class="col-span-4 bg-whitee bg-stone-50 row-start-2 mr-12 invisibleee mix-blend-multiply">
        <article class="grid grid-cols-4 pt-24">
          <div class="col-start-2 col-span-3 pr-12">
            <p class="mb-2">José Carlos gratuated in Biochemistry at Universitat de les Illes Balears in 2015. After his BSc he did a MSc of Molecular Biotechonology at the Universitat de Barcelona (2016) and a second MSc of Bioinformatics and Biostatistics at the Universitat Oberta de Catalunya (2019).</p>
        <p>He began his PhD in 2019 and now he is interested in studying the evolutionary relationships between de novo and duplicated genes.</p>
          </div>

        </article>

        
       </section>

       <section class="row-start-2 col-start-5 col-span-5">
        <article class="grid grid-cols-5">
          <div class="col-span-2 mb-12">
                <h3 class="text-2xl font-semibold">Mar Alba</h3>
                <p class="text-verde-eg">Principal Investigator</p>
                <p class="mt-3 italic">malba@imim.es</p>
            </div>   

            <div class="col-span-2  mb-12">
                <h3 class="text-2xl font-semibold ">José Carlos Montañés</h3>
                <p class="text-verde-eg">PhD student</p>
                <p class="mt-3 italic">malba@imim.es</p>
            </div>

      <div class="col-span-2  mb-12">
        <h3 class="text-2xl font-semibold">Lilian Marie Boll</h3>
        <p>one</p>
      </div>

      <div class="col-span-2  mb-12">
        <h3 class="text-2xl font-semibold">Marta Espinosa Camarena</h3>
        <p class="text-verde-eg">Master Student</p>
        <p class="mt-3 italic">espinosacamarenamarta@gmail.com</p>
        
      </div>

      <div class="col-span-2  mb-12">
        <h3 class="text-2xl font-semibold">Sergio Vázquez</h3>
        <p>one</p>
      </div>

      <div class="col-span-2  mb-12">
        <h3 class="text-2xl font-semibold">Chris Papadopoulos</h3>
        <p>one</p>
      </div>

      <div class="col-span-2  mb-12">
        <h3 class="text-2xl font-semibold">Covadonga Vara</h3>
        <p>one</p>
      </div>
        </article>
       
       
       </section>




      <div class="col-start-7 col-span-2 mb-6">
        <h6 class="uppercase font-bold text-verde-eg">People</h6>
      </div>

      
    </section>

    <!-- blog dummy -->
    <section class="grid grid-cols-9 mt-36">
      <div class="col-start-3 col-span-7 bg-[#fff] p-12">

        <div class="w-4/6 pb-24">
          <p class="mb-2 text-azul-eg"> <strong class="font-semibold ">March 4</strong>, 2024</p>
          <h1 class="mb-6">Lili and Marta receive prizes at the VHIO Computational Oncology Awards</h1>
          <p>On Feb 21 2024 the VHIO Computational Oncology Award 2024 was celebrated at UAB Casa de la Convalescència. The finalists to the master thesis award presented their works as a 5′ flash talk and a poster session. Two members of the group, Lili and Marta, received a prize! Their work now continues in the group with PhD theses.</p>
        </div>

        

      </div>

    </section>

   




  </div>
</template>

<style>
 /* circle { mix-blend-mode: multiply; } */
 #location a{
  @apply font-normal decoration-rojo-eg underline decoration-dotted underline-offset-2
 }
</style>
