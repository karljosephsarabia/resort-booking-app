import { Button } from "@mui/material";

function PageButton(props){
    return(
        <Button type="submit" variant ="contained" color="primary" size="large" style={{width:"200px"}}className={props.class}>{props.Value}</Button>
    );
}

export default PageButton;