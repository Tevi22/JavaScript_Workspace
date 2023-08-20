let isSmallScreen = false;

function updateBestTimeContent() {
    const screenWidth = window.innerWidth;
    let date1 = document.getElementById('date1');
    let date2 = document.getElementById('date2');
    let date3 = document.getElementById('date3');
    let date4 = document.getElementById('date4');
    let date5 = document.getElementById('date5');
    let date6 = document.getElementById('date6');
    let date7 = document.getElementById('date7');
    let date8 = document.getElementById('date8');
    let date9 = document.getElementById('date9');
    let date10 = document.getElementById('date10');
    let date11 = document.getElementById('date11');
    let date12 = document.getElementById('date12');
    

    if (screenWidth < 650 && !isSmallScreen) {
        // When screen size is small 
        date1.innerHTML = 'Mar-Jun &check;'
        date2.innerHTML = 'Jul-Oct'
        date3.innerHTML = 'Nov-Feb &check;'
        date4.innerHTML = 'Mar-Jun'
        date5.innerHTML = 'Jul-Oct &check;'
        date6.innerHTML = 'Nov-Feb &check;'
        date7.innerHTML = 'Mar-Jun'
        date8.innerHTML = 'Jul-Oct'
        date9.innerHTML = 'Nov-Feb &check;'
        date10.innerHTML = 'Mar-Jun &check;'
        date11.innerHTML = 'Jul-Oct'
        date12.innerHTML = 'Nov-Feb &check;'
        isSmallScreen = true;

    } else if(screenWidth > 650 && isSmallScreen) {
        //When screen size is normal
        date1.innerHTML = '&check;'
        date2.innerHTML = ''
        date3.innerHTML = '&check;'
        date4.innerHTML = ''
        date5.innerHTML = '&check;'
        date6.innerHTML = '&check;'
        date7.innerHTML = ''
        date8.innerHTML = ''
        date9.innerHTML = '&check;'
        date10.innerHTML = '&check;'
        date11.innerHTML = ''
        date12.innerHTML = '&check;'
        isSmallScreen = false
    }
}

// Initial call on page load
updateBestTimeContent();

// Call the function whenever the window is resized
window.addEventListener('resize', updateBestTimeContent);