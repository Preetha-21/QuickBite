import express from "express";
import { addFood, listFood ,removeFood} from "../controllers/foodController.js";
import multer from "multer";
import fs from "fs";
import path from "path";

const foodRouter = express.Router();

// Ensure uploads folder exists
const uploadFolder = path.join("uploads");
if (!fs.existsSync(uploadFolder)) {
  fs.mkdirSync(uploadFolder);
}

// Multer storage setup
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadFolder);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  }
});

const upload = multer({ storage: storage });

// Route

foodRouter.post("/add", upload.single("image"), addFood);
foodRouter.get("/list",listFood)
foodRouter.post("/remove",removeFood)


export default foodRouter;