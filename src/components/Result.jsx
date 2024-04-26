import React from 'react'
import PropTypes from 'prop-types'


//Destructuring del componente para obtener los campos que se necesitan
//const { value } = props
const Result = ({ value }) => (
    <div className="result">
        {value}
    </div>
)

Result.propTypes = {
    value: PropTypes.string.isRequired
}

Result.defaultProps = {
    value: "0"
}

export default Result