// controllers/keywordController.js
const URL = require("../models/myschema");

async function handleKeywordSearch(keyword) {
  try {
    const existingKeyword = await URL.findOne({ keyWord: keyword });

    if (existingKeyword) {
      // If the keyword already exists, increment the wordVolume
      existingKeyword.wordVolume += 1;
      await existingKeyword.save();
    } else {
      // If the keyword is new, create a new record
      await myschema.create({ keyWord: keyword, wordVolume: 1 });
      console.log(keyword);
      return {sucess: true, message: "keyWord created successfully"};
    }

    return { success: true, message: "Keyword updated successfully" };
  } catch (error) {
    console.error("Error handling keyword search:", error);
    return { success: false, message: "Internal Server Error" };
  }
}
async function getAllData() {
  try{
    const allKeywordData = await URL.find();
    const keyWordList = allKeywordData.map(keyword => keyword.keyWord);
    return res.json(keyWordList);
  }
  catch (error){
    res.status(500).json({ err: "unable to retrive data from Db"});
  }
}

module.exports = { handleKeywordSearch, getAllData };
