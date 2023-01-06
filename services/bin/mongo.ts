if(!global.db){
    global.db = true;
    global._mango = require("@hotfusion/service").Mongo
    let mongo = new global._mango({
        Auth : {
            clients : {},
            applications : {}
        }
    });
    mongo.connect('mongodb://localhost:27017').then(x => global.db = x).catch(console.error);
}
export class Mongo {
    static Auth     = (col) => global.db.Auth[col]
    static ObjectId = global._mango.ObjectId
}