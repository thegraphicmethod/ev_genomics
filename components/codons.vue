<template>
    <div class="w-full  font-mono text-normal uppercase grid grid-cols-5">
        <p v-for="c in codons">{{ c.string }}</p>
    </div>
</template>

<script setup>

    const randomSeq="gatccgcgctagttaccgatatagagttcttcaactgaatgttcacaaactgtctgcgcgcttctgctcagcacggtgcagggcacctcacctatcgccttaagctctacctacgtttatagtcggagacaagcgtcacgagttatagcactctgatctactactgcgttacgagcgtctgatacttagcttacgattgttcaatgagcagttgactccgagtaacttttgattttagttgcgttcggcctaacgcatacatgtacatgcggacctttgggcacgtgagatgtggaatgtttcatagtgcagcctatagggacggcacatgccctctctcatttacgcgggtctggcaacgaaattcatagatcgcttatcagaacgtctggaacggcgcttgttgtatagggacgcgtttacttataaatgtaccaaaacttcggggacaggcacggtggtttgtaacattaggagcaacagtaagccaccggacggcggaccgatggcttattatgtggctactcatgctcggctcccagaaaacggcttctgtgcgaataacacaagtcatcgcatgacccgcccgctatcaccatgcctcatagcatgagactgggtcatctcctgtttggcgataactccttttgcggctattagacctaacagtctgagaccccggtatcgtacgacagcgcagagccgatctgaccttacgggaattgatatttggatactgagccagctattgccagacaaatataattcatcttcctatagcggagaatttatcgtaagccctattaattcttggcgaacacgttttacgggtattattccgatgatagatagttctttgttcatttgcggctaacgccgagtcccgcacattatttcttactaggtgagtattctccgtatcgtaatcctacttctgacccgcacacgggacttaagcgtttactacttgaaagttgggaaaaagaaactgtatcagaaggcagtgaaatcagtattgaagtggggtttattgccagcttgcccggaacccgagtattctgacctctcagccggcagttacttcggttctgtttctttttatactttcccgaattcacgtccttgccagattataaactttaagcccatagcgcggcgggcctgtactccatgatcgacgcgcccgacaacggggttacggtggccttccaagcgcgaacccgatgtatgtatctggaccgtcttatatatagtactacttctacgtcttgatcatacgcaagcgaaaactaccacagtgctccgggaggtttgacaatcataccctatactgaagttttatggaataatgggcttgtccttgaccaacgagctatcgaaactatgattcctcactcacactcataattggagaggaatgactgagatcgtggacggccgttcatctgtcaaagagcggttctgtagcaacagcttatgaaacgcaggtcaacagcctaaccgctaatttgattgtcaatacgtaaccgtgtagtctacacttaagccagagcatccaagtaataggctcacgtacccgggtattcaagggagtgacgggtgattggctgagggagtgagttgcacccggcgcgtttaaattggtttattttgatggcaggaatggactcgacagcctggtgtaagcggcttgagttgagacaaaaaccggcttgttgcccacatcaaggagcgtgacccgtagcaggtagacgctgaaatattctatgcatttataaaggcggaagggtgcatacaacgaattgccgaggtctagcattatgagggttgattaagcgcataagtctagacacgccaatacacccctatccagtaaggacaaggggaacaggttccgtggaaaccccgtggatttgctcaacctcagagtaaatcagggataaggcttaggttttaactcccgcaattggggttcggctaagcttaatactcatgggcccatttaaatctaacttctacgctaggttacgaacagaagtttagtagcaggccctgttcccagtggattgcacagtaaatctgtttgccctgtatgcgtgaattaggcggaagactcgggcgccggacagagaggaggatggatagctagcataggctgtgccacgttggccgtcttaaacctcacgctgagctgaggggattgctgatgactcaacaccgagtcaacttacaatttatcccataataagcaattcatcgttcgatgacaaattggggtatatgaggccctgtacgaaattctcgcttccattatgttttcagatagcgcgtgatcattccgagaacctaaaacattccattgcgtcatgatgtttagaatatacgtccgcgacattcttaggacctgctcctatgaggaacattggacgctgctacgctcaccaatccccatcgttttgatagcgttccctaggctcccaacatatcacttgataccagtaacttgcgttaattatatgctaggacccccgggacagcgacgatgacgccgtaccacagcggcaggctttaaaagggccgatgcttagactatgcgcccaatgaattcgggtcggccagatatatcaaaacctcgtgaaacagcggccagtacggttaggtatttcctatgtcgcttcgtagctatttcattaacgtcgatagaccaggatttgtttttatagagcgttcgacaccctagccctagacgtctgccctcgacagccgcataatgttacctcgtctcgttccgacttatgcctcaatttagaatattccacgaagcagtggtacttggtcgattccgcctttgggggtcggttaccgcatataggaattactcattcttgaacgggcatgcgcagtcgcatgtcattactcatcaatcatcacctctcaccgtagaccttggcctctgcattgaacttgctgtaatactcccagccatgatggatacccccttgcactacgaccggattgtgttctgctgtgcaattggccaagacctactatacggatcgaaaaccaatgggtcattgcgagacttgcgtttctttaccgaccagatcgacattgatgtgtcacccaaatcggccggttacgaacgctcgatagctgcaaccatttagtacggtaattcctgaccctaatgttgagcccttgaacaaagtgtatttgggctaagctaattgctacggctctgtatgagctagtcttgcaattgggtttaggtctcggtctcctcgaccaggttccgtactattgaacccgatgtgcgtagtttgcccggagaccacagatctgtggccactcacaggcgtcacggctgccgaacgcctgacctctcgaattggtaggatagttggggtataactacggatcccgagcgttcagggtgtatccgtacacgtatgaatgttatctgttgctggcagactatggccttgcgccaccgtttcctcagagactattagtcacacgcgagttactgtgccacacacccttaactgggaatagtggatcgaagatcatatgaaaagaagattcgttatggctaccgcagttcgagtaacagctcatcagggctcaagcatctagagcagtcacgggttgcagtagaatgacagtcaatagctacgcactctgttagcatacagagctttttggtacatctggatagcgttggaagtcctgctactctccagtctattgtggggtctggcatgggtccaacggatctctccctttgtgcttcgtcctctaacccgcgtctcgttacctcagttattattcgtttgctagacggcgaattgtttctcgtgtatggtgcgtgctttttaataagaactaccgaacaatcacgctagatggcagttaccctttaagtatacgcgcgcgtctttaaataaaacgaccccgctgggtcgttccacgggcttgcgtgttgcgtaactttcgcacagatcctcggtgcggagtcgcgggcgtgcgcccgtacacgccgtataccttctccgcttgcatctggacccgctgcgaaatcgtcccacatattatgtgatgccggtgttaatcacctttttggtggtgttcacacctctgcgccgcgctcgggacatcttcatcacgatcccgccatgcccgatatagaaagccgaaagtaaccgcgtttggcccccccctgtaatcacgatgtgtcatctggcgttttgaccttcctcccgtagaggatcgatcatactttgggctgagcccgagactacggctccagtaatcagggactgctcagcggaacatcacatacctgcgccgggcgtccaagcggcatgttccggcagtcattacaaactaagcgtacaacctatcccccacttcttctgggcaggtcattgcctccgccttcaaaattacccaggcgaacaccagaaggaaacatattttaagtgttggactgggtctatgaacaccttttcagtgccccaccagtcctgataatggcgtgcttggtacgggtgcgatttcgtatgcagtaactcgcgtgatagctcttgtccctgtcacgtagcactatgtacaaatagccctcatgtctttggaacgctgtctaggagggccatcacttgcctgcggacccaaacgtaacaatcaagcgcgttctcaggaccatccacgcgattccgcttaactttgatacggttattaagtatttgccctaaccagggatgagtaattctattaactaagtctatgctaacagagtcagagctaacgaatagtatctcattgagcaagacacgggagcaaggtaatcggcatggagtactgccgtcaatcacggactctacacctagtctgcagactgtttcaatcaacatagttagacacttcgagactttaccgacaagtaagtgaccagccgggttcttcctgataccaattctttaaatgcatcctctagcgt"

    const rows = 13;
    const cols = 5;

    const props = defineProps({
        codonsArray:{
            type: Array,
            default: ()=> [{code: "L", seq: "ttg"}]
        }
    })

    const codons = ref([]);
    // init objects
    
    let countComplete = 0;
    let countTest = -1;
    let countChar = 0;
    let countReplace = 0;
    let initSeq = Math.floor(Math.random() * (randomSeq.length - ((rows*cols)*2)));

    // interval pattern
    const testTimer = ref(null);
    const testTimerFunction = ()=>{
        // do stuff here

        let c = codons.value[countComplete]

        if(!c.complete){
                let myString = c.string;
                const myTarget = c.target;
                // next char
                myString = replaceAt(myString, c.countChar,miniSeq.charAt(c.countReplace));
                c.string = myString;

                // test char equality
                if(myString.charAt(c.countChar) == myTarget.charAt(c.countChar)){
                    c.countChar = (c.countChar+1)%3; // 0,1,2
                    c.countReplace = 0;

                    if(myString == myTarget){
                        // set complete to true
                        c.complete = true;
                        countComplete ++;
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
        initSeq = Math.floor(Math.random() * (randomSeq.length - ((rows*cols)*2)));

        codons.value.forEach((el,index) => {
            el.countChar = 0;
            el.countComplete = 0;
            el.target = randomSeq.substring(initSeq, initSeq+3)
            el.complete = false;
            initSeq += 3;
        })
    }
   
    const miniSeq ="■atcg";

    // create codons
    for(let i = 0; i< (rows*cols); i++){
        let tmpObj = {string:":::", target:"ttt", complete:false, tested:false, index:i, countChar:0, countReplace:0}
        tmpObj.target = randomSeq.substring(initSeq, initSeq+3)
        codons.value.push(tmpObj)
        initSeq += 3;
    }

    const replaceAt = (str, i, ch)=> {
        return [...str].map((c,ii) => ii==i ? ch : c).join("");
    }

    onMounted(() => {
        
        console.log("codons array ......")
        console.log(codons.value)

        console.log("table .......")
        console.log(props.codonsArray)

        startTestTimer();
        // console.log(codons.value.length)
        // console.log(codons.value.filter((el)=> el.complete==true).length)

        

        // const NminiSeq = replaceAt(miniSeq,0,"X")
        // console.log("updated .......")
        // miniSeq = replaceAt(miniSeq,0,"X");
        // console.log(miniSeq)
       // miniSeq.charAt(0) = "X"
       // console.log(miniSeq)



        

        // once for sec
        // const timerText = setInterval(myTimer, 1000);
        // clearInterval(timerText)


    });

</script>