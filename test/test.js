function handleUpload(event) {
  let formData = new FormData();

  formData.append('test', event.target.files[0]);

  let loginUrl = 'http://localhost:10010/api/import/course';
  let fetchOption = {
    method: 'POST',
    headers: {
      Accept: 'application/json'
    },
    body: formData
  };

  fetch(loginUrl, fetchOption).then((promise) => promise.json()).then((data) => {
    console.log(data);
  });
}

function handleCheck() {
  let loginUrl = 'http://localhost:10010/api/login';
  let fetchOption = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: `userID=123456&password=111111`
  };

  fetch(loginUrl, fetchOption).then((promise) => promise.json()).then((data) => {
    console.log(data);
  });
}
