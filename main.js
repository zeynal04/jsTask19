
class Car{


    constructor( teker,mator,yag,yanacaqNovu,sükan){
this.teker=teker
this.mator=mator
this.yag=yag
this.yanacaqNovu=yanacaqNovu
this.sükan=sükan
    }
    tekerInfo(){
        console.log(`teker sayi ${this.teker}`);
    }

    matorInfo(){
        console.log(`mator guc ${this.mator}`);
    }
    yagInfo(){
        console.log(`yag novu ${this.yag}`);
        
    }
    yanacaq(){
        console.log(`yanacaq  novu ${this.yanacaqNovu}`);
        
    }
    sukanNovu (){
        console.log(`sukanin novu ${this.sükan}dir`);
        

    }
}
class Mercedes extends Car{
    color='red'
}
const mercedes =new Mercedes(4,4.4,'günəbaxan','neft','elektrik')
  mercedes.tekerInfo()
  mercedes.sukanNovu()
  mercedes.matorInfo()
  mercedes.yagInfo()
  mercedes.yanacaq()