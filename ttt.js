  let board = Array(9).fill('');
    let over = false;

    const wins = [
      [0,1,2],[3,4,5],[6,7,8],
      [0,3,6],[1,4,7],[2,5,8],
      [0,4,8],[2,4,6]
    ];

    function checkWin(b, player) {
      return wins.some(([a, c, d]) => b[a] === player && b[c] === player && b[d] === player);
    }

    function isDraw(b) {
      return b.every(c => c !== '');
    }

    // --- Minimax AI ---
    function minimax(b, isMaximizing) {
      if (checkWin(b, 'O')) return 10;
      if (checkWin(b, 'X')) return -10;
      if (isDraw(b)) return 0;

      if (isMaximizing) {
        let best = -Infinity;
        for (let i = 0; i < 9; i++) {
          if (!b[i]) {
            b[i] = 'O';
            best = Math.max(best, minimax(b, false));
            b[i] = '';
          }
        }
        return best;
      } else {
        let best = Infinity;
        for (let i = 0; i < 9; i++) {
          if (!b[i]) {
            b[i] = 'X';
            best = Math.min(best, minimax(b, true));
            b[i] = '';
          }
        }
        return best;
      }
    }

    function computerMove() {
      let bestScore = -Infinity;
      let bestMove = -1;
      for (let i = 0; i < 9; i++) {
        if (!board[i]) {
          board[i] = 'O';
          let score = minimax(board, false);
          board[i] = '';
          if (score > bestScore) {
            bestScore = score;
            bestMove = i;
          }
        }
      }
      markCell(bestMove, 'O');
    }

    function markCell(i, player) {
      board[i] = player;
      const cells = document.querySelectorAll('.cell');
      cells[i].textContent = player;
      cells[i].classList.add(player.toLowerCase());
    }

    function setStatus(msg) {
      document.getElementById('status').textContent = msg;
    }

    function play(i) {
      if (over || board[i]) return;

      // Player move
      markCell(i, 'X');

      if (checkWin(board, 'X')) {
        setStatus('You win! 🎉');
        over = true;
        return;
      }
      if (isDraw(board)) {
        setStatus("It's a draw!");
        over = true;
        return;
      }

      setStatus('Computer is thinking...');

      // Small delay so it feels natural
      setTimeout(() => {
        computerMove();

        if (checkWin(board, 'O')) {
          setStatus('Computer wins! 🤖');
          over = true;
          return;
        }
        if (isDraw(board)) {
          setStatus("It's a draw!");
          over = true;
          return;
        }

        setStatus('Your turn');
      }, 400);
    }

    function resetGame() {
      board = Array(9).fill('');
      over = false;
      document.querySelectorAll('.cell').forEach(c => {
        c.textContent = '';
        c.className = 'cell';
      });
      setStatus('Your turn');
    }