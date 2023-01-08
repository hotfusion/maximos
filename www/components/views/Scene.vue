<template>
<Layout orientation="horizontal">
    <Layout>
        <Layers v-bind:layers="layers.getAllLayers()"></Layers>
    </Layout>
    <Layout>

    </Layout>
    <Layout>

    </Layout>
</Layout>
</template>

<script lang="ts">
    import {Options} from '@hotfusion/vue';
    import {Scene} from "../classes/scene";
    import Layers from './Layers';
    @Options({
        components : {Layers}
    })
    export default class scene extends Scene {
        mounted() {
            let ObjectLayer = this.layers.createLayer('objects');
            let CameraLayer = this.layers.createLayer('cameras');
            let LightLayer  = this.layers.createLayer('lights');

            ObjectLayer.list.push({
                name : 'Object 1'
            })


        }
    }
</script>

<style scoped>

</style>