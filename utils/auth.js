const withAuth = (req, res, next) => {
    // if user not loggedin, redirect request to login route
    if (!req.session.logged_in) {
      res.redirect('/login');
    } else {
      next();
    }
  };
  
  module.exports = withAuth;