import React, { useState } from 'react';
import cn from 'classnames';
import { Input } from 'components';
import { IPasswordInputProps } from './interfaces';
import EyeIcon from 'assets/icons/eye.svg';

import './PasswordInput.scss';

const PasswordInput = ({
    className = '',
    placeholder = 'Password',
    inputComponentProps = {},
}: IPasswordInputProps) => {
    const [type, setType] = useState<'text' | 'password'>('password');

    const onIconClick = () => setType(prevState => prevState === 'password' ? 'text' : 'password');

    const containerClassName = cn('password-input', className);

    return (
        <div className={containerClassName}>
            <Input
                {...inputComponentProps}
                inputProps={{
                    type,
                    placeholder,
                    autoComplete: 'off',
                }}
            />
            <EyeIcon
                className="password-input__icon"
                onClick={onIconClick}
            />
        </div>
    );
}

export default PasswordInput;
