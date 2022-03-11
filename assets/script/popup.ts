

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property({
        type : cc.Prefab
    })
    popup : cc.Prefab = null;

    protected start(): void {
        const po = cc.instantiate(this.popup);
        this.node.addChild(po);
        
    }
}
