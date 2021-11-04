
let son = ''
let res = document.getElementById('res')
let check = false
let btns = document.querySelectorAll('.btns__right button')
function calc(belgi){
    if (belgi == 'c'){
        son = ''
        res.innerHTML = son
        return false
    }
    if (belgi == 'd'){
        let arr = son.split('')
        arr.pop()
        son = arr.join('')
        res.innerHTML = son
        return false
    }
    if (belgi=='+' || belgi=='-' || belgi=='*' || belgi=='/'){
        check = true 
    } else {
        check = false 
    }

    if (check){

        btns.forEach(btn => {
            btn.disabled = true
        })
    } else {
        btns.forEach(btn => {
            btn.disabled = false
        })
    }

    if (belgi == '='){
        res.innerHTML = eval(son)
    } else {
        son +=belgi
        res.innerHTML = son

    }
}