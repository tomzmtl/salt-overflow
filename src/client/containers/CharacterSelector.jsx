import { connect } from 'react-redux';
import { updatePlayer } from '../actions/form';
import CharacterSelector from '../components/form/CharacterSelector';

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  characters: state.characters,
});

const mapDispatchToProps = dispatch => ({
/*
  onUpdate: (index, value) => {
    dispatch(updatePlayer(index, value));
  },
  */
});

export default connect(mapStateToProps, mapDispatchToProps)(CharacterSelector);
