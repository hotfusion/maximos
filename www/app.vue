<template>
    <Layout orientation="horizontal">
        <Layout style="width: 30%">
            <Grid style="width: inherit">
                <columns>
                    <column style="min-width: 160px">Scene</column>
                    <column></column>
                </columns>
                <rows>
                    <row>
                        <cell>Cameras</cell>
                        <cell></cell>
                        <row v-for="(camera, index) in getCameras()">
                            <cell>
                                Camera {{index + 1}}
                            </cell>
                            <cell></cell>
                            <row v-for="schema in getCameraSchema()">
                                <cell>{{schema.id}}</cell>
                                <cell></cell>
                                <row v-for="item in schema.list">
                                    <cell class="label-cell">{{item.id}}</cell>
                                    <cell><input
                                            class="input-cell"
                                            type="text"
                                            v-on:wheel="set(camera,item.ref,(parseFloat($event.target.value) + ($event.wheelDeltaY > 0?0.05:-0.05)).toFixed(2))"
                                            v-on:keyup="set(camera,item.ref,$event.target.value)"
                                            v-bind:value="get(camera,item.ref)"></cell>
                                </row>
                            </row>

                        </row>
                    </row>
                    <row>
                        <cell>Objects</cell>
                        <cell></cell>
                        <row v-for="(object, index) in getObjects()">
                            <cell>
                                Object {{index + 1}}
                            </cell>
                            <cell></cell>
                            <row v-for="schema in getObjectSchema()">
                                <cell>{{schema.id}}</cell>
                                <cell></cell>
                                <row v-for="item in schema.list">
                                    <cell class="label-cell">{{item.id}}</cell>
                                    <cell><input
                                            class="input-cell"
                                            type="text"
                                            v-on:wheel="set(object,item.ref,(parseFloat($event.target.value) + ($event.wheelDeltaY > 0?0.05:-0.05)).toFixed(2))"
                                            v-on:keyup="set(object,item.ref,$event.target.value)"
                                            v-bind:value="get(object,item.ref)"></cell>
                                </row>
                            </row>
                        </row>
                    </row>
                </rows>
            </Grid>
        </Layout>
        <Layout ref="canvas-container">
            <canvas></canvas>
        </Layout>
    </Layout>
</template>

<script lang="ts">
    import {Vue} from '@hotfusion/vue';
    import UI from '@hotfusion/ui';
    import * as THREE from 'three';
    import {get,set} from 'lodash';
    import {layers} from './components/configs/layers';

    export default class app extends Vue {
        get = get
        set = set

        scene = {
            layers : layers
        }
        addLight(){

        }
        addCube(w = 1, h = 1, d = 1, material = new THREE.MeshBasicMaterial({color: 0x44aa88})){
            const objects  = this.scene.layers.find(x => x.id === 'objects');
            const geometry = new THREE.BoxGeometry(w,h,d);
            const mesh     = new THREE.Mesh(geometry, material);

            objects.list.forEach(x => x.selected = false);
            objects.list.push({
                type     : 'cube',
                geometry : geometry,
                mesh     : mesh,
                selected : true
            });
            return mesh;
        }
        addCamera(fov = 75, aspect = 2, near = 0.1, far = 5){

            let camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
            this.getCameras().push(camera);
            return camera;
        }
        getCameras(){
            return this.scene.layers.find(x => x.id === 'cameras').list;
        }
        getCameraSchema(){
            return this.scene.layers.find(x => x.id === 'cameras').schema;
        }
        getObjects(){
            return this.scene.layers.find(x => x.id === 'objects').list;
        }
        getObjectSchema(){
            return this.scene.layers.find(x => x.id === 'objects').schema;
        }
        mounted() {
            const ui       = new UI();

            const canvas = document.querySelector('canvas');
            const renderer = new THREE.WebGLRenderer({canvas});
            const camera = this.addCamera()
                  camera.position.z = 2;
            const scene = new THREE.Scene();

            let cube = this.addCube()
            scene.add(cube);

            const helper = new THREE.CameraHelper( camera );
            scene.add( helper );
            const axesHelper = new THREE.AxesHelper( 5 );
            scene.add( axesHelper );
            let render = (time) => {
                time *= 0.001;  // convert time to seconds

                //cube.rotation.x = time;
               // cube.rotation.y = time;

                renderer.setSize(this.$refs['canvas-container'].clientWidth,this.$refs['canvas-container'].clientHeight)
                renderer.render(scene, camera);

                requestAnimationFrame(render);
            }
            requestAnimationFrame(render);
        }
    }
</script>

<style scoped lang="less">
    Grid{
        row{
            &:hover{
                cell {
                    background-color: transparent;
                }
            }
            cell{
                height: 30px;
                input{
                    margin: 0 11px;
                    height: 29px;
                }
                &.input-cell{
                    padding: 0 !important;
                }
                &.label-cell{
                    justify-content: right;
                    padding-right: 20px;
                    font-weight: bold;
                    font-size: 12px
                }
            }
        }
    }

</style>