import React, { Component } from 'react';

import { firebaseMatches } from '../../firebase';
import { firebaseLooper, reverseArray } from '../ui/misc';

import LeagueTable from './tableRank';
 import MatchesList from './matchesList';


class TheMatches extends Component {
    state = {
        loading: true,
        matches:[],
        filterMatches:[],
        playedFilter:'All',
        resultFilter:'All'
    }

    componentDidMount(){
        firebaseMatches.once('value').then(snapshot=>{
            const matches = firebaseLooper(snapshot);

            this.setState({
                loading: false,
                matches: reverseArray(matches),
                filterMatches: reverseArray(matches)
            });
        })
    }

    showPlayed = (played,result) =>{

        var list = [];
        if(played === 'not'){
             list = this.state.matches.filter((match)=>{
                return match.result === result
            });
        }

        if(result === 'not') {
            list = this.state.matches.filter((match)=>{
               return match.final === played
           });
       }
       if(played ==='All' && result ==="All" ){
            list = this.state.matches
       }
        
        this.setState({
            filterMatches: list ,
            playedFilter: result ==='not' ? played:'All',
            resultFilter: played === 'not' ? result:'All'
        })

    }
    // tach 2 ham rieng setState 2 lan

    render() {
        const state = this.state;
        return(
            <div className="the_matches_container">
            <div className="the_matches_wrapper">
                <div className="left">
                    <div className="match_filters">
                        <div className="match_filters_box">
                            <div className="tag">
                                Show Match
                            </div>
                            <div className="cont">
                                <div className={`option ${state.playedFilter === 'All'?'active':''}`}
                                    onClick={()=> this.showPlayed('All','All')}
                                >
                                    All
                                </div>
                                <div className={`option ${state.playedFilter === 'Yes'?'active':''}`}
                                    onClick={()=> this.showPlayed('Yes','not')}>
                                    Played
                                </div>
                                <div className={`option ${state.playedFilter === 'No'?'active':''}`}
                                    onClick={()=> this.showPlayed('No','not')}>
                                    Not played
                                </div>
                            </div>
                        </div>
                        <div className="match_filters_box">
                            <div className="tag">
                                Result game
                            </div>
                            <div className="cont">
                                <div className={`option ${state.resultFilter === 'All'?'active':''}`}
                                    onClick={()=> this.showPlayed('All','All')}
                                >
                                    All
                                </div>
                                <div className={`option ${state.resultFilter === 'W'?'active':''}`}
                                    onClick={()=> this.showPlayed('not','W')}>
                                    W
                                </div>
                                <div className={`option ${state.resultFilter === 'L'?'active':''}`}
                                    onClick={()=> this.showPlayed('not','L')}>
                                    L
                                </div>
                                <div className={`option ${state.resultFilter === 'D'?'active':''}`}
                                    onClick={()=> this.showPlayed('not','D')}>
                                    D
                                </div>
                            </div>
                        </div>
                    </div>
                    <MatchesList matches={state.filterMatches}/>
                </div>
                <div className="right">
                    <LeagueTable/>
                </div>
            </div>
        </div>
        )
    }
}

export default TheMatches;