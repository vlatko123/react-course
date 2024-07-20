import reactImg from "./assets/react-core-concepts.png"

export const Header = () => {
    let reactDescription = ["Crucial", "Core", 'Fundamental'];

    function getRandomInt(max){
        return Math.floor(Math.random() * (max + 1))
    }

    return (
        <div>
            <header>
                <img src={reactImg} alt="Stylized atom" />
                <h1>React Essentials</h1>
                <p>
                    {reactDescription[getRandomInt(2)]} React concepts you will need for almost any app you are
                    going to build!
                </p>
            </header>
        </div>
    )
}