<template>
    <div ref="vizContainer" class="w-full font-mono text-normal uppercase">
       <ul class="codons">
        <span 
            v-for="(c,i) in codons"
            :class="i == (codons.length -6) ? 'font-extrabold border-gray-600 text-lg ': 'font-light pt-0.5'">
            <li class="c1">{{ c.string.charAt(0) }}</li>
            <li class="c2">{{ c.string.charAt(1) }}</li>
            <li class="c3">{{ c.string.charAt(2) }}</li>
        </span>
       </ul>
    </div>
</template>

<script setup>
    import { useElementSize } from "@vueuse/core";
    const vizContainer = ref(null);
    const { width: availableWidth, height: availableHeight } = useElementSize(vizContainer);

    const canvasWidth = computed(() => {return availableWidth.value;});
    const canvasHeight = computed(() => {return availableHeight.value;});

    const randomSeq="gatccgcgctagttaccgatatagagttcttcaactgaatgttcacaaactgtctgcgcgcttctgctcagcacggtgcagggcacctcacctatcgccttaagctctacctacgtttatagtcggagacaagcgtcacgagttatagcactctgatctactactgcgttacgagcgtctgatacttagcttacgattgttcaatgagcagttgactccgagtaacttttgattttagttgcgttcggcctaacgcatacatgtacatgcggacctttgggcacgtgagatgtggaatgtttcatagtgcagcctatagggacggcacatgccctctctcatttacgcgggtctggcaacgaaattcatagatcgcttatcagaacgtctggaacggcgcttgttgtatagggacgcgtttacttataaatgtaccaaaacttcggggacaggcacggtggtttgtaacattaggagcaacagtaagccaccggacggcggaccgatggcttattatgtggctactcatgctcggctcccagaaaacggcttctgtgcgaataacacaagtcatcgcatgacccgcccgctatcaccatgcctcatagcatgagactgggtcatctcctgtttggcgataactccttttgcggctattagacctaacagtctgagaccccggtatcgtacgacagcgcagagccgatctgaccttacgggaattgatatttggatactgagccagctattgccagacaaatataattcatcttcctatagcggagaatttatcgtaagccctattaattcttggcgaacacgttttacgggtattattccgatgatagatagttctttgttcatttgcggctaacgccgagtcccgcacattatttcttactaggtgagtattctccgtatcgtaatcctacttctgacccgcacacgggacttaagcgtttactacttgaaagttgggaaaaagaaactgtatcagaaggcagtgaaatcagtattgaagtggggtttattgccagcttgcccggaacccgagtattctgacctctcagccggcagttacttcggttctgtttctttttatactttcccgaattcacgtccttgccagattataaactttaagcccatagcgcggcgggcctgtactccatgatcgacgcgcccgacaacggggttacggtggccttccaagcgcgaacccgatgtatgtatctggaccgtcttatatatagtactacttctacgtcttgatcatacgcaagcgaaaactaccacagtgctccgggaggtttgacaatcataccctatactgaagttttatggaataatgggcttgtccttgaccaacgagctatcgaaactatgattcctcactcacactcataattggagaggaatgactgagatcgtggacggccgttcatctgtcaaagagcggttctgtagcaacagcttatgaaacgcaggtcaacagcctaaccgctaatttgattgtcaatacgtaaccgtgtagtctacacttaagccagagcatccaagtaataggctcacgtacccgggtattcaagggagtgacgggtgattggctgagggagtgagttgcacccggcgcgtttaaattggtttattttgatggcaggaatggactcgacagcctggtgtaagcggcttgagttgagacaaaaaccggcttgttgcccacatcaaggagcgtgacccgtagcaggtagacgctgaaatattctatgcatttataaaggcggaagggtgcatacaacgaattgccgaggtctagcattatgagggttgattaagcgcataagtctagacacgccaatacacccctatccagtaaggacaaggggaacaggttccgtggaaaccccgtggatttgctcaacctcagagtaaatcagggataaggcttaggttttaactcccgcaattggggttcggctaagcttaatactcatgggcccatttaaatctaacttctacgctaggttacgaacagaagtttagtagcaggccctgttcccagtggattgcacagtaaatctgtttgccctgtatgcgtgaattaggcggaagactcgggcgccggacagagaggaggatggatagctagcataggctgtgccacgttggccgtcttaaacctcacgctgagctgaggggattgctgatgactcaacaccgagtcaacttacaatttatcccataataagcaattcatcgttcgatgacaaattggggtatatgaggccctgtacgaaattctcgcttccattatgttttcagatagcgcgtgatcattccgagaacctaaaacattccattgcgtcatgatgtttagaatatacgtccgcgacattcttaggacctgctcctatgaggaacattggacgctgctacgctcaccaatccccatcgttttgatagcgttccctaggctcccaacatatcacttgataccagtaacttgcgttaattatatgctaggacccccgggacagcgacgatgacgccgtaccacagcggcaggctttaaaagggccgatgcttagactatgcgcccaatgaattcgggtcggccagatatatcaaaacctcgtgaaacagcggccagtacggttaggtatttcctatgtcgcttcgtagctatttcattaacgtcgatagaccaggatttgtttttatagagcgttcgacaccctagccctagacgtctgccctcgacagccgcataatgttacctcgtctcgttccgacttatgcctcaatttagaatattccacgaagcagtggtacttggtcgattccgcctttgggggtcggttaccgcatataggaattactcattcttgaacgggcatgcgcagtcgcatgtcattactcatcaatcatcacctctcaccgtagaccttggcctctgcattgaacttgctgtaatactcccagccatgatggatacccccttgcactacgaccggattgtgttctgctgtgcaattggccaagacctactatacggatcgaaaaccaatgggtcattgcgagacttgcgtttctttaccgaccagatcgacattgatgtgtcacccaaatcggccggttacgaacgctcgatagctgcaaccatttagtacggtaattcctgaccctaatgttgagcccttgaacaaagtgtatttgggctaagctaattgctacggctctgtatgagctagtcttgcaattgggtttaggtctcggtctcctcgaccaggttccgtactattgaacccgatgtgcgtagtttgcccggagaccacagatctgtggccactcacaggcgtcacggctgccgaacgcctgacctctcgaattggtaggatagttggggtataactacggatcccgagcgttcagggtgtatccgtacacgtatgaatgttatctgttgctggcagactatggccttgcgccaccgtttcctcagagactattagtcacacgcgagttactgtgccacacacccttaactgggaatagtggatcgaagatcatatgaaaagaagattcgttatggctaccgcagttcgagtaacagctcatcagggctcaagcatctagagcagtcacgggttgcagtagaatgacagtcaatagctacgcactctgttagcatacagagctttttggtacatctggatagcgttggaagtcctgctactctccagtctattgtggggtctggcatgggtccaacggatctctccctttgtgcttcgtcctctaacccgcgtctcgttacctcagttattattcgtttgctagacggcgaattgtttctcgtgtatggtgcgtgctttttaataagaactaccgaacaatcacgctagatggcagttaccctttaagtatacgcgcgcgtctttaaataaaacgaccccgctgggtcgttccacgggcttgcgtgttgcgtaactttcgcacagatcctcggtgcggagtcgcgggcgtgcgcccgtacacgccgtataccttctccgcttgcatctggacccgctgcgaaatcgtcccacatattatgtgatgccggtgttaatcacctttttggtggtgttcacacctctgcgccgcgctcgggacatcttcatcacgatcccgccatgcccgatatagaaagccgaaagtaaccgcgtttggcccccccctgtaatcacgatgtgtcatctggcgttttgaccttcctcccgtagaggatcgatcatactttgggctgagcccgagactacggctccagtaatcagggactgctcagcggaacatcacatacctgcgccgggcgtccaagcggcatgttccggcagtcattacaaactaagcgtacaacctatcccccacttcttctgggcaggtcattgcctccgccttcaaaattacccaggcgaacaccagaaggaaacatattttaagtgttggactgggtctatgaacaccttttcagtgccccaccagtcctgataatggcgtgcttggtacgggtgcgatttcgtatgcagtaactcgcgtgatagctcttgtccctgtcacgtagcactatgtacaaatagccctcatgtctttggaacgctgtctaggagggccatcacttgcctgcggacccaaacgtaacaatcaagcgcgttctcaggaccatccacgcgattccgcttaactttgatacggttattaagtatttgccctaaccagggatgagtaattctattaactaagtctatgctaacagagtcagagctaacgaatagtatctcattgagcaagacacgggagcaaggtaatcggcatggagtactgccgtcaatcacggactctacacctagtctgcagactgtttcaatcaacatagttagacacttcgagactttaccgacaagtaagtgaccagccgggttcttcctgataccaattctttaaatgcatcctctagcgt"

    const rows = 1;
    const cols = computed(()=> {return Math.floor(canvasWidth.value / 36)});

    const props = defineProps({
        codonsArray:{
            type: Array,
            default: ()=> [{code: "L", seq: "ttg"}]
        }
    })

    const codons = ref([]);
    // init objects
    
    let countComplete = 4; // cols.value-6
    let initSeq = Math.floor(Math.random() * (randomSeq.length - (cols.value*2)));

    // interval pattern
    const testTimer = ref(null);

    const testTimerFunction = ()=>{
        // do stuff here

        // let c = codons.value[countComplete];
        const arrayCompletes = codons.value.map(el => el.complete);
        const animateThis = arrayCompletes.lastIndexOf(false)
        let c = codons.value[animateThis];

        if(c){
                let myString = c.string;
                const myTarget = c.target;
                // next char
                myString = replaceAt(myString, c.countChar,miniSeq.charAt(c.countReplace));
                c.string = myString;

                // test char equality
                if(myString.charAt(c.countChar) == myTarget.charAt(c.countChar)){
                    c.countChar = (c.countChar-1)%3; // 0,1,2
                    c.countReplace = 0;

                    if(myString == myTarget){
                        // set complete to true
                        c.complete = true;
                        // countComplete ++;
                        addCodon();
                    }
                } else {
                    c.countReplace = (c.countReplace+1) % miniSeq.length; // 0,1,2,3
                }

        }

        let quedan = codons.value.filter((el)=> !el.complete).length;

        if(quedan == 0){
            console.log("new loop ....")
            resetCodons();

            // countComplete = 0;
            // reset complete
            // reset init seq
            // initSeq = Math.floor(Math.random() * (randomSeq.length - (rows*cols)));

            
            // stopTestTimer();
        }

    }

    const startTestTimer = () => {
        testTimer.value = setInterval(testTimerFunction,50)
    }
    const stopTestTimer = () => {
        testTimer.value = clearInterval(testTimer.value)
    }

    const resetCodons = () => {
        countComplete = 0;
        initSeq = Math.floor(Math.random() * (randomSeq.length - ((rows*cols.value)*2)));

        codons.value.forEach((el,index) => {
            el.countChar = 0;
            el.countComplete = 0;
            el.target = randomSeq.substring(initSeq, initSeq+3)
            el.complete = false;
            initSeq += 3;
        })
    }
   
    const miniSeq ="◾atcg"; // ■ ▮ ◾


    const creteCodons = () => {
        console.log("creating codons ........")
        // create codons
        for(let i = 0; i< cols.value; i++){
            let tmpObj = {string:":::", target:"ttt", complete:false, tested:false, countChar:2, countReplace:0}
            tmpObj.target = randomSeq.substring(initSeq, initSeq+3)
            codons.value.push(tmpObj)
            initSeq = (initSeq+3)%randomSeq.length;
        }

        // next ?
        // start timer ?
        console.log("starting timer ........")
        // startTestTimer();
    }

    const addCodon = () => {
        // delete first
        codons.value.shift()
       
        // push new
        let tmpObj = {string:":::", target:"ttt", complete:false, tested:false, countChar:2, countReplace:0}
        tmpObj.target = randomSeq.substring(initSeq, initSeq+3)
        codons.value.push(tmpObj)
        initSeq = (initSeq+3)%randomSeq.length;
    }
    

    const replaceAt = (str, i, ch)=> {
        return [...str].map((c,ii) => ii==i ? ch : c).join("");
    }

    onMounted(() => {
        
        creteCodons();
        console.log("codons array ......")
        console.log(codons.value)

        // console.log("table .......")
        // console.log(props.codonsArray)

        // console.log(codons.value.length)
        // console.log(codons.value.filter((el)=> el.complete==true).length)

    });

</script>

<style scoped>
    ul.codons {
        @apply flex w-full;

        span{
            @apply inline-block border-y border-gray-300; /*  border-b */
        }

        li{
            @apply w-5 inline px-0.5;

            &.c1{
                @apply rounded-l-md;
            }

            &.c3{
                @apply mr-0 rounded-r-md;
            }
        }
    }
        
    
</style>