export const authMiddleware = (req,res,next)=>{
    const token = "xy1313z";
    console.log("Auth code called");
    if(token==="xyz"){
        next();
    }
    else{
        res.status(401).send("Not authorized");
    }
}