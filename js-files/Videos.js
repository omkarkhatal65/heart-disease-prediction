document.addEventListener('DOMContentLoaded', () => {
    const videoData = [
        `<iframe class="w-full" width="560" height="200" src="https://www.youtube.com/embed/g131j2lb3xw?si=qrSoqBkYPzQgSFJT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
        `<iframe class="w-full" width="560" height="200" src="https://www.youtube.com/embed/J1DUQFL-VHw?si=R8vGIAYKOM1sJx2Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`, 
        `<iframe class="w-full" width="560" height="200" src="https://www.youtube.com/embed/xq01MiHIZLs?si=xlTZxQUC-sAOTvK3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
        `<iframe class="w-full" width="560" height="200" src="https://www.youtube.com/embed/kzpPrwFm5-c?si=etp3S3Zhd-Xi6FT-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
        `<iframe class="w-full" width="560" height="200" src="https://www.youtube.com/embed/_a9DTYJCKxc?si=9czTtIpug-Y52fk7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
        `<iframe class="w-full" width="560" height="200" src="https://www.youtube.com/embed/Cf6ux-mRP2k?si=8OTPGYVprsNX9cG-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
        `<iframe class="w-full" width="560" height="200" src="https://www.youtube.com/embed/ZC3wRx4vV7g?si=6d4ovSLb6C17Cq6P" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
        `<iframe class="w-full" width="560" height="200" src="https://www.youtube.com/embed/02SL-xxeiNw?si=3ZZgPCChwLXj4ARP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
    ]
    const profEmail = document.querySelector('#videos-list');
    console.log(3434, profEmail, localStorage.getItem('email'));
    let videos = '';
    videoData.forEach((item) => {
        videos += `${item}`
    })
    console.log(98798, videos);
    profEmail.innerHTML = videos;
  })