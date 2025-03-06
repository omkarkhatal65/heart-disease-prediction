document.addEventListener('DOMContentLoaded', () => {
    const developerData = [{
        name: 'Mr. Onkar Khatal ',
        role: 'Fullstack developer',
        photo: '../assets/alexander-hipp-iEEBWgY_6lA-unsplash.jpg'
    },
    {
        name: 'Mr. Athrava Shitole ',
        role: 'Fullstack developer',
        photo: '../assets/alexander-hipp-iEEBWgY_6lA-unsplash.jpg'
    },
    {
        name: 'Mr. Rohit Wayal',
        role: 'Fullstack developer',
        photo: '../assets/alexander-hipp-iEEBWgY_6lA-unsplash.jpg'
    },
    {
        name: 'Mr. Chetan Khomane ',
        role: 'Fullstack developer',
        photo: '../assets/alexander-hipp-iEEBWgY_6lA-unsplash.jpg'
    }]
    const devList = document.querySelector('#dev-list');
    let devs = '';
    developerData.forEach((item) => {
        devs += `<div class="w-full shadow-[0px_0px_11px_-3px_grey] rounded-lg p-4 flex gap-4">
        <div class="shrink-0">
            <img src="${item.photo}" class="w-14 h-14 rounded-full" />
        </div>
        <div>
        <div class="font-bold">
        ${item.name}
        </div>
        <div>
        ${item.role}
        </div>
        </div>
        </div>`
    })
    console.log(98798, devs);
    devList.innerHTML = devs;
})