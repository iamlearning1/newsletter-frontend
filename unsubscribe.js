const unsubscribeUrl = 'http://localhost:3000/staging/unsubscribe';
const params = {};
const status = document.querySelector('#unsubscribe');

const urlParams = new URLSearchParams(window.location.search);

for (const [key, value] of urlParams) {
  params[key] = value;
}

if (params['data']) {
  window.onload = async function () {
    try {
      status.innerText = 'Loading...';
      await axios({
        method: 'GET',
        url: `${unsubscribeUrl}?data=${params['data']}`,
      });
      status.innerText = 'You are now unsubscribed';
    } catch (error) {
      status.innerText = error.response.data.message;
    }
  };
}
