import { connect } from 'react-redux';
import { updateScore } from '../actions/form';
import ScoreSelector from '../components/form/ScoreSelector';

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  numbers: [0, 1, 2],
  score: state.form.score[ownProps.index],
});

const mapDispatchToProps = dispatch => ({
  onUpdate: (index, value) => {
    dispatch(updateScore(index, value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ScoreSelector);
