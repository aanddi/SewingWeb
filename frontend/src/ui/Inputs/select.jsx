import Input2 from './Input2';
import style from './select.module.scss'

const SelectInput = (props) => {
    return (
        <div className={style.form_select}>
            <label htmlFor={props.for}>{props.title}</label>
            <Input2 placeholder={props.placeholder}/>
            <select name={props.name} id={props.for}>
                <option value={props.value1}>{props.option1}</option>
                <option value={props.value2}>{props.option2}</option>
                <option value={props.value3}>{props.option3}</option>
                <option value={props.value4}>{props.option4}</option>
                <option value={props.value5}>{props.option5}</option>
                <option value={props.value6}>{props.option6}</option>
                <option value={props.value7}>{props.option7}</option>
                <option value={props.value8}><a href=""> {props.option8} </a></option>
            </select>
        </div>
    )
}

export default SelectInput;