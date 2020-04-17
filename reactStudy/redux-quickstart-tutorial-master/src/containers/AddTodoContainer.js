import { connect } from "react-redux";
import { addTodo } from "../actions";
import AddTodo from "../components/AddTodo";

const mapStateToProps = (state, ownProps) => {
  return ownProps;
};

const mapDispatchToProps = dispatch => ({
  addTodo: text => dispatch(addTodo(text))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
