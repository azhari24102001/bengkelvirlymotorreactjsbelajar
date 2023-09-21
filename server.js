const express = require("express");
const server = express();
const { Pool } = require("pg");
const cors = require("cors");
const pool = new Pool({
  host: "localhost",
  database: "bengkel_virly",
  user: "postgres",
  //password db pg masing2
  password: "Dinda24102001",
});

const jwt = require("jsonwebtoken");
const jwtSecret = "secret"; // can be any secret string

server.use(cors()); // menambahkan middleware cors
server.use(express.json()); // menambahkan middleware untuk parsing body request dengan format JSON

server.get("/user_bengkel", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM user_bengkel");
    res.send(result.rows);
  } catch (error) {
    res.send(error);
  }
});

server.post("/user_bengkel", async (req, res) => {
  const {id_user, name_user, username_user, email_user, password_user, no_phone_user } = req.body;

  try {
    const result = await pool.query(
      "INSERT INTO user_bengkel (id_user, name_user, username_user, email_user, password_user, no_phone_user) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
      [id_user, name_user, username_user, email_user, password_user, no_phone_user]
    );
    res.send(result.rows[0]);
  } catch (error) {
    res.send(error);
  }
});

server.delete("/user_bengkel/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const result = await pool.query("DELETE FROM user_bengkel WHERE id_user = $1 RETURNING *", [id]);
    res.send(result.rows[0]);
  } catch (error) {
    res.send(error);
  }
});

server.put("/user_bengkel", async (req, res) => {

  const {id_user, name_user, username_user, email_user, password_user, no_phone_user } = req.body;
 
  try {
  const result = await pool.query("UPDATE user_bengkel set name_user = $2, username_user = $3 , email_user = $4, password_user = $5, no_phone_user = $6 WHERE id_user = $1",
  [id_user, name_user, username_user, email_user, password_user, no_phone_user]);
  res.send(result.rows[0]);
  } catch (error) {
    res.send(error);
    console.log(error)
  }
});

//---------------------------------------Admin-----------------------------------------------------------------------------------

server.get("/admin_bengkel", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM admin_bengkel");
    res.send(result.rows);
  } catch (error) {
    res.send(error);
  }
});

server.post("/admin_bengkel", async (req, res) => {
  const {id_admin, name_admin, username_admin, email_admin, password_admin, no_phone_admin } = req.body;

  try {
    const result = await pool.query(
      "INSERT INTO admin_bengkel (id_admin, name_admin, username_admin, email_admin, password_admin, no_phone_admin) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
      [id_admin, name_admin, username_admin, email_admin, password_admin, no_phone_admin]
    );
    res.send(result.rows[0]);
  } catch (error) {
    res.send(error);
  }
});

server.delete("/admin_bengkel/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const result = await pool.query("DELETE FROM admin_bengkel WHERE id_admin = $1 RETURNING *", [id]);
    res.send(result.rows[0]);
  } catch (error) {
    res.send(error);
  }
});

server.put("/admin_bengkel", async (req, res) => {

  const {id_admin, name_admin, username_admin, email_admin, password_admin, no_phone_admin } = req.body;
 
  try {
  const result = await pool.query("UPDATE admin_bengkel set name_admin = $2, username_admin = $3 , email_admin = $4, password_admin = $5, no_phone_admin = $6 WHERE id_admin = $1",
  [id_admin, name_admin, username_admin, email_admin, password_admin, no_phone_admin]);
  res.send(result.rows[0]);
  } catch (error) {
    res.send(error);
    console.log(error)
  }
});

//---------------------------------------Superadmin------------------------------------------------------------
server.get("/superadmin_bengkel", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM superadmin_bengkel");
    res.send(result.rows);
  } catch (error) {
    res.send(error);
  }
});

server.post("/superadmin_bengkel", async (req, res) => {
  const {id_superadmin, name_superadmin, username_superadmin, email_superadmin, password_superadmin, no_phone_superadmin } = req.body;

  try {
    const result = await pool.query(
      "INSERT INTO superadmin_bengkel (id_superadmin, name_superadmin, username_superadmin, email_superadmin, password_superadmin, no_phone_superadmin) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
      [id_superadmin, name_superadmin, username_superadmin, email_superadmin, password_superadmin, no_phone_superadmin]
    );
    res.send(result.rows[0]);
  } catch (error) {
    res.send(error);
  }
});

server.delete("/superadmin_bengkel/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const result = await pool.query("DELETE FROM superadmin_bengkel WHERE id_superadmin = $1 RETURNING *", [id]);
    res.send(result.rows[0]);
  } catch (error) {
    res.send(error);
  }
});

server.put("/superadmin_bengkel", async (req, res) => {

  const {id_superadmin, name_superadmin, username_superadmin, email_superadmin, password_superadmin, no_phone_superadmin } = req.body;
 
  try {
  const result = await pool.query("UPDATE superadmin_bengkel set name_superadmin = $2, username_superadmin = $3 , email_superadmin = $4, password_superadmin = $5, no_phone_superadmin = $6 WHERE id_superadmin = $1",
  [id_superadmin, name_superadmin, username_superadmin, email_superadmin, password_superadmin, no_phone_superadmin]);
  res.send(result.rows[0]);
  } catch (error) {
    res.send(error);
    console.log(error)
  }
});

//---------------------------------------Sparepart------------------------------------------------------------
server.get("/sparepart_bengkel", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM sparepart_bengkel");
    res.send(result.rows);
  } catch (error) {
    res.send(error);
  }
});

server.post("/sparepart_bengkel", async (req, res) => {
  const {id_sparepart, name_sparepart, stok_sparepart} = req.body;

  try {
    const result = await pool.query(
      "INSERT INTO sparepart_bengkel (id_sparepart, name_sparepart, stok_sparepart ) VALUES ($1, $2, $3) RETURNING *",
      [id_sparepart, name_sparepart, stok_sparepart]
    );
    res.send(result.rows[0]);
  } catch (error) {
    res.send(error);
  }
});

server.delete("/sparepart_bengkel/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const result = await pool.query("DELETE FROM sparepart_bengkel WHERE id_sparepart = $1 RETURNING *", [id]);
    res.send(result.rows[0]);
  } catch (error) {
    res.send(error);
  }
});

server.put("/sparepart_bengkel", async (req, res) => {

  const {id_sparepart, name_sparepart, stok_sparepart} = req.body;
 
  try {
  const result = await pool.query("UPDATE sparepart_bengkel set name_sparepart = $2, stok_sparepart = $3 WHERE id_sparepart = $1",
  [id_sparepart, name_sparepart, stok_sparepart]);
  res.send(result.rows[0]);
  } catch (error) {
    res.send(error);
    console.log(error)
  }
});

//---------------------------------------Service------------------------------------------------------------
server.get("/user_service", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM user_service");
    res.send(result.rows);
  } catch (error) {
    res.send(error);
  }
});

server.post("/user_service", async (req, res) => {
  const {id_service, name_service, kategori_service} = req.body;

  try {
    const result = await pool.query(
      "INSERT INTO user_service (id_service, name_service, kategori_service ) VALUES ($1, $2, $3) RETURNING *",
      [id_service, name_service, kategori_service]
    );
    res.send(result.rows[0]);
  } catch (error) {
    res.send(error);
  }
});

server.delete("/user_service/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const result = await pool.query("DELETE FROM user_service WHERE id_service = $1 RETURNING *", [id]);
    res.send(result.rows[0]);
  } catch (error) {
    res.send(error);
  }
});

server.put("/user_service", async (req, res) => {

  const {id_service, name_service, kategori_service} = req.body;
 
  try {
  const result = await pool.query("UPDATE user_service set name_service = $2, kategori_service = $3 WHERE id_service = $1",
  [id_service, name_service, kategori_service]);
  res.send(result.rows[0]);
  } catch (error) {
    res.send(error);
    console.log(error)
  }
});

//---------------------------------------Mobil------------------------------------------------------------
server.get("/mobil_bengkel", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM mobil_bengkel");
    res.send(result.rows);
  } catch (error) {
    res.send(error);
  }
});

server.post("/mobil_bengkel", async (req, res) => {
  const {id_mobil, name_mobil, merk_mobil, harga_mobil, cc_mobil, tipe_bbm_mobil, tahun_mobil, jarak_tempuh} = req.body;

  try {
    const result = await pool.query(
      "INSERT INTO mobil_bengkel (id_mobil, name_mobil, merk_mobil, harga_mobil, cc_mobil, tipe_bbm_mobil, tahun_mobil, jarak_tempuh ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *",
      [id_mobil, name_mobil, merk_mobil, harga_mobil, cc_mobil, tipe_bbm_mobil, tahun_mobil, jarak_tempuh]
    );
    res.send(result.rows[0]);
  } catch (error) {
    res.send(error);
  }
});

server.delete("/mobil_bengkel/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const result = await pool.query("DELETE FROM mobil_bengkel WHERE id_mobil = $1 RETURNING *", [id]);
    res.send(result.rows[0]);
  } catch (error) {
    res.send(error);
  }
});

server.put("/mobil_bengkel", async (req, res) => {

  const {id_mobil, name_mobil, merk_mobil, harga_mobil, cc_mobil, tipe_bbm_mobil, tahun_mobil, jarak_tempuh} = req.body;
 
  try {
  const result = await pool.query("UPDATE mobil_bengkel set name_mobil = $2, merk_mobil = $3 , harga_mobil = $4 , cc_mobil = $5 , tipe_bbm_mobil = $6 , tahun_mobil = $7 , jarak_tempuh = $8 WHERE id_mobil = $1",
  [id_mobil, name_mobil, merk_mobil, harga_mobil, cc_mobil, tipe_bbm_mobil, tahun_mobil, jarak_tempuh]);
  res.send(result.rows[0]);
  } catch (error) {
    res.send(error);
    console.log(error)
  }

//---------------------------------------Register-----------------------------------------------------------------------------------
server.get("/register", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM user_bengkel");
    res.send(result.rows);
  } catch (error) {
    res.send(error);
  }
});

server.post("/register", async (req, res) => {
  const {id_user, name_user, username_user, email_user, password_user, no_phone_user } = req.body;

  try {
    const result = await pool.query(
      "INSERT INTO user_bengkel (id_user, name_user, username_user, email_user, password_user, no_phone_user) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
      [id_user, name_user, username_user, email_user, password_user, no_phone_user]
    );
    res.send(result.rows[0]);
  } catch (error) {
    res.send(error);
  }
});
});


// //---------------------------------------Login-----------------------------------------------------------------------------------


// Middleware function to verify token
function verifyToken(req, res, next) {
  // Get auth header value
  const bearerHeader = req.headers["authorization"];
  // Check if bearer is undefined
  if (typeof bearerHeader !== "undefined") {
    // Split at the space
    const bearer = bearerHeader.split(" ");
    // Get token from array
    const token = bearer[1];
    // Verify token
    jwt.verify(token, jwtSecret, (err, authData) => {
      if (err) {
        res.sendStatus(403); // forbidden
      } else {
        // Save authData to req object for later use
        req.authData = authData;
        next();
      }
    });
  } else {
    res.sendStatus(401); // unauthorized
  }
}

server.post("/loginuser", async (req, res) => {
  const { email_user, password_user } = req.body;
  try {
    // Check if user exists in database and password matches
    const result = await pool.query(
      "SELECT * FROM user_bengkel WHERE email_user = $1 AND password_user = $2",
      [email_user, password_user]
    );
    if (result.rows.length > 0) {
      // User exists and password matches, create a JWT token and send it back
      const payload = { email_user };
      const token = jwt.sign(payload, jwtSecret, { expiresIn: "1h" });
      res.json({ token });
    } else {
      res.sendStatus(401); // unauthorized
    }
  } catch (error) {
    res.send(error);
  }
});

server.get("/user_bengkel", verifyToken, async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM user_bengkel");
    res.send(result.rows);
  } catch (error) {
    res.send(error);
  }
});

server.post("/user_bengkel", verifyToken, async (req, res) => {
  const {id_user, name_user, username_user, email_user, password_user, no_phone_user } = req.body;

  try {
    const result = await pool.query(
      "INSERT INTO user_bengkel (id_user, name_user, username_user, email_user, password_user, no_phone_user) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
      [id_user, name_user, username_user, email_user, password_user, no_phone_user]
    );
    res.send(result.rows[0]);
  } catch (error) {
    res.send(error);
  }
});

server.delete("/user_bengkel/:id", verifyToken, async (req, res) => {
  const id = req.params.id;

  try {
    const result = await pool.query("DELETE FROM user_bengkel WHERE id_user = $1 RETURNING *", [id]);
    res.send(result.rows[0]);
  } catch (error) {
    res.send(error);
  }
});

server.put("/user_bengkel", verifyToken, async (req, res) => {

  const {id_user, name_user, username_user, email_user, password_user, no_phone_user } = req.body;
 
  try {
  const result = await pool.query("UPDATE user_bengkel set name_user = $2, username_user = $3 , email_user = $4, password_user = $5, no_phone_user = $6 WHERE id_user = $1",
  [id_user, name_user, username_user, email_user, password_user, no_phone_user]);
  res.send(result.rows[0]);
  } catch (error) {
    res.send(error);
    console.log(error)
  }
});


server.post("/loginadmin", async (req, res) => {
  const { email_admin, password_admin } = req.body;
  try {
    // Check if user exists in database and password matches
    const result = await pool.query(
      "SELECT * FROM admin_bengkel WHERE email_admin = $1 AND password_admin = $2",
      [email_admin, password_admin]
    );
    if (result.rows.length > 0) {
      // User exists and password matches, create a JWT token and send it back
      const payload = { email_admin };
      const token = jwt.sign(payload, jwtSecret, { expiresIn: "1h" });
      res.json({ token });
    } else {
      res.sendStatus(401); // unauthorized
    }
  } catch (error) {
    res.send(error);
  }
});

server.get("/admin_bengkel", verifyToken, async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM admin_bengkel");
    res.send(result.rows);
  } catch (error) {
    res.send(error);
  }
});

server.post("/admin_bengkel", verifyToken, async (req, res) => {
  const {id_admin, name_admin, username_admin, email_admin, password_admin, no_phone_admin } = req.body;

  try {
    const result = await pool.query(
      "INSERT INTO admin_bengkel (id_admin, name_admin, username_admin, email_admin, password_admin, no_phone_admin) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
      [id_admin, name_admin, username_admin, email_admin, password_admin, no_phone_admin]
    );
    res.send(result.rows[0]);
  } catch (error) {
    res.send(error);
  }
});

server.delete("/admin_bengkel/:id", verifyToken, async (req, res) => {
  const id = req.params.id;

  try {
    const result = await pool.query("DELETE FROM admin_bengkel WHERE id_admin = $1 RETURNING *", [id]);
    res.send(result.rows[0]);
  } catch (error) {
    res.send(error);
  }
});

server.put("/admin_bengkel", verifyToken, async (req, res) => {

  const {id_admin, name_admin, username_admin, email_admin, password_admin, no_phone_admin } = req.body;
 
  try {
  const result = await pool.query("UPDATE admin_bengkel set name_admin = $2, username_admin = $3 , email_admin = $4, password_admin = $5, no_phone_admin = $6 WHERE id_admin = $1",
  [id_admin, name_admin, username_admin, email_admin, password_admin, no_phone_admin]);
  res.send(result.rows[0]);
  } catch (error) {
    res.send(error);
    console.log(error)
  }
});

server.post("/loginsuperadmin", async (req, res) => {
  const { email_superadmin, password_superadmin } = req.body;
  try {
    // Check if user exists in database and password matches
    const result = await pool.query(
      "SELECT * FROM superadmin_bengkel WHERE email_superadmin = $1 AND password_superadmin = $2",
      [email_superadmin, password_superadmin]
    );
    if (result.rows.length > 0) {
      // User exists and password matches, create a JWT token and send it back
      const payload = { email_superadmin };
      const token = jwt.sign(payload, jwtSecret, { expiresIn: "1h" });
      res.json({ token });
    } else {
      res.sendStatus(401); // unauthorized
    }
  } catch (error) {
    res.send(error);
  }
});

server.get("/superadmin_bengkel", verifyToken, async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM superadmin_bengkel");
    res.send(result.rows);
  } catch (error) {
    res.send(error);
  }
});

server.post("/superadmin_bengkel", verifyToken, async (req, res) => {
  const {id_superadmin, name_superadmin, username_superadmin, email_superadmin, password_superadmin, no_phone_superadmin } = req.body;

  try {
    const result = await pool.query(
      "INSERT INTO superadmin_bengkel (id_superadmin, name_superadmin, username_superadmin, email_superadmin, password_superadmin, no_phone_superadmin) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
      [id_superadmin, name_superadmin, username_superadmin, email_superadmin, password_superadmin, no_phone_superadmin]
    );
    res.send(result.rows[0]);
  } catch (error) {
    res.send(error);
  }
});

server.delete("/superadmin_bengkel/:id", verifyToken, async (req, res) => {
  const id = req.params.id;

  try {
    const result = await pool.query("DELETE FROM superadmin_bengkel WHERE id_superadmin = $1 RETURNING *", [id]);
    res.send(result.rows[0]);
  } catch (error) {
    res.send(error);
  }
});

server.put("/superadmin_bengkel", verifyToken, async (req, res) => {

  const {id_superadmin, name_superadmin, username_superadmin, email_superadmin, password_superadmin, no_phone_superadmin } = req.body;
 
  try {
  const result = await pool.query("UPDATE superadmin_bengkel set name_superadmin = $2, username_superadmin = $3 , email_superadmin = $4, password_superadmin = $5, no_phone_superadmin = $6 WHERE id_superadmin = $1",
  [id_superadmin, name_superadmin, username_superadmin, email_superadmin, password_superadmin, no_phone_superadmin]);
  res.send(result.rows[0]);
  } catch (error) {
    res.send(error);
    console.log(error)
  }
});

server.listen(3000, () => console.log("system running"));