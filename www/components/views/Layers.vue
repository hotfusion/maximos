<template>
   <Grid style="width: inherit">
       <columns>
           <column></column>
       </columns>
       <rows>
           <row v-for="layer in layers">
               <cell>
                   {{layer.name}}
               </cell>
               <row v-for="item in layer.list" v-on:click="itemSelected">
                   <cell>{{item.name}}</cell>
               </row>
           </row>
       </rows>
   </Grid>
</template>

<script lang="ts">
    import { Vue,Options } from '@hotfusion/vue';
    @Options({
        props : ['layers']
    })
    export default class Layers extends Vue {
        itemSelected() {
        }
    }
</script>

<style scoped>

</style>