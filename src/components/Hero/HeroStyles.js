import styled from 'styled-components';

export const LeftSection = styled.div`
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  .grey-color {
    color: #868e96;
  }

.logo {
  display: block;
  flex: none;
  float: left;
  font-size: 1.5em;
  text-decoration: none;
  margin-top: 10px;
  line-height: normal;
}
.logo-name {
  font-family: "Agustina Regular";
  font-weight: bold;
  font-variant-ligatures: no-common-ligatures;
  -webkit-font-variant-ligatures: no-common-ligatures;
  padding: 0 10px;
}
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;
