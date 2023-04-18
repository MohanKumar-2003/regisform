var express=require('express')
var pool=require('./database')
var bodyparser=require('body-parser')
var app=express()
app.use(express.static(__dirname))
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))
app.set('view engine','ejs')
app.get('/',function(req,res){
    res.sendFile(__dirname+'/index.html')
})
app.post('/',function(req,res){
    var fname=req.body.fname
    var lname=req.body.lname
    var gender=req.body.gender
    var mail=req.body.email
    var phone=req.body.phone
    var dob=req.body.dob
    var ad1=req.body.ad1
    var ad2=req.body.ad2
    var city=req.body.city
    var zipcode=req.body.zip
    var state=req.body.state
    var country=req.body.country
    var sql="INSERT INTO t_reg(fname,lname,mail_id,ph_num,dob,Add_li1,Add_li2,City,country,state,zip,gender) VALUES(?,?,?,?,?,?,?,?,?,?,?,?);"
    pool.query(sql,[fname,lname,mail,phone,dob,ad1,ad2,city,country,state,zipcode,gender],function(err,result){
        if(err) throw err;
        res.redirect('/frontend')
    })
})
app.get('/frontend',function(req,res){
    var sql='select * from t_reg;'
    pool.query(sql,function(err,result){
        if(err) throw console.log(err)
        res.render(__dirname+'/frontend',{studentdetails:result})
    })
})
app.listen(3000)