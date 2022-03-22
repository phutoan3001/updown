

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property({
        type: cc.Prefab
    })
    blu_bg: cc.Prefab = null;

    arr = [][10];
    time = 60;

    start () {
        // if(this.time > 0){
        //     this.schedule(this.createtime, 1);
        // }
           
    }
    // // start (){
    // //     // for(let i = 60 ; i = 0 ; i --){
    // //     //     this.arr[i]  = this.arr[i]; 
    // //         this.schedule(this.createtime() , 1);
            

    // //     //}
    // //     // for(let h=0 ; h < 60 ; h++){
    // //     //     for(let m=0 ; m < 60 ; m++){
    // //     //         for(let s=0 ; s < 60 ; s++){
    // //     //             this.arr[h][m][s];
    // //     //             let a =this.node.getComponentInChildren("time");
    // //     //             a.node.string = this.arr[h][m][s];
    // //     //         }
    // //     //     }
            
    // //     // }

    // // }

    createtime (){
       
        if(this.time >= 0){
        //let a =this.node.getComponentInChildren("time");
        this.label.string = '00:00:'+this.time +'';
        if(this.time < 10 ){
            //let a =this.node.getComponentInChildren("time");
            this.label.string = '00:00:0'+this.time +'';
            //this.time-- ;
            }
            this.time-- ;
        }
        if(this.time < 0){
            //this.gamelost();
        }
       
        

    }

    gamelost(){
        let score = cc.sys.localStorage.getItem('score');
        const bg_pr= cc.instantiate(this.blu_bg);
        this.node.addChild(bg_pr);
        bg_pr.getChildByName("ketqua").getComponent(cc.Label).string=  'Score: '+score;
   }

    update (dt){
        //cc.log(this.time);
        // for(let i = 60 ; i = 0 ; i --){
        //     this.arr[i]  = this.arr[i]; 
        //     let a =this.node.getComponentInChildren("time");
        //         a.node.label.string = this.arr[i];

        // }
        
    }

    
}
