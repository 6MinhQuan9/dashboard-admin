'use client';
import styled from "styled-components";

const p16 = '16px';

export const LayoutStyles = styled.div`
   display: flex;

   .content-container {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      flex: 1;
      padding: ${p16};
      background-color: #f7f7f7;
   }

   .main-content {
      padding: ${p16};
      border-radius: 8px;
      box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
      background-color: white;
      flex: 1;
   }
`