import mongoose from "mongoose";

const connctToDB = async () =>{
    mongoose.connect(
        "mongodb+srv://virajsankalpa:virajsankalpa@cluster0.jbi9ikg.mongodb.net/"
    )
    .then(()=> console.log("Database connected successfully"))
    .catch((e)=> console.log(e));
};

export default connctToDB