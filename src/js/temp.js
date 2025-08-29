// ==================================================
// Custom Script
// ==================================================
function getId(id) {
  return document.getElementById(id);
}

function queryAll(allClass) {
  return document.querySelectorAll(allClass);
}

// ==================================================
// Index Page
// ==================================================

// --------------------------------------------------
// Global Functions
// --------------------------------------------------
const headerHeart = getId('header-heart');
// console.log(headerHeart);
const cardHearts = queryAll('.card-heart');
// console.log(cardHeart);
let headerHeartNum = getId('header-heart-num');
// console.log(headerHeartNum);
const callBtns = queryAll('.call-btn');
// console.log(callBtns);
const headerCoin = getId('header-coin');
// console.log(headerCoin);
let headerCoinNum = getId('header-coin-num');
// console.log(headerCoinNum);
const notPermittedCallModal = getId('not-permitted-call-modal');
// console.log(notPermittedCallModal);
const notPermittedCallCancelBtn = getId('not-permitted-call-cancel-btn');
// console.log(notPermittedCallCancelBtn);
const coinRechargeBtn = getId('coin-recharge-btn');
// console.log(coinRechargeBtn);
const permittedCallModal = getId('permitted-call-modal');
// console.log(permittedCallModal);
const permittedCallCancelBtn = getId('permitted-call-cancel-btn');
// console.log(permittedCallCancelBtn);
const callNowBtn = getId('call-now-btn');
// console.log(callNowBtn);
const callHistory = getId('call-history');
// console.log(callHistory);

// --------------------------------------------------
// Heart Icon Functions
// --------------------------------------------------
for (const heart of cardHearts) {
  //   console.log(card);
  heart.addEventListener('click', function (e) {
    // console.log('Heart Clicked');
    let headerHeartNumConverted = parseInt(headerHeartNum.innerText);
    //   console.log(headerHeartNumConverted);
    headerHeartNumConverted++;
    //   console.log(headerHeartNumConverted);
    headerHeartNum.innerText = headerHeartNumConverted;

    headerHeart.classList.add('transition-all', 'duration-100', '-rotate-15');
    setTimeout(() => {
      headerHeart.classList.remove('-rotate-15');
      headerHeart.classList.add('rotate-15');
      setTimeout(() => {
        headerHeart.classList.remove('rotate-15');
      }, 100);
    }, 100);
  });
}

// --------------------------------------------------
// Call Button Functions
// --------------------------------------------------

for (const btn of callBtns) {
  // console.log(btn);
  btn.addEventListener('click', function (e) {
    // console.log('Call Now Button Clicked');

    let headerCoinNumConverted = parseInt(headerCoinNum.innerText);
    // console.log(headerCoinNumConverted);

    // Not Permitted Call
    if (headerCoinNumConverted < 20) {
      // console.log('Not Enough Coin to Make this Call');
      notPermittedCallModal.classList.remove('hidden');
      notPermittedCallModal.classList.add('flex');

      notPermittedCallCancelBtn.addEventListener('click', function (e) {
        // console.log('Call Cancel Button Clicked');
        notPermittedCallModal.classList.remove('flex');
        notPermittedCallModal.classList.add('hidden');
      });

      const coinRechargeBtnDefaultHtml = coinRechargeBtn.innerHTML;
      // console.log(coinRechargeBtnDefaultText);

      coinRechargeBtn.addEventListener('click', function (e) {
        // console.log('Coin Recharge Button Clicked');
        coinRechargeBtn.innerHTML = 'গরিবের সার্ভিস নাই 😪';
        setTimeout(() => {
          coinRechargeBtn.innerHTML = coinRechargeBtnDefaultHtml;
        }, 1000);
      });

      // Permitted Call
    } else {
      // console.log("You're Calling");
      permittedCallModal.classList.remove('hidden');
      permittedCallModal.classList.add('flex');

      permittedCallCancelBtn.addEventListener('click', function (e) {
        // console.log('Call Cancel Button Clicked');
        permittedCallModal.classList.remove('flex');
        permittedCallModal.classList.add('hidden');
      });

      callNowBtn.addEventListener('click', function (e) {
        // console.log('Call Now Button Clicked');
        headerCoinNumConverted -= 20;
        // console.log(headerCoinNumConverted);
        headerCoinNum.innerText = headerCoinNumConverted;

        permittedCallModal.classList.remove('flex');
        permittedCallModal.classList.add('hidden');

        headerCoin.classList.add(
          'animate-spin',
          '[animation-timing-function:linear]',
          'duration-300'
        );
        setTimeout(() => {
          headerCoin.classList.remove(
            'animate-spin',
            '[animation-timing-function:linear]',
            'duration-300'
          );
        }, 600);
        
    const callHistoryCard = document.createElement('div');
    console.log(callHistoryCard);
        callHistoryCard.className = 'flex justify-between items-center gap-2.5 w-full mx-auto bg-[#f2f2f2] font-medium text-base sm:text-sm md:text-sm 2xl:text-base px-4 py-2 rounded-2xl';

        callHistoryCard.innerHTML = `<div>
        <h3>Service Name</h3>
        <p>Hotline: 999</p>
      </div>
      <div>
        <p>Date:</p>
        <p>Time:</p>
      </div>
    </div>`;

        callHistory.appendChild(callHistoryCard);
      });
    }
  });
}











// --------------------------------------------------------------------------------------------------------











// ==================================================
// Custom Script ✅
// ==================================================
function getId(id) {
  return document.getElementById(id);
}
function queryAll(allClass) {
  return document.querySelectorAll(allClass);
}

// ==================================================
// 👉 Index Page 👈
// ==================================================

// --------------------------------------------------
// Global Functions ✅
// --------------------------------------------------
const headerHeart = getId('header-heart');
// console.log(headerHeart);
const cardHearts = queryAll('.card-heart');
// console.log(cardHeart);
let headerHeartNum = getId('header-heart-num');
// console.log(headerHeartNum);
const callBtns = queryAll('.call-btn');
// console.log(callBtns);
const headerCoin = getId('header-coin');
// console.log(headerCoin);
let headerCoinNum = getId('header-coin-num');
// console.log(headerCoinNum);
const notPermittedCallModal = getId('not-permitted-call-modal');
// console.log(notPermittedCallModal);
const notPermittedCallCancelBtn = getId('not-permitted-call-cancel-btn');
// console.log(notPermittedCallCancelBtn);
const coinRechargeBtn = getId('coin-recharge-btn');
// console.log(coinRechargeBtn);
const permittedCallModal = getId('permitted-call-modal');
// console.log(permittedCallModal);
const permittedCallCancelBtn = getId('permitted-call-cancel-btn');
// console.log(permittedCallCancelBtn);
const callNowBtn = getId('call-now-btn');
// console.log(callNowBtn);
const callHistory = getId('call-history');
// console.log(callHistory);
const serviceNames = queryAll('.service-name');
// console.log(serviceNames);
const serviceNums = queryAll('.service-num');
// console.log(serviceNums);
const modalServiceNames = queryAll('.modal-service-name');
// console.log(modalServiceNames);
const modalServiceNums = queryAll('.modal-service-num');
// console.log(modalServiceNums);
const modalImages = queryAll('.modal-image');
// console.log(modalImages);
const userCoins = queryAll('.user-coins');
// console.log(userCoins);

// --------------------------------------------------
// Heart Icon Functions ✅
// --------------------------------------------------
for (const heart of cardHearts) {
  //   console.log(card);
  heart.addEventListener('click', function (e) {
    // console.log('Heart Clicked');
    let headerHeartNumConverted = parseInt(headerHeartNum.innerText);
    //   console.log(headerHeartNumConverted);
    headerHeartNumConverted++;
    //   console.log(headerHeartNumConverted);
    headerHeartNum.innerText = headerHeartNumConverted;

    headerHeart.classList.add('transition-all', 'duration-100', '-rotate-15');
    setTimeout(() => {
      headerHeart.classList.remove('-rotate-15');
      headerHeart.classList.add('rotate-15');
      setTimeout(() => {
        headerHeart.classList.remove('rotate-15');
      }, 100);
    }, 100);
  });
}

// --------------------------------------------------
// Call Button Functions
// --------------------------------------------------
let headerCoinNumConverted = parseInt(headerCoinNum.innerText);
// console.log(headerCoinNumConverted);

for (const btn of callBtns) {
  // console.log(btn);

  const modalServiceName = serviceName;
console.log(modalServiceName);

  btn.addEventListener('click', function (e) {
    // console.log('Call Now Button Clicked');
    

    const serviceImage = this.parentNode.parentNode.parentNode.children[0].children[0].children[0].src; // Finally Got it
    // console.log(serviceImage);

    const serviceName = this.parentNode.parentNode.children[0].children[1].innerText;
    // console.log(serviceName);

    const serviceNum = this.parentNode.parentNode.children[1].children[0].innerText;
    // console.log(serviceNum);

    const currentCoins = headerCoinNum.innerText;
    // console.log(userCoins);


    for (const modalImage of modalImages) {
      // console.log(modalImage);
      modalImage.src = serviceImage;
    }

    for (const modalServiceName of modalServiceNames) {
      // console.log(modalServiceName.innerText);
      modalServiceName.innerText = serviceName;
    }

    for (const modalServiceNum of modalServiceNums) {
      // console.log(modalServiceNum.innerText);
      modalServiceNum.innerText = serviceNum;
    }

    for (const userCoin of userCoins) {
      // console.log(userCoin);
      userCoin.innerText = currentCoins;
    }

    


    // Not Permitted Call
    if (headerCoinNumConverted < 20) {
      // console.log('Not Enough Coin to Make this Call');
      notPermittedCallModal.classList.remove('hidden');
      notPermittedCallModal.classList.add('flex');

      // Permitted Call
    } else {
      // console.log("You're Calling");
      permittedCallModal.classList.remove('hidden');
      permittedCallModal.classList.add('flex');
    }
  });
}

notPermittedCallCancelBtn.addEventListener('click', function (e) {
  // console.log('Call Cancel Button Clicked');
  notPermittedCallModal.classList.remove('flex');
  notPermittedCallModal.classList.add('hidden');
});

const coinRechargeBtnDefaultHtml = coinRechargeBtn.innerHTML;
// console.log(coinRechargeBtnDefaultText);
coinRechargeBtn.addEventListener('click', function (e) {
  // console.log('Coin Recharge Button Clicked');
  coinRechargeBtn.innerHTML = 'গরিবের সার্ভিস নাই 😪';
  setTimeout(() => {
    coinRechargeBtn.innerHTML = coinRechargeBtnDefaultHtml;
  }, 1000);
});

permittedCallCancelBtn.addEventListener('click', function (e) {
  // console.log('Call Cancel Button Clicked');
  permittedCallModal.classList.remove('flex');
  permittedCallModal.classList.add('hidden');
});



callNowBtn.addEventListener('click', function (e) {
  // console.log('Call Now Button Clicked');

  permittedCallModal.classList.remove('flex');
  permittedCallModal.classList.add('hidden');

  headerCoinNumConverted -= 20;
  // console.log(headerCoinNumConverted);
  headerCoinNum.innerText = headerCoinNumConverted;

  headerCoin.classList.add(
    'animate-spin',
    '[animation-timing-function:linear]',
    'duration-300'
  );
  setTimeout(() => {
    headerCoin.classList.remove(
      'animate-spin',
      '[animation-timing-function:linear]',
      'duration-300'
    );
  }, 600);

  //   const callHistoryCard = document.createElement('div');
  //   // console.log(callHistoryCard);

  //   callHistoryCard.className =
  //     'flex justify-between items-center gap-2.5 w-full h-[50px] mx-auto bg-[#f2f2f2] font-medium text-base sm:text-sm md:text-sm 2xl:text-base px-4 py-2 rounded-2xl';

  
  
  // // const serviceNum = this.parentNode.parentNode.children[1].children[0].innerText;

  //     callHistoryCard.innerHTML = `<div>
  //     <h3>${serviceName}</h3>
      
  // </div>
  // <div>
  // <p>${new Date().toLocaleDateString()}</p>
  // <p class='text-center'>${new Date().toLocaleTimeString()}</p>
  // </div>
  // </div>`;

  //   callHistory.appendChild(callHistoryCard);
});
















// ----------------------------------------------------------------------------------




































// ==================================================
// Custom Script ✅
// ==================================================
function getId(id) {
  return document.getElementById(id);
}
function queryAll(allClass) {
  return document.querySelectorAll(allClass);
}

// ==================================================
// 👉 Index Page 👈
// ==================================================

// --------------------------------------------------
// Global Functions ✅
// --------------------------------------------------
const headerHeart = getId('header-heart');
// console.log(headerHeart);
const cardHearts = queryAll('.card-heart');
// console.log(cardHeart);
let headerHeartNum = getId('header-heart-num');
// console.log(headerHeartNum);
const callBtns = queryAll('.call-btn');
// console.log(callBtns);
const headerCoin = getId('header-coin');
// console.log(headerCoin);
let headerCoinNum = getId('header-coin-num');
// console.log(headerCoinNum);
const notPermittedCallModal = getId('not-permitted-call-modal');
// console.log(notPermittedCallModal);
const notPermittedCallCancelBtn = getId('not-permitted-call-cancel-btn');
// console.log(notPermittedCallCancelBtn);
const coinRechargeBtn = getId('coin-recharge-btn');
// console.log(coinRechargeBtn);
const permittedCallModal = getId('permitted-call-modal');
// console.log(permittedCallModal);
const permittedCallCancelBtn = getId('permitted-call-cancel-btn');
// console.log(permittedCallCancelBtn);
const callNowBtn = getId('call-now-btn');
// console.log(callNowBtn);
const callHistory = getId('call-history');
// console.log(callHistory);
const serviceNames = queryAll('.service-name');
// console.log(serviceNames);
const serviceNums = queryAll('.service-num');
// console.log(serviceNums);
const modalServiceNames = queryAll('.modal-service-name');
// console.log(modalServiceNames);
const modalServiceNums = queryAll('.modal-service-num');
// console.log(modalServiceNums);
const modalImages = queryAll('.modal-image');
// console.log(modalImages);
const userCoins = queryAll('.user-coins');
// console.log(userCoins);
let currentServiceName = '';
let currentServiceNum = '';

// --------------------------------------------------
// Heart Icon Functions ✅
// --------------------------------------------------
for (const heart of cardHearts) {
  //   console.log(card);
  heart.addEventListener('click', function (e) {
    // console.log('Heart Clicked');
    let headerHeartNumConverted = parseInt(headerHeartNum.innerText);
    //   console.log(headerHeartNumConverted);
    headerHeartNumConverted++;
    //   console.log(headerHeartNumConverted);
    headerHeartNum.innerText = headerHeartNumConverted;

    headerHeart.classList.add('transition-all', 'duration-100', '-rotate-15');
    setTimeout(() => {
      headerHeart.classList.remove('-rotate-15');
      headerHeart.classList.add('rotate-15');
      setTimeout(() => {
        headerHeart.classList.remove('rotate-15');
      }, 100);
    }, 100);
  });
}

// --------------------------------------------------
// Call Button Functions
// --------------------------------------------------
let headerCoinNumConverted = parseInt(headerCoinNum.innerText);
// console.log(headerCoinNumConverted);

for (const btn of callBtns) {
  // console.log(btn);

//   const modalServiceName = serviceName;
// console.log(modalServiceName);

  btn.addEventListener('click', function (e) {
    // console.log('Call Now Button Clicked');
    

    const serviceImage = this.parentNode.parentNode.parentNode.children[0].children[0].children[0].src; // Finally Got it
    // console.log(serviceImage);

    const serviceName = this.parentNode.parentNode.children[0].children[1].innerText;
    // console.log(serviceName);

    const serviceNum = this.parentNode.parentNode.children[1].children[0].innerText;
    // console.log(serviceNum);

    const currentCoins = headerCoinNum.innerText;
    // console.log(userCoins);


    for (const modalImage of modalImages) {
      // console.log(modalImage);
      modalImage.src = serviceImage;
    }

    currentServiceName = serviceName;
    currentServiceNum = serviceNum;

    for (const modalServiceName of modalServiceNames) {
      // console.log(modalServiceName.innerText);
      modalServiceName.innerText = serviceName;
    }

    for (const modalServiceNum of modalServiceNums) {
      // console.log(modalServiceNum.innerText);
      modalServiceNum.innerText = serviceNum;
    }

    for (const userCoin of userCoins) {
      // console.log(userCoin);
      userCoin.innerText = currentCoins;
    }

   



    // Not Permitted Call
    if (headerCoinNumConverted < 20) {
      // console.log('Not Enough Coin to Make this Call');
      notPermittedCallModal.classList.remove('hidden');
      notPermittedCallModal.classList.add('flex');

      // Permitted Call
    } else {
      // console.log("You're Calling");
      permittedCallModal.classList.remove('hidden');
      permittedCallModal.classList.add('flex');
    }
  });
}

notPermittedCallCancelBtn.addEventListener('click', function (e) {
  // console.log('Call Cancel Button Clicked');
  notPermittedCallModal.classList.remove('flex');
  notPermittedCallModal.classList.add('hidden');
});

const coinRechargeBtnDefaultHtml = coinRechargeBtn.innerHTML;
// console.log(coinRechargeBtnDefaultText);
coinRechargeBtn.addEventListener('click', function (e) {
  // console.log('Coin Recharge Button Clicked');
  coinRechargeBtn.innerHTML = 'গরিবের সার্ভিস নাই 😪';
  setTimeout(() => {
    coinRechargeBtn.innerHTML = coinRechargeBtnDefaultHtml;
  }, 1000);
});

permittedCallCancelBtn.addEventListener('click', function (e) {
  // console.log('Call Cancel Button Clicked');
  permittedCallModal.classList.remove('flex');
  permittedCallModal.classList.add('hidden');
});



callNowBtn.addEventListener('click', function (e) {
  // console.log('Call Now Button Clicked');

  permittedCallModal.classList.remove('flex');
  permittedCallModal.classList.add('hidden');

  headerCoinNumConverted -= 20;
  // console.log(headerCoinNumConverted);
  headerCoinNum.innerText = headerCoinNumConverted;

  headerCoin.classList.add(
    'animate-spin',
    '[animation-timing-function:linear]',
    'duration-300'
  );
  setTimeout(() => {
    headerCoin.classList.remove(
      'animate-spin',
      '[animation-timing-function:linear]',
      'duration-300'
    );
  }, 600);

  const callHistoryCard = document.createElement('div');
  callHistoryCard.className =
    'flex justify-between items-center gap-2.5 w-full h-[50px] mx-auto bg-[#f2f2f2] font-medium text-base px-4 py-2 rounded-2xl';

  callHistoryCard.innerHTML = `
    <div>
      <h3>${currentServiceName}</h3>
      <p>${currentServiceNum}</p> <!-- নাম্বার আলাদা লাইনে -->
    </div>
    <div>
      <p>${new Date().toLocaleDateString()}</p>
      <p class='text-center'>${new Date().toLocaleTimeString()}</p>
    </div>
  `;

  callHistory.appendChild(callHistoryCard);
});
