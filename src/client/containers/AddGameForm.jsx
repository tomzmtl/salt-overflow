import { connect } from 'react-redux';
import AddGameForm from '../components/AddGameForm';

const mapStateToProps = state => ({
  // players: state.players,
  // games: state.games,
});

export default connect(mapStateToProps)(AddGameForm);
