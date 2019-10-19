import React,{ Component }from 'react';

import { firebaseMatches } from '../../../firebase';
import Slide from 'react-reveal/Slide';

import MatchesBlock from '../../ui/matchesBlock';

const reverseArray = (actualArray) => {
    let reversedArray = [];

    for(let i= actualArray.length-1;i>=0;i--){
        reversedArray.push(actualArray[i])
    }
    return reversedArray;
}

const firebaseLooper = (snapshot) => {
    let data = [];
    snapshot.forEach((childSnapshot)=>{
        data.push({
            ...childSnapshot.val(),
            id: childSnapshot.key
        })
    });
    return data
}

class Blocks extends Component {
    state ={
        matches:[]
    }
    showMatches = (matches) => (
     matches ? 
        matches.map((match)=>(
            <Slide bottom key={match.id}>
                <div className="item">
                    <div className="wrapper">
                        <MatchesBlock match={match}/>
                    </div>
                </div>
            </Slide>
        )) :null
    )

    componentDidMount(){
    
        firebaseMatches.limitToLast(6).once('value').then((snapshot)=>{
            const matches = firebaseLooper(snapshot);
        
            this.setState({
               matches: reverseArray(matches)
            //  matches: matches.reverse()  cachs 2
            });
           
        })
    }

    
    render(){
        return(
            <div className="home_matches">
                {this.showMatches(this.state.matches)}
            </div>
        )
    }
}


export default Blocks;