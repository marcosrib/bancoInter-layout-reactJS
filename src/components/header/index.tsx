import React, { memo } from 'react';

import { Container, Wrapper, LeftNav, RightNav } from './styles';
import { BancoInter } from '../../assets/images';
import Button from '../button';
import AccountDropdown from './accountDropdown';
import { User } from './Header';

const Header: React.FC = () => {
  const user: User = { name: 'Marcos Ribeiro' };

  return (
    <Container>
      <Wrapper>
        <LeftNav>
          <BancoInter />
          Internet Banking
        </LeftNav>
        <RightNav>
          <Button variant="secondary">Simulador Renda Fixa</Button>
          <AccountDropdown user={user} />
        </RightNav>
      </Wrapper>
    </Container>
  );
};

export default memo(Header);