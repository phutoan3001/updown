
import number from './number'
const {ccclass, property} = cc._decorator;

@ccclass
export default class numbermgr extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;
    @property({
        type: cc.Prefab
    })
    number: cc.Prefab = null;

    a ;
    a1 ;

    start (){
       // this.createNumber();
    }

   
    createNumber(){
        let e = cc.instantiate(this.number);
        
        e.parent = this.node;
        e.x = 0;
        e.y = 0;
        this.node.addChild(e);
        e.getComponent(number).numbermgr = this;
        // e.getChildByName('label').getComponent(cc.Label).string = this.label.string.toString();
        
    }
}
