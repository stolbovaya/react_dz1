import { Component, ReactNode } from 'react';
import axios from 'axios';
import { RamkaInput } from './RamkaInput';


interface StateResponse {
	response: string;
	style: string;
}
interface ButtonProps {
	text1: string;
	api: string
	
	
}
export class GetButton extends Component<ButtonProps,StateResponse> {

	
	constructor(props: ButtonProps) {
		super(props);
		this.state = { response: '', style: "ramkaResponse"};
		this.getAPIRespond = this.getAPIRespond.bind(this);
	}

	

	getAPIRespond() {
		
		axios.get(this.props.api)

			.then((resp) => {

				this.setState({ response: JSON.stringify(resp.data), style: "ramkaResponse" });  
			}
			)
			.catch((error) => {
				this.setState({ response: "ERROR: " + JSON.stringify(error), style: "ramkaError" });

			}
		);
		
	}

	render(): ReactNode {
		return (
			<div>


				<button onClick={this.getAPIRespond}>
					{this.props.text1}
				</button> 

				<RamkaInput ramkastyle={this.state.style}>
					{this.state.response}
				</RamkaInput >
				{/* Set click handler */}

			</div>
		);
	}
}

