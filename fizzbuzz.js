function fizbuz(num){
    for(i = 1;i <= num; i++)
    {
        if(i % 15 === 0)
        {
            console.log("Fizz Buzz", i);
        }
        else if(i % 3 === 0)
            console.log("Fizz", i);
        else if(i % 5 === 0)
            console.log("Buzz", i);
        else
            console.log("Not Fizz Buzz numbers", i);
    }
}

fizbuz(20);