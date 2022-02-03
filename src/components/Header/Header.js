import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillFacebook, AiFillLinkedin } from 'react-icons/ai';
import { SiNetlify } from "react-icons/si";
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons,  Span} from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href= "/">
        <a style={{display:"flex", alignItems:"center", color:"white", marginBottom:"20px;" }}>
            <DiCssdeck size="3rem" /> <Span>Amaris Dev</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <navLink>Projects</navLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <navLink>Technologies</navLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <navLink>About</navLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/amarismariano">
          <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/mariano-amaris-597478202/">
          <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://app.netlify.com/teams/amarismariano/sites">
          <SiNetlify size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
