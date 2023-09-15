

export function ScoreBoardComponent({ isReady, pcScore, playerScore, playerName }) {

    return (
        <>
        { isReady && <div>
                <h1>{ playerName }: { playerScore } vs PC: { pcScore }</h1>
            </div>}
        
        </>
        )
}