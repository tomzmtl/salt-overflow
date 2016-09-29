import { connect } from 'react-redux';
import { updatePlayer } from '../actions/form';
import PlayerSelector from '../components/form/PlayerSelector';

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  players: state.players,
});

const mapDispatchToProps = dispatch => ({
  onUpdate: (index, value) => {
    dispatch(updatePlayer(index, value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(PlayerSelector);
