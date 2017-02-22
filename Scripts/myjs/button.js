/*
* button.js
* Josh Mangoff
* 200284512
* Wednesday, February 22, 2017
* button events shopping list
*/
$(document).bind('pageinit',function(){

    //variables
    var buttonPressed;

    //function for buttons
    $("button").bind("click",function(event, ui){
        buttonPressed = $(this);
        if(buttonPressed.text == "Submit") {

        }
        else if (buttonPressed.text == "Cancel"){
            document.getElementById("lbl1").value = 0;
            document.getElementById("lbl2").value = 0;
            document.getElementById("lbl3").value = 0;
            document.getElementById("lbl4").value = 0;
            document.getElementById("lbl5").value = 0;
        }
        else{
            //calcs
            if(buttonPressed.id == "btn1low" & document.getElementById("lbl1").value > 0){
                document.getElementById("lbl1").value = 
                  document.getElementById("lbl1").value - 1;
            }
            else if(buttonPressed.id == "btn2low" & document.getElementById("lbl2").value > 0){
                document.getElementById("lbl2").value = 
                  document.getElementById("lbl2").value - 1;
            }
            else if(buttonPressed.id == "btn3low" & document.getElementById("lbl3").value > 0){
                document.getElementById("lbl3").value = 
                  document.getElementById("lbl3").value - 1;
            }
            else if(buttonPressed.id == "btn4low" & document.getElementById("lbl4").value > 0){
                document.getElementById("lbl4").value = 
                  document.getElementById("lbl4").value - 1;
            }
            else if(buttonPressed.id == "btn5low" & document.getElementById("lbl5").value > 0){
                document.getElementById("lbl5").value = 
                  document.getElementById("lbl5").value - 1;
            }
            else if(buttonPressed.id == "btn1high"){
                 document.getElementById("lbl1").value = 
                   document.getElementById("lbl1").value + 1;
            }
            else if(buttonPressed.id == "btn2high"){
                 document.getElementById("lbl2").value = 
                   document.getElementById("lbl2").value + 1;
            }
            else if(buttonPressed.id == "btn3high"){
                 document.getElementById("lbl3").value = 
                   document.getElementById("lbl3").value + 1;
            }
            else if(buttonPressed.id == "btn4high"){
                 document.getElementById("lbl4").value = 
                   document.getElementById("lbl4").value + 1;
            }
            else if(buttonPressed.id == "btn5high"){
                 document.getElementById("lbl5").value = 
                   document.getElementById("lbl5").value + 1;
            }

        }

    });

});