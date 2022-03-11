

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    
    loadgame (){
        cc.director.loadScene("game");
    }
}
