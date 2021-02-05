function fetchData() {
    fetch(`https://api.mcsrvstat.us/2/play.xeolux-mc.xyz`)
        .then(Response => Response.json())
    .then(data => {
        console.log(data);
        const html = data.players.online
        document.querySelector('#mc').insertAdjacentHTML("afterbegin", html);
    })
    .catch(error => {
        console.log(error);
    });
}


fetchData();