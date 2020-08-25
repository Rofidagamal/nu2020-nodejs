const express=require('express');
const { join } = require('path');
const { json } = require('express');
const app=express();

app.use(express.json());
let products=[
    {id:1,name:"Noodles",price:10.5},
    {id:2,name:"Milk",price:20.5},
    {id:3,name:"Egg",price:1.5},
    {id:4,name:"Rice",price:10.5},
    {id:5,name:"Pepsi",price:5.0}
];
let c=products.length;
app.get('/',function(req,res)
{
    res.send('hello world');
})
const productbaseuerl="/products";
//get all products
app.get(productbaseuerl,function(req,res){
    res.json(products);
})

//add product and return with id 
app.post(productbaseuerl,function(req,res)
{
const product={
    id:c++,
    name:req.body.name,
    price:req.body.price
}
products.push(product);
res.send(products);
})

// delete product by id
app.delete(productbaseuerl+'/:id',function(req,res){
let ids=parseInt(req.params.id);
const product=products.find(p=>p.id===ids);
const ind=products.indexOf(product);
products.splice(ind,1);
res.send(json(product));
});

// update product by id 
app.put(productbaseuerl+'/:id',function(req,res){
    let ids = parseInt(req.params.id);
    const i = products.indexOf(products.find(p=>p.id===ids));
    products[i].name = req.body.name;
    products[i].price = req.body.price;
    products[i].id = req.body.id;

    res.send(products[i]);
})
// app.put(productbaseuerl+'/:id',function(req,res){
// let ind=products.findIndex(p=>p.id===req.body.id);
// products[ind].name=req.body.name;
// products[ind].id=req.body.id;
// products[ind].price=req.body.price;
// // let ids=parseInt(req.params.id);
// // const product=products.find(p=>p.id===ids);
// res.send(json(products));
// });

app.listen(3000)



