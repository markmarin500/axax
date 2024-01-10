import axios from 'axios';



const backendURL = 'https://www.battlegoat.com/';

function pingBackend() {
  axios.get(backendURL)
    .then(response => {
      console.log('Ping gönderildi, backend aktif!');
    })
    .catch(error => {
      console.error('Ping gönderme hatası:', error);
    });
}


const pingInterval = setInterval(pingBackend, 1000);
const pingInterval2 = setInterval(pingBackend, 1000);
const pingInterval3 = setInterval(pingBackend, 1000);
//const pingInterval4= setInterval(pingBackend, 1);







pingBackend()



