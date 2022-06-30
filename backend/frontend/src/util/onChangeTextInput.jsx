
const onChangeTextInput = function (inpName) {
    return (e) => {
        let item = {};
        item[inpName] = e.target.value;
        this.setState(
            item 
        )
    }
}

export default onChangeTextInput;