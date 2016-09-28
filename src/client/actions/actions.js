import store from '../store';


export default null;


export const fetchDashboardData = () => {
  return (dispatch) => {
    dispatch({ type: 'LOADING' });

    const calls = [
      fetch('/api/v1/players').then(r => r.json()),
      fetch('/api/v1/games?limit=8').then(r => r.json()),
    ];

    return Promise.all(calls).then(data => dispatch({
      type: 'RECEIVE_DASHBOARD_DATA',
      players: data[0],
      games: data[1],
    }));
  };
};
