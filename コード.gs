function postSlack(text){
  var url = "URL";
  var options = {
    "method" : "POST",
    "headers": {"Content-type": "application/json"},
    "payload" : '{"text":"' + text + '"}'
  };
  UrlFetchApp.fetch(url, options);
}

function test(){
  postSlack("これはテストです");
}

function doPost(e) {
  var message = "こんにちは " + e.parameter.user_name + "さん";
  postSlack(message)
}