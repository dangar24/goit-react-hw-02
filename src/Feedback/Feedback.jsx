export default function Feedback({totalFeedback, data: { good, neutral, bad } }) {
    return <>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {totalFeedback}</p>
        <p>Positive: {Math.floor((good/(good+bad))*100)}%</p></> 
}