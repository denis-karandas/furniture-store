import React from 'react';
import { BaseSection } from 'components';

import './AccountContent.scss';

interface IAccountContentProps {
    children: React.ReactNode;
}

const AccountContent = ({ children }: IAccountContentProps) => {
    return (
        <BaseSection className="account-content">
            {children}
        </BaseSection>
    );
}

export default AccountContent;
