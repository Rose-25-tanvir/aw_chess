/**
 * Animation 2: Super Booyah / Results Overlay
 * Handles full-screen victory or defeat message
 */

window.triggerChessAnimation = async function(from, to, move) {
    // If called as a move animation (though it is a result animation)
    // We determine result from the move status or global game state
    const result = window.ChessApp?.engine?.game?.game_over() ? (window.ChessApp.engine.game.turn() === 'b' ? 'booyah' : 'defeat') : 'booyah';
    return await showResultOverlay(result);
};

// Global helper for direct calls
window.showGameResult = async function(result) {
    return await showResultOverlay(result);
};

async function showResultOverlay(type = 'booyah') {
    return new Promise((resolve) => {
        let overlay = document.getElementById('game-result-container');
        if (!overlay) {
            overlay = document.createElement('div');
            overlay.id = 'game-result-container';
            overlay.className = 'game-result-overlay';
            overlay.innerHTML = `<h1 id="game-result-text" class="result-text"></h1>`;
            document.body.appendChild(overlay);
        }

        const textElement = document.getElementById('game-result-text');
        overlay.classList.add('active');
        overlay.classList.remove('overlay-booyah', 'overlay-defeat');
        overlay.classList.add(type === 'booyah' ? 'overlay-booyah' : 'overlay-defeat');
        
        textElement.classList.remove('show');
        textElement.textContent = type === 'booyah' ? 'BOOYAH' : 'DEFEAT';

        setTimeout(() => {
            textElement.classList.add('show');
            overlay.onclick = () => {
                overlay.classList.remove('active');
                resolve();
            };
        }, 800);
    });
}

console.log("Super Booyah Loaded: Ready for Victory!");
