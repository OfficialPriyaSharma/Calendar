$(function () {
    function c(){
        p();
        var e = h(); var r = 0; var u = false;
        l.empty();
        while(!u){
            if(s[r] == e[0].weekday){
                u = true;
            }
            else{
                l.append('<div class = "blank"></div>');
                r++;
        for(var c = 0; c < 42-r; c++){
            if(c >= e.length){
                l.append('<div class = "blank"></div>');
            }
        }
            }
        }
    }
})