/*let num7 = document.getElementById('num7');
let num6 = document.getElementById('num6');
let num5 = document.getElementById('num5');*/
let num2 = document.getElementById('num2');
let num4 = document.getElementById('num4');
let but1 = document.getElementById('but1');
let but2 = document.getElementById('but2');
let but3 = document.getElementById('but3');
let but4 = document.getElementById('but4');
let but5 = document.getElementById('but5');
let tmp;



/*but.addEventListener('click', function () {
    num4.value = +document.getElementById('num1').value + (+document.getElementById('num3').value);
    num5.value = +document.getElementById('num1').value - (+document.getElementById('num3').value);
    num7.value = +document.getElementById('num1').value * (+document.getElementById('num3').value);
    if(+document.getElementById('num3').value === 0){
        alert('error by dividing on 0');
    }else {
        num6.value = +document.getElementById('num1').value / (+document.getElementById('num3').value);
    }
});*/

but1.addEventListener('click', function () {
    num2.value = '+';
    tmp = +document.getElementById('num1').value + (+document.getElementById('num3').value);
});


but2.addEventListener('click', function () {
    num2.value = '-';
    tmp = +document.getElementById('num1').value - (+document.getElementById('num3').value);
});

but3.addEventListener('click', function () {
    num2.value = '*';
    tmp = +document.getElementById('num1').value * (+document.getElementById('num3').value);
});

but4.addEventListener('click', function () {
    num2.value = '/';
    if (+document.getElementById('num3').value === 0) {
        alert('error by dividing on 0');
    } else {
        tmp = +document.getElementById('num1').value / (+document.getElementById('num3').value);
    }
});

but5.addEventListener('click', function () {
    num4.value = tmp;
});


