import style from './entry_field.module.scss';
import Input from '../../../ui/Inputs/Input2';


const EntryField = (props) => {
    return (
        <div className={style.input_block}>  
            <label className={style.input_block__title} for='input'> {props.title} <span> * </span> </label> 
            <Input id="#input" className={style.input_block__field} title=""/>
        </div>
    )
}

export default EntryField;