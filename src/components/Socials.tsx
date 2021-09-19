import React from 'react';
import styled from 'styled-components/macro';

const Wrapper = styled.div<any>`
  display: inline-flex;
  justify-content: center;
  height: auto;
  margin-top: ${props => (props.marginTop ? props.marginTop : 0)}px;
  margin-bottom: ${props => (props.marginBottom ? props.marginBottom : 0)}px;
`;

const SocialsList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 0;
  margin: 0;
  list-style: none;
`;

const SocialsItem = styled.li`
  display: inline-flex;
  margin: 0;
  margin-right: 20px;
  &:last-child {
    margin-right: 0px;
  }
`;

const CircleLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #232323;
  color: rgba(255, 255, 255, 0.5);
  &:hover {
    color: rgba(255, 255, 255, 1);
  }
  transition: 0.25s ease-in-out all;
`;

type SocialsProps = {
  marginTop?: number;
  marginBottom?: number;
  children: any;
};

export const Socials = ({ marginTop, marginBottom, children }: SocialsProps) => {
  return (
    <Wrapper marginTop={marginTop} marginBottom={marginBottom}>
      <SocialsList>{children}</SocialsList>
    </Wrapper>
  );
};

type SocialsItemProps = {
  icon?: any;
  link: string;
  altText?: string;
};

Socials.Item = ({ icon, link, altText }: SocialsItemProps) => {
  return (
    <SocialsItem>
      <CircleLink href={link} target="_blank" title={altText}>
        <span>{icon}</span>
      </CircleLink>
    </SocialsItem>
  );
};
