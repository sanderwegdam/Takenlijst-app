import PropTypes from 'prop-types'
import '.././App.css'
import { FaPlus } from "react-icons/fa";

const Button = ({ color }) => {
  return (
    <button     
      style={{ backgroundColor: color }}
      className='btn'    >
      <FaPlus />
    </button>
  )
}

Button.defaultProps = {
  color: 'steelblue',
}

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
}

export default Button
