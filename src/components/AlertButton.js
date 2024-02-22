export default function AlertButton({msg,children}) {
    const handleClick = () => {
        alert(msg)
    }
    
    return (
        <div>
            <button onClick={handleClick}>{children}</button>
        </div>
    )
}