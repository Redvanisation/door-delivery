"use strict";

// import AssistantV1 from 'https://www.watson-developer-cloud/assistant/v1';

// const div = document.getElementById("chat-bot");

// console.log(AssistantV1)

// var assistant = new AssistantV1({
// 	version: '{2018-09-20}',
// 	iam_apikey: '{cfe89b8c-ffca-4e51-b69e-a306492d17dc}',
// 	url: '{https://gateway.watsonplatform.net/assistant/api/v1/workspaces/cfe89b8c-ffca-4e51-b69e-a306492d17dc/message/}'
// });

fetch(assistant).then(function (res) {
  return res.json();
}).then(function (res) {
  return console.log(res);
}).catch(function (err) {
  return console.log(err);
});