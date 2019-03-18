function postSlack(text){
  const url = "URL";
  var options = {
    "method" : "POST",
    "headers": {"Content-type": "application/json"},
    "payload" : '{"text":"' + text + '"}'
  };
  UrlFetchApp.fetch(url, options);
}

function doPost(e) {
  const message =  e.parameter.text ;
  const translatedMessage= translation(message);
  postSlack(translatedMessage);
}

function translation(text){
  //翻訳するさい”<@id(9桁)> ”を先頭につけるために先頭13文字をなくしている
  text=text.substr(13);
  const translatedText= LanguageApp.translate(text, "ja", "en");
  return translatedText;
}