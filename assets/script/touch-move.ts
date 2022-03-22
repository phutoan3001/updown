

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property(cc.Label)
    labeltime: cc.Label = null;

    @property(cc.Label)
    labeltutorial: cc.Label = null;

    @property
    text: string = 'hello';

    @property({
        type: cc.Prefab
    })
    number: cc.Prefab = null;
    @property({
        type: cc.Prefab
    })
    numberab: cc.Prefab = null;

    @property({
        type: cc.Prefab
    })
    blu_bg: cc.Prefab = null;

    @property({
        type: cc.Prefab
    })
    congratu: cc.Prefab = null;

    @property({
        type: cc.Prefab
    })
    plus1: cc.Prefab = null;

    @property({
        type: cc.Prefab
    })
    movehand: cc.Prefab = null;

    @property({
        type: cc.AudioClip
    })
    audio: cc.AudioClip = null;

    @property({
        type: cc.AudioClip
    })
    audiolost: cc.AudioClip = null;

    @property({
        type: cc.AudioClip
    })
    audiowin: cc.AudioClip = null;

    @property({
        type: cc.AudioClip
    })
    audiosai: cc.AudioClip = null;

    a = 0 ;
    b = 0 ;
    time = 60;
    number1 =0 ;
    number2  = 0;
    score = 0 ; 
    highscore = 0;
    nodenum: cc.Node=null;
    nodenum2: cc.Node=null;
    congrati: cc.Node=null;
    isCheck=false;
    temp =0 ;
    lv =0;
    current;
    current1 ; 
    current2 ; 
    current3 ; 
    plus12;
    arrColor = [] ;
    nodenumtutorial : cc.Node = null;
    nodenumtutorial1 : cc.Node = null;
    nodenumtutorial2 : cc.Node = null;
    nodemove : cc.Node = null;
    isTutorial = false ; 


    start (): void {
        this.current = cc.audioEngine.play(this.audio, true, 0.5);
        let highscore = cc.sys.localStorage.getItem('highscore');
        if(highscore==null){
            this.loadtuTorial();
            this.labeltutorial.string = '--Tutorial--';
            this.scheduleOnce(this.goGame , 14);
            this.scheduleOnce(this.startGame , 15);
        }
        else{
            this.startGame();
        }
        
    }

    startGame(){
        this.labeltutorial.string = '';
        this.arrColor = [cc.Color.BLUE, cc.Color.CYAN ,cc.Color.GREEN , cc.Color.ORANGE , cc.Color.WHITE , cc.Color.GRAY , cc.Color.YELLOW  , cc.Color.MAGENTA  , cc.Color.RED];
        this.scheduleOnce(this.openTouch , 4);
        this.createNumber();
        this.schedule(this.createTime , 1);
        this.scheduleOnce(this.createNumber2 , 4);
        
        cc.audioEngine.stop(this.current2);
    }

    loadtuTorial(){
        this.createTutorial();
        this.changePotisonTutorial();
        this.scheduleOnce( this.destroyTutorial, 3)
        this.scheduleOnce(this.createTutorial1 , 4);
        this.scheduleOnce(this.createTutorial2 , 8);
        
    }

    goGame(){
        this.labeltutorial.string = '3->2->1 ---> Start ';
    }

    createMove(){
        const move= cc.instantiate(this.movehand);
        this.node.addChild(move);
        this.nodemove = move;
    }

    moveDown(){
        cc.tween(this.nodemove)
            .to(1 , {position : cc.v3(300 , -100)})
            //.call(this.nodemove.destroy)
            .start()
    }

    moveUp(){
        cc.tween(this.nodemove)
            .to(1 , {position : cc.v3(300 , 100)})
            //.call(this.nodemove.destroy)
            .start()
    }

    createTutorial(){
        const number_pr= cc.instantiate(this.number);
        this.node.addChild(number_pr);
        number_pr.getChildByName("label").getComponent(cc.Label).string= '49';
        this.nodenumtutorial = number_pr;
        this.nodenumtutorial.x = -400; 
    }

    createTutorial1(){
        this.labeltutorial.string = '49 > 47 -> down';
        const number_pr= cc.instantiate(this.number);
        this.node.addChild(number_pr);
        number_pr.getChildByName("label").getComponent(cc.Label).string= '47';
        this.nodenumtutorial1 = number_pr;
        this.scheduleOnce(this.changePotisonDown3 , 2);
        this.createMove();
    }

    createTutorial2(){
        this.labeltutorial.string = '47 < 50 -> up';
        const number_pr= cc.instantiate(this.number);
        this.node.addChild(number_pr);
        number_pr.getChildByName("label").getComponent(cc.Label).string= '50';
        this.nodenumtutorial2 = number_pr;
        this.scheduleOnce(this.changePotisonup3 , 2);
        this.createMove();
        
    }

    changePotisonTutorial(){
        cc.tween(this.nodenumtutorial)
            .to(1 , {position : cc.v3(0 , 0)})
            .start()
    }

    changePotisonup3(){
        this.moveUp();
        cc.tween(this.nodenumtutorial2)
            .to(1 , {position : cc.v3(0 , 200)})
            .start()

            this.scheduleOnce(this.destroyTutorial2, 1.2);
    }

    changePotisonDown3(){
        this.moveDown();
        cc.tween(this.nodenumtutorial1)
            .to(1 , {position : cc.v3(0 , -200)})
            .start()

            this.scheduleOnce(this.destroyTutorial1, 1.2);
    }

    destroyTutorial(){
        this.nodenumtutorial.destroy();
        
    }

    destroyTutorial1(){
        this.nodenumtutorial1.destroy();
        this.nodemove.destroy();
    }

    destroyTutorial2(){
        this.nodenumtutorial2.destroy();
        this.nodemove.destroy();
        this.labeltutorial.string = '';
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

    openTouch1 (): void {
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove1, this);
        
    }

    closeTouch1 (): void {
        this.node.off(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove1, this);
    }

    onTouchMove1 (event: cc.Event.EventTouch): void {
        let delta = event.getDelta();
        this.nodenum2.x += delta.x;
        this.nodenum2.y += delta.y;
        
    }

    update (dt: number): void {
        this.label.string = ': ' +this.score;
        cc.sys.localStorage.setItem('score' , this.score);
        if(this.lv <=3  && this.isTutorial ==true){
            // if (this.nodenum.x > 1) this.nodenum.x = 0
            // if (this.nodenum.x < -1) this.nodenum.x = 0
            if(this.isCheck == false&&(this.nodenum.y >10 || this.nodenum.y <-10 )){
                this.gameWin();
            }
        }
        if(this.lv >3  && this.isTutorial ==true){
            // if (this.nodenum2.x > 1) this.nodenum2.x = 0
            // if (this.nodenum2.x < -1) this.nodenum2.x = 0
            if(this.isCheck == false&&(this.nodenum2.y >10 || this.nodenum2.y <-10 )){
                this.gameWin2();
            }
        }
    }

    createNumber(){
        cc.audioEngine.stop(this.current1);
        this.isCheck = false;
        this.isTutorial = true;
        this.number1 = Math.floor(60 * Math.random());
        if(this.number1==0 || this.number2==this.number1){
            this.number1 = Math.floor(60 * Math.random());
        }
        const number_pr= cc.instantiate(this.number);
        this.node.addChild(number_pr);
        number_pr.getChildByName("label").getComponent(cc.Label).string= this.number1+'';
        this.nodenum = number_pr;
        let i = Math.floor(8 * Math.random());
        this.nodenum.color = this.arrColor[i];
        this.nodenum.getChildByName("polygon").color=this.arrColor[i];
        
        
    }

    createNumber2(){
        this.number2 = Math.floor(60 * Math.random());
        this.nodenum.getChildByName("label").getComponent(cc.Label).string= this.number2+'';
        
        
    }
    
    gameWin(){
        this.isCheck = true;
        
        if(this.score >= 1){
            this.temp = this.number2;
            this.number2 = this.number1;
            this.number1 = this.temp;
        }
            if((this.number1 >= this.number2 )&& this.nodenum.y < 0){
                //win
                this.score++;
                this.plus();
                this.scheduleOnce(this.destroyyPlus , 1);
                this.current1 = cc.audioEngine.play(this.audiowin, true, 1);
                this.changePotisonDown(this.nodenum);
                this.closeTouch();
                this.scheduleOnce(this.createNumber , 2);
                this.scheduleOnce(this.openTouch , 2);
                
                this.lv++;
            }
            if((this.number1 > this.number2 )&& this.nodenum.y > 0){
                //lost
                //this.nodenum.destroy();
                this.current3 = cc.audioEngine.play(this.audiosai, true, 1);
                this.changePotisonup(this.nodenum);
                this.closeTouch();
                this.scheduleOnce(this.gameLost , 2);
                
            }
            
            if((this.number1 <= this.number2 )&& this.nodenum.y > 0 ){
                //win
                this.score++;
                this.plus();
                this.scheduleOnce(this.destroyyPlus , 1);
                this.current1 = cc.audioEngine.play(this.audiowin, false, 1);
                this.changePotisonup(this.nodenum);
                this.closeTouch();
                this.scheduleOnce(this.createNumber , 2);
                this.scheduleOnce(this.openTouch , 2);
                this.lv++;
            }
            if((this.number1 <= this.number2 )&& this.nodenum.y < 0 ){
                //lost
                this.current3 = cc.audioEngine.play(this.audiosai, true, 1);
                this.changePotisonDown(this.nodenum);
                this.closeTouch();
                this.scheduleOnce(this.gameLost , 2);
                
            }
            if(this.lv ==4 ){
                this.scheduleOnce(this.create2Number , 2);
                this.closeTouch();
                this.unschedule(this.openTouch);
                this.congratulation();
                this.scheduleOnce(this.destroyCongratulation , 1);
            }
            cc.log('1-'+this.number1);
            cc.log('2-'+this.number2);
        
    }

    gameWin2(){
        this.isCheck = true;
        this.temp = this.number2;
        this.number2 = this.number1;
        this.number1 = this.temp;
        
        if((this.number1 >= this.number2 )&& this.nodenum2.y < 0){
            //win
            this.score++;
            this.lv++;
            this.plus();
            this.scheduleOnce(this.destroyyPlus , 1);
            this.current1 = cc.audioEngine.play(this.audiowin, false, 1);
            this.changePotisonDown2(this.nodenum2);
            this.closeTouch1();
            this.scheduleOnce(this.create2Number , 2);
            this.scheduleOnce(this.openTouch1 , 2);
           
        }

        if((this.number1 > this.number2 )&& this.nodenum2.y > 0){
            //lost
            this.current3 = cc.audioEngine.play(this.audiosai, true, 1);
            this.changePotisonup2(this.nodenum2);
            this.closeTouch1();
            this.scheduleOnce(this.gameLost , 2);
            
        }
        
        if((this.number1 <= this.number2 )&& this.nodenum2.y > 0 ){
            //win
            this.score++;
            this.lv++;
            this.plus();
            this.scheduleOnce(this.destroyyPlus , 1);
            this.current1 = cc.audioEngine.play(this.audiowin, false, 1);
            this.changePotisonup2(this.nodenum2);
            this.closeTouch1();
            this.scheduleOnce(this.create2Number , 2);
            this.scheduleOnce(this.openTouch1 , 2);
        }

        if((this.number1 <= this.number2 )&& this.nodenum2.y < 0 ){
            //lost
            this.current3 = cc.audioEngine.play(this.audiosai, true, 1);
            this.changePotisonDown2(this.nodenum2);
            this.closeTouch1();
            this.scheduleOnce(this.gameLost , 2);
            
        }
        
        if(this.lv ==10 ){
            this.congratulation();
            this.scheduleOnce(this.destroyCongratulation , 1);
        }
        
        cc.log('1-'+this.number1);
        cc.log('2-'+this.number2);
    }

    gameLost(){
        // if(this.lv <=4 ){
            
        // this.nodenum.color = cc.Color.RED;
        // this.nodenum.getChildByName("polygon").color= cc.Color.RED;
            
        // }
        // if(this.lv >4){
        //     this.nodenum2.color = cc.Color.RED;
        //     this.nodenum2.getChildByName("polygon").color= cc.Color.RED;
        // }
        this.Highscore();
        let highscore = cc.sys.localStorage.getItem('highscore');
        this.unscheduleAllCallbacks();
        cc.audioEngine.stop(this.current);
        cc.audioEngine.stop(this.current3);
        this.current2 = cc.audioEngine.play(this.audiolost, true , 1);
        this.unschedule(this.createTime);
        const bg_pr= cc.instantiate(this.blu_bg);
        this.node.addChild(bg_pr);
        bg_pr.getChildByName("ketqua").getComponent(cc.Label).string=  'Your Score: '+this.score;
        bg_pr.getChildByName("highscore").getComponent(cc.Label).string= 'HighScore: ' + highscore.toString();
        if(this.lv <=1){
            bg_pr.getChildByName("star1").color = cc.color(107 , 100 , 100  , 255);
            bg_pr.getChildByName("star2").color = cc.color(107 , 100 , 100  , 255);
            bg_pr.getChildByName("star3").color = cc.color(107 , 100 , 100  , 255);
        }
        if(this.lv <=5 && this.lv > 1){
            bg_pr.getChildByName("star1").color = cc.color(255 , 255 , 255  , 255);
            bg_pr.getChildByName("star2").color = cc.color(107 , 100 , 100  , 255);
            bg_pr.getChildByName("star3").color = cc.color(107 , 100 , 100  , 255);
        }
        if(this.lv <= 10 && this.lv >5){
            bg_pr.getChildByName("star1").color = cc.color(255 , 255 , 255  , 255);
            bg_pr.getChildByName("star3").color = cc.color(255 , 255 , 255  , 255);
            bg_pr.getChildByName("star2").color = cc.color(107 , 100 , 100  , 255);
        }
        if(this.lv > 13 ){
            bg_pr.getChildByName("star1").color = cc.color(255 , 255 , 255  , 255);
            bg_pr.getChildByName("star2").color = cc.color(255 , 255 , 255  , 255);
            bg_pr.getChildByName("star3").color = cc.color(255 , 255 , 255  , 255);
        }

        if(this.lv ==4 || this.lv == 10){
            this.destroyCongratulation();
            this.destroyyPlus();
        }
    }

    create2Number(){
        cc.audioEngine.stop(this.current1);
        this.openTouch1();
        this.isCheck = false;
        if(this.score < 5 ){
        this.nodenum.destroy();}
        this.a = Math.floor(60 * Math.random());
        this.b = Math.floor(60 * Math.random());
        this.number1 = this.a + this.b;
        if(this.a ==0 || this.b ==0 ||this.number1 == this.number2){
            this.a = Math.floor(60 * Math.random());
        this.b = Math.floor(60 * Math.random());
        }
        
        const number_pr12= cc.instantiate(this.numberab);
        this.node.addChild(number_pr12);
        number_pr12.getChildByName("label").getComponent(cc.Label).string= this.a +'+'+this.b;
        this.nodenum2 = number_pr12;
        let i = Math.floor(8 * Math.random());
        this.nodenum2.color = this.arrColor[i];
        this.nodenum2.getChildByName("polygon").color=this.arrColor[i];
    
    }

    changePotisonup(node :cc.Node){
        cc.tween(node)
            .to(1 , {position : cc.v3(0 , 200)})
            //.call(this.destroyyy1)
            .start()

        this.destroyNumber1(this.nodenum);
    }

    changePotisonDown(node :cc.Node){
        cc.tween(node)
            .to(1 , {position : cc.v3(0 , -200)})
            // .call(this.destroyyy1)
            .start()

        this.destroyNumber1(this.nodenum);
    }

    changePotisonup2(node :cc.Node){
        cc.tween(node)
            .to(1 , {position : cc.v3(0 , 200)})
            // .call(this.destroyyy2)
            .start()

        this.destroyNumber2(this.nodenum2);
    }

    changePotisonDown2(node :cc.Node){
        cc.tween(node)
            .to(1 , {position : cc.v3(0 , -200)})
            // .call(this.destroyyy2)
            .start()

        this.destroyNumber2(this.nodenum2);
    }

    destroyNumber1(node :cc.Node){
        //this.node.destroy();
        this.scheduleOnce(this.destroyyy1 , 1.1);
    }

    destroyNumber2(node :cc.Node){
        //this.node.destroy();
        this.scheduleOnce(this.destroyyy2 , 1.1);
    }

    destroyyy1(){
        this.nodenum.destroy();
    }

    destroyyy2(){
        this.nodenum2.destroy();
    }

    createTime (){
        if(this.time >= 10){
            this.time-- ;
            this.labeltime.string = '00:00:'+this.time +'';
        }
        if(this.time < 10 ){
            this.time-- ;
            this.labeltime.string = '00:00:0'+this.time +'';
        }
        if(this.time <= 5) {
            this.labeltime.node.color= cc.Color.RED;
            this.maume();
        }
        if(this.time == 0){
            this.gameLost();
        }
    }

    maume(){
        this.labeltime.node.opacity = 200;
        this.scheduleOnce( this.maume2, 0.5);
    }
    maume2(){
        this.labeltime.node.opacity = 255;
    }

    congratulation(){
        const congratulation= cc.instantiate(this.congratu);
        this.node.addChild(congratulation);
        this.congrati = congratulation;
    }

    destroyCongratulation(){
        this.congrati.destroy();
    }

    plus(){
        const plus12= cc.instantiate(this.plus1);
        this.node.addChild(plus12);
        this.plus12 = plus12;
    }

    destroyyPlus(){
        this.plus12.destroy();
    }

    Highscore (){
        let highscore = cc.sys.localStorage.getItem('highscore');
        if(!highscore){
            highscore = this.score;
        }
        if(highscore <= this.score ){
            highscore = this.score;
        }
       cc.sys.localStorage.setItem('highscore', highscore); 
    }
}
