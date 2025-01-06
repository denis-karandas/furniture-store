import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import cn from 'classnames';
import { ICheckboxProps } from './interfaces';

import './Checkbox.scss';

const Checkbox = ({
    id,
    name,
    rules = {},
    inputProps = {},
}: ICheckboxProps) => {
    const { control } = useFormContext();

    const className = cn('checkbox', inputProps.className);

    return (
        <Controller
            name={name}
            control={control}
            rules={rules}
            render={({ field }) => {
                const { onChange, onBlur, value, name, ref } = field;

                return (
                    <div className={className}>
                        <input
                            {...inputProps}
                            id={id}
                            ref={ref}
                            type="checkbox"
                            name={name}
                            checked={value}
                            className="checkbox__input"
                            onBlur={onBlur}
                            onChange={onChange}
                            hidden
                        />
                        <label
                            className="checkbox__label"
                            htmlFor={id}
                        />
                    </div>
                );
            }}
        />
    );
}

export default Checkbox;
