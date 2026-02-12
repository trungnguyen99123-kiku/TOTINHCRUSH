// 1. Cấu hình tên file nhạc (Hãy chắc chắn file này có trong thư mục)
const NHAC_CHILL = "nhac-chill.mp3.mp3"; 

const btnNo = document.getElementById('btnNo');
const btnYes = document.getElementById('btnYes');
const music = document.getElementById('bgMusic');

music.src = NHAC_CHILL;
music.load();

// 2. Hiệu ứng nút KHÔNG "chạy trốn"
btnNo.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - btnNo.offsetWidth);
    const y = Math.random() * (window.innerHeight - btnNo.offsetHeight);
    
    btnNo.style.position = 'absolute';
    btnNo.style.left = `${x}px`;
    btnNo.style.top = `${y}px`;
});

// 3. Xử lý khi nhấn nút CÓ
btnYes.addEventListener('click', () => {
    // Phát nhạc chill
    music.play().catch(e => {
        console.log("Cần click lại để phát nhạc");
        music.play();
    });
    
    // Hiện thông báo đúng yêu cầu
    alert('Tớ biết ngay mà! 🥰');

    // Thay đổi giao diện
    document.querySelector('.question').innerText = "Tớ cũng yêu cậu! ❤️";
    document.body.style.backgroundColor = "#ff8fab";
    
    // Tạo hiệu ứng trái tim rơi liên tục
    setInterval(createHeart, 300);
});

// Hàm tạo hiệu ứng trái tim
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 2 + 3 + 's';
    heart.style.opacity = Math.random();
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}