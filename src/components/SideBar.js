import React, { useState } from 'react';
import styled from 'styled-components';
import treeObj1 from '../img/treeObj1.png';
import treeObj2 from '../img/treeObj2.png';
import treeObj3 from '../img/treeObj3.png';
import treeObj4 from '../img/treeObj4.png';
import treeObj5 from '../img/treeObj5.png';
import treeObj6 from '../img/treeObj6.png';
import treeObj7 from '../img/treeObj7.png';

export default function SideBar({ handleSelectedObj, handleMousePositionInSideBar }) {
  const [objList, setObjList] = useState([treeObj1, treeObj2, treeObj3, treeObj4, treeObj5, treeObj6, treeObj7]);

  const renderObjList = () => {
    return objList.map((el, idx) => {
      return (
        <ObjContainer
          backgroundImg={el}
          onClick={(e) => {
            handleSelectedObj(el);
            handleMousePositionInSideBar({ positionX: e.clientX, positionY: e.clientY });
          }}
          key={idx}
        />
      );
    });
  };

  return (
    <Wrapper>
      {renderObjList()}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100%;
  width: 120px;
  background-color: #070A38;
  position: fixed;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border-left: 3px solid rgba(135, 206, 235, 0.2);
`;

const ObjContainer = styled.div`
  cursor: pointer;
  width: 100px;
  height: 100px;
  background-image: ${(props) => `url(${props.backgroundImg})`};
  background-size: cover;
  overflow: visible;
`;
