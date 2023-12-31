const UserModel = require("../models/User.model");
// export 1. way 1 :: adding export with functions
const createUser = async (username, email,password) => {
  return await UserModel.create({ username, email,password });
};

const getUser = async () => {
  return await UserModel.find(); 
};

const updateData = async (id,username,email,password) => {

  try {
     const result = await UserModel.findByIdAndUpdate(
        {id},
       {username:username, email:email,password:password} 
     );
     console.log('Data updated:', result);
  }catch (error) {
    console.error('Error updating data:', error);
 }
}
// const deleteUser = async (id) =>{
  
//   UserModel.findByIdAndDelete(id, (err) => {
//     if (err) {
//        console.log(err);
//     } else {
//        console.log('User successfully deleted');
//     }
//    });

// }
const  deleteUser = async (id) =>{
  
  return await UserModel.findByIdAndDelete(id );
};

module.exports = {
    createUser,
    getUser,
    updateData,
    deleteUser
};