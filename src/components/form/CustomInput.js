import {TextInput} from 'components/atoms';
import React from 'react';
import styled from 'styled-components';

const FormError = styled.Text`
	color: red;
	font-size: 12px;
`;

const CustomInput = props => {
	const {
		field: {name, onBlur, onChange, value},
		form: {errors, touched, setFieldTouched},
		...inputProps
	} = props;

	const hasError = errors[name] && touched[name];

	return (
		<>
			<TextInput
				style={[props.multiline && {height: props.numberOfLines * 40}]}
				hasError={hasError}
				value={value}
				onChangeText={text => onChange(name)(text)}
				onBlur={() => {
					setFieldTouched(name);
					onBlur(name);
				}}
				{...inputProps}
			/>
			{hasError && <FormError>{errors[name]}</FormError>}
		</>
	);
};

export default CustomInput;
