const express = require("express");
const categoriesRouter = express.Router();
const prisma = require("../db/prisma");
const requireUser = require("./utils");

categoriesRouter.use((req, res, next) => {
  console.log("Request made to /orders");
  next();
});

categoriesRouter.get("/", async (req, res, next) => {
    try {
      const categories = await prisma.categories.findMany({
          include: {
              product_categories:{
                  include: {
                      products:true
                  }
              }
          }
      });
      
      res.send(categories);
    } catch (error) {
      next(error);
    }
  });


  
  
  
  


module.exports = categoriesRouter