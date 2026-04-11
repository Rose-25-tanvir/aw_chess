/**
 * Animation 1: Smooth Piece Move
 * moves a chess piece from its current position to a target position smoothly.
 */

const ChessMoveAnimation = {
    /**
     * Animates a piece to a new square.
     * @param {HTMLElement} pieceElement - The chess piece DOM element.
     * @param {number} targetX - Target X coordinate (px or %).
     * @param {number} targetY - Target Y coordinate (px or %).
     * @param {number} duration - Duration in milliseconds (default 600).
     */
    animate: function(pieceElement, targetX, targetY, duration = 600) {
        return new Promise((resolve) => {
            if (!pieceElement) return resolve();

            // Set the transition style
            pieceElement.style.transition = `transform ${duration}ms cubic-bezier(0.4, 0, 0.2, 1)`;
            
            // Trigger the movement
            // Using translate3d for GPU acceleration
            pieceElement.style.transform = `translate3d(${targetX}px, ${targetY}px, 0)`;

            // Wait for transition to end
            const onEnd = () => {
                pieceElement.removeEventListener('transitionend', onEnd);
                resolve();
            };

            pieceElement.addEventListener('transitionend', onEnd);
            
            // Safety timeout
            setTimeout(onEnd, duration + 50);
        });
    }
};

// Exporting for use in other files
window.ChessMoveAnimation = ChessMoveAnimation;
