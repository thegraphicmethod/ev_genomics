<template>
      <div v-for="one in pastMembers"  class="mb-6">   
        <h3 >{{ one.first_name }} <strong class="font-semibold"> {{ one.family_name }}</strong> </h3>
        <p class="text-verde-eg mb-2">{{ one.position }}</p>
        <p class="text-sm italic ">{{ one.date_to }}</p>
    </div>
</template>

<script setup>
defineProps({
        pastMembers: {
            type: Array,
            default(){
                return [
                    {first_name: "Sara",family_name: "Razquin", e_mail:"aaa@mydomain.com", position:"MSc Bioinformatics project UAB",date_from:"2024-01-01", date_to:"2024-06-01", slug:"sara-r"},
                    {first_name: "Sophia",family_name: "Huspek", e_mail:"aaa@mydomain.com", position:"Internship University of Applied Sciences Upper Austria", date_from:"2024-03-01", date_to:"2024-05-01", slug:"montanes-j-c"},
                    {first_name: "Emeline",family_name: "Favreau",  position:"Visiting postdoc ESEB mobility", date_from:"2012-01-01", date_to:"2022-03-01", slug:"calosci-a"}
                ]
            }
        }
    })

</script>
