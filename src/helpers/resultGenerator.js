


const generateResult = (res,result)=>{
    
    return res.status(result.code).json({
        success:result.success,
        statusCode:result.code,
        message:result.message,
        data_size: result.size || null,
        error:result.error,
        data:result.data
    })
}

module.exports = generateResult