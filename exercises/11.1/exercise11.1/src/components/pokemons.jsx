import React from 'react';

class Pokemons extends React.Component {
    render() {
        const { name, type, averageWeight, image, moreInfo } = this.props.pokemon;
        return (
            <div className="pokemon">
                <div>
                    <p>{name}</p>
                    <p>{type}</p>
                    <p> {`Average Weight: ${averageWeight.value} ${averageWeight.measurementUnit}`} </p>
                    <p><a href={`${moreInfo}`}>More Info</a></p>
                </div>
                <img src={image} alt={`Pokemon ${name}`} />
            </div>
        )
    }
}

export default Pokemons;
