const express = require("express");
const app = express();
const router = require("./router/auth-router")
const connectDb = require("./utils/db")
const cors =  require("cors");

const corsOptions={
    origin: "http://localhost:5173",
    methods:"GET , POST , DELETE, PATCH, HEAD",
    credentials: true ,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use("/api/auth",router);

app.get("/", (req,res) => {

    res.status(200).send("Welcome to web series");

});


app.get("/register", (req,res)=>{
    res.status(200).send("This is register page");

});

connectDb().then(()=>{
    

const PORT = 5001 ;
app.listen(PORT, () =>{
    console.log(`Server is running ${PORT}`);
});
});

// dil ko banade jo patang sase yeh teri wo havaye hai 
//flute music
//aayi aisi raat hai jo bahot khushnasib hai
//aakhon mein teri ajab si ajab si adae hai 