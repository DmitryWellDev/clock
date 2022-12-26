function setCurrentTime() {
    const timeContainer = document.querySelector('.container');
    const image = document.querySelector('.image');

    setInterval(() => {

        const fullTime = document.createElement('div');

        const hours = new Date().getHours() < 10 ? `0${new Date().getHours()}` : new Date().getHours();
        const minutes = new Date().getMinutes() < 10 ? `0${new Date().getMinutes()}` : new Date().getMinutes();
        const seconds = new Date().getSeconds() < 10 ? `0${new Date().getSeconds()}` : new Date().getSeconds();

        const lastSecondValue = seconds.toString().slice(-1);

        fullTime.innerHTML =
            `<div>${hours} : ${minutes} : ${seconds}</div>`
        timeContainer.innerHTML = ''
        timeContainer.appendChild(fullTime);
        image.setAttribute('src', `../assets/images/image${lastSecondValue}.jpeg`)
    }, 1000)
}

setCurrentTime()