let sample = 'sample qweqwe'


// Function called whenever user tab on any box
function myfunc() {

    // Setting DOM to all boxes or input field
    var b1, b2, b3, b4, b5, b6
    b1 = document.getElementById("b1").value;
    b2 = document.getElementById("b2").value;
    b3 = document.getElementById("b3").value;
    b4 = document.getElementById("b4").value;
    b5 = document.getElementById("b5").value;
    b6 = document.getElementById("b6").value;

    // Checking if Player X won or not and after
    // that disabled all the other fields

    //when player picks one box and only one box
    //locking other box

    if(b1 == 'X'){
        document.getElementById("b2").disabled = true;    
        document.getElementById("b3").disabled = true;
    }

    else if(b2 == 'X'){
        document.getElementById("b1").disabled = true;    
        document.getElementById("b3").disabled = true;
    }

    else if(b3 == 'X'){
        document.getElementById("b1").disabled = true;    
        document.getElementById("b2").disabled = true;
    }
    
    else if(b4 == '0'){
        document.getElementById("b5").disabled = true;    
        document.getElementById("b6").disabled = true;
    }
    
    else if(b5 == '0'){
        document.getElementById("b4").disabled = true;    
        document.getElementById("b6").disabled = true;
    }

    else if(b6 == '0'){
        document.getElementById("b4").disabled = true;    
        document.getElementById("b5").disabled = true;
    }



    //Winning Condition
    //p1 bato and gunting
    if ((b1 == 'X') && (b6 == '0')) {
        document.getElementById('print')
            .innerHTML = "Player 1 won";
        document.getElementById("b2").disabled = true;    
        document.getElementById("b3").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
    }


    //p1 papel and bato
    else if ((b2 == 'X') && (b4 == '0')) {
        document.getElementById('print')
            .innerHTML = "Player 1 won";
        document.getElementById("b1").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
    }

     //p1 gunting and papel
    else if ((b3 == 'X') && (b5 == '0')) {
        document.getElementById('print')
            .innerHTML = "Player 1 won";
        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b6").disabled = true;
    }

    //p2 bato and gunting
    else if ((b4 == '0') && (b3 == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player 2 won";
        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
    }   

    //p2 papel and bato
    else if ((b5 == '0') && (b1 == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player 2 won";
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b6").disabled = true;
    } 

    //p2 gunting and papel
    else if ((b6 == '0') && (b2 == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player 2 won";
        document.getElementById("b1").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
    } 

    //winning condition when its tie

    else if ((b1 == 'X') && (b4 == '0')) {
        document.getElementById('print')
            .innerHTML = "Tie";
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
    } 

    else if ((b2 == 'X') && (b5 == '0')) {
        document.getElementById('print')
            .innerHTML = "Tie";
        document.getElementById("b1").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b6").disabled = true;
    } 

    else if ((b3 == 'X') && (b6 == '0')) {
        document.getElementById('print')
            .innerHTML = "Tie";
        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
    } 

    else {

        // Here, Printing Result
        if (flag == 1) {
            document.getElementById('print')
                .innerHTML = "Player X Turn";
                
        }
        else {
            document.getElementById('print')
                .innerHTML = "Player 0 Turn";
        }
    }

}

// Function to reset game
function myfunc_2() {
    location.reload();
    document.getElementById('b1').value = '';
    document.getElementById("b2").value = '';
    document.getElementById("b3").value = '';
    document.getElementById("b4").value = '';
    document.getElementById("b5").value = '';
    document.getElementById("b6").value = '';
}

//

flag = 1;
function myfunc_3() {
    if (flag == 1) {
        document.getElementById("b1").value = "X";
        document.getElementById("b1").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b1").value = "0";
        document.getElementById("b1").disabled = true;
        flag = 1;
    }
}
 
function myfunc_4() {
    if (flag == 1) {
        document.getElementById("b2").value = "X";
        document.getElementById("b2").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b2").value = "0";
        document.getElementById("b2").disabled = true;
        flag = 1;
    }
}
 
function myfunc_5() {
    if (flag == 1) {
        document.getElementById("b3").value = "X";
        document.getElementById("b3").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b3").value = "0";
        document.getElementById("b3").disabled = true;
        flag = 1;
    }
}
 
function myfunc_6() {
    if (flag == 1) {
        document.getElementById("b4").value = "X";
        document.getElementById("b4").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b4").value = "0";
        document.getElementById("b4").disabled = true;
        flag = 1;
    }
}
 
function myfunc_7() {
    if (flag == 1) {
        document.getElementById("b5").value = "X";
        document.getElementById("b5").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b5").value = "0";
        document.getElementById("b5").disabled = true;
        flag = 1;
    }
}
 
function myfunc_8() {
    if (flag == 1) {
        document.getElementById("b6").value = "X";
        document.getElementById("b6").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b6").value = "0";
        document.getElementById("b6").disabled = true;
        flag = 1;
    }
}