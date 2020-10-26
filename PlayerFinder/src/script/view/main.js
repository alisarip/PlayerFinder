import '../component/player-list.js';
import '../component/search-bar.js';
import DataSource from '../data/data-source.js';
const main = () => {
    const searchElement = document.querySelector("search-bar");
    const playerListElement = document.querySelector("player-list");
    const onButtonSearchClicked = () => {
        DataSource.searchPlayer(searchElement.value)
            .then(renderResult)
            .catch(fallbackResult)
    };
    const renderResult = results => {
        playerListElement.players = results;
    };
    const fallbackResult = message => {
        playerListElement.renderError(message);
    };
    searchElement.clickEvent = onButtonSearchClicked;
};
export default main;