var Note = React.createClass({
    getInitialState: function() {
        return {editing: false}
    },
    edit: function() {
        this.setState({editing: true});
    },
    save: function() {
    	var val = this.refs.newText.getDOMNode().value;
    	alert("Save " + val);
        this.setState({editing: false});
    },
    remove: function() {
        alert('removing note');
    },
    renderDisplay: function() {
        return (
            <div className="note">
                <p>{this.props.children}</p>
                <span>
                    <button onClick={this.edit}
                            className="btn btn-primary glyphicon glyphicon-pencil"/>
                    <button onClick={this.remove}
                            className="btn btn-danger glyphicon glyphicon-trash"/>
                </span>
            </div>
            );
    },
    renderForm: function() {
        return (
            <div className="note">
            <textarea ref="newText" defaultValue={this.props.children} 
            className="form-control"></textarea>
            <button onClick={this.save} className="btn btn-success btn-sm glyphicon glyphicon-floppy-disk" />
            </div>
            )
    },
    render: function() {
        if (this.state.editing) {
            return this.renderForm();
        }
        else {
            return this.renderDisplay();
        }
    }
});

var Board = React.createClass({
    propTypes:{
        count:function(props, propName){
            if(typeof props[propName] !== "number"){
                return new Error ('Count must be a number');
            } 
            if (props[propName] > 100){
                return new Error("this your" + props[propName] + " should be reduced");
            }
        }
    },
    render: function(){
        return <div className="board">{this.props.count}
        </div>
    }
});

React.render(<Board count={10} />, 
    document.getElementById('react-container'));