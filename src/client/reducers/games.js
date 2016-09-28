export default (games, action) => {
  switch (action.type) {

    case 'RECEIVE_DASHBOARD_DATA':
      return [
        ...action.games,
      ];

    default:
      return games;
  }
};
