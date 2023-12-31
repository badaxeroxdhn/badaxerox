const button = document.querySelector('.copy-btn');

const addToClipboard = async link => {
  await navigator.clipboard.writeText(link);
};

const copyLink = async link => {
  const copied = await addToClipboard(link);
  button.innerText = 'Successfully copy UPI ID';
  setTimeout(() => {
    button.innerText = 'Open the Phone Pay';
  }, 3000);
};

button.addEventListener('click', () => copyLink('9708659946@ybl'));