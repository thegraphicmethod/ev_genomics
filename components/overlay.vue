<template>
    <div 
        class="fixed bottom-0 left-0 w-full h-[100vh] mix-blend-multiply pointer-events-none hidden lg:block"
    >
    
        <div class="w-full h-full" >

          <svg 
            :viewBox="()=> '0 0 ' +  wSize[0] + ' ' + wSize[1]" xmlns="http://www.w3.org/2000/svg" xmlns:bx="https://boxy-svg.com" :width="wSize[0]" :height="wSize[1]">

            <g id="f_shape">
               
              <circle v-for="(c,i) in circles"
                class="mix-blend-multiply" 
                :style="{fill: colores[i]}" 
                v-tr3nsition:init="{
                  cx: 0,
                  cy:0,
                  r:24
                }"
                v-tr3nsition:to="{
                  cx: c.x,
                  transition: { duration: 1000  },
                  cy: c.y,
                  transition: { duration: 1000  },
                  r: c.r,
                  transition: { duration: 1000  },
                }"
                />
                
             <!--
                <rect v-for="(c,i) in circles"
                    class="mix-blend-multiply" 
                    :style="{fill: colores[i]}" 
                    v-tr3nsition:init="{
                  x: 0,
                  y:0,
                  width:24,
                  height:24
                }"
                v-tr3nsition:to="{
                  x: c.x,
                  transition: { duration: 1000  },
                  y: c.y,
                  transition: { duration: 1000  },
                  width: c.r,
                  transition: { duration: 1000  },
                  height: c.r,
                  transition: { duration: 1000  },
                }"
                />
                -->
            </g>

          </svg>

        </div>
      
    </div>
</template>

<script setup>
   import vTr3nsition from "~/assets/js/vTr3nsition.js";
    const wSize = ref([0, 0]);

    const props = defineProps({
        activeSection:{
            type: Number,
            default: 0
        }
    })

    const circles = ref([{x:0, y:0, r:24},{x:120, y:0, r:36},{x:240, y:0, r:48},{x:240, y:0, r:48},{x:240, y:0, r:48}])
    const colores = ['#BC29AD', '#F17A0B', '#2964BC', '#1E887C','#BC2929']

    watch(()=>props.activeSection, (newValue, oldValue) => {
        // console.log(newValue);
        shuffleDotd(newValue);
    });
    
    function onResize() {
        wSize.value = [window.innerWidth, window.innerHeight]
    }

    const mod = computed(()=> {
        return wSize.value[0]/18;
    })

    const shuffleDotd = (num) => {

        // set margins
         let yValues =  [0];
        // let yValues = [wSize.value[1]/2 - 96, wSize.value[1]/2 - 48,wSize.value[1]/2, wSize.value[1]/2 + 48, wSize.value[1]/2 + 96];
        let xValues = [0]
        let rValues = [mod.value/2]
        

        if(num == 2 || num == 3 || num == 4){
            yValues = [wSize.value[1]/2 - 96, wSize.value[1]/2 - 48,wSize.value[1]/2, wSize.value[1]/2 + 48, wSize.value[1]/2 + 96]
            xValues = [0,1,2,17,18]
            rValues = [mod.value/2, mod.value/2, mod.value, mod.value, mod.value, mod.value/2*3]

            // maxR = 3
        } else if(num == 5) {
            yValues = [wSize.value[1]/2, wSize.value[1]/2 + 48, wSize.value[1]/2 + 96, wSize.value[1]/2 + 96 +48, wSize.value[1]/2 + 96 + 96]
            xValues = [0,1,2,3,4,17,18]
            rValues = [mod.value/2, mod.value, mod.value/2*3,mod.value/2*3, mod.value/2*3]
            // maxR = 3
        } else {
            yValues =  [0,48,96, wSize.value[1]];
            xValues = [0,4,5,6,16,17]
            rValues = [mod.value/2, mod.value/2, mod.value, mod.value, mod.value, mod.value/2*3]
            // maxR = 3
        }

        /*
        switch (num) {
            
            case 0:
                 yValues = [0,48,96]
                let maxR = 3;
                break;
            case 2:
                
                break;
            default:
               // console.log("default ..........")
               // console.log(num);
        }
               */

        // assign values
        
        circles.value.forEach(c => {
            c.x = xValues[Math.floor(Math.random()*xValues.length)] * mod.value;
            c.y = yValues[Math.floor(Math.random()*yValues.length)];
            c.r = rValues[Math.floor(Math.random()*rValues.length)]
        });
        
    }
    

    onMounted(() => {
        // js resizeObserver ??
        // handle resize
        wSize.value = [window.innerWidth, window.innerHeight]
        window.addEventListener("resize", onResize, true);
    });


</script>