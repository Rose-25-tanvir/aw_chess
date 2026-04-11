/**
 * Animation 3: Results Overlay (Booyah / Defeat)
 * Handles the full-screen results animation.
 */

const GameResultsOverlay = {
    /**
     * Triggers the result screen.
     * @param {string} type - 'booyah' or 'defeat'.
     */
    show: function(type = 'booyah') {
        return new Promise((resolve) => {
            // Create overlay if it doesn't exist
            let overlay = document.getElementById('game-result-container');
            if (!overlay) {
                overlay = document.createElement('div');
                overlay.id = 'game-result-container';
                overlay.className = 'game-result-overlay';
                
                const textElement = document.createElement('h1');
                textElement.id = 'game-result-text';
                textElement.className = 'result-text';
                overlay.appendChild(textElement);
                
                document.body.appendChild(overlay);
            }

            const textElement = document.getElementById('game-result-text');
            
            // 1. Sudden Black Screen
            overlay.classList.add('active');
            overlay.classList.remove('overlay-booyah', 'overlay-defeat');
            overlay.classList.add(type === 'booyah' ? 'overlay-booyah' : 'overlay-defeat');
            
            textElement.classList.remove('show', 'text-booyah', 'text-defeat');
            textElement.textContent = type === 'booyah' ? 'BOOYAH' : 'DEFEAT';

            // 2. Wait 1 second
            setTimeout(() => {
                // 3. Show Bright Text Animation
                textElement.classList.add('show');
                textElement.classList.add(type === 'booyah' ? 'text-booyah' : 'text-defeat');
                
                // Allow user to click to dismiss
                overlay.onclick = () => {
                    this.hide();
                    resolve();
                };
            }, 1000);
        });
    },

    /**
     * Hides the result screen.
     */
    hide: function() {
        const overlay = document.getElementById('game-result-container');
        if (overlay) {
            overlay.classList.remove('active');
            const textElement = document.getElementById('game-result-text');
            if (textElement) textElement.classList.remove('show');
        }
    }
};

// Exporting for use in other files
window.GameResultsOverlay = GameResultsOverlay;
