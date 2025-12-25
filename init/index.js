console.log("INIT FILE RUNNING");


const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
  .then(() => {
    console.log("connected to DB");
  })

  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  await Listing.deleteMany({});
  // image fix
initData.data = initData.data.map((obj) => {
  console.log("IMAGE BEFORE:", obj.image);
  return {
    ...obj,
    image: obj.image.url,   // ⬅️ VERY IMPORTANT
    owner: new mongoose.Types.ObjectId("694bd93d8956d0a0471bee9b"),
  };
});

  await Listing.insertMany(initData.data);
  console.log("data was initialized");
};

initDB();