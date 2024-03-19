import userModel from "../models/user.js";
import axios from "axios"

const API_URL="https://codeforces.com/api/"
class userController{
    static home =async (req,res)=>{
        res.render("index.ejs")
    }
    static register = async (req,res)=>{
        res.render("register.ejs")
    }
    static login =async (req,res)=>{
            res.render("login.ejs");
    }
    static createUserDoc = async (req,res) =>{
        try {
            // const hashed_password=await bcrypt.hash(req.body.password,10)
            const response=await axios.get(API_URL + "/user.info" + "?handles=" + req.body.cf_username);
            console.log(API_URL + "/user.info" + "?handles=" + req.body.cfusername);
            console.log(response);
            console.log(response.data);
            if (response.data.result[0].handle== 'undefined') {
                res.render("register.ejs", { error: 'Codeforces username not found.' });
            }
            else{
            const doc=new userModel({
                name:req.body.name,
                email:req.body.email,
                cf_username:req.body.cf_username,
                password:req.body.password
            })
            const saved=await doc.save();
            console.log(saved)
            console.log("created");
            res.redirect('/login')
        }
        } catch (error) {
            console.log(error);
            res.render('/register.ejs', { error: 'An error occurred. Please try again later.' });
        }
    }
    static validateLogin=async(req,res)=>{
        try {
            const result=await userModel.findOne({email:req.body.email})
            
            if(result!=null){
                if(result.password==req.body.password){
                    res.redirect("/")
                }
                else{
                    res.send(`<h1>Incorrect password</h1>`)
                }
            }
            else{
                res.send(`<h1>User not yet resistered</h1>`)
            }
            res.redirect('/login')
        } catch (error) {
            console.log(error)
        }
    }
}

export default userController;
