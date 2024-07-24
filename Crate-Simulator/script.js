src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.21.1/axios.min.js">
document.getElementById('summon-one').addEventListener('click', function() {
    pullGacha(1);
});

document.getElementById('summon-ten').addEventListener('click', function() {
    pullGacha(10);
});

function getRandomItem() {
    const randomNum = Math.random();
    let cumulativeProbability = 0;

    for (let i = 0; i < items.length; i++) {
        cumulativeProbability += items[i].probability;
        if (randomNum < cumulativeProbability) {
            return items[i];
        }
    }
}

function pullGacha(times) {
    let results = '';
    for (let i = 0; i < times; i++) {
        const result = getRandomItem();
        results += `<div style="color: ${result.color};">${result.name}</div>`;
    }
    document.getElementById('result').innerHTML = `You got: ${results}`;
}
document.getElementById('toggleButton').addEventListener('click', function() {
    var img = document.getElementById('gachaImage');
    if (img.classList.contains('hidden')) {
        img.classList.remove('hidden');
    } else {
        img.classList.add('hidden');
    }
});
