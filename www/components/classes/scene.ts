import {Layers} from "./layers";
import {Vue} from '@hotfusion/vue';
export class Scene extends Vue {
    layers = new Layers()
}