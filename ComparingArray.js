function compareArray(array)
{
    for(var outer=0;outer<array.length;outer++)
    {
        for(var inner=0;inner<array.length;inner++)
        {
            console.log("value1 : "+array[outer] +", value2 : "+array[inner]);
            if(array[outer]===array[inner])
            {
                console.log("Same");
            }
            else{
                console.log("Different");
            }
        }
    }
}

arr=[1,1,2,3,4,5];
compareArray(arr);
arr=[1,3,4,5];
compareArray(arr);
arr=[1,"2",2,"bbb"];
compareArray(arr);