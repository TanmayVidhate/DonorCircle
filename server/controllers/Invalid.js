const getInvaild = (req,res)=>{
    res.status(404).json({
        success:false,
        message:"Invalid API's"
    })
}

export{
    getInvaild,
}