
const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';
    a ;
    b ;

    start () {
        this.createnumber2();
        this.schedule(this.createnumber2 , 8);
        this.schedule(this.createnumber1 , 7.9);
    }

    createnumber1(){
        this.a = Math.floor(60 * Math.random());
        this.b = Math.floor(60 * Math.random());
        //this.label.string = this.a +'+'+this.b;
        let c  = cc.sys.localStorage.getItem('number2');
        cc.sys.localStorage.setItem('number1', c);
       
    }

    createnumber2(){
        this.a = Math.floor(60 * Math.random());
        this.b = Math.floor(60 * Math.random());
        this.label.string = this.a +'+'+this.b;
        let c = this.a+this.b;
        cc.sys.localStorage.setItem('number2', c);
        
    }
}
