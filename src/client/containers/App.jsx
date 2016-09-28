import { connect } from 'react-redux';
import App from '../components/App';

const mapStateToProps = state => ({
  players: state.players,
  games: state.games,
});

export default connect(mapStateToProps)(App);
