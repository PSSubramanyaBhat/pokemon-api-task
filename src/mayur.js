import { get } from "http";
import { useState,useEffect } from "react";

const Api =() =>{
    const [pokemon,setPokemon] = useState("pikachu");
    const [data,setData] = useState([]);

    async function fetchPokemonURL() {
        const array = [];
        try {
            const url =`https://pokeapi.co/api/v2/pokemon/${pokemon}`;
            const result=await fetch(url).then(response=>response.json()).then(datta=>datta);
            console.log("b",result);
            array.push(result);
            setData(array);
        } catch (error) {
            console.log(error)
        }
    }
    const handleChange= (e)=>{
        setPokemon(e.target.value);
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        fetchPokemonURL();
    }
    return (
        <div className="App">
            <form onSubmit= {handleSubmit}>
                <label>
                    <input type="text" placeholder="enter pokemon" onChange={handleChange}></input>
                </label>
                
            </form>
            {data.map((d)=>{
                return(
                    <div className="container">
                        <img src={d.sprites["front_default"]}></img>
                        <div className="divTable">
                            <div div className="divTableCell">Type</div>
                            <div className="divTableCell">{d.types[0].type.name}</div>
                        </div>
                        <div className="divTable">
                            <div div className="divTableCell">Height</div>
                            <div className="divTableCell">{d.height}"</div>
                        </div>
                        <div className="divTable">
                            <div div className="divTableCell">Weight</div>
                            <div className="divTableCell">{d.weight}lbs</div>
                        </div>
                        <div className="divTable">
                            <div div className="divTableCell">Moves</div>
                            <div className="divTableCell">{d.moves[0].move.name}</div>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}
export default Api;


/*
Promise {<pending>}
__proto__: Promise
[[PromiseState]]: "fulfilled"
[[PromiseResult]]: Object
base_experience: 184
height: 12
id: 448
image: "https://pokeres.bastionbot.org/images/pokemon/448.png"
name: "lucario"
pokemon_abilities: "justified"
pokemon_moves: "hyper-beam"
weight: 540
__proto__: Object



Promise {<pending>}
__proto__: Promise
[[PromiseState]]: "fulfilled"
[[PromiseResult]]: Object
base_experience: 240
height: 17
id: 6
image: "https://pokeres.bastionbot.org/images/pokemon/6.png"
name: "charizard"
pokemon_abilities: "solar-power"
pokemon_moves: "cut"
weight: 905
__proto__: Object
*/