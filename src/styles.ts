import styled from 'styled-components';

// Container is the main wrapper for the app, ensuring it is centered and has a max width
export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

// LogoImage is styled to be fixed at the top left corner, always visible
export const LogoImage = styled.img`
  height: 100px;
  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 1000;
`;

// Header is the top section of the app, containing the logo and title
export const Header = styled.header`
  margin-bottom: 2rem;
  text-align: center;
  position: relative;
  width: 100%;
`;

// Title is the main heading of the app, styled for prominence
export const Title = styled.h1`
  color: #e1e1e1;
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

// VisualizationContainer is used for displaying data visualizations, with a dark theme and centered content
export const VisualizationContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  color: #e1e1e1;
  background: #2c2c2c;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  h2, h3 {
    color: #e1e1e1;
    margin-bottom: 1rem;
  }

  /* Ensure the table and chart use the full width available */
  table, .recharts-wrapper {
    width: 100%;
    max-width: 100%;
  }
`; 