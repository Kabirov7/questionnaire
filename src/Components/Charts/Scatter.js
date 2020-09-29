import React from 'react';
import ReactEcharts from "echarts-for-react";
import {makeStyles} from '@material-ui/core/styles';
import 'echarts-gl';

const useStyles = makeStyles((theme) => ({
	formControl: {
		paddingBottom: 0,
	},
}));

export default function Scatter(props) {
	const classes = useStyles();
	const color = props.partyColor

	let axises = props.axises.map((el, i) => {
		let partyAxis = {
			name: props.names[i],
			symbolSize: 12,
			data: [el],
			type: 'scatter',
			color: color[i],
			emphasis: {
				label: {
					show: true,
					formatter: props.names[i],
					position: 'top'
				}
			}
		}
		return partyAxis
	})

	axises.push({
		symbolSize: 15,
		data: [props.myAxis],
		type: 'scatter',
		color: 'red',
		emphasis: {
			label: {
				show: true,
				formatter: "Я",
				position: 'top'
			}
		}
	})
	const getOption = () => ({
		color: color,
		legend: {
			show: true,
			data: props.names,
			orient: "horizontal",
		 height:'auto',
			top: "3%",
			left: 0,
		},
		grid: {
			z: 2,
			top: "30%",
			height: "50%",
			bottom: "10%"
  },
		xAxis: {
			name: 'x',
			min: -2,
			max: 2,

		},
		yAxis: {
			name: 'y',
			min: -2,
			max: 2,

		},
		series: axises
	})
	return (
		<div className={classes.formControl}>
			<ReactEcharts style={{height: "500px"}} option={getOption()}/>
		</div>
	);
}