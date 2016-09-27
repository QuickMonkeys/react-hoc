import React from 'react';

export default ComposedComponent => class extends React.Component {

    handleClick(data) {
        alert(`${data.id} - ${data.last_name}, ${data.first_name}`);
    }
    
    render() {
        let {data} = this.props;
        const addedProps = {
            clickProps: {
                onClick: () => this.handleClick(data)
            }
        }
        return <ComposedComponent  {...this.props} {...addedProps} />
    }    
}