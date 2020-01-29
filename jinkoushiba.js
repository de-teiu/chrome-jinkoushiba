window.onload = () => {
    const colorCodes = ['#c6e48b', '#7bc96f', '#239a3b', '#196127'];
    document.querySelectorAll('.day').forEach(element => {
        element.setAttribute('fill', colorCodes[Math.floor(Math.random() * colorCodes.length)]);
    });
    document.querySelectorAll('.f4.text-normal.mb-2').forEach(element => {
        if (element.textContent.match(/contributions/)){
            element.textContent = 'So many contributions in the last year!!!!!!!!!!!';
        }
    });
};