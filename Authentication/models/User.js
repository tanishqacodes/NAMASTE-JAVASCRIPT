// to validate email we require a package
const { isEmail } = require('validator');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    email : {
        type : String,
        // field : [value , 'error']
        required : [true,'Please enter an email!!!'],
        unique : true,
        lowercase : true,
        // to check if it is an email or not
        validate : [isEmail , 'Please enter valid email ....'],
    },
    password : {
        type: String,
        required : [true,'Please enter password.....'],
        minlength : [6,'Minimum password length is 6 character ... ']
    },
});

// fire a function after doc save into database
// userSchema.post('save',function(doc,next){
//     console.log('new user was created & saved :',doc);
//     next();
// });

// fire a function before doc saved into database
userSchema.pre('save', async function(next){
    // this indicate the instance of the (user) created using User.create({email,password}) in auth controller
    // console.log("user about to created & saved and this represent local instace of it : ",this);

    // HASH PASSWORD
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password , salt);

    next();
    // next() => indicates the response 
});

// Static method to login user
userSchema.statics.login = async function(email,password){
    const user = await this.findOne({ email : email });
    // if we have an user (email exits in db)
    if(user){
        const auth = await bcrypt.compare(password,user.password);
        if(auth){
            return user;
        }
        throw Error('incorrect password');
    }
    throw Error('incorrect email');
}


// user -> collection name
const User = mongoose.model('users',userSchema);

module.exports = User;