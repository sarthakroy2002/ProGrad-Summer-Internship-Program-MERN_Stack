document.getElementById('player1').value = 0;
document.getElementById('player2').value = 0;
var p1 = 0;
var p2 = 0;
var result=30
var count = 1

function diceup()
{
    var randomnum = parseInt(Math.floor(Math.random() * 6)+1);
    document.getElementById('diceresult').value = randomnum;
    if(count%2==0)
    {
        p2 = p2 + randomnum;
        document.getElementById('player2').value = p2;
        count++;
        printer();
    }
    else
    {
        p1 = p1 + randomnum;
        document.getElementById('player1').value = p1;
        count++;
        printer();
    }
}

function printer()
{        
    if (result === p1)
    {
        document.getElementById('result').innerText = 'Player 1 won the game';
    }
    else if (result === p2)
    {
        document.getElementById('result').innerText = 'Player 2 won the game';
    }
    else
    {
        document.getElementById('result').innerText = 'Game has started';
    }
}
