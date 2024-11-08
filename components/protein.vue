<template>
    <div ref="vizContainer" class="w-full h-full">
        <svg
            ref="svg"
            class=""
            :width="canvasWidth"
            :height="canvasHeight"
            :viewBox="`0 0 ${canvasWidth} ${canvasHeight} `"
        >
        <circle
            :cx="canvasWidth/2"
            :cy="canvasHeight/2"
            :r="min([canvasWidth,canvasHeight])/2"
            fill="#fff"
            opacity="0.333"
        />

        <circle
            :cx="canvasWidth/2"
            :cy="canvasHeight/2"
            :r="min([canvasWidth,canvasHeight])/3"
            fill="#fff"
            opacity="0.333"
        />
        </svg>
    </div>
</template>

<script setup>
    import { useElementSize } from "@vueuse/core";
    import { scaleLinear, scaleLog, scalePow, scaleSqrt, scaleOrdinal, scaleBand, sum, max, min, bin} from "d3";

    const vizContainer = ref(null);
    const svg = ref(null);
    const { width: availableWidth, height: availableHeight } = useElementSize(vizContainer);

    const canvasWidth = computed(() => {return availableWidth.value;});
    const canvasHeight = computed(() => {return availableHeight.value;});
</script>