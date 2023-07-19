import React from 'react';
import { Link } from 'react-router-dom';
import Canvas from '../components/Canvas';
import SideBar from '../components/SideBar';
import styled from 'styled-components';

const MainPage = () => {
  return (
    <div>
      <LinkButton>
        <Link to={"/make-my-tree"}>
          나만의 트리 꾸미러 가기 ▶
        </Link>
      </LinkButton>
    </div>
  );
};
const LinkButton = styled.div`
  font-size: 30px;
  width: fit-content;
  height: fit-content;
  padding: 10px;
  border-radius: 2em;
  color: black;
  // background-color: ;
`
export default MainPage;