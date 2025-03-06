document.addEventListener('DOMContentLoaded', () => {
    const developerData = [{
        name: 'Mr. Raj Bansali',
        role: 'Cardiac Surgeon',
        photo: '../assets/alexander-hipp-iEEBWgY_6lA-unsplash.jpg',
        education: 'MBBS, MD - Medicine DM - CardioLogy',
        expt: '54'
    },
    {
        name: 'Mr. Ram Deshmukh',
        role: 'Cardiologist',
        photo: '../assets/alexander-hipp-iEEBWgY_6lA-unsplash.jpg',
        education: 'MBBS - Medicine DM - CardioLogy',
        expt: '21'
    },
    {
        name: 'Ms. Rakhi Rawal',
        role: 'Heart Specialists',
        photo: '../assets/alexander-hipp-iEEBWgY_6lA-unsplash.jpg',
        education: 'MBBS - CardioLogy',
        expt: '5'
    },
    {
        name: 'Mr. Alex Martin',
        role: 'Cardiologist',
        photo: '../assets/alexander-hipp-iEEBWgY_6lA-unsplash.jpg',
        education: 'MBBS, MD - Medicine DM - CardioLogy',
        expt: '23'
    },
    {
        name: 'Mrs. Rama Potdar',
        role: 'Heart Surgeon',
        photo: '../assets/alexander-hipp-iEEBWgY_6lA-unsplash.jpg',
        education: 'MBBS - Medicine DM - CardioLogy',
        expt: '12'
    },
    {
        name: 'Mr. Ramdev Bhatia',
        role: 'Cardiologist',
        photo: '../assets/alexander-hipp-iEEBWgY_6lA-unsplash.jpg',
        education: 'MBBS, MD - Medicine DM - CardioLogy',
        expt: '14'
    }]
    const devList = document.querySelector('#dev-list');
    let devs = '';
    developerData.forEach((item) => {
        devs += `<div class="w-full shadow-[0px_0px_11px_-3px_grey] rounded-lg p-4 flex gap-4">
        <div class="shrink-0">
            <img src="${item.photo}" class="w-14 h-14 rounded-full" />
        </div>
        <div class="w-full flex flex-col">
            <div class="font-bold flex justify-between">
            <span>${item.name}</span>
            <svg class="w-6 h-6 hover:text-rose-700 cursor-pointer" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ShareIcon"><path fill="currentColor" d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92"></path></svg>
            </div>
            <div class="font-bold !text-green-500">${item.expt} years of experience</div>
            <div>
            ${item.role} | ${item.education}
            </div>
            <div class="flex gap-4 justify-end mt-auto">
            <svg class="w-6 h-6 hover:text-rose-700 cursor-pointer" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CallIcon"><path fill="currentColor" d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99"></path></svg>
            <svg class="w-6 h-6 hover:text-rose-700 cursor-pointer" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="MessageIcon"><path fill="currentColor" d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-2 12H6v-2h12zm0-3H6V9h12zm0-3H6V6h12z"></path></svg>
            </div>
        </div>
        </div>`
    })
    console.log(98798, devs);
    devList.innerHTML = devs;
})