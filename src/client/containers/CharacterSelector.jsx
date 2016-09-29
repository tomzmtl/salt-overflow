import { connect } from 'react-redux';
import { updateCharacter } from '../actions/form';
import CharacterSelector from '../components/form/CharacterSelector';

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  characters: state.characters,
  players: state.form.players,
});

const mapDispatchToProps = dispatch => ({
  onUpdate: (index, value) => {
    dispatch(updateCharacter(index, value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CharacterSelector);
