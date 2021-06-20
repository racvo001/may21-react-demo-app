import React from 'react';
class Toggle extends React.Component {

    constructor(props) {
        console.log(' ****** Toggle Constructor method invoked *****');
        super(props);

        this.state = {
            isToggleOn: true
        };

        this.toggle = this.toggle.bind(this)

    }

    toggle(e) {
        console.log(e)
        console.log(this)
        //modify the state of the component 
        this.setState( {
            isToggleOn: !this.state.isToggleOn
        });
    }



    render() {
        console.log(' ****** Toggle Render method invoked *****');
        return ( 
            <>
            <div > Toggle Component </div>
             <button onClick = {this.toggle} > { this.state.isToggleOn ? 'ON' : 'OFF' } 
             </button> 
             </>
        );

    }
}

export default Toggle;