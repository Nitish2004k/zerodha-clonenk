require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const session = require("express-session");

const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const app = express();

app.use(cors({
  origin: [
    "https://zerodha-clonenk-jaq2.vercel.app",
    "https://zerodha-clonenk.vercel.app",
    "http://localhost:3000",
    "http://localhost:5173"
  ],
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({
  secret: process.env.SESSION_SECRET || "zerodha_secret_key_123",
  resave: false,
  saveUninitialized: false,
}));

app.use(passport.initialize());
app.use(passport.session());

// User Schema
const userSchema = new mongoose.Schema({
  username: String,
  name: String,
});
userSchema.plugin(passportLocalMongoose);
const User = mongoose.model("User", userSchema);

passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// ✅ Root route
app.get("/", (req, res) => {
  res.send("Zerodha Backend is running!");
});

// ✅ Signup Route
app.post("/signup", async (req, res) => {
  try {
    const { username, password, name } = req.body;
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists!" });
    }
    const newUser = new User({ username, name });
    await User.register(newUser, password);
    res.status(201).json({ message: "Signup successful!" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// ✅ Login Route
app.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) return res.status(500).json({ message: err.message });
    if (!user) return res.status(401).json({ message: "Invalid username or password" });
    req.logIn(user, (err) => {
      if (err) return res.status(500).json({ message: err.message });
      res.json({ message: "Login successful!", user: { username: user.username, name: user.name } });
    });
  })(req, res, next);
});

// ✅ Logout Route
app.post("/logout", (req, res) => {
  req.logout(() => {
    res.json({ message: "Logged out!" });
  });
});

// ✅ Check login status
app.get("/user", (req, res) => {
  if (req.isAuthenticated()) {
    res.json({ user: req.user });
  } else {
    res.status(401).json({ message: "Not logged in" });
  }
});

// Existing routes
app.get("/allHoldings", async (req, res) => {
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

app.post("/newOrder", async (req, res) => {
  let newOrder = new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });
  newOrder.save();
  res.send("Order saved!");
});

app.listen(PORT, () => {
  console.log("App started on port", PORT);
  mongoose.connect(uri)
    .then(() => console.log("DB connected!"))
    .catch((err) => console.log("DB error:", err));
});










// require("dotenv").config();

// const express = require("express");
// const mongoose = require("mongoose");
// const bodyParser = require("body-parser");
// const cors = require("cors");

// const { HoldingsModel } = require("./model/HoldingsModel");

// const { PositionsModel } = require("./model/PositionsModel");
// const { OrdersModel } = require("./model/OrdersModel");

// const PORT = process.env.PORT || 3002;
// const uri = process.env.MONGO_URL;


// const app = express();

// app.use(cors({
//   origin: [
//     "https://zerodha-clonenk-jaq2.vercel.app",
//     "https://zerodha-clonenk.vercel.app",
//     "http://localhost:3000",
//     "http://localhost:5173"
//   ],
//   credentials: true,
//   methods: ["GET", "POST", "PUT", "DELETE"],
//   allowedHeaders: ["Content-Type", "Authorization"]
// }));
// app.use(bodyParser.json());

// app.get("/addHoldings", async (req, res) => {
//   let tempHoldings = [
//     {
//       name: "BHARTIARTL",
//       qty: 2,
//       avg: 538.05,
//       price: 541.15,
//       net: "+0.58%",
//       day: "+2.99%",
//     },
//     {
//       name: "HDFCBANK",
//       qty: 2,
//       avg: 1383.4,
//       price: 1522.35,
//       net: "+10.04%",
//       day: "+0.11%",
//     },
//     {
//       name: "HINDUNILVR",
//       qty: 1,
//       avg: 2335.85,
//       price: 2417.4,
//       net: "+3.49%",
//       day: "+0.21%",
//     },
//     {
//       name: "INFY",
//       qty: 1,
//       avg: 1350.5,
//       price: 1555.45,
//       net: "+15.18%",
//       day: "-1.60%",
//       isLoss: true,
//     },
//     {
//       name: "ITC",
//       qty: 5,
//       avg: 202.0,
//       price: 207.9,
//       net: "+2.92%",
//       day: "+0.80%",
//     },
//     {
//       name: "KPITTECH",
//       qty: 5,
//       avg: 250.3,
//       price: 266.45,
//       net: "+6.45%",
//       day: "+3.54%",
//     },
//     {
//       name: "M&M",
//       qty: 2,
//       avg: 809.9,
//       price: 779.8,
//       net: "-3.72%",
//       day: "-0.01%",
//       isLoss: true,
//     },
//     {
//       name: "RELIANCE",
//       qty: 1,
//       avg: 2193.7,
//       price: 2112.4,
//       net: "-3.71%",
//       day: "+1.44%",
//     },
//     {
//       name: "SBIN",
//       qty: 4,
//       avg: 324.35,
//       price: 430.2,
//       net: "+32.63%",
//       day: "-0.34%",
//       isLoss: true,
//     },
//     {
//       name: "SGBMAY29",
//       qty: 2,
//       avg: 4727.0,
//       price: 4719.0,
//       net: "-0.17%",
//       day: "+0.15%",
//     },
//     {
//       name: "TATAPOWER",
//       qty: 5,
//       avg: 104.2,
//       price: 124.15,
//       net: "+19.15%",
//       day: "-0.24%",
//       isLoss: true,
//     },
//     {
//       name: "TCS",
//       qty: 1,
//       avg: 3041.7,
//       price: 3194.8,
//       net: "+5.03%",
//       day: "-0.25%",
//       isLoss: true,
//     },
//     {
//       name: "WIPRO",
//       qty: 4,
//       avg: 489.3,
//       price: 577.75,
//       net: "+18.08%",
//       day: "+0.32%",
//     },
//   ];

//   tempHoldings.forEach((item) => {
//     let newHolding = new HoldingsModel({
//       name: item.name,
//       qty: item.qty,
//       avg: item.avg,
//       price: item.price,
//       net: item.day,
//       day: item.day,
//     });

//     newHolding.save();
//   });
//   res.send("Done!");
// });

// app.get("/addPositions", async (req, res) => {
//   let tempPositions = [
//     {
//       product: "CNC",
//       name: "EVEREADY",
//       qty: 2,
//       avg: 316.27,
//       price: 312.35,
//       net: "+0.58%",
//       day: "-1.24%",
//       isLoss: true,
//     },
//     {
//       product: "CNC",
//       name: "JUBLFOOD",
//       qty: 1,
//       avg: 3124.75,
//       price: 3082.65,
//       net: "+10.04%",
//       day: "-1.35%",
//       isLoss: true,
//     },
//   ];

//   tempPositions.forEach((item) => {
//     let newPosition = new PositionsModel({
//       product: item.product,
//       name: item.name,
//       qty: item.qty,
//       avg: item.avg,
//       price: item.price,
//       net: item.net,
//       day: item.day,
//       isLoss: item.isLoss,
//     });

//     newPosition.save();
//   });
//   res.send("Done!");
// });

// app.get("/allHoldings", async (req, res) => {
//   let allHoldings = await HoldingsModel.find({});
//   res.json(allHoldings);
// });

// app.get("/allPositions", async (req, res) => {
//   let allPositions = await PositionsModel.find({});
//   res.json(allPositions);
// });

// app.post("/newOrder", async (req, res) => {
//   let newOrder = new OrdersModel({
//     name: req.body.name,
//     qty: req.body.qty,
//     price: req.body.price,
//     mode: req.body.mode,
//   });

//   newOrder.save();

//   res.send("Order saved!");
// });

// app.listen(PORT, () => {
//   console.log("App started!");
//   mongoose.connect(uri);
//   console.log("DB started!");
// });








// require("dotenv").config();

// const express = require("express");
// const mongoose = require("mongoose");
// const bodyParser = require("body-parser");
// const cors = require("cors");

// const { HoldingsModel } = require("./model/HoldingsModel");

// const  PositionsModel  = require("./model/PositionsModel");
// const { OrdersModel } = require("./model/OrdersModel");

// const PORT = process.env.PORT || 3002;
// const uri = process.env.MONGO_URL;

// const app = express();

// app.use(cors());
// app.use(bodyParser.json());

// app.get("/addHoldings", async (req, res) => {
//   let tempHoldings = [
//     {
//       name: "BHARTIARTL",
//       qty: 2,
//       avg: 538.05,
//       price: 541.15,
//       net: "+0.58%",
//       day: "+2.99%",
//     },
//     {
//       name: "HDFCBANK",
//       qty: 2,
//       avg: 1383.4,
//       price: 1522.35,
//       net: "+10.04%",
//       day: "+0.11%",
//     },
//     {
//       name: "HINDUNILVR",
//       qty: 1,
//       avg: 2335.85,
//       price: 2417.4,
//       net: "+3.49%",
//       day: "+0.21%",
//     },
//     {
//       name: "INFY",
//       qty: 1,
//       avg: 1350.5,
//       price: 1555.45,
//       net: "+15.18%",
//       day: "-1.60%",
//       isLoss: true,
//     },
//     {
//       name: "ITC",
//       qty: 5,
//       avg: 202.0,
//       price: 207.9,
//       net: "+2.92%",
//       day: "+0.80%",
//     },
//     {
//       name: "KPITTECH",
//       qty: 5,
//       avg: 250.3,
//       price: 266.45,
//       net: "+6.45%",
//       day: "+3.54%",
//     },
//     {
//       name: "M&M",
//       qty: 2,
//       avg: 809.9,
//       price: 779.8,
//       net: "-3.72%",
//       day: "-0.01%",
//       isLoss: true,
//     },
//     {
//       name: "RELIANCE",
//       qty: 1,
//       avg: 2193.7,
//       price: 2112.4,
//       net: "-3.71%",
//       day: "+1.44%",
//     },
//     {
//       name: "SBIN",
//       qty: 4,
//       avg: 324.35,
//       price: 430.2,
//       net: "+32.63%",
//       day: "-0.34%",
//       isLoss: true,
//     },
//     {
//       name: "SGBMAY29",
//       qty: 2,
//       avg: 4727.0,
//       price: 4719.0,
//       net: "-0.17%",
//       day: "+0.15%",
//     },
//     {
//       name: "TATAPOWER",
//       qty: 5,
//       avg: 104.2,
//       price: 124.15,
//       net: "+19.15%",
//       day: "-0.24%",
//       isLoss: true,
//     },
//     {
//       name: "TCS",
//       qty: 1,
//       avg: 3041.7,
//       price: 3194.8,
//       net: "+5.03%",
//       day: "-0.25%",
//       isLoss: true,
//     },
//     {
//       name: "WIPRO",
//       qty: 4,
//       avg: 489.3,
//       price: 577.75,
//       net: "+18.08%",
//       day: "+0.32%",
//     },
//   ];

//   tempHoldings.forEach((item) => {
//     let newHolding = new HoldingsModel({
//       name: item.name,
//       qty: item.qty,
//       avg: item.avg,
//       price: item.price,
//       net: item.day,
//       day: item.day,
//     });

//     newHolding.save();
//   });
//   res.send("Done!");
// });

// app.get("/addPositions", async (req, res) => {
//   let tempPositions = [
//     {
//       product: "CNC",
//       name: "EVEREADY",
//       qty: 2,
//       avg: 316.27,
//       price: 312.35,
//       net: "+0.58%",
//       day: "-1.24%",
//       isLoss: true,
//     },
//     {
//       product: "CNC",
//       name: "JUBLFOOD",
//       qty: 1,
//       avg: 3124.75,
//       price: 3082.65,
//       net: "+10.04%",
//       day: "-1.35%",
//       isLoss: true,
//     },
//   ];

//   tempPositions.forEach((item) => {
//     let newPosition = new PositionsModel({
//       product: item.product,
//       name: item.name,
//       qty: item.qty,
//       avg: item.avg,
//       price: item.price,
//       net: item.net,
//       day: item.day,
//       isLoss: item.isLoss,
//     });

//     newPosition.save();
//   });
//   res.send("Done!");
// });

// app.get("/allHoldings", async (req, res) => {
//   let allHoldings = await HoldingsModel.find({});
//   res.json(allHoldings);
// });

// app.get("/allPositions", async (req, res) => {
//   let allPositions = await PositionsModel.find({});
//   res.json(allPositions);
// });

// app.post("/newOrder", async (req, res) => {
//   let newOrder = new OrdersModel({
//     name: req.body.name,
//     qty: req.body.qty,
//     price: req.body.price,
//     mode: req.body.mode,
//   });

//   newOrder.save();

//   res.send("Order saved!");
// });

// app.listen(PORT, () => {
//   console.log("App started!");
//   mongoose.connect(uri);
//   console.log("DB started!");
// });


// require("dotenv").config();

// const express = require("express");
// const mongoose = require("mongoose");
// const bodyParser = require("body-parser");
// const cors = require("cors");
// const passport = require("passport");
// const passportLocalMongoose = require("passport-local-mongoose");
// const session = require("express-session");
// const MongoStore = require("connect-mongo");

// const { HoldingsModel } = require("./model/HoldingsModel");
// const { PositionsModel } = require("./model/PositionsModel");
// const { OrdersModel } = require("./model/OrdersModel");

// const PORT = process.env.PORT || 3002;
// const uri = process.env.MONGO_URL;

// const app = express();

// // ─── CORS ────────────────────────────────────────────────────────────────────
// // Must come BEFORE all other middleware
// const allowedOrigins = [
//   "https://zerodha-clonenk-jaq2.vercel.app",
//   "https://zerodha-clonenk.vercel.app",
//   "http://localhost:3000",
//   "http://localhost:5173",
// ];

// app.use(
//   cors({
//     origin: (origin, callback) => {
//       // Allow requests with no origin (e.g. Postman, curl)
//       if (!origin || allowedOrigins.includes(origin)) {
//         callback(null, true);
//       } else {
//         callback(new Error("CORS not allowed for: " + origin));
//       }
//     },
//     credentials: true, // Required for cookies/sessions cross-origin
//     methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
//     allowedHeaders: ["Content-Type", "Authorization"],
//   })
// );

// // Handle OPTIONS preflight for all routes
// app.options("*", cors());

// // ─── BODY PARSING ────────────────────────────────────────────────────────────
// app.use(bodyParser.json());
// app.use(express.urlencoded({ extended: true }));

// // ─── SESSION ─────────────────────────────────────────────────────────────────
// // connect-mongo keeps sessions alive across serverless restarts (Vercel/Render)
// app.use(
//   session({
//     secret: process.env.SESSION_SECRET || "zerodha_secret_key_123",
//     resave: false,
//     saveUninitialized: false,
//     store: MongoStore.create({
//       mongoUrl: uri,
//       ttl: 14 * 24 * 60 * 60, // 14 days
//       autoRemove: "native",
//     }),
//     cookie: {
//       // secure:true requires HTTPS — set to true in production
//       secure: process.env.NODE_ENV === "production",
//       // sameSite "none" is required for cross-origin cookies (Vercel ↔ Render)
//       sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
//       httpOnly: true,
//       maxAge: 14 * 24 * 60 * 60 * 1000, // 14 days in ms
//     },
//   })
// );

// // ─── PASSPORT ────────────────────────────────────────────────────────────────
// app.use(passport.initialize());
// app.use(passport.session());

// // ─── USER SCHEMA ─────────────────────────────────────────────────────────────
// const userSchema = new mongoose.Schema({
//   username: { type: String, required: true, unique: true },
//   name: { type: String },
// });
// userSchema.plugin(passportLocalMongoose);
// const User = mongoose.model("User", userSchema);

// passport.use(User.createStrategy());
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

// // ─── AUTH MIDDLEWARE ──────────────────────────────────────────────────────────
// function isLoggedIn(req, res, next) {
//   if (req.isAuthenticated()) return next();
//   return res.status(401).json({ message: "Not logged in" });
// }

// // ─── ROUTES ───────────────────────────────────────────────────────────────────

// // Health check
// app.get("/", (req, res) => {
//   res.json({ status: "Zerodha Backend is running!" });
// });

// // Signup
// app.post("/signup", async (req, res) => {
//   try {
//     const { username, password, name } = req.body;

//     if (!username || !password) {
//       return res.status(400).json({ message: "Username and password are required." });
//     }

//     const existingUser = await User.findOne({ username });
//     if (existingUser) {
//       return res.status(400).json({ message: "User already exists!" });
//     }

//     const newUser = new User({ username, name });
//     await User.register(newUser, password);
//     res.status(201).json({ message: "Signup successful!" });
//   } catch (err) {
//     console.error("Signup error:", err);
//     res.status(500).json({ message: err.message });
//   }
// });

// // Login
// app.post("/login", (req, res, next) => {
//   passport.authenticate("local", (err, user, info) => {
//     if (err) return res.status(500).json({ message: err.message });
//     if (!user) {
//       return res.status(401).json({ message: info?.message || "Invalid username or password" });
//     }
//     req.logIn(user, (err) => {
//       if (err) return res.status(500).json({ message: err.message });
//       res.json({
//         message: "Login successful!",
//         user: { username: user.username, name: user.name },
//       });
//     });
//   })(req, res, next);
// });

// // Logout
// app.post("/logout", (req, res, next) => {
//   req.logout((err) => {
//     if (err) return next(err);
//     req.session.destroy(() => {
//       res.clearCookie("connect.sid");
//       res.json({ message: "Logged out!" });
//     });
//   });
// });

// // Get current user (used by frontend to check auth state)
// app.get("/user", (req, res) => {
//   if (req.isAuthenticated()) {
//     res.json({ user: { username: req.user.username, name: req.user.name } });
//   } else {
//     res.status(401).json({ message: "Not logged in" });
//   }
// });

// // ─── HOLDINGS ────────────────────────────────────────────────────────────────

// // Seed holdings (one-time use)
// app.get("/addHoldings", async (req, res) => {
//   try {
//     const tempHoldings = [
//       { name: "BHARTIARTL", qty: 2,  avg: 538.05,  price: 541.15,  net: "+0.58%",  day: "+2.99%" },
//       { name: "HDFCBANK",   qty: 2,  avg: 1383.4,  price: 1522.35, net: "+10.04%", day: "+0.11%" },
//       { name: "HINDUNILVR", qty: 1,  avg: 2335.85, price: 2417.4,  net: "+3.49%",  day: "+0.21%" },
//       { name: "INFY",       qty: 1,  avg: 1350.5,  price: 1555.45, net: "+15.18%", day: "-1.60%", isLoss: true },
//       { name: "ITC",        qty: 5,  avg: 202.0,   price: 207.9,   net: "+2.92%",  day: "+0.80%" },
//       { name: "KPITTECH",   qty: 5,  avg: 250.3,   price: 266.45,  net: "+6.45%",  day: "+3.54%" },
//       { name: "M&M",        qty: 2,  avg: 809.9,   price: 779.8,   net: "-3.72%",  day: "-0.01%", isLoss: true },
//       { name: "RELIANCE",   qty: 1,  avg: 2193.7,  price: 2112.4,  net: "-3.71%",  day: "+1.44%" },
//       { name: "SBIN",       qty: 4,  avg: 324.35,  price: 430.2,   net: "+32.63%", day: "-0.34%", isLoss: true },
//       { name: "SGBMAY29",   qty: 2,  avg: 4727.0,  price: 4719.0,  net: "-0.17%",  day: "+0.15%" },
//       { name: "TATAPOWER",  qty: 5,  avg: 104.2,   price: 124.15,  net: "+19.15%", day: "-0.24%", isLoss: true },
//       { name: "TCS",        qty: 1,  avg: 3041.7,  price: 3194.8,  net: "+5.03%",  day: "-0.25%", isLoss: true },
//       { name: "WIPRO",      qty: 4,  avg: 489.3,   price: 577.75,  net: "+18.08%", day: "+0.32%" },
//     ];

//     const docs = tempHoldings.map(
//       (item) =>
//         new HoldingsModel({
//           name: item.name,
//           qty: item.qty,
//           avg: item.avg,
//           price: item.price,
//           net: item.net,
//           day: item.day,
//         })
//     );
//     await HoldingsModel.insertMany(docs);
//     res.json({ message: "Holdings seeded!" });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// // Seed positions (one-time use)
// app.get("/addPositions", async (req, res) => {
//   try {
//     const tempPositions = [
//       { product: "CNC", name: "EVEREADY", qty: 2, avg: 316.27, price: 312.35, net: "+0.58%",  day: "-1.24%", isLoss: true },
//       { product: "CNC", name: "JUBLFOOD", qty: 1, avg: 3124.75, price: 3082.65, net: "+10.04%", day: "-1.35%", isLoss: true },
//     ];

//     const docs = tempPositions.map(
//       (item) =>
//         new PositionsModel({
//           product: item.product,
//           name: item.name,
//           qty: item.qty,
//           avg: item.avg,
//           price: item.price,
//           net: item.net,
//           day: item.day,
//           isLoss: item.isLoss,
//         })
//     );
//     await PositionsModel.insertMany(docs);
//     res.json({ message: "Positions seeded!" });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// // Get all holdings (protected)
// app.get("/allHoldings", isLoggedIn, async (req, res) => {
//   try {
//     const allHoldings = await HoldingsModel.find({});
//     res.json(allHoldings);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// // Get all positions (protected)
// app.get("/allPositions", isLoggedIn, async (req, res) => {
//   try {
//     const allPositions = await PositionsModel.find({});
//     res.json(allPositions);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// // Place new order (protected)
// app.post("/newOrder", isLoggedIn, async (req, res) => {
//   try {
//     const { name, qty, price, mode } = req.body;
//     if (!name || !qty || !price || !mode) {
//       return res.status(400).json({ message: "All fields (name, qty, price, mode) are required." });
//     }

//     const newOrder = new OrdersModel({ name, qty, price, mode });
//     await newOrder.save(); // ← was missing await in original
//     res.json({ message: "Order saved!" });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// // ─── GLOBAL ERROR HANDLER ────────────────────────────────────────────────────
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).json({ message: "Internal server error" });
// });

// // ─── START ───────────────────────────────────────────────────────────────────
// mongoose
//   .connect(uri)
//   .then(() => {
//     console.log("DB connected!");
//     app.listen(PORT, () => {
//       console.log(`App started on port ${PORT}`);
//     });
//   })
//   .catch((err) => {
//     console.error("DB connection error:", err);
//     process.exit(1);
//   });

// module.exports = app; // Required for Vercel serverless export