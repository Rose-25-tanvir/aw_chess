/**
 * Animation 3: Tornado (Spin Move)
 * Piece rotates 360 degrees while sliding
 */

window.triggerChessAnimation = async function(fromStr, toStr, move) {
    const fromSq = document.querySelector(`[data-square="${fromStr}"]`);
    const toSq = document.querySelector(`[data-square="${toStr}"]`);
    if (!fromSq || !toSq) return;

    const pieceImg = toSq.querySelector('img');
    if (!pieceImg) return;

    const fromRect = fromSq.getBoundingClientRect();
    const toRect = toSq.getBoundingClientRect();

    const deltaX = fromRect.left - toRect.left;
    const deltaY = fromRect.top - toRect.top;

    pieceImg.style.transition = 'none';
    pieceImg.style.transform = `translate(${deltaX}px, ${deltaY}px) rotate(0deg)`;
    
    pieceImg.offsetHeight; // force reflow

    pieceImg.style.transition = 'transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
    pieceImg.style.transform = 'translate(0, 0) rotate(360deg)';

    return new Promise(r => setTimeout(r, 600));
};

console.log("Tornado Animation Loaded: Ready for spin moves.");
