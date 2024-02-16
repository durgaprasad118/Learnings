let mongoose;

const conect = async () => {
  try {
    await mongoose.conect("url", {
      useNewUrlPraser: true,
      useUnifiedTopology: true,
    });
    console.log("conected to db succesfully");
  } catch (error) {
    console.log("Db Connection failed with the eerror" + error);
  }
};
function connnection() {
  mongoose
    .conect("url", {
      useNewUrlPraser: true,
      useUnifiedTopology: true,
    })
    .then((resp) => resp.json())
    .then((data) => console.log(data));
}
