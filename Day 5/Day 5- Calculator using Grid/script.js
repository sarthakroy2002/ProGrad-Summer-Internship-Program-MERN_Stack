function print(val)
{
    document.getElementById('res').value += val;
}

function ans()
{
    var exp = document.cal.res.value;  
    if(exp)  
    {  
    document.cal.res.value = eval(exp);
    }  
}