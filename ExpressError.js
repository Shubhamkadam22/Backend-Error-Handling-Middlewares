class ExpressError extends Error {
  constructor(status , message){
    super();
    this.status = status; 
    this.messege = meassge; 

  }};

  module.exports = ExpressError;