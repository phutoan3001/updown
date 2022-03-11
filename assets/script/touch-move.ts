

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';
    // @property({
    //     type: cc.Node
    // })
    // player: cc.Node = null;

    @property({
        type: cc.Prefab
    })
    number: cc.Prefab = null;

    @property({
        type: cc.Prefab
    })
    blu_bg: cc.Prefab = null;

    @property({
        type: cc.AudioClip
    })
    audio: cc.AudioClip = null;

    
    number1 =0 ;
    number2  = 0;
    score = 0 ; 
    nodenum: cc.Node=null;
    isCheck=false;
    temp =0 ;


    start (): void {
        this.openTouch();
        this.createNumber();
        this.scheduleOnce(this.createNumber2 , 6);
        cc.audioEngine.play(this.audio, true , 1);
    }

    openTouch (): void {
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        
    }

    closeTouch (): void {
        this.node.off(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
    }

    onTouchMove (event: cc.Event.EventTouch): void {
        let delta = event.getDelta();
        this.nodenum.x += delta.x;
        this.nodenum.y += delta.y;
    }

    update (dt: number): void {
        // if (this.nodenum.x > 1) this.nodenum.x = 0
        // if (this.nodenum.x < -1) this.nodenum.x = 0
        // if (this.nodenum.y > 150) this.nodenum.y = 150
        // // if (this.nodenum.y < -150) this.nodenum.y = -150
        this.label.string = 'Score : ' +this.score;
       
        if(this.isCheck == false&&this.nodenum.y !=0 ){
            this.gamewin();
        }
        
    }

    createNumber(){
        this.isCheck = false;
        this.number1 = Math.floor(60 * Math.random());
        const number_pr= cc.instantiate(this.number);
        this.node.addChild(number_pr);
        number_pr.getChildByName("label").getComponent(cc.Label).string= this.number1+'';
        this.nodenum = number_pr;
        
    }

    createNumber2(){
        this.number2 = Math.floor(60 * Math.random());
        this.nodenum.getChildByName("label").getComponent(cc.Label).string= this.number2+'';
        
    }
    
    gamewin(){
        this.isCheck = true;
        if(this.score >= 1){
            this.temp = this.number2;
            this.number2 = this.number1;
            this.number1 = this.temp;
        }
        
        if((this.number1 >= this.number2 )&& this.nodenum.y < 0){
            //win
            this.score++;
            this.nodenum.destroy();
            this.closeTouch();
            this.scheduleOnce(this.createNumber , 2);
            this.openTouch();
           
        }
        if((this.number1 > this.number2 )&& this.nodenum.y > 0){
            //lost
            this.nodenum.destroy();
            this.closeTouch();
            this.gamelost();
            cc.audioEngine.stopAll();
            
        }
        
        if((this.number1 <= this.number2 )&& this.nodenum.y > 0 ){
            //win
            this.score++;
            this.nodenum.destroy();
            this.closeTouch();
            this.scheduleOnce(this.createNumber , 2);
            this.openTouch();
        
        }
        if((this.number1 <= this.number2 )&& this.nodenum.y < 0 ){
            //lost
            this.nodenum.destroy();
            this.closeTouch();
            this.gamelost();
            cc.audioEngine.stopAll();
            
        }

        cc.sys.localStorage.setItem('score', this.score);
        cc.log('1-'+this.number1);
        cc.log('2-'+this.number2);

   }

    gamelost(){
        const bg_pr= cc.instantiate(this.blu_bg);
        this.node.addChild(bg_pr);
        bg_pr.getChildByName("ketqua").getComponent(cc.Label).string=  'Score: '+this.score;
        //bg_pr.getChildByName("play").getComponent(cc.Button).clickEvents[Symbol] = cc.director.loadScene('game').valueOf;
   }
}
