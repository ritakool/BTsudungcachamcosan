function lesson1()
{
    let myColor= ["Red", "Green", "White", "Black"];
    let mycolorString= myColor.toString()
    console.log(mycolorString)
}
function lesson2()
{
    let a = prompt("nhập chuỗi số")
    const numString = a;
    const b=[numString[0]]
    for (let i =1; i< numString.length;i++)
    {
        if (numString[i-1] % 2 ===0 && numString[i]%2===0)
        {
            b.push("-",numString[i])
        }
        else
        {
            b.push(numString[i])
        }
    }
    document.write(b.join(""))
    // console.log(b)
}
function lesson3()
{
    var UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var LOWER = 'abcdefghijklmnopqrstuvwxyz';
    const a = prompt('nhap bat ki')
    const b=[]
    for (let i=0; i< a.length;i++)
    {
    if (UPPER.indexOf(a[i]) !== -1)
        {
       b.push(a[i].toLowerCase());
        }
    else if (LOWER.indexOf(a[i]) !==-1)
        {
        b.push(a[i].toUpperCase());
        }
    else
        {
        b.push(a[i])
        }
    }
    document.write(b.join(""));
}