
const onChangeTextInput = function (inpName) {
    return (e) => {
        let item = {};
        console.log("Hey");
        item[inpName] = e.target.value;
        console.log(item);
        this.setState(
            item 
        )
    }
}

export default onChangeTextInput;