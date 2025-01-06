import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import cn from 'classnames';
import { IInputProps } from './interfaces';

import './Input.scss';

const Input = ({
    name,
    rules = {},
    inputProps = {},
}: IInputProps) => {
    const {
        control,
        formState: { errors },
    } = useFormContext();

    return (
        <Controller
            name={name}
            control={control}
            rules={rules}
            render={({ field }) => {
                const className = cn('input', inputProps.className, {
                    input__error: errors[name],
                });

                return (
                    <input
                        {...inputProps}
                        {...field}
                        className={className}
                    />
                );
            }}
        />
    );
}

export default Input;
