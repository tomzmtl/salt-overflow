import { connect } from 'react-redux';
import { updatePlayer, updateCharacter, updateScore } from '../actions/form';
import AddGameForm from '../components/form/AddGameForm';

const mapStateToProps = state => ({
  characters: state.form.characters,
  players: state.form.players,
  score: state.form.score,
});

const mapDispatchToProps = dispatch => ({
  onPlayerUpdate: (index, value) => {
    dispatch(updatePlayer(index, value));
  },
  onCharacterUpdate: (index, value) => {
    dispatch(updateCharacter(index, value));
  },
  onScoreUpdate: (index, value) => {
    dispatch(updateScore(index, value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AddGameForm);
