// JavaScript สำหรับการสร้างเกม Plinko
// คุณสามารถปรับแต่งและเพิ่มฟีเจอร์ต่าง ๆ ตามต้องการได้

// ค่าคงที่
const BOARD_WIDTH = 400; // ความกว้างของกระดาน
const BOARD_HEIGHT = 600; // ความสูงของกระดาน
const NUM_PEGS = 10; // จำนวนของพุ่ม
const PEG_RADIUS = 10; // รัศมีของพุ่ม
const BALL_RADIUS = 10; // รัศมีของลูกบอล

// สร้างกระดาน Plinko
const canvas = document.getElementById('board');
const ctx = canvas.getContext('2d');

// สร้างพุ่ม
const pegs = [];
for (let i = 0; i < NUM_PEGS; i++) {
    pegs.push({ x: i * (BOARD_WIDTH / (NUM_PEGS - 1)), y: BOARD_HEIGHT / 3 });
}

// ฟังก์ชันสำหรับวาดกระดานและพุ่ม
function drawBoard() {
    // วาดพุ่ม
    for (let peg of pegs) {
        ctx.beginPath();
        ctx.arc(peg.x, peg.y, PEG_RADIUS, 0, Math.PI * 2);
        ctx.fillStyle = '#f00';
        ctx.fill();
        ctx.closePath();
    }

    // วาดกระดาน
    ctx.beginPath();
    ctx.rect(0, 0, BOARD_WIDTH, BOARD_HEIGHT);
    ctx.strokeStyle = '#000';
    ctx.stroke();
    ctx.closePath();
}

// เรียกใช้ฟังก์ชันสำหรับวาดกระดานและพุ่ม
drawBoard();
