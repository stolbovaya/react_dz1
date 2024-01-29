import { PropsWithChildren } from "react";
import './RamkaStyle.css';
interface Props {
    ramkastyle: string;
}

export function RamkaInput(props: PropsWithChildren<Props>) {
    return <div className={props.ramkastyle}>
        <span></span>
        {props.children}
        <span></span>
    </div>
}