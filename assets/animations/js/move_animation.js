/**
 * Animation 1: Spead (Smooth Move)
 * Direct target-to-target movement
 */

window.triggerChessAnimation = async function(fromStr, toStr, move) {
    const board = document.getElementById('chess-board');
    if (!board) return;

    const fromSq = document.querySelector(`[data-square="${fromStr}"]`);
    const toSq = document.querySelector(`[data-square="${toStr}"]`);
    if (!fromSq || !toSq) return;

    // Create a dummy element for animation
    const pieceImg = toSq.querySelector('img');
    if (!pieceImg) return;

    const fromRect = fromSq.getBoundingClientRect();
    const toRect = toSq.getBoundingClientRect();

    const deltaX = fromRect.left - toRect.left;
    const deltaY = fromRect.top - toRect.top;

    // Apply initial offset position (start from the 'from' square visually)
    pieceImg.style.transition = 'none';
    pieceImg.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
    
    // Force reflow
    pieceImg.offsetHeight;

    // Animate to 0,0 (the 'to' square's actual position)
    pieceImg.style.transition = 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
    pieceImg.style.transform = 'translate(0, 0)';

    return new Promise(r => setTimeout(r, 500));
};

console.log("Spead Animation Loaded: window.triggerChessAnimation is ready.");
