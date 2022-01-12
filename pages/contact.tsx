import * as React from "react";
import PageLayout from "../components/layouts/PageLayout";
import styled from "styled-components";
import styles from "../styles/Home.module.css";
import Script from "next/script";

const NavContainer = styled.section`
  display: flex;
  justify-content: space-between;
`

const iframeStyle = {
  border: 0,
  width: '100%'
}

const Contact = () => {
  return (
    <div className={styles.container}>
      <PageLayout page="Contact">
        <Script src="https://www.cognitoforms.com/f/iframe.js" />
        <iframe src="https://www.cognitoforms.com/f/l_Fw7geWy06ziXnt97Pdvg/1" style={iframeStyle} />
      </PageLayout>
    </div>
  )
}

export default Contact
