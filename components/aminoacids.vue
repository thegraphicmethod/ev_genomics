<template>
    <div class="w-full h-full grid grid-cols-2">
        <div>
            <Codons
                :codons-array="codons_array"
            ></Codons>
        </div>
        <div class="bg-gray-100 "></div>
    </div>
</template>

<script setup>
 import codons_table from "~/assets/js/codons_table.json";

 const codons_array = computed(()=> {
    let res = [];
    codons_table.forEach((el)=> {
        let BBB = el.codons.split(", ")
        BBB.forEach((cd)=>{
            res.push({code: el.code, seq: cd.toLowerCase()})
        })
    })
    return res;
 })

</script>