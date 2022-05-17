import styled from 'styled-components';
import PropTypes from "prop-types";

 const Div = styled.div`
  padding: 4em;
  background: biege;

`

export function Section({ title,children }) {
  return <Div >
 
    <h1>{title}</h1>
{children}</Div>;
}
Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Section;