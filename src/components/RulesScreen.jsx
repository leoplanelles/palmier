import ruleCard from "./RuleOfDraw";
import './css/RulesScreen.css';

const RulesScreen = ({ name, rule }) => {
    return (
        <div className='rulesScreen' >
            <h1>{name}</h1>
            <p>{ruleCard(rule)}</p>
        </div>
    );
}

export default RulesScreen;