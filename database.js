const express=require('express')
const {createPool}=require('mysql')
const pool=createPool({
    host:'localhost',
    user:'root',
    password:'',
    database:'registration',
    connectionLimit:10
},console.log('Connected'))
module.exports=pool