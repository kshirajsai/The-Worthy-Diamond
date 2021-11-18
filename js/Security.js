class Security{
    constructor(){
         this.access1 = createInput()
         this.access1.position(100, 90);
         this.access1.style('background', 'white');

         this.button1 = createButton('Submit');
         this.button1.position(100,110);
         this.button1.style('background', 'lightgrey');

         this.access2 = createInput()
         this.access2.position(750,90);
         this.access2.style('background', 'white');  

         this.button2 = createButton('Submit');
         this.button2.position(750,110);
         this.button2.style('background', 'lightgrey');

         this.access3 = createInput()
         this.access3.position(750,540);
         this.access3.style('background', 'white'); 

         this.button3 = createButton('Submit');
         this.button3.position(750,560);
         this.button3.style('background', 'lightgrey');

         this.access4 = createInput()
         this.access4.position(100,540);
         this.access4.style('background', 'white');  

         this.button4 = createButton('Submit');
         this.button4.position(100,560);
         this.button4.style('background', 'lightgrey');


     }


    display(){

         this.button1.mousePressed(() => {
            if(system.authenticate(accessCode1,this.access1.value())){
                 this.button1.hide();
                 this.access1.hide();  
                 score++;
             }

         });

         this.button2.mousePressed(() => {
             if(system.authenticate(accessCode2,this.access2.value())){
                 this.button2.hide();
                 this.access2.hide();
                 score++;
             }
         });

         this.button3.mousePressed(() => {
             if(system.authenticate(accessCode3,this.access3.value())){
                 this.button3.hide();
                 this.access3.hide();
                 score++;
             }
        });

        this.button4.mousePressed(() => {
         if(system.authenticate(accessCode4,this.access4.value())){
             this.button4.hide();
             this.access4.hide();
             score++;
         }
  });

       
     }
}