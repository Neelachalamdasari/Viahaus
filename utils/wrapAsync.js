module.exports=(fn)=>{
    return function(req,res,next){
        fn(req,res,next).catch((err)=>next(err));
    }
}

// module.exports = (fn)  => {
//     return (req,res,next)=>{
//         fn(req,res,next).catch(next);
//     }
// }

// const wrapAsync = (fn) => {
//     return (req, res, next) => {
//         fn(req, res, next).catch(next);
//     }
// }

// module.exports = wrapAsync; 
