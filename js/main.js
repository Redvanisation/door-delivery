const div = document.getElementById("chat-bot");

var AssistantV1 = fetch('watson-developer-cloud/assistant/v1');

console.log(AssistantV1)

var assistant = new AssistantV1({
	version: '{2018-09-20}',
	iam_apikey: '{cfe89b8c-ffca-4e51-b69e-a306492d17dc}',
	url: '{https://gateway.watsonplatform.net/assistant/api/v1/workspaces/cfe89b8c-ffca-4e51-b69e-a306492d17dc/message/}'
});

fetch(assistant).then(res => res.json()).then(res => console.log(res)).catch(err => console.log(err));


