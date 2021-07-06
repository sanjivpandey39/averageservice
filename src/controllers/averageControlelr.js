module.exports = {
    average: (req, res)=>{
       try{
        var numbersArray = req.body.numbersArray ?? [10,20,30,40,50];
        let count     = numbersArray.length;
       let sumOfArray =  numbersArray.reduce(function(acc, val) {
             return acc + val; 
            }, 0);
        const average = sumOfArray/count;
        
        res.json({"status":true,"average":average});
       }catch(error){
        res.json({"status":false});
       }
    },
}