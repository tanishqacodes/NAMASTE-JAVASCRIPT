const home = (req,res)=>{
    const data = {
        'name' : "tanishqa",
        'id' : 21,
        'marks' : [40,50,60,70,90,30]
    };
    res.render('index',data);
}

export {home};