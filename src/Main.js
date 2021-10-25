import {Component} from 'react';
import Hornedbeast from './Hornedbeast';

class Main extends Component {
    render () {
        return (
            <><Hornedbeast title={'Markhor'} src={'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Markhor_Horns_%285779055412%29.jpg/220px-Markhor_Horns_%285779055412%29.jpg'}
                description={'The markhor is the largest of the wild goat species, with broad hooves and striking spiral horns that can grow to five feet long in mature males. Markhor is a Persian word meaning “snake-eater” or “snake-killer.'} />
            <Hornedbeast title={'South African White Rhino'} src={'https://files.worldwildlife.org/wwfcmsprod/images/White_Rhino/hero_small/3yuabfu3jq_white_rhino_42993643.jpg'}
                description={'White rhinos are the second-largest land mammal and their name comes from the Afrikaan’s, a West Germanic language, word “weit” which means wide and refers to the animal’s mouth.'} /></>
        )
    }
}

export default Main;