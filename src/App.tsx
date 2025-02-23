import React, { useState } from 'react';
import LoadButton from './components/LoadButton';
import VisualizationArea from './components/VisualizationArea';
import Papa from 'papaparse';
import { Container, Header, Title, LogoImage } from './styles';

const App: React.FC = () => {
  const [data, setData] = useState<Array<object> | null>(null);

  const handleFileSelect = (file: File) => {
    Papa.parse(file, {
      header: true, // Treat the first row as headers
      skipEmptyLines: true, // Ignore empty rows
      complete: (result) => {
        setData(result.data); // Set the parsed data to state
        console.log('Parsed Data:', result.data); // Log for debugging
      },
    });
  };

  return (
    <Container>
      <Header>
        <LogoImage src={"/Tesla_logo.png"} alt="Tesla Logo" />
        <Title>Data Visualization Dashboard by Marios Hasa</Title>
        <LoadButton onFileSelect={handleFileSelect} />
      </Header>
      <VisualizationArea data={data}/>
    </Container>
  );
};

export default App;
