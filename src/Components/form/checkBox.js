import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';

export default function CheckBox(props) {
	const [value, setValue] = React.useState(false)
	const index = props.index

	const handleChange =(event) => {
		setValue(event.target.checked)
		props.returnAxisName(event.target.checked, index)
	}

	return (
		<FormGroup>
		<FormControlLabel
        control={<Checkbox checked={value} onChange={handleChange} key={props.key} value={props.title}/>}
        label={props.title}
      />
		</FormGroup>
	)
}