import { Component, ReactNode, createContext } from 'react';
import { GetButton } from './GetButton';



export const ApiContext = createContext({ API: 'https://v2.jokeapi.dev/joke/Any?safe-mode' })

interface StateResponse {
	API: string
	
}

export class InputApi extends Component<NonNullable<unknown>,StateResponse> {

	

	constructor(props: InputApi) {
		super(props);
		
		// Set initial state
		this.state = {
			API: 'https://v2.jokeapi.dev/joke/Any?safe-mode'
			
		};

	}
	
	
	setAPI(api: string) {
		// Changing state
		this.setState({ API: api } );
	}
	
	render(): ReactNode {
		return (
			<div>
				<input
					defaultValue={this.state.API} 
					onChange={(e) => this.setAPI(e.target.value)}
					style={{ width: `${this.state.API.length}ch` }}
				>
				</input>
				<ApiContext.Provider value={this.state}>
					<br />
					<ApiContext.Consumer>
						{ApiContext => (
							<GetButton text1={"Отправить"} api={ApiContext.API} />
						)}
					</ApiContext.Consumer>
				</ApiContext.Provider>

			</div>
		);
	}
}

