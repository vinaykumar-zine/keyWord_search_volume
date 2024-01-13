// routes/keywordRoutes.js
const express = require("express");
const keywordController = require("../controllers/keywordController");

const router = express.Router();

router.post("/search", async (req, res) => {
//   const body = req.body;
  const keyWord = JSON.stringify(req.body);

  if (!keyWord) {
    return res
      .status(400)
      .json({ success: false, message: "Keyword is required" });
  }

  const result = await keywordController.handleKeywordSearch(keyWord);
  console.log(result);
  return res.json(result);
});

router.get("/getAllInfo", async (req, res) => {
    const result = await keywordController.getAllData();
    if(result){
      return result;
    }
    else{
      return res.json({err: "Unable to fr=etch data from DB"});
    }
})

module.exports = router;
