// Function to check if an element is a comment/reply
function isCommentElement(element) {
  return element.classList.contains('ytd-comment-renderer') ||
         element.classList.contains('ytd-comment-replies-renderer');
}
function blockComment(comment) {
    const usernameElement = comment.querySelector('#author-text');
    if (!usernameElement) return;

    const username = usernameElement.textContent.trim().toLowerCase();

    // Define keywords to block
    const keywords = ['uttp', 'officer'];

    // Check if username contains any keyword
    for (const keyword of keywords) {
        if (username.includes(keyword)) {
            comment.style.display = 'none';
            return; // Exit after blocking
        }
    }
}

// Function to block comments containing 'UTTP' in the username
function blockUTTPComments() {
  const commentElements = document.querySelectorAll('.ytd-comment-renderer, .ytd-comment-replies-renderer');
  commentElements.forEach(blockComment);
}

// Use MutationObserver to detect new comments
const observer = new MutationObserver((mutations) => {
  mutations.forEach(() => {
    blockUTTPComments();
  });
});

// Start observing the comment section
observer.observe(document.body, {
  childList: true,
  subtree: true
});

// Block existing comments
blockUTTPComments();