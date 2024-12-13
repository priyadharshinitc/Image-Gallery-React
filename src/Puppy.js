import { IoPawSharp } from "react-icons/io5";

let puppyList = [
    {
        puppyImage: "https://images.unsplash.com/photo-1503256207526-0d5d80fa2f47?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        puppyName: "Twinkle Toes"
    }, 
    {
        puppyImage: "https://images.unsplash.com/photo-1504826260979-242151ee45b7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        puppyName: "Cuddles Doggo"
    }, 
    {
        puppyImage: "https://images.unsplash.com/photo-1532592333381-a141e3f197c9?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        puppyName: "Black Sweety"
    },
    {
        puppyImage: "https://images.unsplash.com/photo-1516371535707-512a1e83bb9a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        puppyName: "Booboo"
    },
    {
        puppyImage: "https://images.unsplash.com/photo-1510771463146-e89e6e86560e?q=80&w=1362&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        puppyName: "Goldie"
    },
    {
        puppyImage: "https://images.unsplash.com/photo-1523626797181-8c5ae80d40c2?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        puppyName: "Big Muffin"
    },
    {
        puppyImage: "https://images.unsplash.com/photo-1587402092301-725e37c70fd8?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        puppyName: "Snow White"
    },
    {
        puppyImage: "https://images.unsplash.com/photo-1586671267731-da2cf3ceeb80?q=80&w=1889&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        puppyName: "Cuddle King"
    }
];

function Puppy() {
    return (
        <>
            <h1 style={{textAlign: "center", marginTop: "1rem"}}>Pawsitively Adorable  <IoPawSharp/></h1>
            <div className="container">
                {puppyList.map(function(puppy, index) {
                    return (
                        <div className="img-container" key={index}>
                            <img className="img-container__img" src={puppy.puppyImage} alt={puppy.puppyName}></img>
                            <h3 className="img-container__name">{puppy.puppyName}</h3>
                        </div>
                        )
                    })}
            </div>
        </>
    )
}

export default Puppy;