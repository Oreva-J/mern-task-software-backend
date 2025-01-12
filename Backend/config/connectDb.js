const mongoose = require('mongoose')

const connectDb = async ()=>{
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI)
        console.log(`Mongodb connected on host ${connect.connection.host}`);
        
    } catch (error) {
        console.error(error);
        process.exit(1)
    }
}


module.exports = connectDb




// on server.js connected to this

// const startServer = async ()=>{
//    try {
//     await connectDb();
//     app.listen(PORT, ()=>{
//         console.log(`Server Running on Port ${PORT}`);
        
//     })
//    } catch (error) {
//     console.error(error);   
//    }
// }

// startServer()