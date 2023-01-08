export class Layers {
    layers = []
    createLayer(name){
       this.layers.push({
           name : name,
           list : []
       });
       return this.layers[this.layers.length - 1];
    }
    getLayer(name){
        return this.layers.find(x => x.name === name);
    }
    getAllLayers(){
        return this.layers;
    }
}