const mongoose = require("mongoose");

module.exports = () => {
  const connectionParams = {
    useNewUrlParse: true,
    useUnifiedTopology: true,
  };
  try {
    mongoose.connect(
      "mongodb+srv://yassineeluharani:apiOqQuB5TRvIbtU@userscluster.icbq2oa.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("Connected successfully");
  } catch (error) {
    console.error(error);
    console.log("Failed");
  }
};
