import styled from 'styled-components'
import PropTypes from 'prop-types'

const Message = styled.p`
font-size:25px`

const Notification = ({message}) => {
    return  <Message >{message}</Message>;
}
Notification.propTypes = {
    message:PropTypes.string.isRequired
}

export default Notification;