import React from 'react';

export class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            errorInfo: null,
            error: null
        }
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            error: error,
            errorInfo: errorInfo
        });
    }

    render() {
        if (this.props.isLoading) {
            return (
                <div className={"loading-container"}>
                    <div className={"loading"}/>
                </div>
            );
        } else if (this.state.hasError) {
            return (
                <summary>
                    <h3>Something went wrong</h3>
                    <details>
                        {this.state.error && this.state.error.toString()}
                        <br />
                        {this.state.errorInfo.componentStack}
                    </details>
                </summary>
            );
        }
    }
}