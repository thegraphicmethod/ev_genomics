<template>
    <section class="dynamic_bg">
        <p>block</p>
    </section>

    <section class="dynamic_bg">
        <p>block</p>
    </section>

    <section class="dynamic_bg" >
        <p>block</p>
    </section>

    <section class="dynamic_bg" >
        <p>block</p>
    </section>

</template>

<script setup>
    const dynamic_bg = ref('rgb(245 245 244)');
    const bg_array = ['rgb(245 245 244)','#EDEDE4', '#EDE4ED', '#E4EDEB']

    onMounted(() => {
        // intersection observer
        const observerOptions = {
            rootMargin: '0px',
            threshold: 0.5
        }

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        function observerCallback(entries, observer) {
            entries.forEach((entry,index) => {
                if(entry.isIntersecting) {
                    // do something
                    // console.log("intersecting ......")
                    // console.log(entry.target.dataset.sectionNumber)
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
        border-bottom: solid 1px #333;
        min-height: 80vh;
        padding: 64px;
    }
</style>