var jwt = require("jsonwebtoken");

module.exports = {
  verifyToken: async (req, res, next) => {
    try {
      let token = req.header("Authorization");
//console.log(token);
      if (!token) {
        return res.status(403).send("Access Denied");
      }

      if (token.startsWith("Bearer ")) {
        token = token.slice(7, token.length).trimLeft();
      }

      const verified = jwt.verify(token, process.env.JWT_SECRET_KEY);
      req.user = verified;
      next();
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}


//module.exports=verifyToken

// const getUser = async () => {
//     const response = await fetch(`http://localhost:3001/users/${userId}`, {
//       method: "GET",
//       headers: { Authorization: `Bearer ${token}` },
//     });
//     const data = await response.json();
//     setUser(data);
//   };
