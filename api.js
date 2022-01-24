var formdata = new FormData();
formdata.append("text", "Language translator translates text from one language to another");

var requestOptions = {
  method: 'POST',
  body: formdata,
  redirect: 'follow'
};

fetch("https://translator.contrateumdev.com.br/api/identify", requestOptions)
.then(response => response.text())
.then(result => console.log(result))
.catch(error => console.log('error', error));
