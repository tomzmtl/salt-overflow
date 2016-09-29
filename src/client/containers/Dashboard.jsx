import { connect } from 'react-redux';
import Dashboard from '../components/dashboard/Dashboard';

const mapStateToProps = state => ({
  players: state.players,
  games: state.games,
});

export default connect(mapStateToProps)(Dashboard);
