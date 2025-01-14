
const getHome = (req,res)=>{
    res.status(200).json({
        success:true,
        message:"Welcom To DonorCircle"
    })
}

export{
    getHome
}