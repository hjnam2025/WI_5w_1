let bColors = ['#fff', '#0000FF']
function changeColor() {
		const randomIndex = Math.floor(Math.random() * bColors.length);

		document.body.style.backgroundColor = bColors[randomIndex];
	}
	setInterval(changeColor, 2000);
	changeColor();
////

 const bBox = document.querySelector('#b-box');
        
        const boxColorsRgba = [
            'rgba(255, 255, 255, 0.7)', 'rgba(0, 0, 255, 0.7)'
        ];

        function changeBoxColor() {
            const randomIndex = Math.floor(Math.random() * boxColorsRgba.length);
            bBox.style.backgroundColor = boxColorsRgba[randomIndex];
        }
        
        setInterval(changeBoxColor, 2000);
        changeBoxColor();
////

let lyricsN = `SUNDOWN DAZZLING DAY GOLD THROUGH MY EYES BUT MY EYES TURNED WITHIN ONLY SEE STARLESS AND BIBLE BLACK OLD FRIEND CHARITY CRUEL TWISTED SMILE AND THE SMILE SIGNALS EMPTINESS FOR ME STARLESS AND BIBLE BLACK ICE BLUE SILVER SKY FADES INTO GREY TO A GREY HOPE THAT OH YEARNS TO BE STARLESS AND BIBLE BLACK`;
let names4 = lyricsN.split(" ");

const container = document.querySelector('#background-container');
const styleClasses = ['style-a', 'style-b','style-c'];

for (let i = 0; i < 1000; i++) {
    const tile = document.createElement('div'); 
    tile.classList.add('lyric-tile'); 

    container.appendChild(tile); }

const allTiles = document.querySelectorAll('.lyric-tile');

let z = 0;
setInterval(changeTilesRandomly, 60);

function changeTilesRandomly() {
    
    allTiles.forEach(tile => {
        
        if (Math.random() < 0.1) { 
            const randomIndex = Math.floor(Math.random() * names4.length);
            tile.innerHTML = names4[randomIndex];
        }
        if (Math.random() < 0.01) {
            tile.classList.remove(...styleClasses);
            const randomStyle = styleClasses[Math.floor(Math.random() * styleClasses.length)];
            tile.classList.add(randomStyle);
        }
    });
}

// --- 1 ---
const animations = [
    {
        name: 'EARTH',
        frames: ['./other/images/earth0.png', './other/images/earth1.png', './other/images/earth2.png', './other/images/earth3.png', './other/images/earth4.png', './other/images/earth5.png', './other/images/earth6.png', './other/images/earth7.png', './other/images/earth8.png', './other/images/earth9.png', './other/images/earth10.png', './other/images/earth11.png', './other/images/earth12.png', './other/images/earth13.png'],
        width: '600px',
        interval: 100

    },
    {
        name: 'FROG',
        frames: ['./other/images/frog01.png', './other/images/frog02.png', './other/images/frog03.png', './other/images/frog04.png', './other/images/frog05.png'],
        width: '400px',
        interval: 150

    },
    {
        name: 'MOON',
        frames: ['./other/images/moon01.png', './other/images/moon02.png', './other/images/moon03.png', './other/images/moon04.png', './other/images/moon05.png', './other/images/moon06.png', './other/images/moon07.png', './other/images/moon08.png'],
        width: '200px',
        interval: 140

    },
    {
        name: 'HUMAN',
        frames: ['./other/images/human01.png', './other/images/human02.png', './other/images/human03.png', './other/images/human04.png', './other/images/human05.png', './other/images/human06.png', './other/images/human07.png'],
        width: '300px',
        interval: 180

    },
    {
        name: 'CAKE',
        frames: ['./other/images/cake01.png', './other/images/cake02.png', './other/images/cake03.png', './other/images/cake04.png', './other/images/cake05.png', './other/images/cake06.png'],
        width: '400px',
        interval: 240

    },
    {
        name: 'BUTTERFLY',
        frames: ['./other/images/bfly01.png', './other/images/bfly02.png', './other/images/bfly03.png', './other/images/bfly04.png'],
        width: '420px',
        interval: 240

    },
    {
        name: 'CLOCK',
        frames: ['./other/images/clock01.png', './other/images/clock02.png', './other/images/clock03.png', './other/images/clock04.png', './other/images/clock05.png', './other/images/clock06.png'],
        width: '400px',
        interval: 150

    }

];
//]; <-이거빼면안됨!!

// --- 2. HTML 요소 및 상태 변수 ---
const imageElement = document.querySelector('#slider-image');
const nameElement = document.querySelector('#name');

let currentAnimationIndex = 0; 
let currentIntervalId = null;  


function startAnimation(index) {
    
    if (currentIntervalId) {
        clearInterval(currentIntervalId);
    }

    const animation = animations[index]; 
    let currentFrameIndex = 0; 

    // 이름 표시 업데이트
    nameElement.textContent = animation.name;

    imageElement.style.width = animation.width;

    currentIntervalId = setInterval(() => {
        
        imageElement.src = animation.frames[currentFrameIndex];

        currentFrameIndex = (currentFrameIndex + 1) % animation.frames.length;
    }, animation.interval);
}

imageElement.addEventListener('click', () => {
   
    imageElement.style.opacity = 0;

    setTimeout(() => {
        
        currentAnimationIndex = (currentAnimationIndex + 1) % animations.length;
        
        startAnimation(currentAnimationIndex);
  
        imageElement.style.opacity = 1;

    }, 300); 
});
startAnimation(currentAnimationIndex);



// --- 1. 기본 값 및 상태 변수 설정 ---
const tileSize = document.querySelectorAll('.lyric-tile');
const sizeUpBtn = document.querySelector('#size-up-btn');
const sizeDownBtn = document.querySelector('#size-down-btn');
const resetSizeBtn = document.querySelector('#reset-size-btn');

const BASE_WIDTH = 100;
const BASE_HEIGHT = 100;
const BASE_FONT_SIZE = 0.6; 
const STEP = 20;
const FONT_STEP = 0.1;

let sizeStep = 0; 

// --- 2. 모든 타일에 현재 크기를 적용
function applyTileSize() {
    
    const newWidth = BASE_WIDTH + (sizeStep * STEP);
    const newHeight = BASE_HEIGHT + (sizeStep * STEP);
    const newFontSize = BASE_FONT_SIZE + (sizeStep * FONT_STEP);


    tileSize.forEach(tile => {
        tile.style.width = Math.max(0, newWidth) + 'px';
        tile.style.height = Math.max(0, newHeight) + 'px';
        tile.style.fontSize = Math.max(0, newFontSize) + 'rem';
    });
}

// --- 3. 버튼 이벤트 리스너 재설정 ---
sizeUpBtn.addEventListener('click', () => {
    sizeStep++; 
    applyTileSize(); 
});

sizeDownBtn.addEventListener('click', () => {
    sizeStep--;
    applyTileSize(); 
});

resetSizeBtn.addEventListener('click', () => {
    sizeStep = 0; 
    applyTileSize(); 
});