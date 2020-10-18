var curentitem =0;
var nextitemx=0;
var items = document.querySelectorAll('.items');
var itemsleng = items.length;
var y = items[curentitem].classList;

function prenextright() {
    if(curentitem<itemsleng-1)
    {
        y.remove("active");
        if(items[curentitem])
        {
            curentitem++;
            y = items[curentitem].classList;
            y.add("active");
        }
    }
    else
    {
        y.remove("active");
        curentitem=0;
        y = items[curentitem].classList;
        y.add("active");
    }
}

function prenextleft() {
    if(curentitem>0)
    {
        y.remove("active");
        if(items[curentitem])
        {
            curentitem--;
            y = items[curentitem].classList;
            y.add("active");
        }
    }
    else
    {
        y.remove("active");
        curentitem=0;
        y = items[curentitem].classList;
        y.add("active");
    }
}

function nextitem(){
    if(curentitem<itemsleng-1)
    {
        y.remove("active");
        if(items[curentitem])
        {
            curentitem++;
            y = items[curentitem].classList;
            y.add("active");
        }
    }
    else
    {
        y.remove("active");
        curentitem=0;
        y = items[curentitem].classList;
        y.add("active");
    }
}

setInterval(nextitem,2000);
