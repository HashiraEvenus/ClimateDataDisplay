import React, { useState, useMemo } from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Brush,
    ReferenceLine,
} from 'recharts';
import styled from 'styled-components';

type VisualizationAreaProps = {
    data: Array<object> | null;
};

// Styled Components
const VisualizationContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  background: #2c2c2c;
  color: #e1e1e1;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

  h2,
  h3 {
    margin-bottom: 1rem;
  }
`;

const SelectContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 2rem;
`;

const Select = styled.select`
  padding: 8px 12px;
  border: 1px solid #444;
  border-radius: 4px;
  background: #2c2c2c;
  color: #e1e1e1;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 2rem 0;
  
  th, td {
    padding: 12px;
    border: 1px solid #444;
    text-align: left;
    color: #e1e1e1;
  }

  th {
    background: #2c2c2c;
    font-weight: 600;
    color: #ffffff;
  }

  tr:nth-child(even) {
    background: #2a2a2a;
  }

  tr:nth-child(odd) {
    background: #333333;
  }
`;

const VisualizationArea: React.FC<VisualizationAreaProps> = ({ data }) => {
    const [xKey, setXKey] = useState<string | null>(null);
    const [yKey, setYKey] = useState<string | null>(null);
    const [showMore, setShowMore] = useState(false);
    const INITIAL_ROWS = 10;

    // If no data is provided
    if (!data) {
        return (
            <div>
                <h2>No data to display</h2>
                <p>No data loaded yet</p>
            </div>
        );
    }

    const keys = Object.keys(data[0]);

    // Compute yearly averages for the chart
    const groupedData = useMemo(() => {
        if (!xKey || !yKey) return [];
        const yearMap: Record<string, { total: number; count: number }> = {};

        data.forEach((row: any) => {
            const year = row[xKey]?.toString().split('-')[0]; // Assuming date format YYYY-MM-DD
            const value = Number(row[yKey]);
            if (year && !isNaN(value)) {
                if (!yearMap[year]) yearMap[year] = { total: 0, count: 0 };
                yearMap[year].total += value;
                yearMap[year].count += 1;
            }
        });

        return Object.entries(yearMap).map(([year, { total, count }]) => ({
            [xKey]: year,
            [yKey]: (total / count).toFixed(2),
        }));
    }, [data, xKey, yKey]);

    return (
        <VisualizationContainer>
            <h2>Data Visualization</h2>

            {/* Axis Selection */}
            <SelectContainer>
                <label>
                    X-Axis:
                    <Select value={xKey || ''} onChange={(e) => setXKey(e.target.value)}>
                        <option value="">Select X-Axis</option>
                        {keys.map((key) => (
                            <option key={key} value={key}>
                                {key}
                            </option>
                        ))}
                    </Select>
                </label>

                <label>
                    Y-Axis:
                    <Select value={yKey || ''} onChange={(e) => setYKey(e.target.value)}>
                        <option value="">Select Y-Axis</option>
                        {keys.map((key) => (
                            <option key={key} value={key}>
                                {key}
                            </option>
                        ))}
                    </Select>
                </label>
            </SelectContainer>



            {/* Chart Visualization */}
            {xKey && yKey && (
                <>
                    <h3>Yearly Averages Chart</h3>
                    <LineChart
                        width={1000}
                        height={500}
                        data={groupedData}
                        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey={xKey} />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <ReferenceLine y={0} stroke="red" label="Baseline" />
                        <Brush dataKey={xKey} height={30} stroke="#8884d8" />
                        <Line type="monotone" dataKey={yKey} stroke="#82ca9d" />
                    </LineChart>
                </>
            )}
            {/* Table Renderer */}
            <Table>
                <thead>
                    <tr>
                        {keys.map((key, index) => (
                            <th key={index}>{key}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.slice(0, showMore ? data.length : INITIAL_ROWS).map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {Object.values(row).map((value, cellIndex) => (
                                <td key={cellIndex}>{value}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </Table>
            {/* See More/Less */}
            {data.length > INITIAL_ROWS && (
                <button onClick={() => setShowMore(!showMore)}>
                    {showMore ? 'See Less' : 'See More'}
                </button>
            )}


        </VisualizationContainer>
    );
};

export default VisualizationArea;
