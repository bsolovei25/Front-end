var inpu1 = document.getElementById('in1');
var inpu2 = document.getElementById('in2');
var inpu3 = document.getElementById('in3');
var inpu4 = document.getElementById('in4');
var inpu5 = document.getElementById('in5');
var inpu6 = document.getElementById('in6');
var inpu7 = document.getElementById('in7');
var inpu8 = document.getElementById('in8');
var inpu9 = document.getElementById('in9');
var but = document.getElementById('button');
var x0 = document.getElementById('step');
var winner = true;//noliki---false-xrestiki


var ok = true;
var counter = 0;

function getLast() {
    if (x0.innerHTML == 'x') {
        return '0';
    }
    else {
        return 'x';
    }
}

function EnableAll() {
    inpu1.removeAttribute('disabled');
    inpu2.removeAttribute('disabled');
    inpu3.removeAttribute('disabled');
    inpu4.removeAttribute('disabled');
    inpu5.removeAttribute('disabled');
    inpu6.removeAttribute('disabled');
    inpu7.removeAttribute('disabled');
    inpu8.removeAttribute('disabled');
    inpu9.removeAttribute('disabled');
}

function DisableAll() {
    inpu1.setAttribute('disabled', null);
    inpu2.setAttribute('disabled', null);
    inpu3.setAttribute('disabled', null);
    inpu4.setAttribute('disabled', null);
    inpu5.setAttribute('disabled', null);
    inpu6.setAttribute('disabled', null);
    inpu7.setAttribute('disabled', null);
    inpu8.setAttribute('disabled', null);
    inpu9.setAttribute('disabled', null);
}

function CheckWin() {
    if (inpu1.value == '0') {
        if (inpu2.value == '0' && inpu3.value == '0') {
            winner = true;
            return true;

        }
        if (inpu4.value == '0' && inpu7.value == '0') {
            winner = true;
                return true;
        }
        if (inpu5.value == '0' && inpu9.value == '0') {
            winner = true;
                return true;
        }
    }
    else {
        if (inpu2.value == '0') {
            if (inpu1.value == '0' && inpu3.value == '0') {
                winner = true;
                    return true;        
            }
            if (inpu5.value == '0' && inpu8.value == '0') {
                winner = true;
                    return true;
                
            }
        }
        else {
            if (inpu3.value == '0') {
                if (inpu6.value == '0'&& inpu9.value == '0') {
                    winner = true;
                        return true;
                    
                }
                if (inpu5.value == '0' && inpu7.value == '0') {
                    winner = true;
                        return true;
                   
                }
                if (inpu2.value == '0' && inpu1.value == '0') {
                    winner = true;
                        return true;
                   
                }
            }
            else {
                if (inpu4.value == '0') {
                    if (inpu1.value == '0' && inpu7.value == '0') {
                        winner = true;
                            return true;
                       
                    }
                    if (inpu5.value == '0' && inpu6.value == '0') {
                        winner = true;
                            return true;
                        
                    }
                }
                else {
                    if (inpu5.value == '0') {
                        if (inpu1.value == '0' && inpu9.value == '0') {
                            winner = true;
                                return true;
                            
                        }
                        if (inpu3.value == '0' && inpu7.value == '0') {
                            winner = true;
                                return true;
                            
                        }
                        if (inpu2.value == '0' && inpu8.value == '0') {
                            winner = true;
                                return true;
                           
                        }
                        if (inpu4.value == '0' && inpu6.value == '0') {
                            winner = true;
                                return true;
                            
                        }
                    }
                    else {
                        if (inpu6.value == '0') {
                            if (inpu3.value == '0' && inpu9.value == '0') {
                                winner = true;
                                    return true;
                                
                            }
                            if (inpu4.value == '0' && inpu5.value == '0') {
                                winner = true;
                                    return true;
                                
                            }
                        }
                        else {
                            if (inpu7.value == '0') {
                                if (inpu1.value == '0' && inpu4.value == '0') {
                                    winner = true;
                                        return true;
                                    
                                }
                                if (inpu8.value == '0' && inpu9.value == '0') {
                                    winner = true;
                                        return true;
                                   
                                }
                                if (inpu5.value == '0' && inpu3.value == '0') {
                                    winner = true;
                                        return true;
                                    
                                }
                            }
                            else {
                                if (inpu8.value == '0') {
                                    if (inpu2.value == '0' && inpu5.value == '0') {
                                        winner = true;
                                            return true;
                                       
                                    }
                                    if (inpu7.value == '0' && inpu9.value == '0') {
                                        winner = true;
                                            return true;
                                        
                                    }
                                }
                                else {
                                    if (inpu9.value == '0') {
                                        if (inpu5.value == '0' && inpu1.value == '0') {
                                            winner = true;
                                                return true;
                                            
                                        }
                                        if (inpu6.value == '0' && inpu3.value == '0') {
                                            winner = true;
                                                return true;
                                            
                                        }
                                        if (inpu8.value == '0' && inpu7.value == '0') {
                                            winner = true;
                                                return true;
                                            
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    if (inpu1.value == 'x') {
        if (inpu2.value == 'x' && inpu3.value == 'x') {
           
                winner = false;
                return true;
           
        }
        if (inpu4.value == 'x' && inpu7.value == 'x') {
            
                winner = false;
                return true;
           
        }
        if (inpu5.value == 'x' && inpu9.value == 'x') {
           
                winner = false;
                return true;
           
        }
        
    }
    else {
        if (inpu2.value == 'x') {
            if (inpu1.value == 'x' && inpu3.value == 'x') {
               
                    winner = false;
                    return true;
                
            }
            if (inpu5.value == 'x' && inpu8.value == 'x') {
                
                    winner = false;
                    return true;
                
            }
        }
        else {
            if (inpu3.value == 'x') {
                if (inpu2.value == 'x' && inpu1.value == 'x') {
                   
                        winner = false;
                        return true;
                    
                }
                if (inpu5.value == 'x' && inpu7.value == 'x') {
                   
                        winner = false;
                        return true;
                   
                }
                if (inpu6.value == 'x' && inpu9.value == 'x') {
                   
                        winner = false;
                        return true;
                   
                }

            }
            else {
                if (inpu4.value == 'x') {
                    if (inpu1.value == 'x' && inpu7.value == 'x') {
                        
                            winner = false;
                            return true;
                       
                    }
                    if (inpu5.value == 'x' && inpu6.value == 'x') {
                        
                            winner = false;
                            return true;
                        
                    }
                }
                else {
                    if (inpu5.value == 'x') {
                        if (inpu2.value == 'x' && inpu8.value == 'x') {
                           
                                winner = false;
                                return true;
                           
                        }
                        if (inpu4.value == 'x' && inpu6.value == 'x') {
                           
                                winner = false;
                                return true;
                           
                        }
                        if (inpu1.value == 'x' && inpu9.value == 'x') {
                           
                                winner = false;
                                return true;
                           
                        }
                        if (inpu3.value == 'x' && inpu7.value == 'x') {
                            
                                winner = false;
                                return true;
                            
                        }

                    }
                    else {
                        if (inpu6.value == 'x') {
                            if (inpu3.value == 'x' && inpu9.value == 'x') {
                                
                                    winner = false;
                                    return true;
                                
                            }
                            if (inpu4.value == 'x' && inpu5.value == 'x') {
                               
                                    winner = false;
                                    return true;
                                
                            }
                        }
                        else {
                            if (inpu7.value == 'x') {
                                if (inpu1.value == 'x' && inpu4.value == 'x') {
                                    
                                        winner = false;
                                        return true;
                                    
                                }
                                if (inpu5.value == 'x' && inpu3.value == 'x') {
                                    
                                        winner = false;
                                        return true;
                                    
                                }
                                if (inpu8.value == 'x' && inpu9.value == 'x') {
                                   
                                        winner = false;
                                        return true;
                                   
                                }
                            }
                            else {
                                if (inpu8.value == 'x') {
                                    if (inpu7.value == 'x' && inpu9.value == 'x') {
                                       
                                            winner = false;
                                            return true;
                                       
                                    }
                                    if (inpu2.value == 'x' && inpu5.value == 'x') {
                                       
                                            winner = false;
                                            return true;
                                       
                                    }
                                }
                                else {
                                    if (inpu9.value == 'x') {
                                        if (inpu5.value == 'x' && inpu1.value == 'x') {
                                            
                                                winner = false;
                                                return true;
                                           
                                        }
                                        if (inpu8.value == 'x' && inpu7.value == 'x') {
                                            
                                                winner = false;
                                                return true;
                                           
                                        }
                                        if (inpu6.value == 'x' && inpu3.value == 'x') {
                                            
                                                winner = false;
                                                return true;
                                           
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        //
    }
}


but.addEventListener('click', function () {
    if (x0.innerHTML == 'x') {
        x0.innerHTML = '0';
        counter = 0;
    }
    else {
        x0.innerHTML = 'x';
        counter = 0;
    }
    inpu1.value = '';
    inpu2.value = '';
    inpu3.value = '';
    inpu4.value = '';
    inpu5.value = '';
    inpu6.value = '';
    inpu7.value = '';
    inpu8.value = '';
    inpu9.value = '';
    EnableAll();
});

inpu1.addEventListener('click', function () {
    if (counter % 2 == 0) {
        inpu1.value = x0.innerHTML;
    }
    else {
        inpu1.value = getLast();
    }
    counter++;
    inpu1.setAttribute('disabled', null);
    if (CheckWin()) {
        DisableAll();
        if (!winner) {
            document.getElementById('innp1').innerHTML = parseInt(document.getElementById('innp1').innerHTML) + 1;
        }
        else if (winner) {
            document.getElementById('innp2').innerHTML = parseInt(document.getElementById('innp2').innerHTML) + 1;
        } 
    }
})

inpu2.addEventListener('click', function () {
    if (counter % 2 == 0) {
        inpu2.value = x0.innerHTML;
    }
    else {
        inpu2.value = getLast();
    }
    counter++;
    inpu2.setAttribute('disabled', null);
    if (CheckWin()) {
        DisableAll();
        if (!winner) {
            document.getElementById('innp1').innerHTML = parseInt(document.getElementById('innp1').innerHTML) + 1;
        }
        else if (winner) {
            document.getElementById('innp2').innerHTML = parseInt(document.getElementById('innp2').innerHTML) + 1;
        }
    }
})

inpu3.addEventListener('click', function () {
    if (counter % 2 == 0) {
        inpu3.value = x0.innerHTML;
    }
    else {
        inpu3.value = getLast();
    }
    counter++;
    inpu3.setAttribute('disabled', null);
    if (CheckWin()) {
        DisableAll();
        if (!winner) {
            document.getElementById('innp1').innerHTML = parseInt(document.getElementById('innp1').innerHTML) + 1;
        }
        else if (winner) {
            document.getElementById('innp2').innerHTML = parseInt(document.getElementById('innp2').innerHTML) + 1;
        }
    }
})

inpu4.addEventListener('click', function () {
    if (counter % 2 == 0) {
        inpu4.value = x0.innerHTML;
    }
    else {
        inpu4.value = getLast();
    }
    counter++;
    inpu4.setAttribute('disabled', null);
    if (CheckWin()) {
        DisableAll();
        if (!winner) {
            document.getElementById('innp1').innerHTML = parseInt(document.getElementById('innp1').innerHTML) + 1;
        }
        else if (winner) {
            document.getElementById('innp2').innerHTML = parseInt(document.getElementById('innp2').innerHTML) + 1;
        }
    }
})

inpu5.addEventListener('click', function () {
    if (counter % 2 == 0) {
        inpu5.value = x0.innerHTML;
    }
    else {
        inpu5.value = getLast();
    }
    counter++;
    inpu5.setAttribute('disabled', null);
    if (CheckWin()) {
        DisableAll();
        if (!winner) {
            document.getElementById('innp1').innerHTML = parseInt(document.getElementById('innp1').innerHTML) + 1;
        }
        else if (winner) {
            document.getElementById('innp2').innerHTML = parseInt(document.getElementById('innp2').innerHTML) + 1;
        }
    }
})

inpu6.addEventListener('click', function () {
    if (counter % 2 == 0) {
        inpu6.value = x0.innerHTML;
    }
    else {
        inpu6.value = getLast();
    }
    counter++;
    inpu6.setAttribute('disabled', null);
    if (CheckWin()) {
        DisableAll();
        if (!winner) {
            document.getElementById('innp1').innerHTML = parseInt(document.getElementById('innp1').innerHTML) + 1;
        }
        else if (winner) {
            document.getElementById('innp2').innerHTML = parseInt(document.getElementById('innp2').innerHTML) + 1;
        }
    }
})

inpu7.addEventListener('click', function () {
    if (counter % 2 == 0) {
        inpu7.value = x0.innerHTML;
    }
    else {
        inpu7.value = getLast();
    }
    counter++;
    inpu7.setAttribute('disabled', null);
    if (CheckWin()) {
        DisableAll();
        if (!winner) {
            document.getElementById('innp1').innerHTML = parseInt(document.getElementById('innp1').innerHTML) + 1;
        }
        else if (winner) {
            document.getElementById('innp2').innerHTML = parseInt(document.getElementById('innp2').innerHTML) + 1;
        }
    }
})

inpu8.addEventListener('click', function () {
    if (counter % 2 == 0) {
        inpu8.value = x0.innerHTML;
    }
    else {
        inpu8.value = getLast();
    }
    counter++;
    inpu8.setAttribute('disabled', null);
    if (CheckWin()) {
        DisableAll();
        if (!winner) {
            document.getElementById('innp1').innerHTML = parseInt(document.getElementById('innp1').innerHTML) + 1;
        }
        else if (winner) {
            document.getElementById('innp2').innerHTML = parseInt(document.getElementById('innp2').innerHTML) + 1;
        }
    }
})


inpu9.addEventListener('click', function () {
    if (counter % 2 == 0) {
        inpu9.value = x0.innerHTML;
    }
    else {
        inpu9.value = getLast();
    }
    counter++;
    inpu9.setAttribute('disabled', null);
    if (CheckWin()) {
        DisableAll();
        if (!winner) {
            document.getElementById('innp1').innerHTML = parseInt(document.getElementById('innp1').innerHTML) + 1;
        }
        else if (winner) {
            document.getElementById('innp2').innerHTML = parseInt(document.getElementById('innp2').innerHTML) + 1;
        }
    }
})
