import React, { Component } from 'react';
import PlayerCard from '../../ui/playerCard';
import Otamendi from '../../../Resources/images/players/Otamendi.png';
class HomeCards extends Component {

    showAnimateCards = () => {
        return(
            <div>
            <div
                style={{
                    position: 'absolute',
                    left:0,
                    bottom:0
                }}
            >
                <PlayerCard
                    number="30"
                    name="Nicolas"
                    lastname="Otamendi"
                    bck={Otamendi}
                />
            </div>
            <div
            style={{
                position: 'absolute',
                left:40,
                bottom:40,
                zIndex:-1
            }}
        >
            <PlayerCard
                number="30"
                name="Nicolas"
                lastname="Otamendi"
                bck={Otamendi}
            />
        </div>
        </div>
        )
    }
    render() {
        return (
            <div>
                {this.showAnimateCards()}
            </div>
        );
    }
}

export default HomeCards;