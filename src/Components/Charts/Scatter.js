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
	const color = ["#3B93EA", "#F7C906","#00405E" , "#552E83", "#010667", "#009749"]

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
		symbolSize: 7,
		data: [props.myAxis],
		type: 'scatter',
		color: 'black',
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
		legend:{
			data: props.names,
			orient: "horizontal",
			bottom: "0%",
			width: "100%"
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
			<ReactEcharts option={getOption()}/>
		</div>
	);
}