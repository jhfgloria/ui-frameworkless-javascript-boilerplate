import { goBack, goTo, replace } from '../lib/router';

export const goToHome = state => goTo('/', state);
export const replaceHome = state => replace('/', state);
export const goToSeasonPredictions = state => goTo('/season_predictions/{leagueId}', state);
export const replaceSeasonPredictions = state => replace('/season_predictions/{leagueId}', state);
export const goToTeams = state => goTo('/season_predictions/{leagueId}/teams', state);
export const goToPlayers = state => goTo('/season_predictions/{leagueId}/players', state);
export const goToPrevious = () => goBack();
