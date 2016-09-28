export default (players, action) => {
  switch (action.type) {

    case 'RECEIVE_DASHBOARD_DATA':
      return [
        ...action.players,
      ];

    default:
      return players;
  }
};
