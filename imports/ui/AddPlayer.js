import React from 'react';
import {Players} from "../api/players";

export default class AddPlayer extends React.Component{
    handelSubmit(e){
        let playerName =e.target.playerName.value;
        e.preventDefault(); //stop page from refreshing
       // debugger;
        if(playerName){
            e.target.playerName.value ='';
            Players.insert({
                name:playerName,
                score:0
            });
        }
    }

    render(){
        return <div className='item'>
            <form className='form' onSubmit={this.handelSubmit.bind(this)}>
                <input className="form__input" type="text" name='playerName' placeholder='Player name'/>
                <button className="button">Add Player</button>
            </form>
        </div>
    }
}