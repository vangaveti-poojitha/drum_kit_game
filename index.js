tot_drums=document.querySelectorAll(".drum").length;
for(var i=0;i<tot_drums;i++){
    document.querySelectorAll('.drum')[i].addEventListener('click',function(){
        var drum_ins=this.innerHTML;
        makesound(drum_ins);
        makeanimation(drum_ins);
   
    });
}

document.addEventListener('keypress',function(event){
    
    makesound(event.key);
    makeanimation(event.key);
    
}
)

function makesound(key){
    switch(key){
        case 'w':
            var crash=new Audio('crash.mp3');
            crash.play();
        break
        case 'a':
            var kick=new Audio('kick-bass.mp3');
            kick.play();
        break
        case 's':
            var snare=new Audio('snare.mp3');
            snare.play();
        break
        case 'd':
            var tom1=new Audio('tom-1.mp3');
            tom1.play();
        break
        case 'j':
            var tom2=new Audio('tom-2.mp3');
            tom2.play();
        break
        case 'k':
            var tom3=new Audio('tom-3.mp3');
            tom3.play();
        break
        case 'l':
            var tom4=new Audio('tom-4.mp3');
            tom4.play();
        break

    }
}

function makeanimation(key){
    act_but=document.querySelector('.'+key);
    act_but.classList.add('pressed');
    setTimeout(function(){
        act_but.classList.remove('pressed');
    },100);
}
