

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
    @property({
        type: cc.Prefab
    })
    thinking: cc.Prefab = null;

    
    loadgame (){
        cc.director.loadScene("game");
        cc.audioEngine.stopAll();
    }

    think (){
            const bg_pr= cc.instantiate(this.thinking);
            this.node.addChild(bg_pr);
            bg_pr.y = -150;
           
    }
    loadmenu(){
        cc.audioEngine.stopAll();
        cc.director.loadScene("menu");
    }
}
