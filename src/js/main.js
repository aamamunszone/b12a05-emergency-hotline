// ==================================================
// Custom Function ✅
// ==================================================
function getId(id) {
  return document.getElementById(id);
}
function queryAll(allClass) {
  return document.querySelectorAll(allClass);
}

// ==================================================
// Helper Function ✅
// ==================================================
// Function to show modal
function showModal(modal) {
  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

// Function to hide modal
function hideModal(modal) {
  modal.classList.remove('flex');
  modal.classList.add('hidden');
}

// Function to update modal content with service info
function updateModalContent(serviceImage, serviceName, serviceNum) {
  // Update all modal images
  // for (const modalImage of modalImages) {
  //   modalImage.src = serviceImage;
  // }

  // Update all modal service names
  for (const modalServiceName of modalServiceNames) {
    modalServiceName.innerText = serviceName;
  }

  // Update all modal service numbers
  for (const modalServiceNum of modalServiceNums) {
    modalServiceNum.innerText = serviceNum;
  }

  // Update all coin displays in modals
  for (const userCoin of userCoins) {
    userCoin.innerText = headerCoinNumConverted;
  }
}

// ==================================================
// Global Variables ✅
// ==================================================
const headerHeart = getId('header-heart');
// console.log(headerHeart);
const cardHearts = queryAll('.card-heart');
// console.log(cardHeart);
let headerHeartNum = getId('header-heart-num');
// console.log(headerHeartNum);
const copyBtns = queryAll('.copy-btn');
// console.log(copyBtns);
const copyModal = getId('copy-modal');
// console.log(copyModal);
const callBtns = queryAll('.call-btn');
// console.log(callBtns);
const headerCoin = getId('header-coin');
// console.log(headerCoin);
let headerCoinNum = getId('header-coin-num');
// console.log(headerCoinNum);
let headerCopyNum = getId('header-copy-num');
// console.log(headerCopyNum);
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
const serviceImage = queryAll('.img');
// console.log(serviceImage);
const serviceNames = queryAll('.service-name');
// console.log(serviceNames);
const serviceNums = queryAll('.service-num');
// console.log(serviceNums);
const modalImages = queryAll('.modal-image');
// console.log(modalImages);
const modalServiceNames = queryAll('.modal-service-name');
// console.log(modalServiceNames);
const modalServiceNums = queryAll('.modal-service-num');
// console.log(modalServiceNums);
const userCoins = queryAll('.user-coins');
// console.log(userCoins);
const clearBtn = getId('clear-btn');
// console.log(clearBtn);
const noHistory = getId('no-history');
// console.log(noHistory);

// ==================================================
// Current Service Info ✅
// ==================================================
let currentServiceImage = '';
let currentServiceName = '';
let currentServiceNum = '';

// Header Heart
let headerHeartNumConverted = parseInt(headerHeartNum.innerText);
//   console.log(headerHeartNumConverted);
// Header Coin
let headerCoinNumConverted = parseInt(headerCoinNum.innerText);
// console.log(headerCoinNumConverted);
// Header Copy
let headerCopyNumConverted = parseInt(headerCopyNum.innerText);
// console.log(headerCopyNumConverted);

// ==================================================
// Heart Button Functionality
// ==================================================
for (const heart of cardHearts) {
  //   console.log(card);
  heart.addEventListener('click', function (e) {
    // console.log('Heart Clicked');
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

// ==================================================
// Copy Button Functionality
// ==================================================
for (const btn of copyBtns) {
  btn.addEventListener('click', function (e) {
    // console.log('Copy Button Clicked');
    headerCopyNumConverted++;
    // console.log(headerCopyNumConverted);
    headerCopyNum.innerText = headerCopyNumConverted;

    const copyBtnDefaultHtml = btn.innerHTML;

    btn.innerText = 'Copied';

    btn.disabled = true;   //Prevent Multiple Clicks

    setTimeout(() => {
      btn.innerHTML = copyBtnDefaultHtml;
      btn.disabled = false;
    }, 1500);

    const serviceCard = this.closest('article');

    const serviceNum = serviceCard.querySelector('.service-num').innerText;

    currentServiceNum = serviceNum;

    function showCopyModal(currentServiceNum) {
      copyModal.innerText = 'Text Copied Successfully: ' + currentServiceNum;

      copyModal.classList.remove("opacity-0", "-top-20");
      copyModal.classList.add("opacity-100", "top-5");
      
      setTimeout(() => {
        copyModal.classList.remove("opacity-100", "top-5");
        copyModal.classList.add("opacity-0", "-top-20");
      }, 1500);
    }
    function copyText(currentServiceNum) {
      navigator.clipboard.writeText(currentServiceNum).then(function () {
        showCopyModal(currentServiceNum)
      })
    }




    // const textToCopy = 'Text Copied Successfully: ' + currentServiceNum;
    navigator.clipboard.writeText(currentServiceNum).then(function () {
      copyModal.innerText = 'Text Copied Successfully: ' + currentServiceNum;;
      copyModal.classList.remove("opacity-0", "-top-20");
      copyModal.classList.add("opacity-100", "top-5");
      setTimeout(() => {
        copyModal.classList.remove("opacity-100", "top-5");
        copyModal.classList.add("opacity-0", "-top-20");
      }, 1500);
    })
  });
}


// ==================================================
// Call Button Functionality
// ==================================================
for (const btn of callBtns) {
  // console.log(btn);
  btn.addEventListener('click', function (e) {
    // console.log('Call Now Button Clicked');

    const serviceCard = this.closest('article');

    const serviceImage = serviceCard.querySelector('img').src;
    console.log(serviceImage);

    const serviceName = serviceCard.querySelector('h2').innerText;

    const serviceNum = serviceCard.querySelector('.service-num').innerText;

    currentServiceImage = serviceImage;
    currentServiceName = serviceName;
    currentServiceNum = serviceNum;

    updateModalContent(serviceName, serviceNum, serviceImage);

    if (headerCoinNumConverted < 20) {
      // Not enough coins - show not permitted modal
      showModal(notPermittedCallModal);
    } else {
      // Enough coins - show permitted modal
      showModal(permittedCallModal);
    }

    // const currentCoins = headerCoinNum.innerText;
    // console.log(userCoins);
  });
}

// --------------------------------------------------
// Modal Cancel Button Functions ✅
// --------------------------------------------------
// Cancel button for not permitted call modal
notPermittedCallCancelBtn.addEventListener('click', function (e) {
  hideModal(notPermittedCallModal);
});

// Cancel button for permitted call modal
permittedCallCancelBtn.addEventListener('click', function (e) {
  hideModal(permittedCallModal);
});

// --------------------------------------------------
// Recharge Button Function ✅
// --------------------------------------------------
const coinRechargeBtnDefaultHtml = coinRechargeBtn.innerHTML;
coinRechargeBtn.addEventListener('click', function (e) {
  // Change button text temporarily
  coinRechargeBtn.innerHTML = 'গরিবের সার্ভিস নাই 😪';

  // Disable button to prevent multiple clicks
  coinRechargeBtn.disabled = true;

  // Reset after 1 second
  setTimeout(() => {
    coinRechargeBtn.innerHTML = coinRechargeBtnDefaultHtml;
    coinRechargeBtn.disabled = false;
  }, 1000);
});

// --------------------------------------------------
// Call Now Button Function ✅
// --------------------------------------------------
callNowBtn.addEventListener('click', function (e) {
  noHistory.style.display = 'none';
  // Hide the modal first
  hideModal(permittedCallModal);

  // Deduct coins from user's balance
  headerCoinNumConverted -= 20;
  headerCoinNum.innerText = headerCoinNumConverted;

  // Play coin spin animation
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

  // Create new call history item - FIXED THE LAYOUT ISSUE
  const callHistoryCard = document.createElement('div');
  callHistoryCard.className =
    'flex justify-between items-center gap-2.5 w-full mx-auto bg-[#f2f2f2] font-medium text-base sm:text-sm md:text-sm 2xl:text-base px-4 py-2 rounded-2xl';

  // Fixed HTML structure for proper display
  callHistoryCard.innerHTML = `
    <div class="flex-1">
      <h3 class="font-semibold text-sm leading-tight">${currentServiceName}</h3>
      <p class="text-xs text-gray-600 mt-1">Hotline: ${currentServiceNum}</p>
    </div>
    <div class="text-right text-xs text-gray-500 flex-shrink-0">
      <p>${new Date().toLocaleDateString()}</p>
      <p>${new Date().toLocaleTimeString()}</p>
    </div>
  `;

  // Add to history - insert at the beginning so latest calls show first
  callHistory.insertBefore(callHistoryCard, callHistory.firstChild);

  clearBtn.addEventListener('click', function (e) {
    callHistoryCard.style.display = 'none';
    noHistory.style.display = 'block';
  });
});
