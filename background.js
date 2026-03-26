// Example: Store blocked accounts in Chrome storage
chrome.storage.sync.set({ blockedAccounts: ['UTTP'] }, () => {
  console.log('UTTP accounts blocked');
});