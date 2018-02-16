import React, {Component} from 'react';
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(file) {
        const canvasNode = this.canvas;
        const fileReader = new FileReader();

        fileReader.readAsArrayBuffer(event.target.files[0]);
        fileReader.onload = function () {
            const tiff = new Tiff({
                buffer: this.result
            });
            const canvas = tiff.toCanvas();
            canvasNode.appendChild(canvas);
        };

    }

    render() {
        return (
            <div>
                <label>
                    Select TIFF file:
                    <input type="file" onChange={this.onChange}/>
                </label>
                <span ref={(canvas) => this.canvas = canvas}/>
            </div>
        );
    }
}

export default App;
