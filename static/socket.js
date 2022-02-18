
var socket = io('http://localhost:3000');


socket.on('connected', function(msg) {
    //alert("Bato Bato Pick enemy appear")
})

socket.on('move' , function(msg){

    flag = msg['flag']

    if(msg['box'] == 'b1') {
        flag = msg ['flag']
        myfunc_3()
        myfunc()
    }

    else if(msg['box'] == 'b2') {
        flag = msg ['flag']
        myfunc_4()
        myfunc()
    }

    else if(msg['box'] == 'b3') {
        flag = msg ['flag']
        myfunc_5()
        myfunc()
    }

    else if(msg['box'] == 'b4') {
        flag = msg ['flag']
        myfunc_6()
        myfunc()
    }

    else if(msg['box'] == 'b5') {
        flag = msg ['flag']
        myfunc_7()
        myfunc()
    }

    else if(msg['box'] == 'b6') {
        flag = msg ['flag']
        myfunc_8()
        myfunc()
    }

}) 


document.getElementById('b1').addEventListener('click',function() {
    socket.emit('move' , {'flag' : flag, 'box' : 'b1'})
    myfunc_3()
    myfunc()
})

document.getElementById('b2').addEventListener('click',function() {
    socket.emit('move' , {'flag' : flag, 'box' : 'b2'})
    myfunc_4();
    myfunc();

})

document.getElementById('b3').addEventListener('click',function() {
    socket.emit('move' , {'flag' : flag, 'box' : 'b3'})
    myfunc_5(); 
    myfunc();

})

document.getElementById('b4').addEventListener('click',function() {
    socket.emit('move' , {'flag' : flag, 'box' : 'b4'})
    myfunc_6();
    myfunc();

})

document.getElementById('b5').addEventListener('click',function() {
    socket.emit('move' , {'flag' : flag, 'box' : 'b5'})
    myfunc_7();
    myfunc();

})

document.getElementById('b6').addEventListener('click',function() {
    socket.emit('move' , {'flag' : flag, 'box' : 'b6'})
    myfunc_8();
    myfunc();

})

