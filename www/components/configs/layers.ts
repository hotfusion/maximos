export const layers = [{
    id     : 'cameras',
    list   : [],
    schema : [{
        id   : 'position',
        list : [{
            id    : 'x',
            value : 0,
            ref   : 'position.x'
        },{
            id    : 'y',
            value : 0,
            ref   : 'position.y'
        },{
            id    : 'z',
            value : 0,
            ref   : 'position.z'
        }]
    },{
        id   : 'rotation',
        list : [{
            id    : 'x',
            value : 0,
            ref   : 'rotation.x'
        },{
            id    : 'y',
            value : 0,
            ref   : 'rotation.y'
        },{
            id    : 'z',
            value : 0,
            ref   : 'rotation.z'
        }]
    }]
},{
    id   : 'lights',
    list : []
},{
    id   : 'objects',
    list : [],
    schema : [{
        id   : 'scale',
        list : [{
            id    : 'width',
            value : 1,
            ref   : 'mesh.scale.x'
        },{
            id    : 'height',
            value : 1,
            ref   : 'mesh.scale.y'
        },{
            id    : 'depth',
            value : 1,
            ref   : 'mesh.scale.z'
        }]
    },{
        id   : 'position',
        list : [{
            id    : 'x',
            value : 1,
            ref   : 'mesh.position.x'
        },{
            id    : 'y',
            value : 1,
            ref   : 'mesh.position.y'
        },{
            id    : 'z',
            value : 1,
            ref   : 'mesh.position.z'
        }]
    },{
        id   : 'rotation',
        list : [{
            id    : 'x',
            value : 1,
            ref   : 'mesh.rotation.x'
        },{
            id    : 'y',
            value : 1,
            ref   : 'mesh.rotation.y'
        },{
            id    : 'z',
            value : 1,
            ref   : 'mesh.rotation.z'
        }]
    }]
}]