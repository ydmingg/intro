import { useState } from "react";

// 创建按钮
function Square({
	value,
	onSquareClick,
}: {
	value: string;
	onSquareClick: () => void;
}) {
	return (
		<button
			className="square m-1 w-8 h-8 bg-red-500 text-sm"
			onClick={onSquareClick}>
			{value}
		</button>
	);
}

// 创建容器
function Board({
    xIsNext,
    squares,
	onPlay,
}: {
    xIsNext: Boolean;
    squares: string[];
	onPlay: (nextSquates: string[]) => void;
}) {
	function handleClick(i: number) {
		if (squares[i] || calculateWinner(squares)) return;
		// 复制数组
		const nextSquates = squares.slice();
		nextSquates[i] = xIsNext ? "X" : "O";
        
		// 更新状态
        onPlay(nextSquates);
		
	}

	const winner = calculateWinner(squares);

	let status;
	if (winner) {
		status = "Winner: " + winner;
	} else {
		status = "Next player: " + (xIsNext ? "X" : "O");
	}

	return (
		<>
			<div className="status">{status}</div>
			<div className="board-row flex">
                <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
                <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
                <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
			</div>
			<div className="board-row flex">
                <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
                <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
                <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
			</div>
			<div className="board-row flex">
                <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
                <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
                <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
			</div>
					
		</>
	);
}

// 创建
function calculateWinner(squares: string[]) {
	const lists = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],

		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],

		[0, 4, 8],
		[2, 4, 6],
	];

	for (const list of lists) {
		const [a, b, c] = list;
		if (
			squares[a] &&
			squares[a] === squares[b] &&
			squares[a] === squares[c]
		) {
			return squares[a];
		}
	}
	return null;
}

// 导出组件
export default function Game() {
	const [xIsNext, setXIsNext] = useState(true);
    const [history, setHistory] = useState([Array(9).fill(null)]);

    const currentSquares = history[history.length - 1];
    
    
    function handlePlay(nextSquares: string[]) {
        // 确保 nextSquares 是一个有效的数组
        setHistory([...history, nextSquares]);
        setXIsNext(!xIsNext);

        
    }

	return (
		<>
            <Board xIsNext={xIsNext} squares={ currentSquares } onPlay={ handlePlay } />
		</>
	);
}
