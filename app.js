const express = require('express');
const app = express(); 
const ExpressError = require("./ExpressError");

// Fixed Middleware: correct parameter order (req, res, next)
const checkToken = (req, res, next) => {
    let { token } = req.query; 
    
    if (token === "giveaccess") {
        return next(); // Proceed to the route handler
    }
    
    // Deny access if token is invalid or missing
    throw new ExpressError(401, "ACCESS DENIED!");
};

app.get("/api", checkToken, (req, res) => {
    res.send("data");
});

app.get("/", (req, res) => {
    res.send("hii , i am root.");
});

app.get('/random', (req, res) => {
    res.send('this is a random page');
});

app.get('/err', (req, res, next) => {
    try {
        abd = afn; // Runtime ReferenceError
    } catch (err) {
        next(err); // Pass error to Express error handler
    }
}); 

// wrapAsync function 

function wrapAsync(fn){
   return function (req , res , next ) {
    fn(req , res , next).catch((err) => next(err)); 

   };

}




// Centralized Error Handler
app.use((err, req, res, next) => {
  // Fallback values if status or message aren't set
  const { status = 500, message = 'Something went wrong!' } = err;

  res.status(status).json({
    success: false,
    status,
    message,
  });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});

app.get("/admin", (res, req) => {
    throw new ExpressError( 403 , " Access to admin is forbidden")
})


// 404 Route Handler for undefined routes
app.use((req, res) => {
    res.status(404).send('Page not found');
}); 








// Global Error-Handling Middleware (MUST have 4 arguments)
app.use((err, req, res, next) => {
    let { status = 500, message = "Something went wrong" } = err;
    res.status(status).send(message);
});

app.listen(4000, () => {
    console.log('Server is running on port 4000');
});