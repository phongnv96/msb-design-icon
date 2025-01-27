import { ThemeType } from '@ant-design/icons-svg/lib/types';
import * as React from 'react';
import styled from 'styled-components';
import * as AntdIcons from '../../src/icons';
import * as OtherIcons from '../../src/other';

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 80vw;
  margin: auto;
`;

const Card = styled.div`
  height: 90px;
  margin: 12px 0 16px;
  width: 20%;
  text-align: center;
`;

const NameDescription = styled.p`
  display: block;
  text-align: center;
  transform: scale(0.83);
  font-family: 'Lucida Console', Consolas;
  white-space: nowrap;
`;

const allIcons: {
  [key: string]: any;
} = {...AntdIcons, ...OtherIcons};

const AllIconDemo = () => {
  const [currentTheme, setCurrentTheme] = React.useState('Outlined');

  const handleSelectChange = React.useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.currentTarget.value as ThemeType;
    setCurrentTheme(value);
  }, []);

  const visibleIconList = React.useMemo(
    () => Object.keys(allIcons).filter((iconName) => iconName.includes(currentTheme)),
    [currentTheme]
  );

  return (
    <div style={{ color: '#555' }}>
      <h1 style={{ textAlign: 'center' }}>All Icons</h1>
      <div style={{ textAlign: 'center' }}>
        <select name="theme-select" value={currentTheme} onChange={handleSelectChange}>
          <option value="Filled">Filled</option>
          <option value="Outlined">Outlined</option>
          <option value="TwoTone">Two-Tone</option>
          <option value="Icon">Other</option>
        </select>
      </div>
      <Container>
        {visibleIconList.map((iconName) => {
          const Component = allIcons[iconName];
          return (
            <Card key={iconName}>
              <Component />
              <NameDescription>{iconName}</NameDescription>
            </Card>
          );
        })}
      </Container>
    </div>
  );
};

export default AllIconDemo;
