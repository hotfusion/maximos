<template>
     <Scene></Scene>
</template>

<script lang="ts">
    import {Vue,Options} from '@hotfusion/vue';
    import Scene from "./components/views/scene";
    import UI from '@hotfusion/ui';

    @Options({
        components : {Scene}
    })
    export default class app extends Vue {
        mounted() {
            new UI();
        }
    }
</script>

<style scoped>

</style>