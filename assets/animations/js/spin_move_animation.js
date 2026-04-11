/**
 * Animation 2: Spinning Piece Move
 * Moves a chess piece while rotating it 360+ degrees.
 */

const ChessSpinMoveAnimation = {
    /**
     * Animates a piece to a new square with a spin effect.
     * @param {HTMLElement} pieceElement - The chess piece DOM element.
     * @param {number} startX - Current X coordinate.
     * @param {number} startY - Current Y coordinate.
     * @param {number} targetX - Target X coordinate.
     * @param {number} targetY - Target Y coordinate.
     * @param {number} duration - Duration in milliseconds (default 800).
     */
    animate: function(pieceElement, startX, startY, targetX, targetY, duration = 800) {
        return new Promise((resolve) => {
            if (!pieceElement) return resolve();

            // Set CSS variables for the animation keyframes
            pieceElement.style.setProperty('--start-x', `${startX}px`);
            pieceElement.style.setProperty('--start-y', `${startY}px`);
            pieceElement.style.setProperty('--end-x', `${targetX}px`);
            pieceElement.style.setProperty('--end-y', `${targetY}px`);

            // Apply the animation class defined in chess_animations.css
            pieceElement.classList.add('piece-spinning');
            
            // Override duration if provided
            pieceElement.style.animationDuration = `${duration}ms`;

            const onEnd = () => {
                pieceElement.removeEventListener('animationend', onEnd);
                
                // Finalize position and remove animation class
                pieceElement.style.transform = `translate3d(${targetX}px, ${targetY}px, 0)`;
                pieceElement.classList.remove('piece-spinning');
                
                resolve();
            };

            pieceElement.addEventListener('animationend', onEnd);

            // Safety timeout
            setTimeout(onEnd, duration + 50);
        });
    }
};

// Exporting for use in other files
window.ChessSpinMoveAnimation = ChessSpinMoveAnimation;
