import styled from 'styled-components';

type LoadButtonProps = {
    onFileSelect: (file: File) => void;
};

const StyledLabel = styled.label`
  background: linear-gradient(45deg, #2196F3, #1976D2);
  color: white;
  padding: 12px 24px;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-block;
  font-weight: 500;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

const LoadButton: React.FC<LoadButtonProps> = ({ onFileSelect }) => {

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            onFileSelect(event.target.files[0]); //This will pass the selected file to the onFileSelect function
        }
    };

    return (
        <>
        <input
        id="file-input"
        accept=".csv"
        type="file"
        style={{display: 'none'}}
        onChange={handleFileChange}
        />
        <StyledLabel 
            htmlFor="file-input" 
        >
            📊 Load CSV Data
        </StyledLabel>
        </>
    )
};

export default LoadButton;