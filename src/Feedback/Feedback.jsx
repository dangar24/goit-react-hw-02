export default function Feedback({totalFeedback, PositivePer, data: { good, neutral, bad } }) {
    return <>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {totalFeedback}</p>
        <p>Positive: {PositivePer}%</p></> 
}