import React, {useState} from "react";

//Componente com estados isolados
function MyIsolatedButton() {
    const [count, setCount] = useState(0);

    function handleClick(){
        setCount(count+1);
    }

    return (
        <div>
            <button onClick={handleClick}>Clicked {count} Times!</button>
        </div>
    )
}

function MySharedButton({ count, onClick, text}){
    return (
        <button onClick={onClick}>{text} Clicked {count} Times!</button>
    )
}

export default function StateStudy() {

    const [sharedCount, setSharedCount] = useState(0);

    const handleSharedClick = () => {
        setSharedCount(sharedCount + 1);
    }

    return (<>
    <h2>
        State Study
    </h2>
    <h3>Isolated Components</h3>
    <MyIsolatedButton />
    <MyIsolatedButton />
    <MyIsolatedButton />
    <MyIsolatedButton />
    <MyIsolatedButton />
    <h3>Shared Components</h3>
    <MySharedButton count={sharedCount} text={'Shared'} onClick={handleSharedClick}/>
    <MySharedButton count={sharedCount} text={'Shared'} onClick={handleSharedClick}/>
    <MySharedButton count={sharedCount} text={'Shared'} onClick={handleSharedClick}/>
    <MySharedButton count={sharedCount} text={'Shared'} onClick={handleSharedClick}/>
    <MySharedButton count={sharedCount} text={'Shared'} onClick={handleSharedClick}/>
    </>)
}

